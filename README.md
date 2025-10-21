# Placeholder Portal

A beautiful full-screen placeholder page with animated gradient background and social media links.

## Features

- 🎨 Full-screen animated gradient background (fog-like effect)
- 📱 Responsive design (works on desktop and mobile)
- 🔒 No overflow (no horizontal or vertical scrolling)
- 🔗 Social media links (Instagram, LinkedIn)
- 📧 Email link with web crawler protection
- ✨ Glassmorphism design with modern UI

## Usage

Simply open `index.html` in a web browser or serve it with any web server.

To test locally with Python:
```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your browser.

## Customization

Edit the following in the files to customize:

- **Social media links**: Update the `href` attributes in `index.html`
- **Email address**: Modify the `emailParts` object in `app.js`
- **Text content**: Change the heading and subtitle text in `index.html`
- **Colors**: Adjust the gradient colors in `style.css` (`.fog-container` background)

## Technologies

- Pure HTML5, CSS3, and JavaScript (no framework dependencies)
- CSS animations for the fog effect
- SVG icons for social media
- Glassmorphism design with backdrop-filter