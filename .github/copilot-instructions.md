# Copilot Coding Agent Instructions for Auto Boutique Website

## Project Overview
This codebase is a static website for Auto Boutique, a car detailing business in Durban, South Africa. The site consists of several HTML pages (`index.html`, `services.html`, `gallery.html`, `aboutus.html`, `contactus.html`) and uses a single external CSS file (`css_assets/all.css`) for styling. Images are stored in the `_images/` directory.

## Architecture & Structure
- **Pages:** Each HTML file represents a major section of the business (Home, Services, Gallery, About Us, Contact Us).
- **Styling:** All styles must be placed in `css_assets/all.css`. Inline styles are discouraged and should be refactored.
- **Assets:** Images are referenced from `_images/`. Use descriptive `alt` attributes for accessibility.
- **Navigation:** Consistent header and footer across all pages. Navigation links are present in the header.
- **Accessibility:** All interactive and embedded elements (e.g., iframes) must have accessible names (`title` for iframes, `alt` for images).

## Developer Workflows
- **No build tools or frameworks** are used; all development is direct HTML/CSS/JS editing.
- **No automated tests** are present; manual browser testing is required.
- **Debugging:** Use browser dev tools for layout and accessibility checks.
- **Styling changes:** Update `css_assets/all.css` and ensure all pages link to it.

## Project-Specific Conventions
- **Consistent Layout:** Headers and footers must be identical across all pages.
- **Image Sizing:** Gallery images are resized to 16:9 ratio for visual consistency.
- **Change Log:** All major changes are tracked in `README.md` under the change log table.
- **References & Attributions:** Code and design attributions are included as HTML comments at the end of each file.

## Integration Points
- **Google Maps Embed:** Used in `contactus.html` via an `<iframe>`. The `iframe` must have a `title` attribute and use a CSS class for styling.
- **Social Media Links:** Footer contains links to Instagram, TikTok, Facebook, YouTube, and WhatsApp with corresponding icons.

## Examples
- To update the map embed in `contactus.html`, add a `title` and move any inline styles to `css_assets/all.css`:
  ```html
  <iframe src="..." width="600" height="450" title="Map showing Outlet Park location" class="contact-map" ...></iframe>
  ```
  ```css
  /* css_assets/all.css */
  .contact-map { border: 0; }
  ```
- To add a new image, place it in `_images/` and reference it with a descriptive `alt` attribute.

## Key Files & Directories
- `index.html`, `services.html`, `gallery.html`, `aboutus.html`, `contactus.html`: Main site pages
- `css_assets/all.css`: All site-wide styles
- `_images/`: All image assets
- `README.md`: Project plan, design decisions, and change log

---
If any conventions or workflows are unclear, please request clarification or examples from the user before proceeding with major changes.
