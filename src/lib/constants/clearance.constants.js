import { Icons } from "../../components";
import AppleWatchSeries6StainlessSteel from "../../assets/images/apple_watch_series6_gold_stainless_steel.avif";
import MacStudio from "../../assets/images/mac_studio.avif";
import Stamp from "../../assets/images/stamp.avif";
import IPadProSpaceGray from "../../assets/images/ipad_pro_space_gray.avif";
import IpadPro11 from "../../assets/images/ipad_pro_11.avif";
import AppleWatchSeries6Graphite from "../../assets/images/apple_watch_series6_graphite.avif";
import AppleWatchSeries7Graphite from "../../assets/images/apple_watch_series7_graphite.avif";
import ElagoGripStand from "../../assets/images/elago_grip_stand.avif";
import ElagoAirpodsWaterProof from "../../assets/images/elago_airpods_waterproof_hang_case.jpeg";
import HyperDriveNet from "../../assets/images/hyperdrive_net.jpeg";

export const devices = [
    {
        Icon: Icons.MacSingle,
        title: "Mac",
        href: "/clearance/mac"
    },
    {
        Icon: Icons.Ipad9Generation,
        title: "iPad",
        href: "/clearance/ipad?dir=asc&order=price"
    },
    {
        Icon: Icons.Watch,
        title: "Watch",
        href: "/clearance/watch?dir=asc&order=price"
    },
    {
        Icon: Icons.Headset2,
        title: "אביזרים",
        href: "/clearance/accessories"
    }
]

export const offers = [
    { 
        imageSource: AppleWatchSeries6StainlessSteel,
        stamp: Stamp,
        title: "Apple Watch Series 6 <br /> Gold Stainless Steel <br /> GPS+Cellular / 40mm <br /> Deep Navy Sport Band",
        description: "אפל ווטש 6 פלדת אל חלד",
        href: "/clearance/watch/apple-apple-watch-series-6-gps-cellular-40mm-gold-stainless-steel-case-with-deep-navy-sport-band",
        price: "2,399 ₪"
    },
    { 
        imageSource: MacStudio,
        title: "Mac Studio <br /> Apple M1 Max Chip with 64GB Ram and 512GB SSD <br /> Space Gray",
        description: "מחשב מק סטודיו שולחני בהנחה במבצע",
        href: "/clearance/mac/ctomsam1m64gb512gb",
        price: "8,625 ₪",
        backPrice: "<s>10,648 ₪</s>  חסכו  2,023 ₪"
    },
    { 
        imageSource: IPadProSpaceGray,
        title: "iPad Pro 11 <br /> Apple M1 Chip <br /> Wi-Fi / 2TB <br /> Space Gray",
        description: "אייפד פרו",
        href: "/apple-ipad-pro-11-2021-wi-fi-m1-2tb-space-gray",
        price: "5,175 ₪",
        backPrice: "<s>6,899 ₪</s>  חסכו  1,724 ₪"
    },
    { 
        imageSource: IpadPro11,
        title: "iPad Pro 11 <br /> Apple M1 Chip <br /> Wi-Fi+Cellular / 2TB",
        description: "אייפד פרו",
        href: "/clearance/ipad/apple-ipad-pro-11-2021-wi-fi-cellular-m1-2tb-silver",
        price: "5,775 ₪",
        backPrice: "<s>7,699 ₪</s>  חסכו  1,924 ₪"
    },
    { 
        imageSource: AppleWatchSeries6Graphite,
        stamp: Stamp,
        title: "Apple Watch Series 6 <br /> Graphite Stainless Steel <br /> GPS+Cellular / 44mm <br /> Graphite Milanese Loop",
        description: "שעון של אפל סדרה 6",
        href: "/clearance/watch/apple-apple-watch-series-6-gps-cellular-44mm-graphite-stainless-steel-case-with-graphite-milanese-loop",
        price: "2,799 ₪"
    },
    { 
        imageSource: AppleWatchSeries7Graphite,
        stamp: Stamp,
        title: "Apple Watch Series 7 <br /> Graphite Stainless Steel <br /> GPS+Cellular / 45mm <br /> Graphite Milanese Loop",
        description: "שעון של אפל סדרה 7",
        href: "/clearance/watch/194252574751",
        price: "2,899 ₪"
    },
    { 
        imageSource: ElagoGripStand,
        title: "elago <br /> Grip Stand for MagSafe <br /> Lavender",
        description: "עמדה למטען המאג סייפ",
        href: "/clearance/accessories/sort-by/elago-grip-stand-for-magsafe-lavender",
        price: "80 ₪"
    },
    { 
        imageSource: ElagoAirpodsWaterProof,
        title: "elago <br /> Airpods Waterproof Hang Case <br /> Jean Indigo",
        description: "מגן לאוזניות האיירפודס",
        href: "/clearance/accessories/sort-by/elago-airpods-waterproof-hang-case-jean-indigo",
        price: "120 ₪"
    },
    { 
        imageSource: HyperDriveNet,
        title: "HyperDrive <br /> NET 6-in-2 Hub <br /> Space Gray",
        description: "מתאם",
        href: "/clearance/accessories/sort-by/hyperdrive-net-6-in-2-hub-spacegray",
        price: "590 ₪"
    },
]