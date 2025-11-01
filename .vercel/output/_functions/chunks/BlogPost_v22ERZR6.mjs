import { b as createAstro, c as createComponent, a as renderTemplate, g as defineScriptVars, m as maybeRenderHead, r as renderComponent, d as renderHead, h as renderSlot, e as addAttribute } from './astro/server_BcpVQro4.mjs';
import './index_CYyG6us9.mjs';
import { $ as $$Image } from './_astro_assets_hZH4K-Vb.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './Header_BtdE3gta.mjs';
import 'clsx';
/* empty css                         */
import { $ as $$FormattedDate } from './FormattedDate_Cah3Lw6n.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://example.com");
const $$Comments = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Comments;
  const { postSlug } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="comments-section" data-astro-cid-jvxsf75u> <h2 data-astro-cid-jvxsf75u>Comments</h2> <div id="comments-list" class="comments-list" data-astro-cid-jvxsf75u> <!-- Comments will be loaded here --> </div> <form id="comment-form" class="comment-form" data-astro-cid-jvxsf75u> <h3 data-astro-cid-jvxsf75u>Add a Comment</h3> <div class="form-group" data-astro-cid-jvxsf75u> <label for="author" data-astro-cid-jvxsf75u>Name *</label> <input type="text" id="author" name="author" required data-astro-cid-jvxsf75u> </div> <div class="form-group" data-astro-cid-jvxsf75u> <label for="email" data-astro-cid-jvxsf75u>Email *</label> <input type="email" id="email" name="email" required data-astro-cid-jvxsf75u> </div> <div class="form-group" data-astro-cid-jvxsf75u> <label for="content" data-astro-cid-jvxsf75u>Comment *</label> <textarea id="content" name="content" rows="5" required data-astro-cid-jvxsf75u></textarea> </div> <button type="submit" class="submit-button" data-astro-cid-jvxsf75u>Submit Comment</button> <div id="form-message" class="form-message" data-astro-cid-jvxsf75u></div> </form> </div>  <script>(function(){', `
	const commentsList = document.getElementById('comments-list');
	const commentForm = document.getElementById('comment-form');
	const formMessage = document.getElementById('form-message');

	// Load comments on page load
	async function loadComments() {
		try {
			console.log('Loading comments for:', postSlug);
			const response = await fetch(\`/api/comments/\${postSlug}\`);
			console.log('Response status:', response.status);
			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				console.error('Failed to fetch comments:', errorData);
				throw new Error(errorData.error || 'Failed to fetch comments');
			}
			const comments = await response.json();
			console.log('Loaded comments:', comments.length);

			if (comments.length === 0) {
				commentsList.innerHTML = '<p style="color: rgb(var(--gray)); font-style: italic;">No comments yet. Be the first to comment!</p>';
				return;
			}

			commentsList.innerHTML = comments
				.map(
					(comment) => \`
					<div class="comment-item">
						<div class="comment-header">
							<span class="comment-author">\${escapeHtml(comment.author)}</span>
							<span class="comment-date">\${new Date(comment.createdAt).toLocaleDateString()}</span>
						</div>
						<div class="comment-content">\${escapeHtml(comment.content)}</div>
					</div>
				\`
				)
				.join('');
		} catch (error) {
			console.error('Error loading comments:', error);
			if (commentsList) {
				commentsList.innerHTML = '<p style="color: rgb(239, 68, 68);">Failed to load comments. Please refresh the page.</p>';
			}
		}
	}

	// Handle form submission
	commentForm?.addEventListener('submit', async (e) => {
		e.preventDefault();

		const submitButton = commentForm?.querySelector('.submit-button');
		if (submitButton) submitButton.disabled = true;
		if (formMessage) {
			formMessage.classList.remove('success', 'error');
			formMessage.style.display = 'none';
		}

		const formData = new FormData(commentForm);
		const data = {
			author: String(formData.get('author') || ''),
			email: String(formData.get('email') || ''),
			content: String(formData.get('content') || ''),
		};

		try {
			const response = await fetch(\`/api/comments/\${postSlug}\`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Failed to submit comment');
			}

			// Show success message
			if (formMessage) {
				formMessage.textContent = 'Comment submitted successfully!';
				formMessage.classList.add('success');
				formMessage.style.display = 'block';
			}

			// Reset form
			commentForm.reset();

			// Reload comments
			await loadComments();
		} catch (error) {
			console.error('Error submitting comment:', error);
			if (formMessage) {
				formMessage.textContent = error instanceof Error ? error.message : 'Failed to submit comment. Please try again.';
				formMessage.classList.add('error');
				formMessage.style.display = 'block';
			}
		} finally {
			if (submitButton) submitButton.disabled = false;
		}
	});

	function escapeHtml(text) {
		const div = document.createElement('div');
		div.textContent = text;
		return div.innerHTML;
	}

	// Load comments when page loads
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', loadComments);
	} else {
		loadComments();
	}
})();<\/script>`], ["", '<div class="comments-section" data-astro-cid-jvxsf75u> <h2 data-astro-cid-jvxsf75u>Comments</h2> <div id="comments-list" class="comments-list" data-astro-cid-jvxsf75u> <!-- Comments will be loaded here --> </div> <form id="comment-form" class="comment-form" data-astro-cid-jvxsf75u> <h3 data-astro-cid-jvxsf75u>Add a Comment</h3> <div class="form-group" data-astro-cid-jvxsf75u> <label for="author" data-astro-cid-jvxsf75u>Name *</label> <input type="text" id="author" name="author" required data-astro-cid-jvxsf75u> </div> <div class="form-group" data-astro-cid-jvxsf75u> <label for="email" data-astro-cid-jvxsf75u>Email *</label> <input type="email" id="email" name="email" required data-astro-cid-jvxsf75u> </div> <div class="form-group" data-astro-cid-jvxsf75u> <label for="content" data-astro-cid-jvxsf75u>Comment *</label> <textarea id="content" name="content" rows="5" required data-astro-cid-jvxsf75u></textarea> </div> <button type="submit" class="submit-button" data-astro-cid-jvxsf75u>Submit Comment</button> <div id="form-message" class="form-message" data-astro-cid-jvxsf75u></div> </form> </div>  <script>(function(){', `
	const commentsList = document.getElementById('comments-list');
	const commentForm = document.getElementById('comment-form');
	const formMessage = document.getElementById('form-message');

	// Load comments on page load
	async function loadComments() {
		try {
			console.log('Loading comments for:', postSlug);
			const response = await fetch(\\\`/api/comments/\\\${postSlug}\\\`);
			console.log('Response status:', response.status);
			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				console.error('Failed to fetch comments:', errorData);
				throw new Error(errorData.error || 'Failed to fetch comments');
			}
			const comments = await response.json();
			console.log('Loaded comments:', comments.length);

			if (comments.length === 0) {
				commentsList.innerHTML = '<p style="color: rgb(var(--gray)); font-style: italic;">No comments yet. Be the first to comment!</p>';
				return;
			}

			commentsList.innerHTML = comments
				.map(
					(comment) => \\\`
					<div class="comment-item">
						<div class="comment-header">
							<span class="comment-author">\\\${escapeHtml(comment.author)}</span>
							<span class="comment-date">\\\${new Date(comment.createdAt).toLocaleDateString()}</span>
						</div>
						<div class="comment-content">\\\${escapeHtml(comment.content)}</div>
					</div>
				\\\`
				)
				.join('');
		} catch (error) {
			console.error('Error loading comments:', error);
			if (commentsList) {
				commentsList.innerHTML = '<p style="color: rgb(239, 68, 68);">Failed to load comments. Please refresh the page.</p>';
			}
		}
	}

	// Handle form submission
	commentForm?.addEventListener('submit', async (e) => {
		e.preventDefault();

		const submitButton = commentForm?.querySelector('.submit-button');
		if (submitButton) submitButton.disabled = true;
		if (formMessage) {
			formMessage.classList.remove('success', 'error');
			formMessage.style.display = 'none';
		}

		const formData = new FormData(commentForm);
		const data = {
			author: String(formData.get('author') || ''),
			email: String(formData.get('email') || ''),
			content: String(formData.get('content') || ''),
		};

		try {
			const response = await fetch(\\\`/api/comments/\\\${postSlug}\\\`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Failed to submit comment');
			}

			// Show success message
			if (formMessage) {
				formMessage.textContent = 'Comment submitted successfully!';
				formMessage.classList.add('success');
				formMessage.style.display = 'block';
			}

			// Reset form
			commentForm.reset();

			// Reload comments
			await loadComments();
		} catch (error) {
			console.error('Error submitting comment:', error);
			if (formMessage) {
				formMessage.textContent = error instanceof Error ? error.message : 'Failed to submit comment. Please try again.';
				formMessage.classList.add('error');
				formMessage.style.display = 'block';
			}
		} finally {
			if (submitButton) submitButton.disabled = false;
		}
	});

	function escapeHtml(text) {
		const div = document.createElement('div');
		div.textContent = text;
		return div.innerHTML;
	}

	// Load comments when page loads
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', loadComments);
	} else {
		loadComments();
	}
})();<\/script>`])), maybeRenderHead(), defineScriptVars({ postSlug }));
}, "/Users/jinwoooh/Dev/personal/blog/src/components/Comments.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage, tags, author, postSlug } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-bvzihdzo> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-bvzihdzo": true })}${renderHead()}</head> <body data-astro-cid-bvzihdzo> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true })} <main data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> <div class="hero-image" data-astro-cid-bvzihdzo> ${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 1020, "height": 510, "src": heroImage, "alt": "", "data-astro-cid-bvzihdzo": true })}`} </div> <div class="prose" data-astro-cid-bvzihdzo> <div class="title" data-astro-cid-bvzihdzo> <div class="date" data-astro-cid-bvzihdzo> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true })} ${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-bvzihdzo>
Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })} </div>`} </div> <h1 data-astro-cid-bvzihdzo>${title}</h1> ${author && renderTemplate`<div class="author" data-astro-cid-bvzihdzo>By ${author}</div>`} ${tags && tags.length > 0 && renderTemplate`<div class="tags" data-astro-cid-bvzihdzo> ${tags.map((tag) => renderTemplate`<a${addAttribute(`/blog/tag/${tag}`, "href")} class="tag" data-astro-cid-bvzihdzo>${tag}</a>`)} </div>`} <hr data-astro-cid-bvzihdzo> </div> ${renderSlot($$result, $$slots["default"])} ${postSlug && renderTemplate`${renderComponent($$result, "Comments", $$Comments, { "postSlug": postSlug, "data-astro-cid-bvzihdzo": true })}`} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true })} </body></html>`;
}, "/Users/jinwoooh/Dev/personal/blog/src/layouts/BlogPost.astro", void 0);

export { $$BlogPost as $ };
