import IStoreCareWarrantyMac from "../../assets/images/istore_care_warranty_mac.avif";
import IStoreCareWarrantyIpad from "../../assets/images/istore_care_warranty_ipad.avif";
import IStoreCareWarrantyIphone from "../../assets/images/istore_care_warranty_iphone.avif";
import IStoreCareWarrantyWatch from "../../assets/images/istore_care_warranty_watch.avif";
import IStoreCareWarrantyTV from "../../assets/images/istore_care_warranty_tv.avif";
import IStoreCareWarrantyAirpod from "../../assets/images/istore_care_warranty_airpod.avif";

export const IStoreCareItems = [
    {
        imageSource: IStoreCareWarrantyMac,
        imageSourceClassName: "w-[180px] h-[110px]",
        description: "אחריות למחשבי מק של אפל",
        title: "הרחבת אחריות <br /> ל- Mac",
        price: "החל מ- <span>540 ₪</span> <br /> עבור 3 שנות אחריות.",
        links: [
            {
                title: "לפרטים נוספים",
                href: "/istore-care/check-device",
                variant: "secondary-text",
                showIcon: true,
                className: "md:text-[15px]"
            }
        ]
    },
    {
        imageSource: IStoreCareWarrantyIpad,
        imageSourceClassName: "w-[101px] h-[140px]",
        description: "אחריות טאבלט אייפד של אפל",
        title: "הרחבת אחריות <br /> ל- Ipad",
        price: "החל מ- <span>330 ₪</span> <br /> עבור שנתיים אחריות.",
        links: [
            {
                title: "לפרטים נוספים",
                href: "/istore-care/check-device",
                variant: "secondary-text",
                showIcon: true,
                className: "md:text-[15px]"
            }
        ]
    },
    {
        imageSource: IStoreCareWarrantyIphone,
        imageSourceClassName: "w-[57px] h-[115px]",
        description: "אחריות לאייפון של אפל",
        title: "הרחבת אחריות <br /> ל- iPhone",
        price: "החל מ- <span>330 ₪</span> <br /> עבור שנתיים אחריות.",
        links: [
            {
                title: "לפרטים נוספים",
                href: "/istore-care/check-device",
                variant: "secondary-text",
                showIcon: true,
                className: "md:text-[15px]"
            }
        ]
    },
    {
        imageSource: IStoreCareWarrantyWatch,
        imageSourceClassName: "w-[73px] h-[125px]",
        description: "אחריות לשעון אפל וואשט",
        title: "הרחבת אחריות <br /> ל- Apple Watch",
        price: "החל מ- <span>270 ₪</span> <br /> עבור שנתיים אחריות.",
        links: [
            {
                title: "לפרטים נוספים",
                href: "/istore-care/check-device",
                variant: "secondary-text",
                showIcon: true,
                className: "md:text-[15px]"
            }
        ]
    },
    {
        imageSource: IStoreCareWarrantyTV,
        imageSourceClassName: "w-[160px] h-[154px]",
        description: "אחריות לאפל טיוי",
        title: "הרחבת אחריות <br /> ל- Apple TV",
        price: "החל מ- <span>190 ₪</span> <br /> עבור שנתיים אחריות.",
        links: [
            {
                title: "לפרטים נוספים",
                href: "/istore-care/check-device",
                variant: "secondary-text",
                showIcon: true,
                className: "md:text-[15px]"
            }
        ]
    },
    {
        imageSource: IStoreCareWarrantyAirpod,
        imageSourceClassName: "w-[100px] h-[95px]",
        description: "אחריות לאוזניות איירפודס של אפל",
        title: "הרחבת אחריות <br /> ל- Airpods",
        price: "החל מ- <span>110 ₪</span> <br /> עבור שנתיים אחריות.",
        links: [
            {
                title: "לפרטים נוספים",
                href: "/istore-care/check-device",
                variant: "secondary-text",
                showIcon: true,
                className: "md:text-[15px]"
            }
        ]
    },
]