
# Personal Biodata Website

A modern static website for showcasing personal and family biodata in a clean, elegant format for matrimonial profiles. The project includes two profile pages, one for Harsh Patel and one for Meet Patel, each built as a flip-card biodata experience with responsive layout, gallery images, and interactive detail sections.

## Overview

This repository contains a lightweight front-end application designed to present personal information in a visually attractive and easy-to-read way. It is especially suited for marriage biodata or family profile sharing, with each profile page containing:

- Profile image and introductory details
- Flip-card interaction to reveal more information
- Categorized biodata sections
- Family and lifestyle information
- Photo gallery with modal preview
- Mobile-friendly responsive layout

## Project pages

- `HarshPatel.html` – biodata page for Harsh Patel
- `MeetPatel.html` – biodata page for Meet Patel

## Features

- Responsive single-page layout
- Bootstrap-based styling
- Custom CSS for premium card design
- JavaScript-powered card flip and dynamic data rendering
- Image gallery preview modal
- Easy-to-edit biodata content stored directly in JavaScript arrays

## Tech stack

- HTML5
- CSS3
- JavaScript
- Bootstrap 4
- jQuery + Popper.js

## Project structure

```text
PersonalBiodata/
├── HarshPatel.html
├── MeetPatel.html
├── README.md
├── assets/
│   ├── ganesh.png
│   ├── harsh/
│   └── meet/
├── docs/
│   ├── harsh_main.js
│   ├── harsh_style.css
│   ├── meet_main.js
│   └── meet_style.css
├── Screenshots/
│   ├── screenshot1.png
│   ├── screenshot2.png
│   └── screenshot3.png
└── .idea/
```

## Run locally

Because this is a static HTML project, there is no dependency install step required.

Option 1: Open directly in browser

- Open `HarshPatel.html` or `MeetPatel.html` directly in your browser.

Option 2: Serve via a local web server

```bash
cd /path/to/PersonalBiodata
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/HarshPatel.html`
- `http://localhost:8000/MeetPatel.html`

## Customize the biodata

The profile data is defined in the JavaScript files:

- `docs/harsh_main.js`
- `docs/meet_main.js`

Edit the `biodata` arrays to update:

- Name and personal details
- Education and profession
- Family information
- Address and background
- Gallery images

The styles can be adjusted in:

- `docs/harsh_style.css`
- `docs/meet_style.css`

Image files are stored under:

- `assets/harsh/`
- `assets/meet/`

## Author

- Harsh Patel
- GitHub: https://github.com/hpcreator
- Email: hpatel1290@gmail.com

## Notes

This project is intended for personal and matrimonial profile presentation and can be adapted for custom biodata pages, family profiles, or portfolio-style static websites.

