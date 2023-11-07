import { Icons } from "../../components";

// iPhone15 PRO 
import IPhone15ProImage from "../../assets/svg/ip15pro.svg";
import IPhone15Pro290 from "../../assets/images/w_290.webp"; 
import IPhone15Pro670 from "../../assets/images/w_670.webp";
import IPhone15Pro780 from "../../assets/images/w_780.webp";

import IphoneSE from "../../assets/images/iphone_se_banner_desktop.avif";
import Iphone13 from "../../assets/images/iphone13_banner_desktop.avif";
import Iphone14 from "../../assets/images/iphone14_banner_desktop.avif";
import Iphone14Pro from "../../assets/images/iphone14_pro_banner_desktop.avif";

// Macbook 14 & 16 Features
import ChipM1 from "../../assets/images/chip_m1.png";
import Memory from "../../assets/images/memory.png";
import Camera from "../../assets/images/camera.png";
import Speaker from "../../assets/images/speaker.png";

export const IphoneChapters = [
    {
        Icon: Icons.ICare,
        title: "iStore Care",
        info: "new",
        href: "istore-care"
    },
    {
        Icon: Icons.IphoneAccessories,
        title: "אביזרים",
        href: "/אביזרים/אביזרים-לפי/iphone"
    },
    {
        Icon: Icons.AirTag,
        title: "AirTag",
        href: "/iphone/airtag"
    },
    {
        Icon: Icons.Iphone11,
        title: "iPhone 11",
        href: "/iPhone-11-Info"
    },
    {
        Icon: Icons.IphoneSE,
        title: "IPhone SE",
        href: "/iphone/se"
    },
    {
        Icon: Icons.Iphone12,
        title: "IPhone 12",
        href: "/info/iphone/12"
    },
    {
        Icon: Icons.Iphone13Mini,
        title: "iPhone 13 ",
        subTitle: "iPhone 13 mini",
        href: "/iphone/iphone-13"
    },
    {
        Icon: Icons.AppleSerie9,
        title: "Apple Watch",
        subTitle: "Series 9",
        info: "new",
        href: "/אביזרים/אביזרים-לפי/Watch"
    },
    {
        Icon: Icons.AppleWatchUltra,
        title: "Apple Watch",
        subTitle: "Ultra",
        href: "/אביזרים/אביזרים-לפי/Watch"
    },
    {
        Icon: Icons.AppleWatchUltra2,
        title: "Apple Watch",
        subTitle: "Ultra 2",
        info: "new",
        href: "/אביזרים/אביזרים-לפי/Watch"
    },
];

export const IPhone15ProContent = {
    containerClassName: "bg-black pt-[70px] md:h-[790px]",
    headline: {
        title: "חדש",
        className: "text-[#6e6e73] -mb-[.3rem]"
    },
    heading: {
        title: "iPhone 15 Pro",
        subTitle: "Sub Title",
        imageSource: IPhone15ProImage,
        headingClassName: "",
        imageSourceSize: "175px 22px"
    },
    subHeading: {
        title: "So strong. So light. So Pro.",
        className: "text-white xl:text-[45px] leading-[1.28349] font-semibold -tracking-[.0252em pt-[3px] pb-[5.5px] direction-ltr"
    },
    pricing: {
        amount: "5,299",
        content: "₪ החל מ-",
        containerClassName: "mb-7 mt-0",
        className: "text-white md:text-[19px] leading-[1.381] tracking-[.011] direction-ltr",
        details: {
            content: "או החל מ- 904.83 ₪ / חודש ב-6 תשלומים ללא ריבית.",
            className: "text-white md:text-[19px] leading-[1.381] tracking-[.011]"
        },
    },
    info: {
        title: "הטבה - קנו iPhone וקבלו שובר מתנה בשווי 100 ₪ עם הגעתו!",
        className: "xl:text-[.83rem] xl:mt-[1.8em]"
    },
    rearrangePricingPosition: true,
    links: [
        {
            href: "/iphone/iphone-15-pro",
            title: "לפרטים נוספים",
            variant: "secondary-text",
            className: "xl:text-base",
            showIcon: true
        },
        {
            href: "/iPhone/apple-iphone-15-pro",
            title: "לרכישה",
            variant: "secondary",
            className: "xl:text-base pt-[5px] px-[18px] pb-[4px]",
        }
    ],
    bannerImageSources: {
        source290: IPhone15Pro290,
        source670: IPhone15Pro780,
        source780: IPhone15Pro670,
            className: "mt-6 xl:w-[60%]"
    }
};

