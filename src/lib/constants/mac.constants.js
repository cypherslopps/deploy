import Icons from "../../components/Icons";

// Macbook Air
import MacBookAirLogo from "../../assets/images/macbookair15_logo.png";
import MacbookAirSmall from "../../assets/images/mackbook_air_small.webp";
import MacbookAirMedium from "../../assets/images/macbook_air_medium.webp";
import MacbookAirLarge from "../../assets/images/macbook_air_large.webp";

// Mackbook studio
import MacBookStudioLogo from "../../assets/svg/mac-studio-2023_logo.png";
import MacbookStudioLarge from "../../assets/images/macbook_air_m2_max_banner_large.avif";
import MacbookStudioMedium from "../../assets/images/macbook_air_m2_max_banner_medium.avif";
import MacbookStudioSmall from "../../assets/images/macbook_air_m2_max_banner_small.avif";

// Macbook 14 & 16
import Macbook14_16Content from "../../assets/images/mac_comp_mbp14_16_large.png";

// Macbook 14 & 16 Features
import ChipM2ProMax from "../../assets/images/chip_m2_pro_max.png";
import ChipM1 from "../../assets/images/chip_m1.png";
import ChipM2 from "../../assets/images/chip_m2.png";
import Memory from "../../assets/images/memory.png";
import Camera from "../../assets/images/camera.png";
import Speaker from "../../assets/images/speaker.png";
import BarId from "../../assets/images/bar_id.png";


export const macChapters = [
    {
        Icon: Icons.ICare,
        title: "iStore Care",
        info: "new",
        href: "istore-care"
    },
    {
        Icon: Icons.StudioDisplay,
        title: "Studio Display",
        href: "/mac/studio-display/buy"
    },
    {
        Icon: Icons.MacPro,
        title: "Mac Pro",
        href: "/mac/macpro/buy"
    },
    {
        Icon: Icons.MacStudio,
        title: "Mac Studio",
        href: "/mac/studio/buy"
    },
    {
        Icon: Icons.MacMini,
        title: "Mac Mini",
        href: "/mac/mini/buy"
    },
    {
        Icon: Icons.MacMini,
        title: "iMac",
        href: "/mac/iMac/buy"
    },
    {
        Icon: Icons.MacbookPro,
        title: "MacBook Pro",
        href: "/mac/macbook-pro/buy"
    },
    {
        Icon: Icons.MacbookAir,
        title: "MacBook Air",
        href: "/mac/macbook-air/buy"
    },
    {
        Icon: Icons.MusicReplacement,
        title: "מחשבים במפרט משודרג",
        href: "/mac/upgraded-mac/buy"
    }
];

export const maBookAirContent = {
    containerClassName: "bg-white pt-0.5 sm:pt-6 md:pt-12 h-max md:h-max pb-0.5 xs:pb-4 sm:pb-6 md:pb-20",
    heading: {
        title: "MacBook Air",
        imageSource: MacBookAirLogo,
        imageSourceSize: "auto 100%",
        headingClassName: "text-2xl sm:text-[1.6rem] text-center sm:text-[2rem] md:text-[2.1rem] xl:leading-[.5] xl:text-[71px]"
    },
    subHeading: {
        title: "Impressively big. Impossibly thin.",
        className: "text-black text-[1.25rem] xxs:text-[1.4rem] xs:text-[1.7rem] sm:text-[1.9rem] mt-3 md:mt-[.18rem] md:text-4xl xl:text-[24px] font-bold mb-0.5"
    },
    pricing: {
        amount: "6,099 ₪",
        content: "החל מ-",
        containerClassName: "mb-8 -mt-0.5",
        className: "text-black text-xl",
        details: {
            content: "או החל מ- 508.25 ₪ / חודש ב-12 תשלומים ללא ריבית.",
            className: "text-xl"
        },
    },
    links: [
        {
            href: "/mac/macbook-air/15-inch",
            title: "לפרטים נוספים",
            variant: "secondary-text",
            className: "md:text-base",
            showIcon: true
        },
        {
            href: "/mac/macbook-air/buy?screen_size=4884",
            title: "לרכישה",
            variant: "secondary",
            className: "md:text-base",
            showIcon: false
        }
    ],
    bannerImageSources: {
        className: "w-[85%] xxs:w-[80%] lg:w-[65%] xl:w-[60%] mt-10 sm:mt-16",
        source290: MacbookAirSmall,
        source670: MacbookAirMedium,
        source780: MacbookAirLarge
    }
}

