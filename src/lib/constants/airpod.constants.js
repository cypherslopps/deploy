import Icons from "../../components/Icons";

// Airpod 3rd Generation
import Airpod3rdGenerationDesktopImage from "../../assets/images/airpod_3_generation_banner_desktop.avif";
import Airpod3rdGenerationTabletImage from "../../assets/images/airpod_3_generation_banner_tablet.avif";
import Airpod3rdGenerationMobileImage from "../../assets/images/airpod_3_generation_banner_mobile.avif";

// Airpod Max
import AirpodMaxDesktopImage from "../../assets/images/airpod_max_banner_desktop.avif";
import AirpodMaxTabletImage from "../../assets/images/airpod_max_banner_tablet.avif";
import AirpodMaxMobileImage from "../../assets/images/airpod_max_banner_mobile.avif";

// Airpod 2nd Generation
import Airpod2rdGenerationDesktopImage from "../../assets/images/airpod_2_generation_banner_desktop.avif";
import Airpod2rdGenerationTabletImage from "../../assets/images/airpod_2_generation_banner_tablet.avif";
import Airpod2rdGenerationMobileImage from "../../assets/images/airpod_2_generation_banner_mobile.avif";

export const airpodChapters = [
    {
        Icon: Icons.ICare,
        title: "iStore Care",
        info: "new",
        href: "istore-care"
    },
    {
        Icon: Icons.MusicReplacement,
        title: "חלקי חילוף",
        href: "/music/replacement"
    },
    {
        Icon: Icons.Star,
        title: "פינת המציאות",
        href: "/refurbish"
    },
    {
        Icon: Icons.Cord,
        title: "אביזרים",
        href: "/אביזרים/אביזרים-לפי?dir=desc&order=_open_date&product_category=652_662_663_667_685_2947"
    },
    {
        Icon: Icons.Beats,
        title: "Beats",
        href: "/music/beats"
    },
    {
        Icon: Icons.AirpodMax,
        title: "Airpods Max",
        href: "/apple-airpods-max"
    },
    {
        Icon: Icons.AirpodPro,
        title: "Airpods Pro",
        href: "/music/apple-pro-2nd"
    },
    {
        Icon: Icons.Airpod3Generation,
        title: "Airpods Pro",
        href: "/music/airpods-pro-2nd"
    },
    {
        Icon: Icons.Airpod3Generation,
        title: "Airpods",
        subTitle: "3rd Generation",
        href: "/apple-airpods-3rd-generation-2021"
    },
    {
        Icon: Icons.Airpod2Generation,
        title: "Airpods",
        subTitle: "2nd Generation",
        href: "/airpods2g"
    }
];

export const airpod3rdGenerationBannerContent = {
    images: {
        desktop: Airpod3rdGenerationDesktopImage,
        tablet: Airpod3rdGenerationTabletImage,
        mobile: Airpod3rdGenerationMobileImage
    },
    title: "Airpods",
    subTitle: "3rd generation",
    price: "₪ 789",
    link: {
        title: "לרכישה",
        href: "/apple-airpods-3rd-generation-2021",
        variant: "secondary"
    }
};

export const airpodMaxContent = {
    images: {
        desktop: AirpodMaxDesktopImage,
        tablet: AirpodMaxTabletImage,
        mobile: AirpodMaxMobileImage
    },
    title: "Airpod Max",
    price: "₪ 2,529",
    link: {
        title: "לרכישה",
        href: "/music/apple-airpods-max",
        variant: "secondary"
    }
};

export const airpod2rdGenerationBannerContent = {
    images: {
        desktop: Airpod2rdGenerationDesktopImage,
        tablet: Airpod2rdGenerationTabletImage,
        mobile: Airpod2rdGenerationMobileImage
    },
    title: "Airpods",
    subTitle: "2nd generation",
    price: "₪ 599",
    link: {
        title: "לרכישה",
        href: "/music/airpods2g",
        variant: "secondary"
    }
};