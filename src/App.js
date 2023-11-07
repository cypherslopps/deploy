import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import {
  Footer,
  Header,
  Notfound
} from "./components";
import {
  ProductCollectionLayout,
  Contact,
  Accessories,
  Business,
  Ipad,
  Iphone,
  Laboratory,
  Mac,
  TradeIn,
  TV,
  Watch,
  Checkout,
  OneStepCheckout,
  AccessoriesByLayout,
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
} from "./pages";

function App() {
  return (
    <main className='font-sans rtl:mr-3'>
      {/* Header */}
      <Header />

      {/* Routes */}
      <Suspense fallback="Loading">
        <Routes>
          <Route path="/*" element={<ProductCollectionLayout />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<CareersLayout />}>
            <Route index element={<Careers />} />
            <Route path="application/apply/ref/70/" element={<CareersApplication />} />
          </Route>
          <Route path="אביזרים" element={<Accessories />} />
          <Route path="music/*" element={<MusicLayout />} />
          <Route path="לקוחות-עסקיים" element={<Business />} />
          <Route path="ipad" element={<Ipad />} />
          <Route path="refurbish/*" element={<RefurbishLayout />} />
          <Route path="regulations" element={<Regulations />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="academy" element={<Academy />} />
          <Route path="about" element={<About />} />
          <Route path="about/אמנת-השירות" element={<About />} />
          <Route path="מעבדה" element={<Laboratory />} />
          <Route path="מעבדה/support" element={<LaboratorySupport />} />
          <Route path="buyme" element={<BuyMe />} />
          <Route path="apple-airpods-max" element={<AppleAirpodMaxDescription />} />
          <Route path="order_cancel" element={<OrderCancel />} />
          <Route path="mac" element={<Mac />} />
          <Route path="trade-in" element={<TradeIn />} />
          <Route path="tv" element={<TV />} />
          <Route path="clearance/*" element={<ClearanceLayout />} />
          <Route path="iPhone-11-Info" element={<IPhone11Info />} />
          <Route path="watch" element={<Watch />} />
          <Route path="istore-care" element={<IStoreCare />} />
          <Route path="istore-care/check-device" element={<IStoreCareCheckDevice />} />
          <Route path="warranty" element={<Warranty />} />
          <Route path="purchase" element={<Purchase />} />
          <Route path="/אביזרים/אביזרים-לפי/*" element={<AccessoriesByLayout />} />
          <Route path="support-service" element={<SupportService />} />
          <Route path="checkout/cart" element={<Checkout />} />
          <Route path="customer/student/register" element={<StudentRegister />} />
          <Route path="onestepcheckout" element={<OneStepCheckout />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default App