export const macbookStudioContent = {
    containerClassName: "bg-white md:pt-12 h-max md:h-max pb-0.5 xs:pb-12 sm:pb-16 md:pb-24",
    headline: {
        title: "חדש",
        className: "text-black"
    },
    heading: {
        title: "MacBook Air",
        imageSource: MacBookStudioLogo,
        imageSourceSize: "auto 100%",
        headingClassName: "text-2xl sm:text-[1.6rem] text-center sm:text-[2rem] md:text-[2.1rem] xl:leading-[.5] xl:text-[71px]"
    },
    subHeading: {
        title: " Supercharged by M2 Max and M2 Ultra.",
        className: "text-black text-[1.25rem] xxs:text-[1.4rem] xs:text-[1.7rem] sm:text-[1.9rem] mt-3 md:mt-[.18rem] md:text-4xl xl:text-[24px] font-bold mb-0.5"
    },
    pricing: {
        amount: "9,099 ₪",
        content: "החל מ-",
        containerClassName: "mb-8 -mt-0.5",
        className: "text-black md:text-xl",
        details: {
            content: "או החל מ- 1,516.50 ₪ / חודש ב-6 תשלומים ללא ריבית. ",
            className: "text-xl"
        },
    },
    links: [
        {
            href: "/mac/studio/buy",
            title: "לרכישה",
            variant: "secondary",
            className: "md:text-base py-1.5", 
            showIcon: false
        }
    ],
    bannerImageSources: {
        className: "w-[65%] xxs:w-[55%] lg:w-[40%] xl:w-[36%] mt-10 sm:mt-20",
        source290: MacbookStudioLarge,
        source670: MacbookStudioMedium,
        source780: MacbookStudioSmall
    }
};

