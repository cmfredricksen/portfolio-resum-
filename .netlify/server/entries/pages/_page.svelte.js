import { c as create_ssr_component, d as add_attribute, f as escape, e as each, v as validate_component } from "../../chunks/index.js";
/* empty css                   */const card_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-durc2l{width:300px;margin:2rem;display:flex;flex-direction:column;align-items:center;padding:2rem 1rem;border-radius:0.5rem;background-color:var(--clr-accent)}h3.svelte-durc2l{text-align:center;margin:0.5rem 0;font-weight:bold}a.svelte-durc2l{color:var(--clr-headings);text-align:center;margin:0.5rem 0}a.svelte-durc2l:hover{color:var(--clr-text)}img.svelte-durc2l{width:150px;background-color:var(--clr-primary);padding:0.75rem;border-radius:0.5rem}img.svelte-durc2l:hover{border:2px solid var(--clr-primary);border-radius:0.5rem;outline:1px solid var(--clr-text)}p.svelte-durc2l{color:white}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let { description } = $$props;
  let { img } = $$props;
  let { title } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `<div class="${"card svelte-durc2l"}"><a${add_attribute("href", url, 0)} target="${"blank"}" class="${"svelte-durc2l"}"><img${add_attribute("src", img, 0)} alt="${"Icon for site"}" class="${"svelte-durc2l"}"></a>
	<h3 class="${"title svelte-durc2l"}"><a${add_attribute("href", url, 0)} target="${"blank"}" class="${"svelte-durc2l"}">${escape(title)}</a></h3>
	<p class="${"svelte-durc2l"}">${escape(description)}</p>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".intro.svelte-1v94060{padding:1rem 3rem;font-size:large}.main.svelte-1v94060{max-width:1200px;margin:auto}.container.svelte-1v94060{display:flex;flex-wrap:wrap;margin:2rem auto;padding:0;align-items:center;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const links = [
    {
      url: "https://amandas-computing.netlify.app",
      description: "Hardware Engineer's website",
      title: `Amanda's Custom Computing`,
      img: "/images/computers.jpg"
    },
    {
      url: "https://technotesbycmfred.netlify.app",
      description: "A simple guide to Git & GitHub for Beginners",
      title: "Tech Notes",
      img: "/images/water-lilies.jpg"
    },
    {
      url: "https://cmfred-dev.netlify.app",
      description: "My Homepage & Freelance Service Website",
      title: "CM Fredricksen Development",
      img: "/images/tree-home.jpg"
    },
    {
      url: "https://ewc-annual-sale.netlify.app",
      description: "A web poster for a local art show",
      title: "Ely Watercolor Club",
      img: "/images/dragonfly.jpg"
    },
    {
      url: "https://web-dev-prep.netlify.app/",
      description: "Basic foundations in web development",
      title: "Web Dev Prep",
      img: "/images/trees-from-rocks.jpg"
    },
    {
      url: "https://ai-therapist.netlify.app/",
      description: "Generating Art using AI is calming and relaxing",
      title: "AI Therapist",
      img: "/images/forest-path.png"
    }
  ];
  $$result.css.add(css);
  return `<div class="${"intro svelte-1v94060"}"><p>Welcome to my Web Folio! Here are links to some of the recent personal projects I have done
		while learning web development. You can also find a link to my GitHub page which contains some
		of the repos for these projects, along with others I am working on, and some from when I started
		learning too. Some of these sites are hosted on Netlify using GitHub for integration. Above you
		will find a link to my resum\xE9. Thanks for stopping by!
	</p></div>

<div class="${"main svelte-1v94060"}"><div class="${"container svelte-1v94060"}">${each(links, (link) => {
    return `${validate_component(Card, "Card").$$render($$result, Object.assign(link), {}, {})}`;
  })}</div>
</div>`;
});
export {
  Page as default
};
