import React, { useState } from 'react'
import { Button, Input, SEO } from '../components'
import { Link } from 'react-router-dom'
import { whatsappLink } from '../lib/constants'

const OrderCancel = () => {
  const [orderCancelForm, setOrderCancelForm] = useState({
    option123: "",
    option124: "",
    option125: "",
    option126: "",
    option238: "",
    option237: ""
  });
  const [option123Error, setOption123Error] = useState('');
  const [option124Error, setOption124Error] = useState('');
  const [option125Error, setOption125Error] = useState('');
  const [option126Error, setOption126Error] = useState('');
  const [option131Error, setOption131Error] = useState('');
  const [option238Error, setOption238Error] = useState('');
  const [option237Error, setOption237Error] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setOrderCancelForm({
      ...orderCancelForm,
      [name]: value
    });
  }

  return (
    <>
      <SEO 
        title="ביטול בקליק"
        description="iStore הינה החנות הראשונה בארץ אשר הביאה את בשורת ה-iPod ומוצרי Apple השונים לישראל כחנות קונספט אשר כל כולה מוקדשת ל Apple"
        keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
      />

      <main className="wrapper direction-rtl pb-3 px-2">
        <h1 className="text-3xl xl:text-[2rem] text-center pt-4 font-light">ביטול בקליק</h1>

        {/* Content */}
        <div className="grid grid-cols-1 pt-6 md:grid-cols-2 md:pt-8">
          {/* Content */}
          <section className="pb-10 sm:pb-[3.5rem] px-2 pt-2 md:p-2 text-center">
            <header>
              <h6 className="text-lg xs:text-[large] text-primary-450 font-bold">מעוניינים לבטל את הזמנתכם?</h6>
              <h6 className="text-lg xs:text-[large] text-primary-450 font-bold">השאירו פרטים ונציג יחזור אליכם בהקדם!</h6>
            </header>

            {/* List */}
            <ul className="ml-4 mt-6 md:mt-5 xl:ml-0 mr-10 mb-6 flex flex-col list-none text-right xl:mt-7">
              <li className="px-2 pb-3 text-[small] font-light">
                הביטול הינו בכפוף למדיניות ביטול העסקאות של רשת iStore ולקבוע בחוק כמפורט {" "}
                <Link to="/regulations" className="text-primary-500 underline text-[small] font-light">בתקנון האתר</Link>
                .
              </li>

              <li className="px-2 pb-3 text-[small] font-light">
                יתכן ויחולו עמלות נוספות בגין הביטול - בהתאם למדיניות iStore.
              </li>

              <li className="px-2 pb-3 text-[small] font-light">
                ניתן לבטל עסקה גם דרך מוקד שירות הלקוחות באמצעות ה-
                <Link 
                  to={`${whatsappLink}`} 
                  className="text-primary-500 underline text-[small] font-light"
                  target="_blank"
                >WhatsApp במספר 073-213-0507</Link>
              </li>
            </ul>
          </section>

          {/* Form Container */}
          <section className='p-2 flex flex-col gap-y-4'>
            <Input 
              type="text"
              name="option123"
              title="שם פרטי"
              placeholder=" * שם פרטי"
              value={orderCancelForm.option123}
              onChange={handleChange}
              className="py-[.2em] placeholder:text-app-text/60"
              error={option123Error}
            />

            <Input 
              type="text"
              name="option124"
              title="שם משפחה"
              placeholder=" * שם משפחה"
              value={orderCancelForm.option124}
              onChange={handleChange}
              className="py-[.2em] placeholder:text-app-text/60"
              error={option124Error}
            />

          <Input 
              type="text"
              name="option125"
              title="מספר הזמנה"
              placeholder=" * מספר הזמנה"
              value={orderCancelForm.option125}
              onChange={handleChange}
              className="py-[.2em] placeholder:text-app-text/60"
              error={option125Error}
            />

            <Input 
              type="text"
              name="option126"
              title="טלפון ליצירת קשר"
              placeholder=" * טלפון ליצירת קשר"
              value={orderCancelForm.option125}
              onChange={handleChange}
              className="py-[.2em] placeholder:text-app-text/60"
              error={option126Error}
            />

            <Input 
              type="text"
              name="option131"
              title="אימייל"
              placeholder="* אימייל"
              value={orderCancelForm.option131}
              onChange={handleChange}
              className="py-[.2em] placeholder:text-app-text/60"
              error={option131Error}
            />

            <Input 
              type="text"
              name="option238"
              title="סיבת ביטול"
              placeholder=" * סיבת ביטול"
              value={orderCancelForm.option238}
              onChange={handleChange}
              className="py-[.2em] placeholder:text-app-text/60"
              error={option238Error}
            />

            <Input 
              type="text"
              name="option237"
              title="CVV - 3 ספרות בגב הכרטיס"
              placeholder=" * CVV - 3 ספרות בגב הכרטיס"
              value={orderCancelForm.option237}
              onChange={handleChange}
              className="py-[.2em] placeholder:text-app-text/60"
              error={option237Error}
            />

            <Button
              variant="border"
              type="submit"
              role="submit button"
              size="none"
              className="py-[.6em] lg:py-[.7em] px-4 text-[.72rem] lg:text-[.8em] min-w-[8em] rounded-full leading-4 self-end font-light"
            >
              שלח בקשה
            </Button>
          </section>
        </div>
      </main>
    </>
  )
}

export default OrderCancel