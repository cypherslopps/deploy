import { companyPhoneLine, whatsappLink } from ".";
import { Icons } from "../../components";

export const businessBulletList = [
    {
        title: "מחירים ואפשרויות תשלום",
        Icon: Icons.BlueShekel,
        content: "מחירים מיוחדים על מגוון מוצרי Apple, אביזרים נלווים, תוכנות ושירותי מעבדה. שירותי מימון גמישים המותאמים עבורכם."
    },
    {
        title: "מעבדת Apple רשמית",
        Icon: Icons.BlueLab,
        content: "שירות תיקונים מהיר הכולל איסוף והחזרה מבית העסק למעבדת iStore אשר הוסמכה על-ידי Apple. שירות קבלת מכשיר חלופי לזמן התיקון."     
    },
    {
        title: "הרחבת אחריות",
        Icon: Icons.BlueShield,
        content: {
            title: "שירות iStore Care מרחיב את תנאי האחריות לשנים נוספות.",
            subTitle: "שירות iStore Care Plus מקנה תיקון נזק פיזי ראשון בהשתתפות עצמית נמוכה."
        }
    },
    {
        title: "מנהל תיק לקוח",
        Icon: Icons.BluePerson,
        content: "אנו מאמינים כי כלקוחות עסקיים אתם חייבים לקבל מענה מיידי. מגיע לכם להכיר מקרוב את מי שדואג לעסק שלכם. ללא מעבר אל מענה קולי, ללא המתנה לנציג וללא מספרי שלוחה מיוחדים!"
    },
    {
        title: "משלוח מהיר",
        Icon: Icons.BlueShipping,
        content: "אנו מבינים שכשמדובר בעסקים צריך שהכל יקרה מהר ובזמן. אצלנו לקוחות עסקיים מקבלים משלוח מהיר עד בית העסק - כאן ועכשיו."
    },
    {
        title: "iStore Academy",
        Icon: Icons.BlueStudent,
        content: "מגוון הדרכות וסדנאות מיוחדות להכשרת צוות העובדים על מוצרי Apple."
    },
    {
        title: "Product On Demand",
        Icon: Icons.BlueAirPlane,
        content: "הזמנת מוצרים מכל העולם גם אם הם מחוץ לקטלוג iStore."
    },
    {
        title: "Apple Business Manager",
        Icon: Icons.BlueBag,
        content: "פורטל לניהול וחיבור כל המכשירים בארגון תחת קורת גג אחת."
    },
];

export const contactFormLinks = [
    {
        title: companyPhoneLine,
        href: `tel:${companyPhoneLine}`,
        variant: "secondary",
        showIcon: false,
        className: "py-[0.75em] px-4 min-w-[8em] text-[.78em] md:text-[.8em] leading-[1em] hover:no-underline"
    },
    {
        title: "Whatsapp",
        href: whatsappLink,
        variant: "secondary",
        showIcon: false,
        className: "py-[0.75em] px-4 min-w-[8em] text-[.78em] md:text-[.8em] leading-[1em] hover:no-underline"
    },
    {
        title: "Business@iStoreil.co.il",
        href: "mailto:Business@iStoreil.co.il",
        variant: "secondary",
        showIcon: false,
        className: "py-[0.75em] px-4 min-w-[8em] text-[.78em] md:text-[.8em] leading-[1em] hover:no-underline"
    }
]