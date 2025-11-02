# 📁 Webura Website - Teams & Blog Sections

Professional and organized frontend structure for Webura website's Teams and Blog pages, designed for team collaboration.

## 👨‍💻 Developer

**Farah Skaik** - Frontend Developer  
Responsible for developing the Teams & Blog sections of the Webura website.

---

## 📂 Project Structure

```
webura/
├── html/                          # HTML Pages Folder
│   ├── teams.html                 # Teams Page
│   └── blog.html                  # Blog Page
│
├── assets/
│   ├── css/
│   │   ├── shared/                # Shared CSS Files
│   │   │   ├── reset.css          # Reset & Base Styles
│   │   │   ├── header.css         # Header Styles
│   │   │   ├── footer.css         # Footer Styles
│   │   │   ├── components.css     # Search Modal, Floating Buttons
│   │   │   └── theme.css          # Light/Dark Theme
│   │   │
│   │   ├── teams.css              # CSS for Teams Page
│   │   └── blog.css               # CSS for Blog Page
│   │
│   └── js/
│       ├── shared/                # Shared JavaScript Files
│       │   ├── header.js          # Header Functionality (Mobile Menu)
│       │   ├── theme.js           # Theme Toggle & Logo Switching
│       │   └── components.js      # Search Modal, Floating Buttons
│       │
│       ├── teams.js               # JavaScript for Teams Page (Testimonials Carousel)
│       └── blog.js                # JavaScript for Blog Page
│
└── img/                           # Images
    ├── darkLogo.png               # Logo for Dark Theme
    └── whiteLogo.png              # Logo for Light Theme
```

## 🎯 Shared Files

### Shared CSS:
- **reset.css**: Reset and base styles
- **header.css**: Header styles with navigation
- **footer.css**: Footer styles
- **components.css**: Search modal and floating buttons
- **theme.css**: Light/dark theme styles

### Shared JavaScript:
- **header.js**: Header functionality (Mobile menu toggle)
- **theme.js**: Light/dark theme toggle with automatic logo switching
- **components.js**: Search modal and floating buttons functionality

## 📄 Page-Specific Files

### Teams Page:
- **teams.css**: Team cards and testimonials styles
- **teams.js**: Testimonials carousel (Auto-play, navigation, swipe support)

### Blog Page:
- **blog.css**: Blog cards styles
- **blog.js**: Blog-specific functionality

## 📝 Usage Guide

### In HTML Files (located in `html/` folder):

```html
<head>
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Shared CSS -->
    <link rel="stylesheet" href="../assets/css/shared/reset.css">
    <link rel="stylesheet" href="../assets/css/shared/header.css">
    <link rel="stylesheet" href="../assets/css/shared/footer.css">
    <link rel="stylesheet" href="../assets/css/shared/components.css">
    <link rel="stylesheet" href="../assets/css/shared/theme.css">
    
    <!-- Page Specific CSS -->
    <link rel="stylesheet" href="../assets/css/teams.css"> <!-- or blog.css -->
</head>

<body>
    <!-- Logo Image (Dark Theme by default) -->
    <img src="../img/darkLogo.png" alt="Webura Logo" id="mainLogo">
    
    <!-- Shared JavaScript -->
    <script src="../assets/js/shared/header.js"></script>
    <script src="../assets/js/shared/theme.js"></script>
    <script src="../assets/js/shared/components.js"></script>
    
    <!-- Page Specific JavaScript -->
    <script src="../assets/js/teams.js"></script> <!-- or blog.js -->
</body>
```

## ✅ Key Features

1. **Organized**: Each file has a clear purpose
2. **Maintainable**: Easy to modify and update
3. **Shared**: Reduces code duplication
4. **Scalable**: Easy to add new pages
5. **Professional**: Unified and easy-to-understand structure
6. **Theme Support**: Light/Dark theme with automatic logo switching

## 🚀 For Other Team Members

When creating new pages (Home, About, Services, Projects):

1. Use the same shared file structure
2. Create a page-specific CSS file in `assets/css/`
3. Create a page-specific JavaScript file in `assets/js/` (if needed)
4. Use the same Header and Footer pattern
5. Place HTML files in the `html/` folder
6. Use `../` prefix for assets paths (CSS, JS, images) since HTML files are in a subfolder
7. Use `darkLogo.png` for dark theme and `whiteLogo.png` for light theme
8. Logo switching is automatic via `theme.js` - just use `id="mainLogo"` and `id="footerLogo"`

## 🎨 Logo Files

- **darkLogo.png**: Used for dark theme (default)
- **whiteLogo.png**: Used for light theme (switches automatically when theme changes)

The theme toggle automatically switches between logos based on the selected theme.

## 📱 Responsive Design

All pages are fully responsive with:
- Mobile-first approach
- Breakpoints: 768px, 1024px
- Touch-friendly interactions
- Swipe support for testimonials carousel

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Custom Properties, Animations
- **JavaScript (ES6+)**: Modern interactive features
- **Font Awesome 6**: Icon library
- **Google Fonts**: Poppins font family

## 📞 Contact

**Webura Team**
- 📧 Email: weburagaza@gmail.com
- 📱 Phone: +970592228451 / +972592228451
- 📍 Location: Gaza City, Palestine

## 👨‍💻 Developer Information

**Developer:** Farah Skaik  
**Role:** Frontend Developer  
**Sections Developed:** Teams & Blog Pages  
**Project:** Webura Website Frontend Development

---

© 2025 Webura. All Rights Reserved  
**Developed by Farah Skaik for Webura Team** ❤️

