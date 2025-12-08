# Portfolio - Javier Stiven Chávez Gallego

A modern, responsive portfolio website showcasing professional experience, skills, projects, and education. Built with vanilla HTML, CSS, and JavaScript, featuring a bilingual interface (English/Spanish) with automatic language detection.

## 🌟 Features

- **Bilingual Interface**: Full support for English and Spanish with automatic browser language detection
- **Responsive Design**: Mobile-first approach, fully responsive across all devices
- **Dynamic Content**: Single-page application with smooth section transitions
- **Language Selector**: Interactive language switcher with country flags (Colombia/US)
- **Professional Sections**:
  - About Me
  - Technical Skills
  - Work Experience
  - Education & Training
  - Projects Portfolio
  - Contact Information

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS variables, animations, and responsive design
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity and translations
- **Bootstrap 5.3.3**: Grid system and responsive utilities
- **Font Awesome 6.0**: Icons library
- **Google Fonts**: Poppins font family

### Features
- **LocalStorage**: Language preference persistence
- **CSS Variables**: Theme management
- **CSS Animations**: Smooth transitions and effects
- **Responsive Navigation**: Mobile hamburger menu

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── README.md                  # Project documentation
└── public/
    ├── css/
    │   ├── principal.css      # Main styles and theme
    │   ├── menu.css           # Navigation menu styles
    │   ├── cards.css          # Card component styles
    │   ├── skills.css         # Skills section styles
    │   ├── contact.css        # Contact section styles
    │   ├── brand-name.css     # Brand name animation
    │   └── language-selector.css  # Language selector styles
    ├── js/
    │   ├── scripts.js         # Main JavaScript functionality
    │   └── translations.js    # Translation system (ES/EN)
    └── images/
        ├── photo.jpeg         # Profile photo
        ├── *.png, *.jpg, *.svg  # Project images and logos
        └── ...
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
- Programming Languages (JavaScript, PHP, Java, Go)
- Databases (MySQL, Oracle, SQL Server, MongoDB, DynamoDB)
- Frameworks & Tools (Laravel, Spring Boot, Symfony, Angular, Vue.js, React.js, etc.)
- Unit Testing (PHP Unit, Jest, Moq)
- Work Methodologies (Scrum, Clean Code, SOLID Principles)
- Documentation & UML
- Design Patterns & Architecture

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
- Backend Developer
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

**Note**: This portfolio is continuously updated with new projects and experiences. Last updated: 2025

