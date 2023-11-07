import { lazy } from "react";

const ProductCollectionLayout = lazy(() => import("./layouts/ProductCollectionLayout"));
const Accessories = lazy(() => import("./Accessories"));
const AccessoriesByLayout = lazy(() => import("./layouts/AccessoriesByLayout"));
const Business = lazy(() => import("./Business"));
const Contact = lazy(() => import("./Contact"));
const Ipad = lazy(() => import("./Ipad"));
const Iphone = lazy(() => import("./Iphone"));
const Laboratory = lazy(() => import("./Laboratory"));
const Mac = lazy(() => import("./Mac"));
const TV = lazy(() => import("./TV"));
const Watch = lazy(() => import("./Watch"));
const TradeIn = lazy(() => import("./TradeIn"));
const Checkout = lazy(() => import("./Checkout"));
const OneStepCheckout = lazy(() => import("./OneStepCheckout"));
const ClearanceLayout = lazy(() => import("./layouts/ClearanceLayout"));
const StudentRegister = lazy(() => import("./StudentRegister"));
const MusicLayout = lazy(() => import("./layouts/MusicLayout"));
const AppleAirpodMaxDescription = lazy(() => import("./AppleAirpodMaxDescription"));
const RefurbishLayout = lazy(() => import("./layouts/RefurbishLayout"));
const Academy = lazy(() => import("./Academy"));
const Purchase = lazy(() => import("./Purchase"));
const IPhone11Info = lazy(() => import("./IPhone11Info"));
const Warranty = lazy(() => import("./Warranty"));
const IStoreCare = lazy(() => import("./IStoreCare"));
const About = lazy(() => import("./About"));
const OrderCancel = lazy(() => import("./OrderCancel"));
const BuyMe = lazy(() => import("./BuyMe"));
const Regulations = lazy(() => import("./Regulations"));
const IStoreCareCheckDevice = lazy(() => import("./IStoreCareCheckDevice"));
const StudentProgram = lazy(() => import("./StudentProgram"));
const LaboratorySupport = lazy(() => import("./LaboratorySupport"));
const SupportService = lazy(() => import("./SupportService"));
const CareersLayout = lazy(() => import("./layouts/CareersLayout"));
const Careers = lazy(() => import("./Careers"));
const CareersApplication = lazy(() => import("./CareersApplication"));

export {
    ProductCollectionLayout,
    AccessoriesByLayout,
    Accessories,
    Business,
    Contact,
    Ipad,
    Iphone,
    Laboratory,
    Mac,
    TV,
    Watch,
    TradeIn,
    Checkout,
    OneStepCheckout,
    ClearanceLayout,
    StudentRegister,
    MusicLayout,
    AppleAirpodMaxDescription,
    RefurbishLayout,
    Academy,
    Purchase,
    IPhone11Info,
    Warranty,
    IStoreCare,
    CareersLayout,
    Careers,
    CareersApplication,
    About,
    OrderCancel,
    BuyMe,
    Regulations,
    IStoreCareCheckDevice,
    StudentProgram,
    LaboratorySupport,
    SupportService
};