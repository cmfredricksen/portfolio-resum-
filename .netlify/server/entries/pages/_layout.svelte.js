import { c as create_ssr_component, b as subscribe, e as each, d as add_attribute, f as escape, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
/* empty css                   */const nav_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "ul.svelte-1tznqrb{display:flex}li.svelte-1tznqrb{list-style:none;margin-right:1rem;font-size:large}.active.svelte-1tznqrb{text-decoration:underline}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const nav = [{ title: "Home", path: "/" }, { title: "Resum\xE9", path: "/resume" }];
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<nav><ul class="${"svelte-1tznqrb"}">${each(nav, (item) => {
    return `<li class="${"svelte-1tznqrb"}"><a${add_attribute("href", item.path, 0)} class="${["svelte-1tznqrb", $page.url.pathname === item.path ? "active" : ""].join(" ").trim()}">${escape(item.title)}</a>
			</li>`;
  })}</ul>
</nav>`;
});
const header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-xwn1wc{display:flex;align-items:center;justify-content:space-between;padding:1rem;background-color:var(--clr-accent)}.title.svelte-xwn1wc{display:flex;align-items:center}h1.svelte-xwn1wc{font-weight:bold;color:var(--clr-text)}h3.svelte-xwn1wc{margin-left:1rem;font-style:italic;color:var(--clr-text)}@media only screen and (max-width: 600px){header.svelte-xwn1wc{flex-direction:column}.title.svelte-xwn1wc{flex-direction:column;padding-bottom:2rem}h1.svelte-xwn1wc{padding:0.5rem 0}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="${"svelte-xwn1wc"}"><div class="${"title svelte-xwn1wc"}"><h1 class="${"svelte-xwn1wc"}"><a href="${"/"}">Web Portfolio</a></h1>
		<h3 class="${"svelte-xwn1wc"}">by <a href="${"https://cmfred-dev.netlify.app"}" target="${"blank"}" rel="${"noreferrer"}">Chris Fredricksen</a></h3></div>
	${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
</header>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1mgc07i{text-align:center;padding:2rem 0;border-top:2px solid var(--clr-headings);background-color:var(--clr-accent);font-size:1.5rem}@media(max-width: 600px){footer.svelte-1mgc07i{font-size:1rem}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="${"svelte-1mgc07i"}"><p>\xA9 2022 <a href="${"https://cmfred-dev.netlify.app"}">Chris Fredricksen</a> \u2022 All Rights Reserved \u2665
	</p>
</footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-difmqo_START -->${$$result.title = `<title>Web \u2022 Folio by CMF</title>`, ""}<!-- HEAD_svelte-difmqo_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