export const iphoneGalleryList = [
    {
        imageSource: Iphone14Pro,
        heading: {
            title: "iPhone 14 Pro",
        },
        subHeading: {
            title: "All Systems Pro.",
            className: "w-[76.5%] min-h-[42px] direction-ltr text-[17px] -tracking-[.022em] leading-[21px] mt-[6px]"
        },    
        price: "החל מ- 4,829 ₪",
        productLink: "/iphone/apple-iphone-14-pro-and-iphone-14-pro-max",
        colors: ["#594F63", "#F4E8CE", "#F0F2F2", "#403E3D"],
        links: [
            {
                title: "לרכישה",
                href: "/iphone/apple-iphone-14-pro-and-iphone-14-pro-max",
                variant: "secondary",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
            },
        ],
        features: [
            {
                heading: "4.7 אינץ׳",
                subTitle: {
                    title: "תצוגת Retina HD"
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
        imageSource: Iphone14,
        heading: {
            title: "iPhone 14",
        },
        subHeading: {
            title: "Full of fantastic features.",
            className: "w-[76.5%] min-h-[42px] direction-ltr text-[17px] -tracking-[.022em] leading-[21px] mt-[6px]"
        },    
        price: "החל מ- 3,779 ₪",
        productLink: "/iphone/apple-iphone-14-and-iphone-14-plus",
        colors: ["#A0B4C7", "#E6DDEB", "#F9E479", "#FC0324", "#FAF6F2", "#222930"],
        links: [
            {
                title: "לרכישה",
                href: "/iphone/apple-iphone-14-and-iphone-14-plus",
                variant: "secondary",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
            }
        ],
        features: [
            {
                heading: "4.7 אינץ׳",
                subTitle: {
                    title: "תצוגת Retina HD"
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
        imageSource: Iphone13,
        heading: {
            title: "iPhone 13",
        },
        subHeading: {
            title: "Your new superpower.",
            className: "w-[76.5%] min-h-[42px] direction-ltr text-[17px] -tracking-[.022em] leading-[21px] mt-[6px]"
        },    
        price: "החל מ- 3,229 ₪",
        productLink: "/iphone/iphone-13",
        colors: ["#394C38", "#FADDD7", "#276787", "#BF0013", "#FAF6F2", "#232A31"],
        links: [
            {
                title: "לרכישה",
                href: "/iphone/apple-iphone-13-and-iphone-13-mini",
                variant: "secondary",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
            },
            {
                title: "לפרטים נוספים",
                href: "/iphone/iphone-13",
                variant: "secondary-text",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[13px] leading-[1.33337]",
                showIcon: true
            }
        ],
        features: [
            {
                heading: "4.7 אינץ׳",
                subTitle: {
                    title: "תצוגת Retina HD"
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
        imageSource: IphoneSE,
        heading: {
            title: "iPhone SE",
        },
        subHeading: {
            title: "Love the power. Love the price.",
            className: "w-[76.5%] min-h-[42px] direction-ltr text-[17px] -tracking-[.022em] leading-[21px] mt-[6px]"
        },    
        price: "החל מ- 2,249 ₪",
        productLink: "/iphone/se",
        colors: ["#BF0013", "#FAF6F2", "#232A31"],
        links: [
            {
                title: "לרכישה",
                href: "/iphone/iphone-se-2022-3rd-generation",
                variant: "secondary",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
            },
            {
                title: "לפרטים נוספים",
                href: "/iphone/se",
                variant: "secondary-text",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[13px] leading-[1.33337]",
                showIcon: true
            }
        ],
        features: [
            {
                heading: "4.7 אינץ׳",
                subTitle: {
                    title: "תצוגת Retina HD"
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
];

// export const 