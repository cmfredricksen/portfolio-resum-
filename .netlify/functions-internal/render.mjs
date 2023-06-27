import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["anemone.png","favicon.png","images/004-github-big-logo.png","images/computers.jpg","images/dragonfly.jpg","images/forest-path.png","images/pencils.png","images/tree-home.jpg","images/trees-from-rocks.jpg","images/water-lilies.jpg","resume-2022-07.pdf","resume.pdf"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".pdf":"application/pdf"},
	_: {
		entry: {"file":"_app/immutable/start-bdd0099c.js","imports":["_app/immutable/start-bdd0099c.js","_app/immutable/chunks/index-ad2f81ac.js","_app/immutable/chunks/singletons-cb3fe40d.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
