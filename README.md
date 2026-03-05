# Karthik Nakkeeran — Portfolio Website

> Personal portfolio and data science showcase for **Karthik Nakkeeran**.
> Live at: [https://karthik-dataiq.github.io](https://karthik-dataiq.github.io)

---

## Tech Stack

| Layer         | Technology                                          |
|---------------|-----------------------------------------------------|
| Markup        | HTML5 (semantic, accessible)                        |
| Styling       | Tailwind CSS (CDN) + Custom CSS                     |
| Interactivity | Vanilla JavaScript (zero dependencies)              |
| Icons         | Font Awesome 6 (Free CDN)                           |
| Fonts         | Inter, JetBrains Mono (Google Fonts)                |
| SEO           | JSON-LD structured data, Open Graph, Twitter Cards  |
| Analytics     | hits.sh visit counter                               |
| Hosting       | GitHub Pages (free)                                 |

---

## Features

- **Dark / Light Mode** — toggles with localStorage persistence + system preference detection
- **Responsive** — mobile-first with hamburger menu
- **Color-Blind Friendly** — blue-based palette safe for all color vision types
- **SEO Optimized** — JSON-LD Person & WebSite schema, canonical URL, Open Graph, Twitter Cards, sitemap, robots.txt
- **Visit Counter** — animated page view counter (starts at 1,000)
- **Scroll Animations** — fade-in reveal effects on scroll
- **Active Nav Highlighting** — auto-highlights current section in navbar
- **Print Styles** — clean output for print/PDF

---

## Sections

1. **Hero** — introduction, profile photo, social links, visit counter
2. **About** — bio, quick stats, info cards
3. **Skills** — Data Science, AI/ML, Tools & Infra
4. **Experience** — timeline (Abbott, SAS, Oklahoma State, Accenture)
5. **Education** — Ph.D., M.S., B.E.
6. **Projects** — 6 featured project cards
7. **Publications, Awards & Affiliations** — research, awards, judging, speaking, memberships
8. **Fun Fact** — tennis coaching at Reuts Tennis Academy
9. **Contact** — email and social links
10. **Footer** — copyright, accessibility note

---

## Deployment to GitHub Pages

### Prerequisites
- A GitHub account with the username `karthik-dataiq`
- Git installed on your machine

### Steps

#### 1. Create the GitHub Repository

Go to [https://github.com/new](https://github.com/new) and create a **new repository** named:

```
karthik-dataiq.github.io
```

> **Important:** The repository name **must** match your GitHub username exactly, followed by `.github.io`. This tells GitHub to serve it as your user site.

- Set it to **Public**
- Do **NOT** initialize with a README (we will push our own)

#### 2. Initialize Git Locally

```bash
cd /path/to/my_portfolio
git init
git add .
git commit -m "Initial commit: portfolio website"
```

#### 3. Connect to GitHub and Push

```bash
git remote add origin https://github.com/karthik-dataiq/karthik-dataiq.github.io.git
git branch -M main
git push -u origin main
```

#### 4. Enable GitHub Pages (if not automatic)

1. Go to your repo: `https://github.com/karthik-dataiq/karthik-dataiq.github.io`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch and **/ (root)** folder
5. Click **Save**

#### 5. Visit Your Live Site

After a minute or two, your site will be live at:

```
https://karthik-dataiq.github.io
```

---

## File Structure

```
my_portfolio/
├── index.html                      ← Main single-page portfolio
├── style.css                       ← Custom styles, animations, dark mode
├── script.js                       ← Dark mode, mobile menu, scroll effects
├── robots.txt                      ← Search engine crawl directives
├── sitemap.xml                     ← Sitemap for Google Search Console
├── googlec3d2bb3a4d90eba1.html     ← Google Search Console verification
├── README.md                       ← This file
├── assets/
│   └── profile.png                 ← Profile photo
└── profile_info/                   ← Source resume & CV documents (not deployed)
```

---

## SEO Checklist

- [x] `<title>` with full name + keywords
- [x] `<meta description>` keyword-rich
- [x] `<meta keywords>`, `<meta author>`, `<meta robots>`
- [x] Canonical URL
- [x] Open Graph tags (LinkedIn, Facebook previews)
- [x] Twitter Card tags
- [x] JSON-LD Person schema (Google Knowledge Panel)
- [x] JSON-LD WebSite schema
- [x] `robots.txt` with sitemap reference
- [x] `sitemap.xml` submitted to Google Search Console
- [x] Google Search Console verified
- [x] Semantic HTML (`<main>`, `<nav>`, `<section>`, `<footer>`)
- [ ] Backlinks from LinkedIn, Google Scholar, Medium, GitHub profiles

---

## Customization

### Update Personal Info
- Edit the **Hero** section in `index.html` for the tagline
- Edit the **About** section for bio details
- Update the email in the **Contact** section

### Add/Remove Projects
- Each project is a `<div class="project-card">` block in the Projects section
- Copy an existing card and modify the content

### Update Experience
- Each role is a `<div class="timeline-item">` block in the Experience section

### Change Colors
- Primary palette is in the Tailwind config `<script>` in `index.html`
- All custom colors in `style.css` use the same blue palette
- Current palette is blue-based and color-blind friendly

---

## License

This project is open source. Feel free to fork and adapt for your own portfolio.
