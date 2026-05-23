import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DcjXJpWG.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/cases.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/floating-glasses.astro.mjs');
const _page6 = () => import('./pages/novelty-glasses.astro.mjs');
const _page7 = () => import('./pages/products/_slug_.astro.mjs');
const _page8 = () => import('./pages/reading-glasses.astro.mjs');
const _page9 = () => import('./pages/recycled-glasses.astro.mjs');
const _page10 = () => import('./pages/sunglasses.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/cases.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/floating-glasses.astro", _page5],
    ["src/pages/novelty-glasses.astro", _page6],
    ["src/pages/products/[slug].astro", _page7],
    ["src/pages/reading-glasses.astro", _page8],
    ["src/pages/recycled-glasses.astro", _page9],
    ["src/pages/sunglasses.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "90ad9322-7137-4868-81cb-9d2fb582ce3b"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
