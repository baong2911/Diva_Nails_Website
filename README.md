# Author: Bao H. Nguyen - LinkedIn: https://www.linkedin.com/in/bao-hong-gia-nguyen/
# Diva Nails Website

A professional static website for **Diva Nails**, a luxury nail salon in Santa Cruz, California. The website is built with simple front-end technologies and can run locally or on any static web server.

## Tech Stack

- **HTML5** for page structure and SEO metadata
- **CSS3** for layout, responsive design, animations, and visual styling
- **Vanilla JavaScript** for interactive effects
- **Google Fonts** for typography
- **Static images** for the hero and service menu visuals
- **ICO favicon** for the browser tab icon

This project does not require React, Vue, npm, Node packages, a database, a backend, or a build tool.

## Features

- Responsive luxury salon landing page
- Desktop, tablet, and mobile friendly design
- Hero section with premium salon image
- Manicure and pedicure menu images
- Booking section with phone, SMS, and Instagram options
- Customer testimonials
- Footer with address, business hours, phone number, Apple Maps, Google Maps, and Instagram
- Custom favicon

## Project Structure

```text
.
├── README.md
├── index.html
├── divanails.ico
├── style.css
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── diva-nail-hero.png
    ├── menu_medicure.jpg
    └── menu_pedicure.jpg
```

## File Guide

- `index.html`: Main website file
- `css/style.css`: Main stylesheet
- `style.css`: Root stylesheet fallback
- `js/script.js`: JavaScript for interactive effects
- `images/`: Website image assets
- `divanails.ico`: Favicon

## Run Locally

Open a terminal inside the project folder.

Start a local server:

```bash
python3 -m http.server 4173
```

Open the website:

```text
http://127.0.0.1:4173
```

Stop the local server:

```bash
Ctrl + C
```

## Section Preview Links

```text
http://127.0.0.1:4173/#menu
http://127.0.0.1:4173/#booking
http://127.0.0.1:4173/#testimonials
http://127.0.0.1:4173/#visit
```

## Alternative Preview

Because this is a static website, `index.html` can also be opened directly in a browser.

Using a local server is recommended because it behaves more like a real hosted website.

## Validation Commands

Check JavaScript syntax:

```bash
node --check js/script.js
```

Check HTML parsing:

```bash
python3 -c "from html.parser import HTMLParser; HTMLParser().feed(open('index.html', encoding='utf-8').read()); print('html parsed')"
```

Check CSS brace balance:

```bash
python3 -c "s=open('css/style.css', encoding='utf-8').read(); print('braces', s.count('{'), s.count('}'))"
```

## Deploy To A Server

Upload the project files and folders to the server web root.

Example:

```bash
scp -r index.html divanails.ico style.css css js images root@YOUR_SERVER_IP:/path/to/web/root/
```

After uploading, hard refresh the browser:

```text
Ctrl + Shift + R
```