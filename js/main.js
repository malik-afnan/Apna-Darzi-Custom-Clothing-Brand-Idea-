// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Product Detail Page - Load product data based on ID
    if (window.location.pathname.includes('product-detail.html')) {
        loadProductData();
        setupProductForm();
    }

    // Shop Page - Category Filter
    if (window.location.pathname.includes('shop.html')) {
        setupCategoryFilter();
    }

    // Custom Order Form
    if (window.location.pathname.includes('custom-order.html')) {
        setupCustomOrderForm();
    }

    // Contact Form
    if (window.location.pathname.includes('contact.html')) {
        setupContactForm();
    }
});

// Product Data
const products = {
    1: {
        name: "Men's Shalwar Kameez",
        description: "Traditional and elegant shalwar kameez with modern fit. Perfect for everyday wear and special occasions.",
        fabric: "Premium cotton fabric available in various colors.",
        image: "https://via.placeholder.com/500x600/8B4513/FFFFFF?text=Men%27s+Shalwar+Kameez"
    },
    2: {
        name: "Women's Formal Dress",
        description: "Elegant formal dress perfect for parties, weddings, and special events. Customizable design and fit.",
        fabric: "High-quality fabric with beautiful patterns and colors.",
        image: "https://via.placeholder.com/500x600/FF69B4/FFFFFF?text=Women%27s+Formal+Dress"
    },
    3: {
        name: "Women's Casual Dress",
        description: "Comfortable and stylish casual dress for everyday wear. Lightweight and breathable fabric.",
        fabric: "Soft cotton blend for maximum comfort.",
        image: "https://via.placeholder.com/500x600/4169E1/FFFFFF?text=Women%27s+Casual+Dress"
    },
    4: {
        name: "Men's Formal Wear",
        description: "Professional and stylish formal shalwar kameez. Perfect for office and formal events.",
        fabric: "Premium fabric with professional finish.",
        image: "https://via.placeholder.com/500x600/228B22/FFFFFF?text=Men%27s+Formal+Wear"
    },
    5: {
        name: "Men's Casual Shalwar Kameez",
        description: "Comfortable everyday wear with traditional design.",
        fabric: "Soft cotton fabric.",
        image: "https://via.placeholder.com/500x600/2F4F4F/FFFFFF?text=Men%27s+Casual+Wear"
    },
    6: {
        name: "Women's Party Wear",
        description: "Stand out at any celebration with this beautiful party wear dress.",
        fabric: "Luxurious fabric with elegant designs.",
        image: "https://via.placeholder.com/500x600/FF1493/FFFFFF?text=Women%27s+Party+Wear"
    },
    7: {
        name: "Women's Traditional Dress",
        description: "Classic Pakistani traditional designs with modern comfort.",
        fabric: "Traditional fabrics with beautiful patterns.",
        image: "https://via.placeholder.com/500x600/DA70D6/FFFFFF?text=Women%27s+Traditional"
    },
    8: {
        name: "Women's Designer Dress",
        description: "Unique and fashionable designer dress tailored to your style.",
        fabric: "Premium designer fabric.",
        image: "https://via.placeholder.com/500x600/C71585/FFFFFF?text=Women%27s+Designer"
    }
};

// Load Product Data
function loadProductData() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (productId && products[productId]) {
        const product = products[productId];
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productFabric').textContent = product.fabric;
        document.getElementById('productImage').src = product.image;
        document.getElementById('productImage').alt = product.name;
    }
}

// Setup Product Form
function setupProductForm() {
    const form = document.getElementById('customizationForm');
    const sizeTypeRadios = document.querySelectorAll('input[name="sizeType"]');
    const standardSizeGroup = document.getElementById('standardSizeGroup');
    const customMeasurementsGroup = document.getElementById('customMeasurementsGroup');

    // Toggle between standard and custom measurements
    sizeTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'standard') {
                standardSizeGroup.style.display = 'block';
                customMeasurementsGroup.style.display = 'none';
                // Clear custom measurements
                document.querySelectorAll('#customMeasurementsGroup input').forEach(input => {
                    input.value = '';
                });
            } else {
                standardSizeGroup.style.display = 'none';
                customMeasurementsGroup.style.display = 'block';
                // Clear standard size
                document.getElementById('standardSize').value = '';
            }
        });
    });

    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            const sizeType = document.querySelector('input[name="sizeType"]:checked').value;
            if (sizeType === 'standard') {
                const standardSize = document.getElementById('standardSize').value;
                if (!standardSize) {
                    alert('Please select a standard size');
                    return;
                }
            } else {
                const measurements = ['chest', 'waist', 'shoulder', 'sleeveLength', 'shirtLength', 'trouserLength'];
                let hasMeasurement = false;
                measurements.forEach(id => {
                    if (document.getElementById(id).value) {
                        hasMeasurement = true;
                    }
                });
                if (!hasMeasurement) {
                    alert('Please enter at least one measurement');
                    return;
                }
            }

            const color = document.getElementById('color').value;
            if (!color) {
                alert('Please select a color');
                return;
            }

            // Show success modal
            showSuccessModal();
            form.reset();
        });
    }
}

// Setup Category Filter
function setupCategoryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            // Filter products
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Setup Custom Order Form
function setupCustomOrderForm() {
    const form = document.getElementById('customOrderForm');
    const measurementRadios = document.querySelectorAll('input[name="measurementOption"]');
    const measurementsGroup = document.getElementById('measurementsGroup');

    // Toggle measurements
    measurementRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'enter') {
                measurementsGroup.style.display = 'block';
            } else {
                measurementsGroup.style.display = 'none';
                // Clear measurements
                document.querySelectorAll('#measurementsGroup input').forEach(input => {
                    input.value = '';
                });
            }
        });
    });

    // Form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const stitchingStyle = document.getElementById('stitchingStyle').value;
            if (!stitchingStyle.trim()) {
                alert('Please describe your stitching style');
                return;
            }

            // Show success modal
            showSuccessModal();
            form.reset();
        });
    }
}

// Setup Contact Form
function setupContactForm() {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success modal
            showSuccessModal();
            form.reset();
        });
    }
}

// Show Success Modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with X button
document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });
});


