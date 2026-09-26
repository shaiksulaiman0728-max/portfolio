# Premium Static Developer Portfolio

A premium, single-page developer portfolio built with **HTML5, CSS3, and Vanilla JavaScript only**.

The project is intentionally **read-only for portfolio content**. There is no admin area or content-management dashboard. Personal details, skills, education, projects, and certificates are changed directly in the source data inside `script.js`.

## 1. Project Overview

This portfolio includes:

- Home / hero section
- About Me
- Skills
- Education timeline
- Projects showcase
- Certificates showcase
- Contact details and validated contact form
- Sticky responsive navigation
- Scroll reveal animations
- Skill progress animation
- Back-to-top navigation
- Premium CSS-generated technology background
- Reduced-motion support
- GitHub Pages compatibility

No backend is required for the portfolio itself.

## 2. Folder Structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    └── resume.pdf        # add your own PDF here
```

`profile.jpg` is included as a visual placeholder in this starter package. Replace it with your own image. `resume.pdf` should be your own real PDF; it is intentionally not supplied as a fake document.

## 3. How to Open the Website

1. Put the project folder somewhere on your computer.
2. Make sure `index.html`, `style.css`, and `script.js` stay in the same folder.
3. Open `index.html` in a modern browser.
4. The basic portfolio works without a server.

For the best browser-based development workflow, you can also use VS Code with a local preview extension, but this is optional.

## 4. How to Add Your Profile Photo

1. Open the `assets` folder.
2. Replace `profile.jpg` with your own profile image.
3. Keep the filename `profile.jpg`, or change the path in `index.html`.
4. A missing image automatically falls back to a professional placeholder panel.

For good performance, use a reasonably compressed JPG/WebP image rather than a huge camera file.

## 5. How to Add Your Resume

1. Export your real resume as PDF.
2. Save it as `resume.pdf`.
3. Put it inside `assets/`.
4. The Home section already points to `assets/resume.pdf`.

When the project is hosted on GitHub Pages, the page checks whether that path exists before opening it. When the page is opened directly with `file://`, browser security can prevent a reliable file-existence check, so the expected path is allowed to open normally.

## 6. How to Edit Personal Information

Open `script.js` and find:

```js
// =====================================
// EDIT YOUR PORTFOLIO HERE
// =====================================

const PORTFOLIO_DATA = {
```

Change values under `personal`, including:

- `name`
- `role`
- `introduction`
- `aboutDescription`
- `personalDescription`
- `careerGoal`
- `interests`
- `focus`
- `email`
- `phone`
- `linkedin`
- `github`
- `location`
- `contactIntroduction`

Keep placeholders until you are ready to publish real information.

## 7. How to Edit Skills

Inside `PORTFOLIO_DATA.skills`, replace the placeholder objects with your real skills.

Each skill supports:

- `name` — skill name
- `shortName` — small icon-like label
- `description` — one-line description
- `level` — number from 0 to 100 for the visual progress bar
- `levelLabel` — text such as your preferred description of proficiency

Example structure:

```js
{
  name: "Your Skill",
  shortName: "YS",
  description: "Short description of your skill.",
  level: 75,
  levelLabel: "Working proficiency"
}
```

## 8. How to Edit Education

Inside `PORTFOLIO_DATA.education`, update:

- `degree`
- `branch`
- `college`
- `startYear`
- `endYear`
- `description`

The visual timeline is generated automatically from these source values.

## 9. How to Edit Projects

Inside `PORTFOLIO_DATA.projects`, each project can contain:

- `title`
- `tagline`
- `description`
- `image`
- `technologies`
- `githubUrl`
- `liveUrl`

Only real HTTPS links are turned into external links. Empty or placeholder URLs stay visibly inactive instead of pretending a link exists.

For a local image, for example:

```js
image: "assets/project-one.jpg"
```

For a real online project link:

```js
githubUrl: "https://github.com/your-name/your-project"
```

## 10. How to Edit Certificates

Inside `PORTFOLIO_DATA.certificates`, update:

- `title`
- `issuer`
- `date`
- `image`
- `credentialUrl`

Only real HTTPS credential URLs are made clickable.

## 11. How to Customize Colors and Typography

Open `style.css` and edit the CSS custom properties near the top inside `:root`.

Useful variables include:

```css
--bg
--panel
--text
--muted
--accent
--accent-2
--accent-3
--line
--shadow
```

Typography currently uses `Space Grotesk` for major headings and `DM Sans` for readable interface text.

The site uses one consistent dark technology-inspired theme and intentionally contains no theme toggle.

## 12. How to Connect the Contact Form Later

The current contact form is only a front-end validation layer. It does not claim to send an email.

To enable real delivery later, connect the form to a service such as **Formspree** or **EmailJS**.

### Formspree route

1. Create a Formspree account.
2. Create a form endpoint.
3. Copy the endpoint URL.
4. In `script.js`, replace the current submit handler with a `fetch()` POST to that endpoint, including the form fields.
5. Keep the success and error status messages user-friendly.
6. Test the form after deployment.

### EmailJS route

1. Create an EmailJS account.
2. Create an email service and template.
3. Add the official EmailJS browser SDK according to its current documentation.
4. Replace the local validation-only submit logic with the EmailJS send function.
5. Never expose private server credentials in browser code.

## 13. Publish Using GitHub Pages

1. Create or sign in to a GitHub account.
2. Create a new repository.
3. Upload the complete `portfolio` contents so `index.html` is at the repository root.
4. Open the repository **Settings**.
5. Open **Pages**.
6. Select the deployment branch, normally `main`, and the root folder.
7. Save the Pages configuration.
8. Wait for the GitHub Pages deployment to complete.
9. Open the generated site URL shown by GitHub.

Because the project uses only relative asset paths and browser-side HTML/CSS/JavaScript, it is well suited to GitHub Pages.

## 14. How to Update the Portfolio After Publishing

1. Change the needed values in `script.js`.
2. Replace images or the resume inside `assets/` when needed.
3. Commit and push the changed files to GitHub.
4. GitHub Pages automatically rebuilds the static site from the updated branch.

## 15. Content Architecture

Portfolio content is intentionally source-code configurable. There is no client-side database, browser storage system, admin dashboard, or portfolio content editor.

That means the published site remains lightweight, predictable, and easy to deploy.
