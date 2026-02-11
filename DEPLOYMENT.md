# 🚀 Deployment Guide

## Quick Deployment Options

### 1. Vercel (Recommended - Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy
5. Done! Your site is live

**Or use Vercel CLI:**
```bash
npm install -g vercel
vercel
```

### 2. Netlify

1. Build your project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [app.netlify.com](https://app.netlify.com)

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/portfolio"
}
```

3. Deploy:
```bash
npm run deploy
```

### 4. Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init hosting
```

3. Set `dist` as your public directory

4. Deploy:
```bash
npm run build
firebase deploy
```

## Environment Variables

If you add any API keys or environment variables:

1. Create `.env` file:
```env
VITE_API_KEY=your_key_here
VITE_YOUTUBE_API_KEY=your_key
```

2. Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

3. Add to your deployment platform's environment variables

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update your DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

## Performance Tips

1. **Optimize Images**: Compress images before adding
2. **Code Splitting**: Already handled by Vite
3. **Lazy Loading**: Consider lazy loading sections
4. **CDN**: Vercel/Netlify provide global CDN automatically

## SEO Optimization

Add to `index.html`:
```html
<meta name="description" content="Akshay Adate - AI Engineer & Full-stack Developer Portfolio">
<meta name="keywords" content="AI Engineer, Full-stack Developer, React, Node.js, GenAI">
<meta property="og:title" content="Akshay Adate - Portfolio">
<meta property="og:description" content="Senior AI Engineer specializing in GenAI and Cloud">
<meta property="og:image" content="/og-image.jpg">
```

## Monitoring

Consider adding:
- Google Analytics
- Vercel Analytics
- Hotjar for user behavior

## SSL/HTTPS

All recommended platforms provide free SSL certificates automatically.

## Troubleshooting

**Build fails?**
- Check Node version: `node --version` (should be 16+)
- Clear cache: `rm -rf node_modules dist && npm install`

**Blank page after deployment?**
- Check base path in `vite.config.js`
- Ensure all imports use correct casing

**Slow loading?**
- Enable compression on your hosting platform
- Optimize images
- Consider using webp format

---

Choose the platform that fits your needs. Vercel is recommended for its simplicity and excellent performance! 🚀
