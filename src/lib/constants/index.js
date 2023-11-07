import Icons from "../../components/Icons";

export const navigationLinks = [
    {
        title: "Contact",
        name: "contact",
        route: "/contact"
    },
    {
        title: "Business",
        name: "business",
        route: "/לקוחות-עסקיים"
    },
    {
        title: "מעבדה",
        name: "laboratory",
        route: "/מעבדה"
    },
    {
        title: "אביזרים",
        name: "accessories",
        route: "/אביזרים"
    },
    {
        title: "Airpods & Beats",
        name: "music",
        route: "/music"
    },
    {
        title: "Mac",
        name: "mac",
        route: "/mac"
    },
    {
        title: "Trade-In",
        name: "trade-in",
        route: "/trade-in"
    },
    {
        title: "TV",
        name: "tv",
        route: "/tv"
    },
    {
        title: "Watch",
        name: "watch",
        route: "/watch"
    },
    {
        title: "Ipad",
        name: "ipad",
        route: "/ipad"
    },
    {
        title: "Iphone",
        name: "iphone",
        route: "/iphone"
    },
];

export const footerLinks = {
    "תמיכה ושירות": [
        {
            title: "whatsapp",
            href: "https://api.whatsapp.com/send/?phone=972732130507",
            Icon: Icons.Whatsapp
        },
        {
            title: "facebook",
            href: "https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F198792682058%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink",
            Icon: Icons.Facebook
        },
        {
            title: "073-2130507",
            href: "tel:073-2130507",
            Icon: Icons.Phone
        },
        {
            title: "לרשימת הסניפים ושעות הפתיחה",
            href: "",
            Icon: Icons.Clock,
            className: "font-bold text-[.82rem]"
        }
    ],
    iSupport: [
        {
            title: "מעבדת iStore",
            href: "/מעבדה",
            className: "text-[.8rem]"
        },
        {
            title: "סדנאות והדרכות",
            href: "/academy",
            className: "text-[.8rem]"
        },
        {
            title: "תמיכה",
            href: "/מעבדה/support",
            className: "text-[.8rem]"
        },
        {
            title: "תנאי אחריות - iStore",
            href: "/warranty",
            className: "text-[.8rem]",
            props: {
                title: "iStore Warranty"
            }
        },
        {
            title: "תנאי אחריות - Apple",
            href: "http://bit.ly/iS-AppleWarranty",
            className: "text-[.8rem]",
            props: {
                title: "Apple Warranty",
                target: "_blank" 
            }
        },
        {
            subLinks: {
                "שוברי מתנה": [
                    {
                        title: "BuyMe",
                        href: "/BuyMe",
                        className: "text-[.8rem]"
                    },
                ]
            }
        }
    ], 
    "מידע": [
        {
            title: "Newsroom",
            href: "/newsroom",
            className: "text-[.8rem]",
            props: {
                title: "Newsroom"
            }
        },
        {
            title: "יתרונות לרכישה",
            href: "/purchase",
            className: "text-[.8rem]",
            props: {
                title: "יתרונות לרכישה"
            }
        },
        {
            title: "מדיניות משלוחים והחזרות",
            href: "/regulations",
            className: "text-[.8rem]",
            props: {
                title: "מדיניות משלוחים והחזרות"
            }
        },
        {
            title: "מאמרים",
            href: "/articles",
            className: "text-[.8rem]"
        },
        {
            title: "סטודנטים",
            href: "/student-program",
            className: "text-[.8rem]"
        },
        {
            title: "עסקים",
            href: "/לקוחות-עסקיים",
            className: "text-[.8rem]",
            props: {
                title: "Newsroom"
            }
        },
    ],
    "iStore": [
        {
            title: "אודות",
            href: "/about",
            className: "text-[.8rem]",
            props: {
                title: "אודות"
            }
        },
        {
            title: "ביטול בקליק",
            href: "/order-cancel",
            className: "text-[.8rem]"
        },
        {
            title: "בלעדי ב-Telegram",
            href: "https://bit.ly/43z5kOs",
            className: "text-[.8rem]",
            props: {
                title: "מבצעים בלעדיים ב-Telegram"
            }
        },
        {
            title: "דרושים",
            href: "/careers",
            className: "text-[.8rem]",
            props: {
                title: "דרושים"
            }
        },
        {
            title: "עודפים",
            href: "/clearance",
            className: "text-[.8rem]"
        },
        {
            title: "פינת המציאות",
            href: "/refurbish",
            className: "text-[.8rem]"
        },
        {
            title: "שירות לקוחות",
            href: "/שירות-לקוחות",
            className: "text-[.8rem]"
        },
        {
            title: "תקנון",
            href: "/regulations",
            className: "text-[.8rem]"
        },
    ]
};

export const footerSocials = [
    {
        Icon: Icons.Emun,
        href: "http://www.emun.org/",
        props: {
            title: "אמון הציבור",
            target: "_blank"
        }
    },
    {
        Icon: Icons.Facebook2,
        href: "https://www.facebook.com/iStoreil/",
        props: {
            target: "_blank"
        }
    },
    {
        Icon: Icons.Instagram,
        href: "https://www.instagram.com/istoreil/",
        props: {
            target: "_blank"
        }
    }
];

export const whatsappLink = "https://api.whatsapp.com/send?phone=972732130507";
export const companyPhoneLine = "0732130507";
export const companyPhoneLine2 = "033762915";