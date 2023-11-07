// iPhone15 PRO 
import IPhone15ProImage from "../../assets/svg/ip15pro.svg";
import IPhone15Pro290 from "../../assets/images/w_290.webp"; 
import IPhone15Pro670 from "../../assets/images/w_670.webp";
import IPhone15Pro780 from "../../assets/images/w_780.webp";

// iPhone15
import IPhone15Image from "../../assets/images/iphone-15_logo.png";
import IPhone15290 from "../../assets/images/iphone15_banner_medium.avif";
import IPhone15670 from "../../assets/images/iphone15_290.webp";
import IPhone15780 from "../../assets/images/iphone15_banner_large.avif";

// Serie-9
import Series9Image from "../../assets/svg/series-9.svg";
import Series9ImageLarge from "../../assets/images/series-9_large.webp";

// Watch-se
import WatchseImage from "../../assets/svg/watch-se.svg";
import WatchseImage290 from "../../assets/images/watch_se_small.webp";
import WatchseImage670 from "../../assets/images/watch_se_medium.webp";
import WatchseImage780 from "../../assets/images/watch_se_large.webp";

// Watch-Ultra-2
import WatchUltra2 from "../../assets/svg/apple-watch-ultra-2_logo.svg";
import WatchUltra2Image290 from "../../assets/images/watch_ultra2_small.webp";
import WatchUltra2Image670 from "../../assets/images/watch_ultra2_medium.webp";
import WatchUltra2Image780 from "../../assets/images/watch_ultra2_large.webp";

// Macbook Air
import MacbookAirLogo from "../../assets/images/macbookair15_logo.png";
import MacbookAirImage290 from "../../assets/images/mackbook_air_small.webp";
import MacbookAirImage670 from "../../assets/images/macbook_air_medium.webp"
import MacbookAirImage780 from "../../assets/images/macbook_air_large.webp"

// Airpod
import AirpodImage290 from "../../assets/images/airpod_small.webp";
import AirpodImage670 from "../../assets/images/airpod_medium.webp";
import AirpodImage780 from "../../assets/images/airpod_large.webp";

// Trade in
import TradeInImage290 from "../../assets/images/trade_in_small.webp";
import TradeInImage670 from "../../assets/images/trade_in_medium.webp";
import TradeInImage780 from "../../assets/images/trade_in_large.webp";

// Telegram
import TelegramImage290 from "../../assets/images/social/telegram_small.webp";
import TelegramImage670 from "../../assets/images/social/telegram_medium.webp";
import TelegramImage780 from "../../assets/images/social/telegram_large.webp";


export const IPhone15ProContent = {
    containerClassName: "bg-black",
    heading: {
        title: "iPhone 15 Pro",
        subTitle: "Sub Title",
        imageSource: IPhone15ProImage,
    },
    subHeading: {
        title: "So strong. So light. So Pro.",
        className: "text-white"
    },
    pricing: {
        amount: "5,299",
        content: "₪ החל מ-",
    },
    info: "הטבה - קנו iPhone וקבלו שובר מתנה בשווי 100 ₪ עם הגעתו!",
    links: [
        {
            href: "#",
            title: "לרכישה מוקדמת",
            variant: "secondary-text",
            showIcon: true
        }
    ],
    bannerImageSources: {
        source290: IPhone15Pro290,
        source670: IPhone15Pro780,
        source780: IPhone15Pro670
    }
}

export const IPhone15Content = {
    containerClassName: "bg-white pt-7 xs:pt-8 md:pt-16",
    heading: {
        title: "iPhone 15",
        imageSource: IPhone15Image,
        imageSourceSize: "auto 72%",
        headingClassName: "text-2xl xxs:text-[2.2rem] leading-[1.03rem] sm:leading-0 sm:text-5.5xl md:text-5xl xl:text-6.4xl" ,
    },
    subHeading: {
        title: "Newphoria.",
        className: "text-black"
    },
    pricing: {
        amount: "4,299",
        content: "₪ החל מ-"
    },
    info: "הטבה - קנו iPhone וקבלו שובר מתנה בשווי 100 ₪ עם הגעתו!",
    links: [
        {
            href: "#",
            title: "לרכישה",
            variant: "secondary-text",
            showIcon: true
        }
    ],
    bannerImageSources: {
        className: "xl:w-4/5 mt-[3.6rem]",
        source290: IPhone15290,
        source670: IPhone15780,
        source780: IPhone15670
    }
}

export const series9Content = {
    containerClassName: "bg-grey-100",
    heading: {
        title: "Apple Watch",
        subTitle: "Series 9",
        imageSource: Series9Image,
        imageSourceSize: "auto 100%",
        headingClassName: "mb-1.5"
    },
    subHeading: {
        title: "Smarter. Brighter. Mightier."
    },
    pricing: {
        amount: "2,079",
        content: "₪ החל מ-"
    },
    links: [{
        href: "#",
        title: "לרכישה מוקדמת",
        variant: "secondary-text",
        showIcon: true
    }],
    bannerImageSources: {
        className: "lg:[14.5rem] xl:w-[14.5rem] mb-[.6rem]",
        source290: Series9ImageLarge,
    }
};