export const macTabContent = {
    "ניידים": [
        {
            imageSource: Macbook14_16Content,
            heading: {
                title: "MacBook Air",
            },
            subHeading: "M1 Chip",
            price: "החל מ- 3,999 ₪",
            content: "או החל מ- 3,880 ₪ לסטודנטים*",
            productLink: "/mac/macbook-pro/buy?screen_size=4032",
            colors: ["#7D7E80", "#E3E4E5"],
            links: [
                {
                    title: "לרכישה",
                    href: "/mac/macbook-air/buy?screen_size=2514",
                    variant: "secondary",
                    className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
                },
                {
                    title: "לפרטים נוספים",
                    href: "/mac/macbook-air/15-inch",
                    variant: "secondary-text",
                    className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[13px] leading-[1.33337]",
                    showIcon: true
                }
            ],
            features: [
                {
                    heading: "13.3-inch",
                    subTitle: {
                        title: "תצוגת Retina"
                    }
                },
                {
                    imageSource: ChipM1,
                    subTitle: {
                        title: "שבב Apple M1",
                    },
                },
                {
                    heading: "8-core",
                    subTitle: {
                        title: "מעבד"
                    }
                },
                {
                    headline: "עד",
                    heading: "7-core",
                    subTitle: {
                        title: "מעבד גרפי"
                    }
                },
                {
                    imageSource: Memory,
                    subTitle: {
                        title: "עד 16GB",
                        subTitle: "זכרון"
                    }
                },
                {
                    heading: "2TB",
                    subTitle: {
                        title: "נפח אחסון מקסימלי",
                    }
                },
                {
                    Icon: Icons.Battery,
                    subTitle: {
                        title: "סוללה המחזיקה עד 18 שעות"
                    }
                },
                {
                    imageSource: Camera,
                    subTitle: {
                        title: "מצלמת 720p FaceTime HD"
                    }
                },
                {
                    imageSource: Speaker,
                    subTitle: {
                        title: "מערך 3 מיקרופונים",
                        subTitle: "רמקולים סטריאופונים"
                    }
                },
                {
                    heading: "1.27kg",
                    subTitle: {
                        title: "משקל"
                    }
                },
                {
                    Icon: Icons.TouchID,
                    subTitle: {
                        title: "Touch ID"
                    }
                }
            ]
        },
        {
            imageSource: Macbook14_16Content,
            heading: {
                title: "MacBook Pro",
                subTitle: "14 & 16 inch"
            },
            subHeading: "M2 Pro or M2 Max Chip",
            price: "החל מ- 9,599 ₪",
            content: "או החל מ- 9,312 ₪ לסטודנטים*",
            productLink: "/mac/macbook-pro/buy?screen_size=4032",
            colors: ["#7D7E80", "#E3E4E5"],
            links: [
                {
                    title: "לרכישה",
                    href: "/mac/macbook-pro/buy?screen_size=4032",
                    variant: "secondary",
                    className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
                }
            ],
            features: [
                {
                    heading: "13.6 / 15.2-inch",
                    subTitle: {
                        title: "תצוגת Liquid Retina"
                    }
                },
                {
                    imageSource: ChipM2,
                    subTitle: {
                        title: "שבב Apple M2"
                    },
                },
                {
                    heading: "8-core",
                    subTitle: {
                        title: "מעבד"
                    }
                },
                {
                    headline: "עד",
                    heading: "10-core",
                    subTitle: {
                        title: "מעבד גרפי"
                    }
                },
                {
                    imageSource: Memory,
                    subTitle: {
                        title: "עד 24GB",
                        subTitle: "זכרון"
                    }
                },
                {
                    heading: "2TB",
                    subTitle: {
                        title: "נפח אחסון מקסימלי",
                    }
                },
                {
                    Icon: Icons.Battery,
                    subTitle: {
                        title: "סוללה המחזיקה עד 18 שעות"
                    }
                },
                {
                    imageSource: Camera,
                    subTitle: {
                        title: "מצלמת 1080p FaceTime HD"
                    }
                },
                {
                    imageSource: Speaker,
                    subTitle: {
                        title: "מערך 3 מקרופונים",
                        subTitle: "מערכת סאונד של 4 או 6 רמקולים עם",
                        subTitleContent: "Spatial Audio"
                    }
                },
                {
                    heading: "1.23kg / 1.5kg",
                    subTitle: {
                        title: "משקל"
                    }
                },
                {
                    Icon: Icons.TouchID,
                    subTitle: {
                        title: "Touch ID"
                    }
                }
            ]
        },
        {
            imageSource: Macbook14_16Content,
            heading: {
                title: "MacBook Pro 13",
            },
            price: "החל מ- 6,299 ₪",
            content: "או החל מ- 6,111 ₪ לסטודנטים*",
            productLink: "/mac/macbook-pro/buy",
            colors: ["#7D7E80", "#E3E4E5"],
            links: [
                {
                    title: "לרכישה",
                    href: "/mac/macbook-pro/buy?screen_size=4032",
                    variant: "secondary",
                    className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
                }
            ],
            features: [
                {
                    heading: "13.3-inch",
                    subTitle: {
                        title: "תצוגת Retina"
                    }
                },
                {
                    imageSource: ChipM2,
                    subTitle: {
                        title: "שבב Apple M2",
                    },
                },
                {
                    heading: "8-core",
                    subTitle: {
                        title: "מעבד"
                    }
                },
                {
                    heading: "10-core",
                    subTitle: {
                        title: "מעבד גרפי"
                    }
                },
                {
                    imageSource: Memory,
                    subTitle: {
                        title: "24GB עד",
                        subTitle: "זכרון"
                    }
                },
                {
                    heading: "2TB",
                    subTitle: {
                        title: "נפח אחסון מקסימלי"
                    }
                },
                {
                    Icon: Icons.Battery,
                    subTitle: {
                        title: "סוללה המחזיקה עד 20 שעות"
                    }
                },
                {
                    imageSource: Camera,
                    subTitle: {
                        title: "מצלמת 720p FaceTime HD"
                    }
                },
                {
                    imageSource: Speaker,
                    subTitle: {
                        title: "מערך 3 מקרופונים",
                        subTitle: "באיכות סטודיו",
                        subTitleContent: "רמקולים סטריאופונים עם Spatial Audio"
                    }
                },
                {
                    heading: "1.36kg",
                    subTitle: {
                        title: "משקל"
                    }
                },
                {
                    imageSource: BarId,
                    subTitle: {
                        title: "Touch Bar ו-Touch ID"
                    }
                }
            ]
        },
        {
            imageSource: Macbook14_16Content,
            heading: {
                title: "MacBook Pro",
                subTitle: "14 & 16 inch"
            },
            subHeading: "M2 Pro or M2 Max Chip",
            price: "החל מ- 9,599 ₪",
            content: "או החל מ- 9,312 ₪ לסטודנטים*",
            productLink: "/mac/macbook-pro/buy?screen_size=4032",
            colors: ["#7D7E80", "#E3E4E5"],
            links: [
                {
                    title: "לרכישה",
                    href: "/mac/macbook-pro/buy?screen_size=4032",
                    variant: "secondary",
                    className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
                }
            ],
            features: [
                {
                    heading: "14.2 / 16.2-inch",
                    subTitle: {
                        title: "תצוגת Liquid Retina XDR"
                    }
                },
                {
                    imageSource: ChipM2ProMax,
                    subTitle: {
                        title: "שבב Apple M2 Pro",
                        subTitle: "או Apple M2 Max"
                    },
                },
                {
                    headline: "עד",
                    heading: "12-core",
                    subTitle: {
                        title: "מעבד"
                    }
                },
                {
                    headline: "עד",
                    heading: "38-core",
                    subTitle: {
                        title: "מעבד גרפי"
                    }
                },
                {
                    imageSource: Memory,
                    subTitle: {
                        title: "עד 96GB",
                        subTitle: "זכרון"
                    }
                },
                {
                    Icon: Icons.Battery,
                    subTitle: {
                        title: "סוללה המחזיקה עד 22 שעות"
                    }
                },
                {
                    imageSource: Camera,
                    subTitle: {
                        title: "מצלמת 1080p FaceTime HD"
                    }
                },
                {
                    imageSource: Speaker,
                    subTitle: {
                        title: "מערך 3 מקרופונים",
                        subTitle: "באיכות סטודיו",
                        subTitleContent: "מערכת 6 רמקולים עם Spatial Audio"
                    }
                },
                {
                    heading: "1.59kg / 2.15kg",
                    subTitle: {
                        title: "משקל"
                    }
                },
                {
                    Icon: Icons.TouchID,
                    subTitle: {
                        title: "Touch ID"
                    }
                }
            ]
        },
    ],
    "שולחניים": [
        {
            imageSource: Macbook14_16Content,
            heading: {
                title: "MacBook Pro",
                subTitle: "14 & 16 inch"
            },
            subHeading: "M2 Pro or M2 Max Chip",
            price: "החל מ- 9,599 ₪",
            content: "או החל מ- 9,312 ₪ לסטודנטים*",
            productLink: "/mac/macbook-pro/buy?screen_size=4032",
            colors: ["#7D7E80", "#E3E4E5"],
            links: [
                {
                    title: "לרכישה",
                    href: "/mac/macbook-pro/buy?screen_size=4032",
                    variant: "secondary",
                    className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
                }
            ],
            features: [
                {
                    heading: "14.2 / 16.2-inch",
                    subTitle: {
                        title: "תצוגת Liquid Retina XDR"
                    }
                },
                {
                    imageSource: ChipM2ProMax,
                    subTitle: {
                        title: "שבב Apple M2 Pro",
                        subTitle: "או Apple M2 Max"
                    },
                },
                {
                    headline: "עד",
                    heading: "12-core",
                    subTitle: {
                        title: "מעבד"
                    }
                },
                {
                    headline: "עד",
                    heading: "38-core",
                    subTitle: {
                        title: "מעבד גרפי"
                    }
                },
                {
                    imageSource: Memory,
                    subTitle: {
                        title: "עד 96GB",
                        subTitle: "זכרון"
                    }
                },
                {
                    Icon: Icons.Battery,
                    subTitle: {
                        title: "סוללה המחזיקה עד 22 שעות"
                    }
                },
                {
                    imageSource: Camera,
                    subTitle: {
                        title: "מצלמת 1080p FaceTime HD"
                    }
                },
                {
                    imageSource: Speaker,
                    subTitle: {
                        title: "מערך 3 מקרופונים",
                        subTitle: "באיכות סטודיו",
                        subTitleContent: "מערכת 6 רמקולים עם Spatial Audio"
                    }
                },
                {
                    heading: "1.59kg / 2.15kg",
                    subTitle: {
                        title: "משקל"
                    }
                },
                {
                    Icon: Icons.TouchID,
                    subTitle: {
                        title: "Touch ID"
                    }
                }
            ]
        },
        {
            imageSource: Macbook14_16Content,
            heading: {
                title: "MacBook Pro",
                subTitle: "14 & 16 inch"
            },
            subHeading: "M2 Pro or M2 Max Chip",
            price: "החל מ- 9,599 ₪",
            content: "או החל מ- 9,312 ₪ לסטודנטים*",
            productLink: "/mac/macbook-pro/buy?screen_size=4032",
            colors: ["#7D7E80", "#E3E4E5"],
            links: [
                {
                    title: "לרכישה",
                    href: "/mac/macbook-pro/buy?screen_size=4032",
                    variant: "secondary",
                    className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
                }
            ],
            features: [
                {
                    heading: "14.2 / 16.2-inch",
                    subTitle: {
                        title: "תצוגת Liquid Retina XDR"
                    }
                },
                {
                    imageSource: ChipM2ProMax,
                    subTitle: {
                        title: "שבב Apple M2 Pro",
                        subTitle: "או Apple M2 Max"
                    },
                },
                {
                    headline: "עד",
                    heading: "12-core",
                    subTitle: {
                        title: "מעבד"
                    }
                },
                {
                    headline: "עד",
                    heading: "38-core",
                    subTitle: {
                        title: "מעבד גרפי"
                    }
                },
                {
                    imageSource: Memory,
                    subTitle: {
                        title: "עד 96GB",
                        subTitle: "זכרון"
                    }
                },
                {
                    Icon: Icons.Battery,
                    subTitle: {
                        title: "סוללה המחזיקה עד 22 שעות"
                    }
                },
                {
                    imageSource: Camera,
                    subTitle: {
                        title: "מצלמת 1080p FaceTime HD"
                    }
                },
                {
                    imageSource: Speaker,
                    subTitle: {
                        title: "מערך 3 מקרופונים",
                        subTitle: "באיכות סטודיו",
                        subTitleContent: "מערכת 6 רמקולים עם Spatial Audio"
                    }
                },
                {
                    heading: "1.59kg / 2.15kg",
                    subTitle: {
                        title: "משקל"
                    }
                },
                {
                    Icon: Icons.TouchID,
                    subTitle: {
                        title: "Touch ID"
                    }
                }
            ]
        },
        {
            imageSource: Macbook14_16Content,
            heading: {
                title: "MacBook Pro",
                subTitle: "14 & 16 inch"
            },
            subHeading: "M2 Pro or M2 Max Chip",
            price: "החל מ- 9,599 ₪",
            content: "או החל מ- 9,312 ₪ לסטודנטים*",
            productLink: "/mac/macbook-pro/buy?screen_size=4032",
            colors: ["#7D7E80", "#E3E4E5"],
            links: [
                {
                    title: "לרכישה",
                    href: "/mac/macbook-pro/buy?screen_size=4032",
                    variant: "secondary",
                    className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
                }
            ],
            features: [
                {
                    heading: "14.2 / 16.2-inch",
                    subTitle: {
                        title: "תצוגת Liquid Retina XDR"
                    }
                },
                {
                    imageSource: ChipM2ProMax,
                    subTitle: {
                        title: "שבב Apple M2 Pro",
                        subTitle: "או Apple M2 Max"
                    },
                },
                {
                    headline: "עד",
                    heading: "12-core",
                    subTitle: {
                        title: "מעבד"
                    }
                },
                {
                    headline: "עד",
                    heading: "38-core",
                    subTitle: {
                        title: "מעבד גרפי"
                    }
                },
                {
                    imageSource: Memory,
                    subTitle: {
                        title: "עד 96GB",
                        subTitle: "זכרון"
                    }
                },
                {
                    Icon: Icons.Battery,
                    subTitle: {
                        title: "סוללה המחזיקה עד 22 שעות"
                    }
                },
                {
                    imageSource: Camera,
                    subTitle: {
                        title: "מצלמת 1080p FaceTime HD"
                    }
                },
                {
                    imageSource: Speaker,
                    subTitle: {
                        title: "מערך 3 מקרופונים",
                        subTitle: "באיכות סטודיו",
                        subTitleContent: "מערכת 6 רמקולים עם Spatial Audio"
                    }
                },
                {
                    heading: "1.59kg / 2.15kg",
                    subTitle: {
                        title: "משקל"
                    }
                },
                {
                    Icon: Icons.TouchID,
                    subTitle: {
                        title: "Touch ID"
                    }
                }
            ]
        },
        {
            imageSource: Macbook14_16Content,
            heading: {
                title: "MacBook Pro",
                subTitle: "14 & 16 inch"
            },
            subHeading: "M2 Pro or M2 Max Chip",
            price: "החל מ- 9,599 ₪",
            content: "או החל מ- 9,312 ₪ לסטודנטים*",
            productLink: "/mac/macbook-pro/buy?screen_size=4032",
            colors: ["#7D7E80", "#E3E4E5"],
            links: [
                {
                    title: "לרכישה",
                    href: "/mac/macbook-pro/buy?screen_size=4032",
                    variant: "secondary",
                    className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
                }
            ],
            features: [
                {
                    heading: "14.2 / 16.2-inch",
                    subTitle: {
                        title: "תצוגת Liquid Retina XDR"
                    }
                },
                {
                    imageSource: ChipM2ProMax,
                    subTitle: {
                        title: "שבב Apple M2 Pro",
                        subTitle: "או Apple M2 Max"
                    },
                },
                {
                    headline: "עד",
                    heading: "12-core",
                    subTitle: {
                        title: "מעבד"
                    }
                },
                {
                    headline: "עד",
                    heading: "38-core",
                    subTitle: {
                        title: "מעבד גרפי"
                    }
                },
                {
                    imageSource: Memory,
                    subTitle: {
                        title: "עד 96GB",
                        subTitle: "זכרון"
                    }
                },
                {
                    Icon: Icons.Battery,
                    subTitle: {
                        title: "סוללה המחזיקה עד 22 שעות"
                    }
                },
                {
                    imageSource: Camera,
                    subTitle: {
                        title: "מצלמת 1080p FaceTime HD"
                    }
                },
                {
                    imageSource: Speaker,
                    subTitle: {
                        title: "מערך 3 מקרופונים",
                        subTitle: "באיכות סטודיו",
                        subTitleContent: "מערכת 6 רמקולים עם Spatial Audio"
                    }
                },
                {
                    heading: "1.59kg / 2.15kg",
                    subTitle: {
                        title: "משקל"
                    }
                },
                {
                    Icon: Icons.TouchID,
                    subTitle: {
                        title: "Touch ID"
                    }
                }
            ]
        }
    ]
};

