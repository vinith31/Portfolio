# Vinith Sridhar - Portfolio Website

A modern, cyberpunk-inspired portfolio website showcasing my work as a Full-Stack Developer specializing in AI/ML, cloud technologies, and scalable web applications.

## 🚀 Features

- **Unique Terminal-Inspired Design**: Cyberpunk aesthetic with neon accents and glitch effects
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Interactive Elements**: Dynamic typing effect, parallax backgrounds, and hover effects
- **Performance Optimized**: Lazy loading and efficient animations

## 🎨 Design Elements

- Custom color palette with neon cyan, magenta, and green accents
- Terminal-style code blocks and command-line aesthetics
- Animated grid background with scanline effects
- Glitch text effects on hero section
- Smooth gradient transitions and shadows

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript**: Vanilla JS for interactivity
- **Fonts**: 
  - [Orbitron](https://fonts.google.com/specimen/Orbitron) for display text
  - [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for code/monospace

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `your-username.github.io` (replace `your-username` with your GitHub username)
   - Example: `vinithsridhar.github.io`
3. Make it public
4. Don't initialize with README (we already have one)

### Step 2: Upload Files

Option A - Using Git (Recommended):

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/your-username/your-username.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Option B - Using GitHub Web Interface:

1. Click "uploading an existing file" on your repository page
2. Drag and drop all three files (index.html, styles.css, script.js)
3. Commit changes

### Step 3: Enable GitHub Pages

1. Go to your repository Settings
2. Scroll to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click Save

### Step 4: Access Your Website

Your portfolio will be live at: `https://your-username.github.io`

*Note: It may take a few minutes for the site to go live after first deployment.*

## 🔧 Customization

### Updating Personal Information

1. **Contact Details**: Update email, phone, and social links in `index.html`
2. **Projects**: Modify project cards in the Projects section
3. **Experience**: Update work experience in the Experience section
4. **Skills**: Edit skill tags in the About section

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --neon-cyan: #00ffff;      /* Primary accent */
    --neon-magenta: #ff00ff;   /* Secondary accent */
    --neon-green: #00ff88;     /* Success/highlight color */
    /* ... more colors */
}
```

### Modifying Typing Animation

Edit the phrases array in `script.js`:

```javascript
const phrases = [
    'Full-Stack Developer',
    'AI/ML Enthusiast',
    'Backend Architect',
    'Problem Solver',
    'Cloud Engineer'
];
```

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🎯 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Email**: vinithsridhar2@gmail.com
- **LinkedIn**: [linkedin.com/in/vinithsridhar](https://linkedin.com/in/vinithsridhar)
- **GitHub**: [github.com/vinithsridhar](https://github.com/vinithsridhar)

---

Built with 💙 by Vinith Sridhar

*"Code is poetry written in logic"*
