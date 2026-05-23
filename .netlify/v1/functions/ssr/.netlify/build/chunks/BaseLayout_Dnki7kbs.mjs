import { h as createAstro, i as createComponent, g as addAttribute, n as renderTemplate, u as unescapeHTML, r as renderComponent, k as renderHead, l as renderSlot } from './astro/server_DbGe-HVW.mjs';
import 'piccolore';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro$1 = createAstro("https://aurora-sunglasses.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    image = "/og-image.jpg",
    canonicalURL = Astro2.url.href,
    publishedTime,
    article = false,
    keywords = []
  } = Astro2.props;
  const siteName = "Aurora Sunglasses";
  const twitterHandle = "@aurorasunglasses";
  return renderTemplate`<!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="keywords"${addAttribute(keywords.join(", "), "content")}><meta name="author"${addAttribute(siteName, "content")}><meta name="robots" content="index, follow"><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(article ? "article" : "website", "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url).href, "content")}><meta property="og:site_name"${addAttribute(siteName, "content")}>${publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>`}<!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url).href, "content")}>${renderTemplate`<meta property="twitter:creator"${addAttribute(twitterHandle, "content")}>`}<!-- Favicon --><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><!-- Preconnect to Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet"><!-- Schema.org Structured Data -->${article ? renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": new URL(image, Astro2.url).href,
    "datePublished": publishedTime,
    "author": {
      "@type": "Organization",
      "name": siteName
    }
  }))) : renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": "https://aurora-sunglasses.com",
    "logo": "https://aurora-sunglasses.com/logo.png",
    "description": "Professional sunglasses manufacturer with 10+ years experience. Custom OEM/ODM designs, UV400 protection, polarized lenses.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@aurora-sunglasses.com"
    },
    "sameAs": [
      "https://www.facebook.com/aurorasunglasses",
      "https://www.instagram.com/aurorasunglasses",
      "https://www.linkedin.com/company/aurora-sunglasses"
    ]
  })))}`;
}, "/root/.openclaw/workspace/aurora-sunglasses-website/src/components/SEO.astro", void 0);

const $$Astro = createAstro("https://aurora-sunglasses.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description, keywords = [], image, canonicalURL, publishedTime, article } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO Component -->${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "keywords": keywords, "image": image, "canonicalURL": canonicalURL, "publishedTime": publishedTime, "article": article })}${renderHead()}</head> <body class="font-sans antialiased text-gray-900 bg-white"> <!-- Header --> <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"> <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <!-- Logo --> <a href="/" class="flex items-center space-x-2"> <span class="font-display text-xl font-bold text-brand-700">AURORA</span> <span class="font-display text-xl text-gray-600">SUNGLASSES</span> </a> <!-- Desktop Navigation --> <div class="hidden md:flex items-center space-x-8"> <a href="/sunglasses" class="text-gray-700 hover:text-brand-600 font-medium transition">Sunglasses</a> <a href="/reading-glasses" class="text-gray-700 hover:text-brand-600 font-medium transition">Reading Glasses</a> <a href="/floating-glasses" class="text-gray-700 hover:text-brand-600 font-medium transition">Floating Glasses</a> <a href="/recycled-glasses" class="text-gray-700 hover:text-brand-600 font-medium transition">Recycled</a> <a href="/blog" class="text-gray-700 hover:text-brand-600 font-medium transition">Blog</a> <a href="/about" class="text-gray-700 hover:text-brand-600 font-medium transition">About</a> <a href="/contact" class="bg-brand-600 text-white px-5 py-2 rounded-full font-medium hover:bg-brand-700 transition">Contact</a> </div> <!-- Mobile Menu Button --> <button class="md:hidden p-2" aria-label="Menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </nav> </header> <!-- Main Content --> <main> ${renderSlot($$result, $$slots["default"])} </main> <!-- Footer --> <footer class="bg-gray-900 text-white mt-20"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <!-- Brand --> <div> <h3 class="font-display text-lg font-bold mb-4">AURORA SUNGLASSES</h3> <p class="text-gray-400 text-sm">
Professional sunglasses manufacturer with 10+ years experience. Custom OEM/ODM designs worldwide.
</p> </div> <!-- Products --> <div> <h4 class="font-semibold mb-4">Products</h4> <ul class="space-y-2 text-sm text-gray-400"> <li><a href="/sunglasses" class="hover:text-white transition">Sunglasses</a></li> <li><a href="/reading-glasses" class="hover:text-white transition">Reading Glasses</a></li> <li><a href="/floating-glasses" class="hover:text-white transition">Floating Glasses</a></li> <li><a href="/recycled-glasses" class="hover:text-white transition">Recycled Glasses</a></li> <li><a href="/novelty-glasses" class="hover:text-white transition">Novelty Glasses</a></li> <li><a href="/cases" class="hover:text-white transition">Cases & Accessories</a></li> </ul> </div> <!-- Company --> <div> <h4 class="font-semibold mb-4">Company</h4> <ul class="space-y-2 text-sm text-gray-400"> <li><a href="/about" class="hover:text-white transition">About Us</a></li> <li><a href="/contact" class="hover:text-white transition">Contact</a></li> <li><a href="/blog" class="hover:text-white transition">Blog</a></li> <li><a href="/oem-odm" class="hover:text-white transition">OEM/ODM Services</a></li> </ul> </div> <!-- Contact --> <div> <h4 class="font-semibold mb-4">Contact</h4> <ul class="space-y-2 text-sm text-gray-400"> <li>📧 info@aurora-sunglasses.com</li> <li>📱 +86 123 4567 8900</li> <li>📍 Shenzhen, China</li> </ul> </div> </div> <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"> <p>&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Aurora Sunglasses. All rights reserved.</p> </div> </div> </footer> </body></html>`;
}, "/root/.openclaw/workspace/aurora-sunglasses-website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
