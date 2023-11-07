import BrandLogoAuthorized from "../../assets/svg/brand_logo_authorized.svg";
import IStoreBannerHeroImage from "../../assets/images/istore_care_hero_large.avif";
import { Icons } from "../../components";

export const laboratoryContent = {
    imageSource: BrandLogoAuthorized,
    heading: "אייסטור מעבדה רשמית לתיקון מוצרי אפל",
    subHeading: {
        title: "עכשיו זה רשמי.",
        subTitle: " מעבדת iStore Care הוסמכה על-ידי Apple."
    },
    content: "ב-iStore תקבלו את חווית השירות המקצועית ביותר לכל מוצרי Apple שברשותכם ואפילו בלי לצאת מהבית!",
    links: [
        {
            href: "/מעבדה/פתיחת-קריאה",
            title: "פתיחת קריאה מרחוק",
            variant: "secondary-text",
            showIcon: true
        },
        {
            href: "/מעבדה/appointment",
            title: "זימון תור למעבדה",
            variant: "secondary-text",
            showIcon: true
        },
        {
            href: "/מעבדה/סטטוס-תיקון",
            title: "בדיקת סטטוס תיקון",
            variant: "secondary-text",
            showIcon: true
        }
    ],
    bannerImageSource: IStoreBannerHeroImage
};

export const supportItems = [
    {
        Icon: Icons.IphoneStack,
        title: "iPhone",
        link: "https://support.apple.com/he-il/guide/iphone"
    },
    {
        Icon: Icons.Mac,
        title: "Mac",
        link: "https://support.apple.com/he-il/guide/mac-help"
    },
    {
        Icon: Icons.Ipad,
        title: "iPad",
        link: "https://support.apple.com/he-il/guide/ipad"
    },
    {
        Icon: Icons.AppleWatch,
        title: "Apple Watch",
        link: "https://support.apple.com/he-il/guide/watch"
    },
    {
        Icon: Icons.Airpods,
        title: "Airpods",
        link: "https://support.apple.com/airpods"
    },
    {
        Icon: Icons.AppleTV,
        title: "Apple TV",
        link: "https://support.apple.com/he-il/guide/tv"
    },
    {
        Icon: Icons.Music,
        title: "Music",
        link: "https://www.apple.com/il/itunes/"
    },
];