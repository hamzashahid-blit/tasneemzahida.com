export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["about-me.jpg","barcelony/Barcelony.ttf","barcelony/Readme.txt","barcelony/barcelony.zip","calligraphy.png","favicon.png","linux-libertine/Bugs.txt","linux-libertine/ChangeLog.txt","linux-libertine/GPL.txt","linux-libertine/INSTALL.txt","linux-libertine/LICENCE.txt","linux-libertine/LinLibertine_DR.ttf","linux-libertine/LinLibertine_I.ttf","linux-libertine/LinLibertine_R.ttf","linux-libertine/LinLibertine_RB.ttf","linux-libertine/LinLibertine_RBI.ttf","linux-libertine/LinLibertine_RI.ttf","linux-libertine/LinLibertine_RZ.ttf","linux-libertine/LinLibertine_RZI.ttf","linux-libertine/LinLibertine_aBL.ttf","linux-libertine/LinLibertine_aBS.ttf","linux-libertine/LinLibertine_aDRS.ttf","linux-libertine/LinLibertine_aRL.ttf","linux-libertine/LinLibertine_aS.ttf","linux-libertine/LinLibertine_aSI.ttf","linux-libertine/LinLibertine_aSZI.ttf","linux-libertine/LinLibertine_aZL.ttf","linux-libertine/OFL.txt","linux-libertine/README.txt","logo-full.png","logo-small.png","main.png","other.png","scriptina/SCRIPALT.ttf","scriptina/SCRIPTIN.ttf","visual.old.png"]),
	mimeTypes: {".jpg":"image/jpeg",".ttf":"font/ttf",".txt":"text/plain",".zip":"application/zip",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.C3T4loI8.js","app":"_app/immutable/entry/app.DuQ2ZppG.js","imports":["_app/immutable/entry/start.C3T4loI8.js","_app/immutable/chunks/CLFzP_8I.js","_app/immutable/chunks/ByXD0UK7.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DVvYZAL5.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/avMj0mdm.js","_app/immutable/entry/app.DuQ2ZppG.js","_app/immutable/chunks/CsJlPtwz.js","_app/immutable/chunks/ByXD0UK7.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/tqUQnMcT.js","_app/immutable/chunks/CC-GUHP5.js","_app/immutable/chunks/D02ojD_I.js","_app/immutable/chunks/DW_b4ELl.js","_app/immutable/chunks/Bg9kRutz.js","_app/immutable/chunks/DtPaIOHJ.js","_app/immutable/chunks/DNuWnvvf.js","_app/immutable/chunks/Dbqn4Y_i.js","_app/immutable/chunks/DMAY0hv0.js","_app/immutable/chunks/DVvYZAL5.js","_app/immutable/chunks/avMj0mdm.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,5,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/contacts",
				pattern: /^\/contacts\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,5,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(admin)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,,], errors: [1,,3,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,5,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(app)/events/[id]",
				pattern: /^\/events\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,5,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(admin)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/paintings",
				pattern: /^\/paintings\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,5,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/paintings/[id]",
				pattern: /^\/paintings\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,5,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(app)/[category]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,5,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
