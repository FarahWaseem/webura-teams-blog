# 📁 Webura Website - Frontend Development

Professional and organized frontend structure for Webura website. Currently includes Home Page, Teams Page, and Blog Pages with modern design and full responsiveness.

**⚠️ Work in Progress:** Additional pages (About-us, Services, Projects, FQA) are still under development.

## 🌐 Live Demo

**🔗 Demo Link:** [https://farahwaseem.github.io/webura-teams-blog/](https://farahwaseem.github.io/webura-teams-blog/)


## 👨‍💻 Developers

**Webura Team** - Frontend Development  
Developing website with modern UI/UX design, responsive layout, and interactive features.

### Completed Pages:
- ✅ Home Page (index.html)
- ✅ Teams Page (html/teams.html)
- ✅ Blog Page (html/blog.html)
- ✅ Blog Details Page (html/blog-details.html)

### Pages Under Development:
- 🚧 About-us Page
- 🚧 Services Page
- 🚧 Projects Page
- 🚧 FQA (FAQ) Page

---

## 📂 Project Structure

```
webura/
├── index.html                     # Home Page
├── html/                          # HTML Pages Folder
│   ├── teams.html                 # Teams Page
│   ├── blog.html                  # Blog Page
│   └── blog-details.html          # Blog Details Page
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
│   │   ├── home.css                # CSS for Home Page
│   │   ├── teams.css               # CSS for Teams Page
│   │   ├── blog.css                # CSS for Blog Page
│   │   └── blog-details.css        # CSS for Blog Details Page
│   │
│   └── js/
│       ├── shared/                # Shared JavaScript Files
│       │   ├── header.js          # Header Functionality (Mobile Menu)
│       │   ├── theme.js           # Theme Toggle & Logo Switching
│       │   └── components.js      # Search Modal, Floating Buttons
│       │
│       ├── home.js                 # JavaScript for Home Page
│       ├── teams.js                # JavaScript for Teams Page (Testimonials Carousel)
│       ├── blog.js                 # JavaScript for Blog Page
│       └── blog-details.js         # JavaScript for Blog Details Page
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

### Home Page:
- **home.css**: Hero section, services, features, stats, process, blog preview, CTA, and contact form styles
- **home.js**: Home page functionality including stats counter, contact form validation

### Teams Page:
- **teams.css**: Team cards and testimonials styles
- **teams.js**: Testimonials carousel (Auto-play, navigation, swipe support)

### Blog Page:
- **blog.css**: Blog cards and grid styles
- **blog.js**: Blog-specific functionality

### Blog Details Page:
- **blog-details.css**: Blog article layout and styling
- **blog-details.js**: Blog post content and dynamic loading

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
7. **Responsive Design**: Fully responsive across all devices
8. **Modern UI/UX**: Beautiful gradients, animations, and hover effects
9. **Interactive Elements**: Contact forms, search modals, floating buttons
10. **SEO Optimized**: Semantic HTML and proper meta tags

## 🚀 Project Structure

### Completed Pages:

#### Home Page (index.html):
- Hero Section with animated elements
- Services Section (6 service cards)
- Core Features Section (6 feature cards)
- Features Section (Why Choose Us)
- Stats Section (animated counters)
- Process Section (Agile Process - 3 steps)
- Blog Preview Section (latest articles)
- CTA Section
- Contact Form Section with validation

#### Teams Page (html/teams.html):
- Team members showcase
- Testimonials carousel

#### Blog Page (html/blog.html):
- Blog posts grid
- Blog categories and filters

#### Blog Details Page (html/blog-details.html):
- Full blog article layout
- Dynamic content loading

### Navigation (Ready):
- ✅ Home (Completed)
- 🚧 About-us (Under Development)
- 🚧 Services (Under Development)
- 🚧 Project (Under Development)
- 🚧 FQA (Under Development)
- ✅ Teams (Completed)
- ✅ Blog (Completed)

### Header Features:
- Responsive navigation with mobile menu
- Search modal
- Theme toggle (Light/Dark)
- Contact Us button

### Footer Features:
- Company information
- Products links
- Useful links
- Contact information (Location, Email, Phone, Fax)
- Social media links

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

## 📝 Recent Updates

### Latest Changes (Home Page):
- ✅ Added Core Features Section (6 feature cards)
- ✅ Added Process Section (Agile Process - 3 steps)
- ✅ Updated Hero Section to match original design
- ✅ Updated Navigation (Added FQA, renamed links)
- ✅ Fixed Footer contact information (separated Phone and Fax)
- ✅ Updated Contact Section with proper phone/fax separation
- ✅ All existing pages now have consistent navigation

### Note:
Navigation links for About-us, Services, Projects, and FQA are ready but pages are still under development by other team members.

## 🚀 Getting Started

### Clone the Repository:
```bash
git clone https://github.com/your-username/webura.git
cd webura
```

### Open in Browser:
Simply open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

## 📞 Contact

**Webura Team**
- 📧 Email: weburagaza@gmail.com
- 📱 Phone: +970592228451
- 📠 Fax: +972592228451
- 📍 Location: Webura, Gaza City, Palestine

---

© 2025 Webura. All Rights Reserved  
**Developed by Webura Team** ❤️