export const macIStoreList = [
    {
        Icon: Icons.PaymentCard,
        heading: "מגוון אפשרויות תשלום",
        content: "על-מנת להקל על המעבר עוד יותר באפשרותכם לשלם במגוון דרכים. עד 36 תשלומים בכרטיס אשראי. תשלום באמצעות Apple Pay. אפשרות להוראת קבע ללא תפיסת מסגרת (בסניפי הרשת) ותשלום מחוץ למסגרת האשראי באמצעות Blender."
    },
    {
        Icon: Icons.Chair,
        heading: "iStore Academy",
        content: "מערך הדרכות שיעזור לכם להכיר את מחשבי ה-Mac בצורה הטובה ביותר, החל בצעדים ראשונים ועד פתרונות של איך תוכלו להפיק ממנו את המירב.",
        links: [
            {
                title: "לפרטים נוספים",
                href: "/academy",
                variant: "secondary-text",
                showIcon: true,
                className: "md:text-base px-0"
            }
        ]
    },
    {
        Icon: Icons.MonthTrial,
        heading: "חודש התנסות ללא התחייבות",
        content: "זו ההזדמנות שלכם לחוות את עולם ה-Mac ולהבין עד כמה הוא ישפר את חייכם! לא התחברתם? תחזירו - אבל אנחנו מבטיחים לכם שלא תרצו.",
        info: "מותנה בהשתתפות בלפחות 2 הדרכות Mac ב-Academy וללא כל נזק קוסמטי או פיזי | ההטבה הינה לסטודנטים בלבד."
    },
    {
        Icon: Icons.AppleLab,
        heading: "מעבדת Apple רשמית",
        content: "המעבדות של iStore הינן מעבדות שהוכשרו ע״י Apple לתקן ולהחליף את המכשירים תוך שימוש בחלפים מקוריים ובזמני טיפול קצרים.",
        links: [
            {
                title: "לפרטים נוספים",
                href: "/מעבדה",
                variant: "secondary-text",
                showIcon: true,
                className: "md:text-base px-0"
            }
        ]
    },
    {
        Icon: Icons.Recycle,
        heading: "תוכנית Trade-in משתלמת",
        content: "אותן תוכנות ה-Office האהובות עובדות על גבי ה-Mac עם תמיכה מלאה בעברית במחיר של החל מ- 299.90 ₪.",
        links: [
            {
                title: "לפרטים נוספים",
                href: "/trade-in",
                variant: "secondary-text",
                showIcon: true,
                className: "md:text-base px-0"
            }
        ]
    },
    {
        Icon: Icons.Microsoft365,
        heading: "Microsoft 365",
        content: "מגיעים עם מחשבי PC או Mac ישנים ומקבלים עליהם זיכוי כספי לרכישת ה-Mac החדש!"
    }
];