export const productDescriptionList = [
    {   
        containerClassName: "bg-grey-100 pt-9 pb-4",
        heading: {
            title: "Apple Watch",
            subTitle: "SE 2nd Gen 2023",
            imageSource: WatchseImage,
            imageSourceSize: "auto 100%",
            headingClassName: "mb-1.5 xl:text-[33px]"
        },
        subHeading: {
            title: "Affordable. Capable. Totally loveable.",
            className: "xl:text-base"
        },
        pricing: {
            amount: "1,249",
            content: "₪ החל מ-"
        },
        links: [{
            href: "watch/watch-se-2nd/buy",
            title: "לרכישה מוקדמת",
            variant: "secondary-text",
            showIcon: true
        }],
        bannerImageSources: {
            className: "mt-4",
            source780: WatchseImage780,
            source670: WatchseImage670,
            source290: WatchseImage290
        }
    },
    {
        containerClassName: "bg-grey-100 xl:pt-9 xl:pb-4",
        heading: {
            title: "Apple Watch",
            subTitle: "Ultra 2",
            imageSource: WatchUltra2,
            imageSourceSize: "auto 100%",
            headingClassName: "mb-1.5 xl:text-[33px]"
        },
        subHeading: {
            title: "The most rugged and capable Apple Watch.",
            className: "xl:text-base"
        },
        pricing: {
            amount: "4,069",
            content: "₪ החל מ-"
        },
        links: [{
            href: "watch/ultra-2/buy",
            title: "לרכישה מוקדמת",
            variant: "secondary-text",
            showIcon: true
        }],
        bannerImageSources: {
            className: "xl:w-[80%] mb-[2.8rem]",
            source780: WatchUltra2Image290,
            source670: WatchUltra2Image670,
            source290: WatchUltra2Image780
        }
    },
    {
        containerClassName: "bg-grey-100 xl:pt-9 xl:pb-4",
        heading: {
            title: "MacBook Air 15",
            imageSource: MacbookAirLogo,
            imageSourceSize: "auto 65%",
            headingClassName: "xl:text-[30px] -mb-[.3rem]"
        },
        subHeading: {
            title: "Impressively big. Impossibly thin."
        },
        pricing: {
            amount: "5,949",
            content: "₪ החל מ-"
        },
        links: [{
            href: "watch/watch-se-2nd/buy",
            title: "לרכישה מוקדמת",
            variant: "secondary-text",
            showIcon: true
        }],
        bannerImageSources: {
            className: "xl:w-[85%] xl:h-[65%] mb-6",
            source780: MacbookAirImage780,
            source670: MacbookAirImage670,
            source290: MacbookAirImage290
        }
    },
    {
        containerClassName: "bg-grey-100 pt-9 pb-4",
        heading: {
            title: "iStore Clearance",
            headingClassName: "font-bold -mb-[.5rem] xl:text-[38px] text-tertiary-500"
        },
        subHeading: {
            title: "רוכשים Apple Watch מסדרה 6 או 7 ב-",
            subTitle: "20% הנחה ומקבלים אוזניות AirPods במתנה!"
        },
        pricing: {
            amount: "1,249",
            content: "₪ החל מ-"
        },
        links: [{
            href: "watch/watch-se-2nd/buy",
            title: "לרכישה מוקדמת",
            variant: "secondary-text",
            showIcon: true
        }],
        bannerImageSources: {
            className: "xl:w-[75%]",
            source780: AirpodImage290,
            source670: AirpodImage670,
            source290: AirpodImage780
        }
    },
    {
        containerClassName: "bg-grey-100 xl:pt-9 xl:pb-4",
        heading: {
            title: "Trade In",
            headingClassName: "-mb-1.5 xl:text-[38px] text-black font-extrabold"
        },
        subHeading: {
            title: "שדרגו וחסכו. כזה פשוט, ככה קל.",
            className: "xl:text-base"
        },
        links: [{
            href: "/trade-in",
            title: "בדקו כמה המכשיר שלכם שווה",
            variant: "secondary-text",
            showIcon: true
        }],
        bannerImageSources: {
            className: "xl:w-full h-[269px] mb-20",
            source780: TradeInImage290,
            source670: TradeInImage670,
            source290: TradeInImage780
        }
    },
    {
        containerClassName: "bg-grey-100 xl:pt-9 xl:pb-4",
        heading: {
            title: "מצטרפים וחוסכים",
            headingClassName: "-mb-1.5 xl:text-[38px] font-extrabold text-primary-500"
        },
        subHeading: {
            title: "מגוון הנחות בלעדיות מחכות לכם בקבוצת ה-Telegram שלנו.",
            className: "xl:text-base"
        },
        links: [{
            href: "https://bit.ly/43z5kOs",
            title: "להצטרפות",
            variant: "secondary-text",
            showIcon: true
        }],
        bannerImageSources: {
            className: "xl:w-[55%]",
            source780: TelegramImage290,
            source670: TelegramImage670,
            source290: TelegramImage780
        }
    }
]