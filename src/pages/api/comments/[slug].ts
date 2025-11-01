import { db, Comment, eq } from 'astro:db';
import type { APIRoute } from 'astro';

// API routes work in dev mode, but need to be configured for production
export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
	const slug = params.slug;
	if (!slug) {
		return new Response(JSON.stringify({ error: 'Slug is required' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	try {
		console.log('Fetching comments for slug:', slug);

		// Debug: Check if Comment and its properties exist
		if (!Comment) {
			throw new Error('Comment table is not defined. Restart dev server after pushing schema.');
		}

		// Check if postSlug column exists
		if (!Comment.postSlug) {
			console.error('Comment table structure:', Object.keys(Comment));
			console.error('Comment.postSlug is undefined');
			throw new Error('Comment.postSlug column not found. Make sure dev server was restarted after schema push.');
		}

		const comments = await db
			.select()
			.from(Comment)
			.where(eq(Comment.postSlug, slug));

		// Sort manually by creation date
		comments.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

		console.log('Found comments:', comments.length);
		return new Response(JSON.stringify(comments), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error fetching comments:', error);
		console.error('Error details:', error instanceof Error ? error.stack : String(error));
		return new Response(JSON.stringify({ error: 'Failed to fetch comments', details: error instanceof Error ? error.message : String(error) }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};

export const POST: APIRoute = async ({ params, request }) => {
	const slug = params.slug;
	if (!slug) {
		return new Response(JSON.stringify({ error: 'Slug is required' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' },
		});
	}

	try {
		console.log('Creating comment for slug:', slug);
		const body = await request.json();
		const { author, email, content } = body;
		console.log('Comment data:', { author, email, contentLength: content.length });

		// Basic validation
		if (!author || !email || !content) {
			return new Response(JSON.stringify({ error: 'Author, email, and content are required' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return new Response(JSON.stringify({ error: 'Invalid email format' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		// Content length validation
		if (content.length < 3 || content.length > 5000) {
			return new Response(JSON.stringify({ error: 'Comment must be between 3 and 5000 characters' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' },
			});
		}

		// Insert comment
		const result = await db.insert(Comment).values({
			postSlug: slug,
			author: author.trim(),
			email: email.trim(),
			content: content.trim(),
			createdAt: new Date(),
		});
		console.log('Comment inserted successfully');

		return new Response(JSON.stringify({ success: true }), {
			status: 201,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error creating comment:', error);
		return new Response(JSON.stringify({ error: 'Failed to create comment' }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' },
		});
	}
};

