import Icons from "../../components/Icons"

// Contact Store
import Store1 from "../../assets/images/contact-store-3.avif";
import Store2 from "../../assets/images/contact-store-2.avif";
import Store3 from "../../assets/images/contact-store-1.avif";
import Store4 from "../../assets/images/contact-store-4.jpeg";
import Store5 from "../../assets/images/contact-store-5.avif";

export const contactDetails = [
    {
        title: "WhatsApp",
        Icon: Icons.Whatsapp,
        href: "http://wa.me/972732130507",
        props: {
            target: "_blank"
        }
    },
    {
        title: "Facebook",
        Icon: Icons.Facebook,
        href: "http://m.me/iStoreil",
        props: {
            target: "_blank"
        }
    },
    {
        title: "ביטול עסקה - דרכי ביטול",
        Icon: Icons.Cancel,
        href: "/order_cancel"
    }
];

export const contactStoreContent = [
    {
        imageSource: Store1,
        href: "/שירות-לקוחות/dizengoff",
        title: "סניף דיזנגוף",
        content: "דיזנגוף 149, תל אביב"
    },
    {
        imageSource: Store2,
        href: "/שירות-לקוחות/rothschild",
        title: "סניף רוטשילד",
        content: "רוטשילד 34, תל אביב"
    },
    {
        imageSource: Store3,
        href: "/שירות-לקוחות/hanegev-beer-sheva",
        title: "סניף באר שבע",
        content: {
            title: "קניון עזריאלי הנגב",
            subTitle: "קומת כניסה"
        }
    },
    {
        imageSource: Store4,
        href: "/שירות-לקוחות/kiryat-ono",
        title: "סניף קרית אונו",
        content: {
            title: "קניון קרית אונו ",
            subTitle: "קומה 2 (ליד מתחם האוכל)"
        }
    },
    {
        imageSource: Store5,
        href: "/שירות-לקוחות/dizengoff",
        title: "סניף דיזנגוף",
        content: "דיזנגוף 149, תל אביב"
    },
]