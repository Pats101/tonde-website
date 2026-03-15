# tonde-website

A personal portfolio website showcasing Patrick Ganhiwa's professional skills, work experience, education, projects, and hobbies. Built as a single-page application with vanilla web technologies and deployed on GitHub Pages.

**Live Demo:** [https://pats101.github.io/tonde-website/](https://pats101.github.io/tonde-website/)

## About

This portfolio features:

- **Home** — Hero section with typing animation and social links
- **About** — Bio and downloadable CV/resume
- **Skills** — Collapsible accordion showcasing frontend and backend skills
- **Qualification** — Tabbed timeline of education and work experience
- **Projects** — Carousel of project demos with live links
- **Hobbies** — Gallery of pencil drawings and artwork
- **Contact** — Contact form and details

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 |
| JavaScript | Vanilla JS + jQuery 3.6.0 |
| Animations | Typed.js 2.0.12 |
| Carousels | Swiper 8.x |
| Icons | Font Awesome 4.7.0, Boxicons 2.1.1, Unicons 4.0.0 |
| Hosting | GitHub Pages |

## Getting Started

No build tools or package managers are required — the site is entirely static.

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pats101/tonde-website.git
   cd tonde-website
   ```

2. **Open in your browser**
   ```bash
   open index.html
   ```
   Or simply double-click `index.html` in your file explorer.

3. **Use a local server** (optional, for a more realistic environment)
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Then visit http://localhost:8000
   ```

## Project Structure

```
tonde-website/
├── index.html              # Single-page app (all sections)
├── assets/
│   ├── css/
│   │   ├── stylesheet.css  # Custom styles
│   │   └── swiper-bundle.min.css
│   ├── js/
│   │   ├── script.js       # Custom JS
│   │   └── swiper-bundle.min.js
│   ├── img/                # Photos and project screenshots
│   │   └── drawings/       # Hobby artwork
│   └── pdf/                # Resume/CV files
└── README.md
```

## License

This project is for personal use.
