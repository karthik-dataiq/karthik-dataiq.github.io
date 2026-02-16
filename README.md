# Karthik DataIQ — Portfolio Website

> Personal portfolio and data science showcase for **Karthik Nakkeeran**.
> Live at: [https://karthik-dataiq.github.io](https://karthik-dataiq.github.io)

---

## Tech Stack

| Layer         | Technology                              |
|---------------|-------------------------------------------|
| Markup        | HTML5                                     |
| Styling       | Tailwind CSS (CDN) + Custom CSS           |
| Interactivity | Vanilla JavaScript (zero dependencies)    |
| Icons         | Font Awesome 6 (Free CDN)                 |
| Fonts         | Inter, JetBrains Mono (Google Fonts)      |
| Hosting       | GitHub Pages (free)                       |

---

## Deployment to GitHub Pages (Step-by-Step)

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

Open a terminal in the project folder and run:

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

1. Go to your repo on GitHub: `https://github.com/karthik-dataiq/karthik-dataiq.github.io`
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
├── index.html          ← Main entry point (single-page site)
├── style.css           ← Custom styles & component classes
├── script.js           ← Dark mode, mobile menu, scroll effects
├── README.md           ← This file
└── profile_info/       ← Source resume & profile documents
```

---

## Customization Guide

### Update Personal Info
- Edit the **Hero** section in `index.html` to change the tagline
- Edit the **About** section for bio details
- Update the email address in the **Contact** section

### Add/Remove Projects
- Each project is a `<div class="project-card">` block in the Projects section
- Copy an existing card block and modify the content
- Update `href="#"` links to point to actual GitHub repos or demos

### Update Experience
- Each role is a `<div class="timeline-item">` block
- Add or remove items as needed

### Change Colors
- Primary color is defined in the Tailwind config inside `<script>` in `index.html`
- Modify the `primary` color palette values to change the accent color

---

## License

This project is open source. Feel free to fork and adapt for your own portfolio.
