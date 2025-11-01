import { b as createAstro, c as createComponent, r as renderComponent, d as renderHead, e as addAttribute, a as renderTemplate } from '../../../chunks/astro/server_BcpVQro4.mjs';
import { g as getCollection } from '../../../chunks/_astro_content_Bmyj29ks.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../../../chunks/Header_BtdE3gta.mjs';
/* empty css                                       */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://example.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  const tags = /* @__PURE__ */ new Set();
  posts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).map((tag) => ({
    params: { tag },
    props: { tag }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.props;
  const posts = await getCollection("blog");
  const filteredPosts = posts.filter(
    (post) => post.data.tags && post.data.tags.includes(tag)
  ).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  return renderTemplate`<html lang="en" data-astro-cid-trjsnkp3> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Posts tagged with "${tag}"`, "description": `All posts tagged with ${tag}`, "data-astro-cid-trjsnkp3": true })}${renderHead()}</head> <body data-astro-cid-trjsnkp3> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-trjsnkp3": true })} <main data-astro-cid-trjsnkp3> <h1 data-astro-cid-trjsnkp3>Posts tagged with "${tag}"</h1> <div class="posts" data-astro-cid-trjsnkp3> ${filteredPosts.map((post) => renderTemplate`<article class="post-card" data-astro-cid-trjsnkp3> <h2 data-astro-cid-trjsnkp3> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-trjsnkp3> ${post.data.title} </a> </h2> <p data-astro-cid-trjsnkp3>${post.data.description}</p> <div class="meta" data-astro-cid-trjsnkp3> <time${addAttribute(post.data.pubDate.toISOString(), "datetime")} data-astro-cid-trjsnkp3> ${post.data.pubDate.toLocaleDateString()} </time> ${post.data.tags && renderTemplate`<div class="tags" data-astro-cid-trjsnkp3> ${post.data.tags.map((t) => renderTemplate`<span class="tag" data-astro-cid-trjsnkp3>${t}</span>`)} </div>`} </div> </article>`)} </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-trjsnkp3": true })} </body></html>`;
}, "/Users/jinwoooh/Dev/personal/blog/src/pages/blog/tag/[tag].astro", void 0);

const $$file = "/Users/jinwoooh/Dev/personal/blog/src/pages/blog/tag/[tag].astro";
const $$url = "/blog/tag/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
