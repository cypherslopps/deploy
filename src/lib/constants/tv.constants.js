import Icons from "../../components/Icons";

import IPhone15Image from "../../assets/images/iphone-15_logo.png";
import TV4KImageLarge from "../../assets/images/tv_4k_banner_large.avif";
import IPhone15290 from "../../assets/images/iphone15_290.webp";
import IPhone15670 from "../../assets/images/iphone15_banner_medium.avif";

export const tvChapters = [
    {
        Icon: Icons.ICare,
        title: "iStore Care",
        info: "new",
        href: "istore-care"
    },
    {
        Icon: Icons.AppleTV4K,
        title: "Apple TV 4K",
        href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=652_662_663_667_685_2947"
    }
];

export const appleTVContent = {
    containerClassName: "bg-white pt-0.5 sm:pt-2.5 md:pt-4 h-max md:h-max pb-0.5 xs:pb-4 sm:pb-6 md:pb-8",
    headline: {
        title: "חדש",
        className: "text-black"
    },
    heading: {
        title: "Apple TV 4K",
        imageSource: IPhone15Image,
        imageSourceSize: "auto 75%",
        headingClassName: "text-2xl sm:text-[1.6rem] text-center sm:text-[2rem] md:text-[2.1rem] xl:text-4xl"
    },
    subHeading: {
        title: "The Apple experience.",
        subTitle: "Cinematic in every sense.",
        className: "text-black text-[1.25rem] xxs:text-[1.4rem] xs:text-[1.7rem] sm:text-[1.9rem] md:text-4xl xl:text-4.5xl font-bold mb-3",
        subTitleClassName: "text-[1.26rem] xxs:text-[1.41rem] xs:text-[1.71rem] sm:text-[1.91rem] md:text-[2.26rem] xl:text-4.7xl font-bold -mt-5 sm:-mt-6 md:-mt-4 xl:-mt-2.5"
    },
    pricing: {
        amount: "619",
        content: "₪ החל מ-",
        containerClassName: "mb-5 mt-2",
        className: "text-black",
        details: {
            content: "או החל מ- 51.58 ₪ / חודש ב-12 תשלומים ללא ריבית."
        },
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
        className: "w-[85%] xxs:w-[80%] lg:w-[65%] xl:w-[60%] mt-10 sm:mt-8",
        source290: IPhone15290,
        source670: IPhone15670,
        source780: TV4KImageLarge
    }
}