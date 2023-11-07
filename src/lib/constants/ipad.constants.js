import { Icons } from "../../components";
import IPadProImage from "../../assets/images/ipad-comp_pro.png";
import IPadAirImage from "../../assets/images/ipad-comp_air.png";
import IPad10GenerationImage from "../../assets/images/ipad-comp_10th.png";
import Ipad9GenerationImage from "../../assets/images/ipad-comp_9th.png";
import IpadMiniImage from "../../assets/images/ipad-comp_mini.png";


export const ipadChapters = [
    {
        Icon: Icons.ICare,
        title: "iStore Care",
        info: "new",
        href: "/istore-care"
    },
    {
        Icon: Icons.IPadAccessories,
        title: "אביזרים",
        href: "/אביזרים/אביזרים-לפי/iPad"
    },
    {
        Icon: Icons.IPadClearance,
        title: "עודפים",
        href: "/clearance/watch?dir=asc&order=price"
    },
    {
        Icon: Icons.IPadMini,
        title: "iPad mini",
        href: "/ipad/apple-ipad-mini-6th-gen"
    },
    {
        Icon: Icons.Ipad9Generation,
        title: "iPad (9th Gen.)",
        href: "/iPad/apple-ipad-10-2-9th-generation"
    },
    {
        Icon: Icons.IPad10Generation,
        title: "iPad (10th Gen.)",
        href: "/iPad/apple-ipad-10th-generation"
    },
    {
        Icon: Icons.IPadAir,
        title: "iPad Air",
        href: "ipad/air"
    },
    {
        Icon: Icons.IPadPro,
        title: "iPad Pro",
        href: "/אביזרים/אביזרים-לפי/watch"
    },
];

export const ipadGalleryList = [
    {
        imageSource: IPadProImage,
        heading: {
            title: "iPad Pro",
        },
        subHeading: "חווית ה-iPad האולטימטיבית עם הטכנולוגיה המתקדמת ביותר.",
        price: "החל מ- 3,849 ₪",
        productLink: "/ipad/apple-ipad-pro-129-6th-gen-and-ipad-pro-11-4th-gen",
        colors: ["#7D7E80", "#E3E4E5"],
        links: [
            {
                title: "לרכישה",
                href: "/ipad/apple-ipad-pro-129-6th-gen-and-ipad-pro-11-4th-gen",
                variant: "secondary",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[12px] leading-[1.33337]"
            },
            {
                title: "לפרטים נוספים",
                href: "/newsroom/the-new-ipad-pro-11-inch-4th-gen-and-ipad-pro-12-9-inch-6th-gen-2022.html",
                variant: "secondary-text",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[13px] leading-[1.33337]",
                showIcon: true
            }
        ]
    },
    {
        imageSource: IPadAirImage,
        heading: {
            title: "iPadAir"
        },
        subHeading: "ביצועים רציניים בעיצוב דק וקליל.",
        price: "החל מ- 2,929 ₪",
        productLink: "/ipad/apple-ipad-air-5th-2022",
        colors: ["#7D7E80", "#E3E4E5"],
        links: [
            {
                title: "לרכישה",
                href: "/ipad/apple-ipad-air-5th-2022",
                variant: "secondary",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[13px] leading-[1.33337]"
            },
            {
                title: "לפרטים נוספים",
                href: "/ipad/air",
                variant: "secondary-text",
                showIcon: true,
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[13px] leading-[1.33337]"
            }
        ]
    },
    {
        imageSource: IPad10GenerationImage,
        heading: {
            title: "iPad",
            subText: "10th generation"
        },
        subHeading: "ה-iPad החדש והצבעוני עבור הפעולות היום יומיות שלכם.",
        price: "החל מ- 2,199 ₪",
        productLink: "/ipad/apple-ipad-10th-generation",
        colors: ["#e3e4e5", "#f0d95b", "#de6274", "#6480a3"],
        links: [
            {
                title: "לרכישה",
                href: "/ipad/apple-ipad-10th-generation",
                variant: "secondary",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[13px] leading-[1.33337]"
            },
            {
                title: "לפרטים נוספים",
                href: "/newsroom/the-new-ipad-10th-generation-2022.html",
                variant: "secondary-text",
                showIcon: true,
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[13px] leading-[1.33337]"
            }
        ]
    },
    {
        imageSource: Ipad9GenerationImage,
        heading: {
            title: "iPad",
            subText: "9th generation"
        },
        subHeading: "כל הדברים החיוניים ב-iPad המשתלם ביותר.",
        price: "החל מ- 1,629 ₪",
        productLink: "/ipad/apple-ipad-10-2-9th-generation",
        colors: ["#7D7E80", "#E3E4E5"],
        links: [
            {
                title: "לרכישה",
                href: "/mac/macbook-pro/buy?screen_size=4032",
                variant: "secondary",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[13px] leading-[1.33337]"
            }
        ]
    },
    {
        imageSource: IpadMiniImage,
        heading: {
            title: "iPad mini"
        },
        subHeading: "חווית ה-iPad המלאה המותאם לעבודה עם יד אחת.",
        price: "החל מ- 2,499 ₪",
        productLink: "/ipad/apple-ipad-mini-6th-gen",
        colors: ["#6b696e", "#e8d2cf", "#b9b8d1", "#e3dcd1"],
        links: [
            {
                title: "לרכישה",
                href: "/ipad/apple-ipad-mini-6th-gen",
                variant: "secondary",
                className: "pt-[5px] px-[11px] pb-[4px] m-w-[23px] hover:no-underline md:text-[13px] leading-[1.33337]"
            }
        ]
    },
]