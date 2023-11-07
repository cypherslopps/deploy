import { Icons } from "../../components";
import AccessoriesBannerImage1 from "../../assets/images/accessories_banner_image1.webp";
import AccessoriesBannerImage2 from "../../assets/images/accessories_banner_image2.avif";
import IphoneMaxFineWoven from "../../assets/images/iphone_max_finewonen.avif";
import AirpodCase from "../../assets/images/airpod_case.avif";
import PowerAdapter from "../../assets/images/power_adapter.avif";
import MagsafeCharger from "../../assets/images/magsafe_charger.avif";
import LithiumBattery from "../../assets/images/lithium_battery.avif";

export const accessoriesCarouselItems = [
    {
        containerClassName: "pl-20",
        imageSource: AccessoriesBannerImage1,
        heading: "אבידות. ומציאות.",
        content: "צרפו את ה- AirTag לפריטים יומיומיים. ותוכלו למצא אותם בקלות בעזרת ה- iPhone.",
        links: [
            {
                title: "הזמינו עכשיו",
                href: "/אביזרים/אביזרים-לפי?airtag_compatibility=3839&dir=desc&order=_open_date",
                variant: "secondary-text",
                showIcon: true,
                className: "md:text-[19px] font-light tracking-[.016em] leading-[1.4555]"
            }
        ]
    }, 
    {
        containerClassName: "",
        imageSource: AccessoriesBannerImage2,
        heading: "ממתק לעיניים על כף היד.",
        links: [
            {
                title: "לרכישה ממגוון הרצועות החדשות",
                href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=857",
                variant: "secondary-text",
                showIcon: true,
                className: "md:text-[19px] font-light tracking-[.016em] leading-[1.4555]"
            }
        ]
    }
];

export const acessoriesTabContent = {
    "חיפוש לפי קטגוריה": [
        {
           Icon: Icons.Star,
           title: "הכי חדש",
           href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date"
        },
        {
            Icon: Icons.SmartHouse,
            title: "בית חכם",
            href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=3768"
        },
        {
            Icon: Icons.ActionMode,
            title: "בריאות וספורט",
            href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=654"
        },
        {
            Icon: Icons.WirelessCharger,
            title: "הטענה אלחוטית",
            href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&apple_features=2028"
         },
         {
             Icon: Icons.IStoreCareWarranty,
             title: "הרחבות אחריות",
             href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=807"
         },
         {
             Icon: Icons.Creation,
             title: "יצירה",
             href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=682_681"
         },
         {
            Icon: Icons.Drive,
            title: "כוננים ואחסון",
            href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=1963_657"
         },
         {
             Icon: Icons.CoverProtection,
             title: "כיסוי והגנה",
             href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=658_659_660_661_664"
         },
         {
             Icon: Icons.Printer,
             title: "מדפסות",
             href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=665"
         },
         {
            Icon: Icons.Desktop,
            title: "מסכים וטלויזיות",
            href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=668_1827"
         },
         {
             Icon: Icons.Keyboard,
             title: "מקלדות, עכברים ומשטחי מגע",
             href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=673_683_676"
         },
         {
             Icon: Icons.CordLong,
             title: "ספקי כוח, כבלים ומתאמים",
             href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=808_809_671_677_656_666_660"
         },
         {
            Icon: Icons.Camera,
            title: "צילום",
            href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=681"
         },
         {
             Icon: Icons.Car,
             title: "רכב",
             href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=1085"
         },
         {
             Icon: Icons.Headset,
             title: "רמקולים ואוזניות",
             href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=652_685"
         },
         {
            Icon: Icons.GamePad,
            title: "שלטים ומשחקים",
            href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=686_675"
        },
        {
            Icon: Icons.Chart,
            title: "תוכנות",
            href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=689"
        },
        {
            Icon: Icons.DockingStand,
            title: "תחנות עגינה ומעמדים",
            href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=691_669_670_690"
        },

        {
            Icon: Icons.Bag,
            title: "תיקים",
            href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=692_687"
        },
    ],
    "שולחניים": []
};

export const accessoriesFeatures = [
    {
        imageSource: IphoneMaxFineWoven,
        title: "Apple - iPhone 15 Pro Max FineWoven Case with MagSafe",
        price: "299 ₪",
        colors: ["#26242d", "#5c6b63", "#82515f", "#4c6775", "#bf9d88"],
        className: "col-start-1 col-end-3 row-start-1"
    },
    {
        imageSource: AirpodCase,
        title: "AirPods 2 / Case",
        price: "219.90 ₪",
    },
    {
        imageSource: PowerAdapter,
        title: "Apple - 20W USB-C Power Adapter / White",
        price: "109 ₪"
    },
    {
        imageSource: MagsafeCharger,
        title: "Apple - MagSafe Charger / White",
        price: "199.90 ₪"
    },
    {
        imageSource: LithiumBattery,
        href: "/7290118095385",
        title: "Value - CR2032 3.0V Lithium Battery for AirTag",
        price: "5.90 ₪"
    }
];