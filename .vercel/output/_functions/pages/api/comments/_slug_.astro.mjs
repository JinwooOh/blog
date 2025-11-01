import { asDrizzleTable } from '@astrojs/db/runtime';
import { createClient } from '@astrojs/db/db-client/libsql-node.js';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';
export { renderers } from '../../../renderers.mjs';

const db = await createClient({
  url: "libsql://blog-comments-sosur0414.aws-us-east-1.turso.io",
  token: process.env.ASTRO_DB_APP_TOKEN
});
const Comment = asDrizzleTable("Comment", { "columns": { "id": { "type": "number", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Comment", "primaryKey": true } }, "postSlug": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "postSlug", "collection": "Comment", "primaryKey": false, "optional": false } }, "author": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "author", "collection": "Comment", "primaryKey": false, "optional": false } }, "email": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "email", "collection": "Comment", "primaryKey": false, "optional": false } }, "content": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "content", "collection": "Comment", "primaryKey": false, "optional": false } }, "createdAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "createdAt", "collection": "Comment", "default": "2025-11-01T22:31:47.716Z" } } }, "deprecated": false, "indexes": {} }, false);

const prerender = false;
const GET = async ({ params }) => {
  const slug = params.slug;
  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    console.log("Fetching comments for slug:", slug);
    if (!Comment) {
      throw new Error("Comment table is not defined. Restart dev server after pushing schema.");
    }
    if (!Comment.postSlug) {
      console.error("Comment table structure:", Object.keys(Comment));
      console.error("Comment.postSlug is undefined");
      throw new Error("Comment.postSlug column not found. Make sure dev server was restarted after schema push.");
    }
    const comments = await db.select().from(Comment).where(eq(Comment.postSlug, slug));
    comments.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    console.log("Found comments:", comments.length);
    return new Response(JSON.stringify(comments), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error fetching comments:", error);
    console.error("Error details:", error instanceof Error ? error.stack : String(error));
    return new Response(JSON.stringify({ error: "Failed to fetch comments", details: error instanceof Error ? error.message : String(error) }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
const POST = async ({ params, request }) => {
  const slug = params.slug;
  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    console.log("Creating comment for slug:", slug);
    const body = await request.json();
    const { author, email, content } = body;
    console.log("Comment data:", { author, email, contentLength: content.length });
    if (!author || !email || !content) {
      return new Response(JSON.stringify({ error: "Author, email, and content are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (content.length < 3 || content.length > 5e3) {
      return new Response(JSON.stringify({ error: "Comment must be between 3 and 5000 characters" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const result = await db.insert(Comment).values({
      postSlug: slug,
      author: author.trim(),
      email: email.trim(),
      content: content.trim(),
      createdAt: /* @__PURE__ */ new Date()
    });
    console.log("Comment inserted successfully");
    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error creating comment:", error);
    return new Response(JSON.stringify({ error: "Failed to create comment" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
