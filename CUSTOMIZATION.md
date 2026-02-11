# 🎨 Customization Guide

## Quick Personalization Checklist

### 1. Personal Information

**File: `src/components/Hero/Hero.jsx`**
- Line 37-39: Update your name
- Line 42-60: Modify role titles in TypeAnimation
- Line 69-71: Update description
- Line 76-86: Change stats (years, projects, technologies)

**File: `src/components/Contact/Contact.jsx`**
- Line 14-24: Update contact information
- Line 26-42: Update social media links

### 2. Resume

**Location: `public/resume.pdf`**
- Add your PDF resume here
- Name it exactly `resume.pdf`
- The download buttons will work automatically

### 3. Skills

**File: `src/components/Skills/Skills.jsx`**
- Line 18-72: Update skill categories and percentages
- Line 75-84: Modify conversational AI platforms

### 4. Work Experience

**File: `src/components/Experience/Experience.jsx`**
- Line 13-63: Update work experiences
  - Company name
  - Role
  - Period
  - Location
  - Achievements
  - Technologies used

### 5. Companies

**File: `src/components/Companies/Companies.jsx`**
- Line 13-31: Update companies you've worked with
- Change emoji logos or add images

### 6. Certifications

**File: `src/components/Certifications/Certifications.jsx`**
- Line 13-33: Update certifications
- Line 71-84: Update education details

### 7. Hobbies & YouTube

**File: `src/components/Hobbies/Hobbies.jsx`**
- Line 15-18: Update YouTube stats
- Line 22-48: Modify hobbies list
- Line 89: Update YouTube channel URL

### 8. About Section

**File: `src/components/About/About.jsx`**
- Line 14-31: Update feature cards
- Line 59-75: Modify about text

### 9. Color Theme

**File: `src/App.css`**

**Dark Mode Colors (Line 7-17):**
```css
--bg-primary: #0a0e27;          /* Main background */
--accent-primary: #00d9ff;       /* Primary accent color */
--accent-secondary: #0099ff;     /* Secondary accent */
--accent-gradient: linear-gradient(135deg, #00d9ff 0%, #0099ff 50%, #667eea 100%);
```

**Light Mode Colors (Line 19-29):**
```css
--bg-primary: #f5f7fa;
--accent-primary: #0077cc;
```

### 10. Navigation

**File: `src/components/Header/Header.jsx`**
- Line 20-27: Update navigation menu items

## Color Scheme Presets

### Preset 1: Blue Tech (Current)
```css
--accent-primary: #00d9ff;
--accent-secondary: #0099ff;
--accent-gradient: linear-gradient(135deg, #00d9ff 0%, #0099ff 50%, #667eea 100%);
```

### Preset 2: Green Tech
```css
--accent-primary: #00ff88;
--accent-secondary: #00cc6a;
--accent-gradient: linear-gradient(135deg, #00ff88 0%, #00cc6a 50%, #0099ff 100%);
```

### Preset 3: Purple/Pink
```css
--accent-primary: #a855f7;
--accent-secondary: #ec4899;
--accent-gradient: linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f43f5e 100%);
```

### Preset 4: Orange Energy
```css
--accent-primary: #ff6b35;
--accent-secondary: #f59e0b;
--accent-gradient: linear-gradient(135deg, #ff6b35 0%, #f59e0b 50%, #eab308 100%);
```

## Adding Your Photo/Avatar

### Option 1: Simple Emoji Avatar (Current)
**File: `src/components/Hero/Hero.jsx` (Line 149-151)**
```jsx
<span className="avatar-text">AA</span>
```

### Option 2: Add Your Photo
1. Add your photo to `public/` folder (e.g., `avatar.jpg`)
2. Replace in `src/components/Hero/Hero.jsx`:

```jsx
<div className="avatar-placeholder">
  <img src="/avatar.jpg" alt="Akshay Adate" />
</div>
```

3. Update CSS in `src/components/Hero/Hero.css`:
```css
.avatar-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
```

## YouTube API Integration (Optional)

To show live subscriber count:

1. Get YouTube API key from Google Cloud Console
2. Create `.env` file:
```env
VITE_YOUTUBE_API_KEY=your_api_key
VITE_YOUTUBE_CHANNEL_ID=your_channel_id
```

3. Update `src/components/Hobbies/Hobbies.jsx`:
```javascript
useEffect(() => {
  const fetchYouTubeStats = async () => {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
    
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    const data = await response.json();
    
    setYoutubeStats({
      subscribers: formatNumber(data.items[0].statistics.subscriberCount),
      views: formatNumber(data.items[0].statistics.viewCount),
      videos: data.items[0].statistics.videoCount,
    });
  };
  
  fetchYouTubeStats();
}, []);
```

## Fonts

To change fonts, update in `src/App.css`:
```css
body {
  font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

Add font link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

## Animation Speed

To adjust animation speeds:

**Particles:** `src/components/ParticlesBackground/ParticlesBackground.jsx` (Line 18-19)
```javascript
this.vx = (Math.random() - 0.5) * 0.5;  // Change 0.5 to speed up/down
```

**Typing Speed:** `src/components/Hero/Hero.jsx` (Line 56)
```jsx
speed={50}  // Lower = faster
```

## Quick Tips

1. **Test Responsiveness**: Use browser dev tools (Cmd+Opt+I on Mac)
2. **Preview Dark/Light**: Click sun/moon icon in header
3. **Check Animations**: Scroll slowly to see intersection animations
4. **Mobile Menu**: Test hamburger menu on mobile view

## Need Help?

- Check README.md for general setup
- See DEPLOYMENT.md for hosting
- All components are well-commented
- Feel free to experiment!

---

Happy customizing! Make it truly yours! 🎨
