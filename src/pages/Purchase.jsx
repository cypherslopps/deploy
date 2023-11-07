import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../components'

const Purchase = () => {
  return (
    <>
        <SEO 
            title="יתרונות לרכישה"
            description="iStore הינה החנות הראשונה בארץ אשר הביאה את בשורת ה-iPod ומוצרי Apple השונים לישראל כחנות קונספט אשר כל כולה מוקדשת ל Apple"
            keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
        />

        <main className="wrapper p-2 text-center direction-rtl">
            <section className="py-8 px-2">
                <h1 className="text-[2em] pb-8 leading-4 font-light">יתרונות לרכישה ב - iStore</h1>

                {/* Content */}
                <div className="space-y-5 text-right">
                    <div className="space-y-0.5 xl:space-y-0">
                        <h5 className="font-bold text-sm xl:text-base">הבית המקצועי ביותר למוצרי Apple.</h5>
                        <p className="font-light text-sm xl:text-base">ב-iStore, כמשווקת רשמית למוצרי Apple, אנו מאמינים שעל נציג שירות להיות בעל מומחיות רחבת היקף וידע ספציפי למוצרי Apple השונים. אנו רואים בידע רחב ושירות מן השורה הראשונה כערכים המובילים שלנו ולכן ב-iStore תפגשו בנציגים בעלי מומחיות רחבה בכל הקשור למוצרי Apple. קניתם Mac ויש לכם שאלות? רכשתם iPhone ורוצים לדעת איך להוציא ממנו את המיטב? עם iStore גם אתם תעשו מומחים.</p>
                    </div>

                    <div className="space-y-0.5 xl:space-y-0">
                        <h5 className="font-bold text-sm xl:text-base">המחירים האטרקטיביים ביותר, בהתחייבות.</h5>
                        <p className="font-light text-sm xl:text-base">בכאשר אנחנו אומרים מחירים אטרקטיביים, אנו מתכוונים לכך במלוא מובן המילה. ב-iStore תמצאו את המחירים האטרקטיביים בישראל יחד עם שירות ואחריות רשמית מטעם Apple ו-iStore, תמיכה טכנית, שירותי הדרכה ועוד.</p>
                    </div>

                    <div className="space-y-0.5 xl:space-y-0">
                        <h5 className="font-bold text-sm xl:text-base">מחלקה ראשונה בשירות לעסקים.</h5>
                        <p className="font-light text-sm xl:text-base">בארץ
                            אלפי בתי עסק בישראל כבר יודעים - iStore היא הכתובת לפתרונות המחשוב בסביבת Apple עבור העסק שלהם. במחלקה העסקית של iStore תמצאו סל שירותים רחב יחד עם הטבות אטרקטיביות שלא תמצאו בשום מקום אחר. רוצים לדעת עוד על שירותי המחלקה העסקית שלנו? {" "}
                            <Link to="לקוחות-עסקיים" className="underline text-[#004567] text-sm xl:text-base">לחצו כאן.</Link>
                        </p>
                    </div>

                    <div className="space-y-0.5 xl:space-y-0">
                        <h5 className="font-bold text-sm xl:text-base">משלוחי אקספרס עד אליך.</h5>
                        <p className="font-light text-sm xl:text-base">כל הזמנה ב-iStore יכולה להימסר אליך, על פי בחירתך, באמצעות משלוחי האקספרס שלנו, תוך מספר שעות באזור המרכז או יום למחרת ביתר חלקי הארץ עם שירות המשלוחים של UPS לבית או לעסק.</p>
                    </div>

                    <div className="space-y-0.5 xl:space-y-0">
                        <h5 className="font-bold text-sm xl:text-base">זוהי תחילתה של ידידות מופלאה.</h5>
                        <p className="font-light text-sm xl:text-base">אנו מאמינים בשירות אישי, מקצועי ובגובה העיניים. iStore כבר למעלה מ-9 שנים מובילה בראש טבלת שביעות הרצון של משתמשי Apple בישראל עם מגוון רחב של פתרונות יחודיים, יצירתיים ומותאמים אישית לכל לקוח ולקוח.</p>
                    </div>

                    <div className="space-y-0.5 xl:space-y-0">
                        <h5 className="font-bold text-sm xl:text-base">להנות מראש שקט, גם לאחר הקנייה.</h5>
                        <p className="font-light text-sm xl:text-base">ב-iStore תקבלו אחריות רשמית ומלאה לשנה הכוללת שירות תיקונים ותמיכה טכנית מתקדמת במגוון אמצעים אשר יסייעו לכם בכל שלב ושלב. רוצים להנות מאחריות מורחבת ל-3 שנים? רק ב-iStore תוכלו להנות מאחריות מורחבת למוצרי Mac למשך 3 שנים עם Apple Care, הרחבת האחריות הרשמית והבינלאומית של Apple.</p>
                    </div>

                    <div className="space-y-0.5 xl:space-y-0">
                        <h5 className="font-bold text-sm xl:text-base">מעבדה מתקדמת זה שם המשחק.</h5>
                        <p className="font-light text-sm xl:text-base">ב-iStore צוות טכנאים אשר עברו הסמכה ארוכה ומקצועית על פי הסטנדרטים של חברת Apple העולמית. אנו יודעים שמכשירכם יקר לכם ועל כן נעשה את מירב המאמצעים לתקן אותו עוד באותו היום. במעבדה של iStore תוכלו להנות משירות תיקונים מחוץ לאחריות במחירים אטרקטיביים והוגנים.</p>
                    </div>

                    <div className="space-y-0.5 xl:space-y-0">
                        <h5 className="font-bold text-sm xl:text-base">החלום שלכם הופך למציאות.</h5>
                        <p className="font-light text-sm xl:text-base">רוצים מוצר כלשהו שלא נמכר בישראל? כאן אנחנו נכנסים לתמונה. פנו אלינו עוד היום וניתן לכם הצעת מחיר אטרקטבית במיוחד הכוללת את כל עלויות הייבוא האישי!</p>
                    </div>

                    <div className="space-y-0.5 xl:space-y-0">
                        <h5 className="font-bold text-sm xl:text-base">חוויה שלא תשכחו</h5>
                        <p className="font-light text-sm xl:text-base">אומרים שאין טוב ממראה עיניים- ב-iStore עמדות תצוגה והדגמה בהן תוכלו להתנסות במגוון מוצרי Apple השונים. בואו לפגוש אותנו עוד היום בדיזינגוף 149 בתל אביב</p>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Purchase