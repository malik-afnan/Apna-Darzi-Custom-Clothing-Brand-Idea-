# Website Requirements Document
## Project Name: ApnaDarzi.pk (Apna Darzi Pakistan)

---

## 1. Project Overview

**ApnaDarzi.pk** is an online customized clothing platform based in Pakistan. The website allows customers to order custom-stitched clothes, including:

- **Men's Shalwar Kameez** - Traditional and modern designs
- **Women's Custom Dresses** - Formal, casual, party wear, and more

### Ordering Options:
1. **Select from Ready-Made Designs** - Browse our collection and customize measurements
2. **100% Custom Orders** - Choose fabric color, design details, and upload reference images

The website is designed to be very simple, clean, modern, and easy to use, even for non-technical users.

---

## 2. Website Goals

- Make custom clothing ordering easy and stress-free
- Allow customers to submit measurements online
- Enable custom design uploads
- Build trust with a clean and professional look
- Keep navigation simple and minimal

---

## 3. Target Audience

- Pakistani customers (men & women)
- People who want custom-fit clothing
- Users with basic internet knowledge
- Mobile and desktop users

---

## 4. Design & UI Requirements

- **Minimal and elegant design**
- **Modern Pakistani fashion feel**
- **Easy navigation**
- **Clean fonts**
- **Light background** with traditional yet modern colors
- **Fully responsive** (mobile, tablet, desktop)
- **Very simple forms** (no complex steps)

---

## 5. Website Pages & Features

### 5.1 Homepage

**Purpose:** First impression & quick access

**Features:**
- Logo: ApnaDarzi.pk
- Short tagline: "Your Personal Tailor, Online"
- Featured dress listings (men & women)
- Buttons: "Shop Now" and "Custom Order"
- Brief explanation of how it works (3 steps)
- Trust section (quality stitching, custom fit, Pakistan-based)
- Footer with contact info and links

### 5.2 Header / Top Navigation Menu

**Appears on every page**

**Menu Items:**
- Home
- Shop
- Custom Order
- About Us
- Contact Us

### 5.3 Shop Page

**Purpose:** Display all available dress designs

**Features:**
- Grid listing of all dresses
- Categories:
  - Men (Shalwar Kameez)
  - Women (Custom Dresses)
- Each product card shows:
  - Dress image
  - Dress name
  - "Customize & Order" button

### 5.4 Product Detail Page (Dress Customization Page)

**This is a very important page.** When a user clicks a dress, they are taken to this page.

**Page includes:**
- Large dress image
- Dress description
- Fabric details (optional)
- **Customization form:**
  - **Size type:**
    - Standard size (S, M, L, XL)
    - Custom measurements
  - **Measurement fields:**
    - Chest
    - Waist
    - Shoulder
    - Sleeve length
    - Shirt length
    - Trouser length
  - Color selection (dropdown)
  - Additional notes field
  - Upload reference image (optional)
  - Customer information fields (Name, Email, Phone)
  - Submit order button

### 5.5 Custom Order Page (100% Custom Design)

**Purpose:** Full freedom for customers

**Features:**
- Describe their dream outfit
- **Form fields:**
  - Name
  - Email
  - Phone number
  - Gender selection
  - Dress type (Men / Women)
  - Fabric color preference
  - Stitching style description (text box)
  - Budget range (optional)
  - Upload images or design references
  - Measurement option:
    - Enter measurements
    - Or request tailor assistance
  - Submit request button
- **After submission:** Message shown: "Thank you! Our team will contact you shortly."

### 5.6 About Us Page

**Purpose:** Build trust

**Content includes:**
- Who we are
- Mission of ApnaDarzi.pk
- Focus on custom stitching & quality
- Pakistan-based tailoring service
- Customer-first approach

### 5.7 Contact Us Page

**Purpose:** Easy communication

**Features:**
- Contact form:
  - Name
  - Email
  - Message
- Email address
- WhatsApp number (optional)
- Simple map or location text (Pakistan)

---

## 6. Footer Requirements

**Appears on all pages and includes:**
- Website name
- Short slogan
- Quick links
- Contact details
- Copyright text

---

## 7. Functional Requirements

- All forms must be simple and user-friendly
- Image upload must be supported
- Website should be fast
- No unnecessary popups
- Simple confirmation messages
- Form validation for required fields

---

## 8. Content Tone & Style

- Simple English
- Friendly and human
- Easy to understand
- Not robotic
- Short sentences

---

## 9. Technical Implementation

### Technologies Used:
- **HTML5** - Structure and content
- **CSS3** - Styling and responsive design
- **JavaScript** - Form handling and interactivity

### Features Implemented:
- Responsive design for all devices
- Form validation
- Modal popups for success messages
- Category filtering on shop page
- Dynamic product loading
- Mobile-friendly navigation

### File Structure:
```
/
├── index.html (Homepage)
├── shop.html (Shop page)
├── product-detail.html (Product customization)
├── custom-order.html (100% custom orders)
├── about.html (About Us)
├── contact.html (Contact Us)
├── css/
│   └── style.css (Main stylesheet)
└── js/
    └── main.js (JavaScript functionality)
```

---

## 10. Implementation Status

✅ **Completed Features:**
- All 6 pages created and functional
- Responsive design implemented
- Forms with validation
- Product catalog with filtering
- Customization forms
- Success modals
- Mobile navigation
- Footer on all pages
- Clean, modern design

---

## 11. Future Enhancements (Optional)

- Backend integration for order processing
- Payment gateway integration
- User accounts and order tracking
- Email notifications
- Admin dashboard
- Product image gallery
- Customer reviews

---