# Aurora Sunglasses - SEO-Optimized Website

Professional eyewear manufacturer website built with Astro + Netlify.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Git
- GitHub account
- Netlify account

### 1. Install Dependencies
```bash
cd aurora-sunglasses-website
npm install
```

### 2. Development
```bash
npm run dev
```
Open http://localhost:4321

### 3. Build
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
aurora-sunglasses-website/
├── src/
│   ├── components/
│   │   └── SEO.astro          # Reusable SEO component
│   ├── layouts/
│   │   └── BaseLayout.astro   # Base layout with header/footer
│   └── pages/
│       ├── index.astro        # Homepage
│       ├── sunglasses.astro   # Polarized sunglasses
│       ├── reading-glasses.astro
│       ├── floating-glasses.astro
│       ├── recycled-glasses.astro
│       ├── novelty-glasses.astro
│       ├── cases.astro
│       ├── about.astro
│       ├── contact.astro
│       └── blog/
│           └── index.astro
├── public/
│   ├── robots.txt
│   └── favicon.svg
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── netlify.toml
```

---

## 🌐 Deploy to Netlify

### Option A: Git Integration (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/diffish666-del/aurora-sunglasses-website.git
git push -u origin main
```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select GitHub → Choose `aurora-sunglasses-website`
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Configure Domain**
   - In Netlify dashboard → Domain Settings
   - Add custom domain: `aurora-sunglasses.com`
   - Follow DNS configuration instructions

### Option B: Manual Deploy

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

---

## 🔧 GoDaddy DNS Configuration

After deploying on Netlify, update DNS at GoDaddy:

1. Login to GoDaddy → DNS Management
2. Add/Edit records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 75.2.60.5 | 1 hour |
| CNAME | www | aurora-sunglasses.netlify.app | 1 hour |

*(Netlify IP may vary - check your Netlify dashboard)*

Or use Netlify DNS:
1. In Netlify → Domain Settings → Click "Configure DNS"
2. Update GoDaddy nameservers to Netlify's

---

## 📊 SEO Features Built-In

✅ **Meta Tags**
- Title tags (50-60 characters)
- Meta descriptions (150-160 characters)
- Open Graph for social sharing
- Twitter Cards

✅ **Technical SEO**
- Automatic sitemap.xml
- robots.txt
- Canonical URLs
- Schema.org structured data
- Mobile-responsive design
- Fast loading (<2s)

✅ **Content SEO**
- Keyword-optimized product pages
- H1/H2/H3 hierarchy
- Alt text for images
- Internal linking
- Blog for content marketing

---

## 🎨 Customization

### Update Contact Form

Edit `src/pages/contact.astro`:
- Replace `https://formspree.io/f/your-form-id` with your Formspree ID
- Or integrate with your preferred form service

### Add Products

Duplicate `src/pages/sunglasses.astro` and customize:
- Title, description, keywords
- Features list
- Product images

### Add Blog Posts

Create new files in `src/pages/blog/[slug].astro`:
```astro
---
import BaseLayout from '@layouts/BaseLayout.astro';
---
<BaseLayout title="Your Post Title" description="Meta description">
  <!-- Content -->
</BaseLayout>
```

---

## 📈 Next Steps

1. **Add Product Images** - Replace emoji placeholders with actual photos
2. **Set Up Contact Form** - Configure Formspree or email service
3. **Google Search Console** - Verify and submit sitemap
4. **Google Analytics** - Add tracking code
5. **Content Creation** - Write detailed product descriptions
6. **Link Building** - Start outreach for backlinks

---

## 🛠️ Tech Stack

- **Framework:** Astro 5.0
- **Styling:** Tailwind CSS
- **Deployment:** Netlify
- **SEO:** @astrojs/sitemap
- **Analytics:** (Add Google Analytics)

---

## 📞 Support

For questions or issues:
- GitHub Issues
- Email: info@aurora-sunglasses.com

---

**Built with ❤️ for Aurora Sunglasses**
