import Icons from "../../components/Icons";

// Apple Watch Series 9
import AppleWatchSeries9 from "../../assets/svg/series-9.svg";
import AppleWatchSeries9Large from "../../assets/images/watch-s9_banner_large.jpg";
import IPhone15290 from "../../assets/images/iphone15_290.webp";
import IPhone15670 from "../../assets/images/iphone15_banner_medium.avif";

// Apple Watch Ultra 2
import AppleWatchUltra2 from "../../assets/svg/apple-watch-ultra-2_logo.svg";
import AppleWatchUltra2Large from "../../assets/images/watch_ultra2_banner_large.jpg";

// Watch Chapter
import WatchChapterLarge from "../../assets/images/watch_clearance_large.avif";

export const watchChapters = [
    {
        Icon: Icons.ICare,
        title: "iStore Care",
        info: "new",
        href: "istore-care"
    },
    {
        Icon: Icons.Accessories,
        title: "אביזרים",
        href: "/אביזרים/אביזרים-לפי/watch"
    },
    {
        Icon: Icons.ClearanceWatch,
        title: "עודפים",
        href: "/clearance/watch?dir=asc&order=price"
    },
    {
        Icon: Icons.AppleSerie6,
        title: "Apple Watch",
        subTitle: "Series 6",
        href: "/watch/Series6/buy"
    },
    {
        Icon: Icons.AppleWatchSE,
        title: "Apple watch",
        subTitle: "SE",
        info: "new",
        href: "/watch/watch-se-2nd/buy"
    },
    {
        Icon: Icons.AppleSerie7,
        title: "Apple Watch",
        subTitle: "Series 7",
        href: "/אביזרים/אביזרים-לפי/watch"
    },
    {
        Icon: Icons.AppleSerie8,
        title: "Apple Watch",
        subTitle: "Series 8",
        href: "/אביזרים/אביזרים-לפי/watch"
    },
    {
        Icon: Icons.AppleSerie9,
        title: "Apple Watch",
        subTitle: "Series 9",
        info: "new",
        href: "/אביזרים/אביזרים-לפי/watch"
    },
    {
        Icon: Icons.AppleWatchUltra,
        title: "Apple Watch",
        subTitle: "Ultra",
        href: "/אביזרים/אביזרים-לפי/watch"
    },
    {
        Icon: Icons.AppleWatchUltra2,
        title: "Apple Watch",
        subTitle: "Ultra 2",
        info: "new",
        href: "/אביזרים/אביזרים-לפי/watch"
    },
];

export const appleWatchSeries9Content = {
    containerClassName: "bg-white pt-10 h-max md:h-max pb-9",
    headline: {
        title: "חדש",
        className: "text-black"
    },
    heading: {
        title: "Apple Watch",
        subTitle: "Series 9",
        imageSource: AppleWatchSeries9,
        imageSourceSize: "auto 75%",
        headingClassName: "xl:text-6.6xl mb-1.5"
    },
    subHeading: {
        title: "Smarter. Brighter.",
        subTitle: "Mightier.",
        className: "text-black xl:text-5xl font-bold mb-3",
        subTitleClassName: "xl:text-5xl font-bold -mt-1.5"
    },
    pricing: {
        amount: "2,079",
        content: "₪ החל מ-",
        containerClassName: "mb-3.5 mt-6",
        className: "text-black"
    },
    links: [
        {
            href: "#",
            title: "לרכישה",
            variant: "secondary",
            showIcon: false
        }
    ],
    bannerImageSources: {
        className: "w-[45%] md:w-[55%] xl:w-[60%] mt-9",
        source290: IPhone15290,
        source670: IPhone15670,
        source780: AppleWatchSeries9Large
    }
}

export const appleWatchUltra2Content = {
    containerClassName: "bg-white pt-10 h-max md:h-max pb-9",
    headline: {
        title: "חדש",
        className: "text-black"
    },
    heading: {
        title: "Apple Watch",
        subTitle: "Series 9",
        imageSource: AppleWatchUltra2,
        imageSourceSize: "auto 75%",
        headingClassName: "xl:text-6.6xl mb-1.5"
    },
    subHeading: {
        title: "Next level adventure.",
        className: "text-black text-5xl font-bold",
    },
    pricing: {
        amount: "4,069",
        content: "₪ החל מ-",
        containerClassName: "mb-3.5 mt-6",
        className: "text-black"
    },
    links: [
        {
            href: "#",
            title: "לרכישה",
            variant: "secondary",
            showIcon: false
        }
    ],
    bannerImageSources: {
        className: "w-[72%] md:w-[86%] xl:w-[92%] mt-14",
        source290: IPhone15290,
        source670: IPhone15670,
        source780: AppleWatchUltra2Large
    }
}

export const appleWatchChapterPromo = {
    containerClassName: "bg-white pt-10 h-max pb-9",
    headline: {
        title: "חדש",
        className: "text-black"
    },
    heading: {
        title: "iStore Clearance",
        headingClassName: "text-6.6xl mb-1.5"
    },
    subHeading: {
        title: "מחירי סוף עונה על דגמים נבחרים."
    },
    links: [
        {
            href: "/clearance/watch?dir=asc&order=price",
            title: "לפרטים נוספים",
            variant: "secondary-text",
            showIcon: true
        }
    ],
    bannerImageSources: {
        source290: WatchChapterLarge,
        source670: IPhone15670,
        source780: AppleWatchUltra2Large
    }
}