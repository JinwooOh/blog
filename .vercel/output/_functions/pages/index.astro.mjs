import { b as createAstro, c as createComponent, r as renderComponent, d as renderHead, a as renderTemplate } from '../chunks/astro/server_BcpVQro4.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Header_BtdE3gta.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_B5oBRfjp.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <main class="home-page" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>🧑‍🚀 Hello, Astronaut!</h1> <p data-astro-cid-j7pv25f6>
Welcome to the official <a href="https://astro.build/" data-astro-cid-j7pv25f6>Astro</a> blog starter template. This
				template serves as a lightweight, minimally-styled starting point for anyone looking to build
				a personal website, blog, or portfolio with Astro.
</p> <p data-astro-cid-j7pv25f6>
This template comes with a few integrations already configured in your
<code data-astro-cid-j7pv25f6>astro.config.mjs</code> file. You can customize your setup with
<a href="https://astro.build/integrations" data-astro-cid-j7pv25f6>Astro Integrations</a> to add tools like Tailwind,
				React, or Vue to your project.
</p> <p class="intro-section" data-astro-cid-j7pv25f6>Here are a few ideas on how to get started with the template:</p> <ul data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6>Edit this page in <code data-astro-cid-j7pv25f6>src/pages/index.astro</code></li> <li data-astro-cid-j7pv25f6>Edit the site header items in <code data-astro-cid-j7pv25f6>src/components/Header.astro</code></li> <li data-astro-cid-j7pv25f6>Add your name to the footer in <code data-astro-cid-j7pv25f6>src/components/Footer.astro</code></li> <li data-astro-cid-j7pv25f6>Check out the included blog posts in <code data-astro-cid-j7pv25f6>src/content/blog/</code></li> <li data-astro-cid-j7pv25f6>Customize the blog post page layout in <code data-astro-cid-j7pv25f6>src/layouts/BlogPost.astro</code></li> </ul> <p data-astro-cid-j7pv25f6>
Have fun! If you get stuck, remember to
<a href="https://docs.astro.build/" data-astro-cid-j7pv25f6>read the docs</a>
or <a href="https://astro.build/chat" data-astro-cid-j7pv25f6>join us on Discord</a> to ask questions.
</p> <p data-astro-cid-j7pv25f6>
Looking for a blog template with a bit more personality? Check out
<a href="https://github.com/Charca/astro-blog-template" data-astro-cid-j7pv25f6>astro-blog-template</a>
by <a href="https://twitter.com/Charca" data-astro-cid-j7pv25f6>Maxi Ferreira</a>.
</p> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "/Users/jinwoooh/Dev/personal/blog/src/pages/index.astro", void 0);

const $$file = "/Users/jinwoooh/Dev/personal/blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
