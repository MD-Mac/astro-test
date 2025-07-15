// Site-wide configuration that content teams can manage
export const SITE_CONFIG = {
    title: "Rhino Africa SSG",
    description: "A modern travel website built with Astro",
    url: "https://rhinoafrica.com", // Your domain

    // Contact Information
    contact: {
        email: "info@rhinoafrica.com",
        phone: "+27 21 123 4567",
        address: {
            street: "123 Travel Street",
            city: "Cape Town",
            country: "South Africa",
            zipCode: "8001"
        }
    },

    // Social Media Links
    social: {
        twitter: "https://twitter.com/rhinoafrica",
        facebook: "https://facebook.com/rhinoafrica",
        instagram: "https://instagram.com/rhinoafrica",
        linkedin: "https://linkedin.com/company/rhinoafrica",
        youtube: "https://youtube.com/c/rhinoafrica"
    },

    // Navigation Configuration
    navigation: {
        // Primary navigation items
        main: [
            {
                title: "Home",
                href: "/",
                description: "Welcome to Rhino Africa"
            },
            {
                title: "Destinations",
                href: "/destinations/",
                description: "Explore our amazing destinations"
            },
            {
                title: "About Us",
                href: "/about/",
                description: "Learn about our company"
            },
            {
                title: "Blog",
                href: "/blog/",
                description: "Latest travel insights and stories"
            }
        ],

        // Footer navigation
        footer: [
            {
                title: "Company",
                links: [
                    { title: "About Us", href: "/about/" },
                    { title: "Our Team", href: "/team/" },
                    { title: "Careers", href: "/careers/" },
                    { title: "Press", href: "/press/" }
                ]
            },
            {
                title: "Destinations",
                links: [
                    { title: "South Africa", href: "/destinations/south-africa/" },
                    { title: "Kenya", href: "/destinations/kenya/" },
                    { title: "Tanzania", href: "/destinations/tanzania/" },
                    { title: "Botswana", href: "/destinations/botswana/" }
                ]
            },
            {
                title: "Support",
                links: [
                    { title: "Contact Us", href: "/contact/" },
                    { title: "FAQ", href: "/faq/" },
                    { title: "Terms", href: "/terms/" },
                    { title: "Privacy", href: "/privacy/" }
                ]
            }
        ]
    },

    // Default SEO settings
    seo: {
        defaultTitle: "Rhino Africa SSG - Premium Safari Experiences",
        titleTemplate: "%s | Rhino Africa",
        defaultDescription: "Experience the magic of Africa with our bespoke safari adventures. From the Big Five to breathtaking landscapes, create memories that last a lifetime.",
        defaultImage: "/images/rhino-sunset.jpg",
        twitterHandle: "@rhinoafrica"
    },

    // Content settings
    content: {
        postsPerPage: 6,
        showExcerpts: true,
        showReadingTime: true,
        enableComments: false
    }
} as const; 