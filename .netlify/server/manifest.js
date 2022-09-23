export const manifest = {
	appDir: "_app",
	assets: new Set(["icon-arrow-right.svg","icon-check.svg","icon-copy.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-e06919d0.js","imports":["_app/immutable/start-e06919d0.js","_app/immutable/chunks/index-6838ea3a.js","_app/immutable/chunks/singletons-891535eb.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
