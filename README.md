# Portfolio - Javier Stiven Chávez Gallego

A modern, responsive portfolio website showcasing professional experience, skills, projects, and education. Built with vanilla HTML, CSS, and JavaScript, featuring a bilingual interface (English/Spanish) with automatic language detection.

## 🌟 Features

- **Single-page landing**: hero, stats, about, stack (bento), experience timeline, projects, education and contact in one scroll
- **Glass UI**: `backdrop-filter` surfaces with inset highlights and a cursor-following spotlight
- **Parallax**: scroll-linked drift on floating chips, card images and fixed background layers, plus pointer depth on the hero portrait
- **Bilingual (ES/EN)**: browser language detection, manual toggle, preference saved in `localStorage`
- **Responsive & accessible**: mobile menu, `prefers-reduced-motion` support, no horizontal overflow

## 🛠️ Technologies Used

- **HTML5 / CSS3 / vanilla JavaScript** — no framework, no build step
- **Google Fonts**: Instrument Serif, Plus Jakarta Sans, JetBrains Mono
- Design tokens (`--a`, `--b`, `--c`) at the top of `public/css/landing.css` re-skin the whole page

## 📁 Project Structure

```
portfolio/
├── index.html                 # Landing markup (all sections)
├── README.md
└── public/
    ├── css/landing.css        # Tokens, glass, layout, responsive
    ├── js/
    │   ├── landing.js         # i18n, parallax, reveal, pointer effects
    │   └── translations.js    # ES / EN strings (data-i18n / data-i18n-html)
    └── images/                # Photo, logos, project screenshots
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/stiv120/portfolio.git
   cd portfolio
   ```

2. **Open the project**
   - **Option 1**: Open `index.html` directly in your browser
   - **Option 2**: Use a local development server
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the portfolio**
   - Direct file: Open `index.html` in your browser
   - Local server: Navigate to `http://localhost:8000`

## 🎨 Features in Detail

### Language System
- **Automatic Detection**: Detects browser language on first visit
- **Persistent Preference**: Saves language choice in localStorage
- **Dynamic Translation**: All content updates instantly when language changes
- **Visual Indicators**: Country flags (🇨🇴 Colombia / 🇺🇸 United States) for easy identification

### Responsive Design
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Flexible Layout**: CSS Grid and Flexbox for adaptive layouts
- **Touch-Friendly**: Optimized for touch interactions
- **Breakpoints**: Optimized for mobile, tablet, and desktop views

### Sections Overview

#### About Me
Personal introduction with professional summary and contact information.

#### Skills
Categorized technical skills:
- Coding Agents (Claude Code, Cursor, GitHub Copilot, executable specs, subagent delegation)
- Agent Judgment & Quality
- LLMs & AI Integration (structured outputs, tool use, scoped permissions)
- Backend (Node.js, NestJS, Fastify, TypeScript, C# / .NET, PHP, Go, hexagonal, DDD, SOLID)
- Databases (PostgreSQL, SQL Server, MySQL, Oracle, MongoDB, Redis, Drizzle ORM)
- Cloud & Containers (Google Cloud, AWS, Azure, Docker, Kubernetes, CI/CD)
- Testing & Quality (Vitest, Jest, xUnit, e2e, architecture tests, Stryker, SonarQube)
- Security
- Frontend & Team (Next.js, React, React Native, Angular, Scrum, Jira)

#### Experience
Detailed work history with:
- Company information and logos
- Job titles and dates
- Responsibilities and achievements
- Technologies used

#### Education
- Professional education (Systems Engineering)
- Complementary training (Courses, Bootcamps, Certifications)
- Languages proficiency

#### Projects
- Collaborative projects with descriptions and technologies
- Personal projects with links to repositories/demos

## 🔧 Customization

### Adding New Translations
1. Open `public/js/translations.js`
2. Add new keys to both `es` and `en` objects
3. Add `data-i18n="yourKey"` attribute to HTML elements

### Modifying Styles
- Main theme colors: Edit CSS variables in `public/css/principal.css`
- Component styles: Modify respective CSS files in `public/css/`
- Responsive breakpoints: Adjust media queries as needed

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add navigation link in the menu
3. Add corresponding styles in CSS files
4. Add translations if needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Live Demo

Visit the live portfolio: [https://stiv120.github.io/portfolio](https://stiv120.github.io/portfolio)

## 👤 Author

**Javier Stiven Chávez Gallego**

- Systems Engineer
- Senior AI-First Developer · Code Agent Orchestration · Node.js / NestJS
- Location: Santiago de Cali, Colombia

### Contact
- 📧 Email: gallegostiven340@gmail.com
- 💼 LinkedIn: [linkedin.com/in/javierstivenchavez](https://linkedin.com/in/javierstivenchavez)
- 💻 GitHub: [github.com/stiv120](https://github.com/stiv120)
- 🌐 Portfolio: [stiv120.github.io/portfolio](https://stiv120.github.io/portfolio)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the responsive grid system
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Flag CDN](https://flagcdn.com/) for country flags

---

**Note**: This portfolio is continuously updated with new projects and experiences. Last updated: 2026

