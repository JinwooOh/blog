import { c as createComponent, r as renderComponent, d as renderHead, f as renderScript, e as addAttribute, a as renderTemplate } from '../chunks/astro/server_BcpVQro4.mjs';
import '../chunks/index_CYyG6us9.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_hZH4K-Vb.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bmyj29ks.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Header_BtdE3gta.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_Cah3Lw6n.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_B5oBRfjp.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const posts = allPosts.filter((post) => !post.data.draft).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const allTags = /* @__PURE__ */ new Set();
  allPosts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag) => allTags.add(tag));
    }
  });
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section class="search-section" data-astro-cid-5tznm7mj> <input type="text" id="searchInput" class="search-input" placeholder="Search posts..." data-astro-cid-5tznm7mj> <div class="tags-filter" data-astro-cid-5tznm7mj> <div class="tag-filter active" data-tag="all" data-astro-cid-5tznm7mj>All</div> ${Array.from(allTags).map((tag) => renderTemplate`<div class="tag-filter"${addAttribute(tag, "data-tag")} data-astro-cid-5tznm7mj>${tag}</div>`)} </div> </section> <section data-astro-cid-5tznm7mj> <ul id="postsList" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li${addAttribute(post.data.tags?.join(",") || "", "data-tags")}${addAttribute(post.data.title.toLowerCase(), "data-title")}${addAttribute(post.data.description.toLowerCase(), "data-description")} data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-5tznm7mj> ${post.data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 720, "height": 360, "src": post.data.heroImage, "alt": "", "data-astro-cid-5tznm7mj": true })}`} <h4 class="title" data-astro-cid-5tznm7mj>${post.data.title}</h4> <p class="date" data-astro-cid-5tznm7mj> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> ${post.data.tags && renderTemplate`<div class="post-tags" data-astro-cid-5tznm7mj> ${post.data.tags.map((tag) => renderTemplate`<span class="post-tag" data-astro-cid-5tznm7mj>${tag}</span>`)} </div>`} </a> </li>`)} </ul> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} ${renderScript($$result, "/Users/jinwoooh/Dev/personal/blog/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/jinwoooh/Dev/personal/blog/src/pages/blog/index.astro", void 0);

const $$file = "/Users/jinwoooh/Dev/personal/blog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
