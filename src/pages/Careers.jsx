import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  SEO,
  AccordionRoot,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Button
} from '../components'

const Careers = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="דרושים"
        description="iStore הינה החנות הראשונה בארץ אשר הביאה את בשורת ה-iPod ומוצרי Apple השונים לישראל כחנות קונספט אשר כל כולה מוקדשת ל Apple"
        keywords="דרושים
        jobs
        קורות חיים
        עובדים"
      />

      <section className="pt-6 pb-8 px-2">
        <AccordionRoot
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <AccordionItem value="תל אביב | מנהל/ת חשבונות סוג 1+2" className="border-y border-app-border focus-within:shadow-none">
            <AccordionTrigger className="text-[1.1rem] md:text-[1.2rem] text-black font-light border-b border-app-border shadow-none h-[75px] md:h-[85px]">תל אביב | מנהל/ת חשבונות סוג 1+2</AccordionTrigger>
            <AccordionContent className="bg-white">
              <div className='py-2.5 text-app-text px-4 w-full flex flex-col'>
                <div className="pb-4">
                  <p className="text-[.9rem] font-light">מיקום החנות</p>
                  <p className="text-[.9rem] font-light">תל אביב</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">תיאור</p>
                  <p className="text-[.9rem] font-light">‎לחברת iStore, המשווקת הרשמית של מוצרי Apple בישראל, דרוש מנהל/ת חשבונות.</p>
                  <p className="text-[.9rem] font-light">‎בואו להשתלב ולצמוח בחברה עם אווירה משפחתית, צעירה וחדשנית ותהנו מתנאים טובים, סביבת עבודה מספקת ומהנה ועבודה עם המותג המוביל בעולם - Apple.  </p>
                  <p className="text-[.9rem] font-light">‎משרה מלאה, 100% בימים א׳ עד ה׳ בשעות 9:00-17:30 (גמיש).</p>
                  <p className="text-[.9rem] font-light">‎המשרה ממשרדי החברה ברחוב אחוזת בית, תל אביב (ליד כלבו שלום והבורסה לניירות ערך), בסמיכות לתחנת הרכבת הקלה.</p>
                  <p className="text-[.9rem] font-light">דרישות</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">דרישות</p>
                  <p className="text-[.9rem] font-light">‎תעודת הנהלת חשבונות סוג 1+2 - חובה</p>
                  <p className="text-[.9rem] font-light">‎הכרות עם תוכנת Comax - יתרון</p>
                  <p className="text-[.9rem] font-light">‎מ‎שליטה בסביבת Office בדגש על Excel – חובה.</p>
                  <p className="text-[.9rem] font-light">‎ניסיון קודם בחברה קמעונאית – יתרון</p>
                  <p className="text-[.9rem] font-light">‎אחראי/ת, יכולת עבודה בריבוי משימות, סדר וארגון, יכולת למידה עצמאית – חובה.</p>
                </div>

                <Button
                  variant="border"
                  size="none"
                  className="py-[.6em] px-3.5 text-[.7rem] min-w-[8em] rounded-full leading-4 font-light"
                  style={{ alignSelf: "end" }}
                  title="להגשת מעומדות"
                  role="link"
                  onClick={() => navigate("/careers/application/apply/ref/70/")}
                >להגשת מעומדות</Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="תל אביב | נציג שירות לקוחות WhatsApp" className="border-b border-app-border focus-within:shadow-none">
            <AccordionTrigger className="text-[1.1rem] md:text-[1.2rem] text-black font-light border-b border-app-border shadow-none h-[75px] md:h-[85px]">תל אביב | נציג שירות לקוחות WhatsApp</AccordionTrigger>
            <AccordionContent className="bg-white">
            <div className='py-2.5 text-app-text px-4 w-full flex flex-col'>
                <div className="pb-4">
                  <p className="text-[.9rem] font-light">מיקום החנות</p>
                  <p className="text-[.9rem] font-light">תל אביב</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">תיאור</p>
                  <p className="text-[.9rem] font-light">
                    למוקד שירות הלקוחות דרך הוואטצפ, של חברת iStore המשווקת הרשמית של מוצרי אפל בישראל דרושים נציגי שירות.<br />- 98% ממתן השירות נעשה בהתכתבות בלבד. <br />- עבודה לטווח ארוך ללא צורך בניסיון.<br />- המוקד פתוח מ-9:00 עד 18:00, שעות העבודה גמישות.<br />- סביבת עבודה צעירה ומשפחתית מאוד! <br />- אפשרויות קידום במוקד בפרט וברשת בכלל.
                  </p>
                  <p className="text-[.9rem] font-light">המוקד ממוקם במרכז תל אביב</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">דרישות</p>
                  <p className="text-[.9rem] font-light">
                    - תודעת שירות גבוהה ורצון למצוא פתרונות ללקוחות - חובה<br />- אחריות ויצירתיות<br />- יכולת ביטוי מצוינת בדיבור ובכתב
                  </p>
                </div>

                <Button
                  variant="border"
                  size="none"
                  className="py-[.6em] px-3.5 text-[.7rem] min-w-[8em] rounded-full leading-4 font-light"
                  style={{ alignSelf: "end" }}
                  title="להגשת מעומדות"
                  role="link"
                  onClick={() => navigate("/careers/application/apply/ref/70/")}
                >להגשת מעומדות</Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="באר שבע | יועץ/ת שירות ומכירה בסניף iStore" className="border-b border-app-border focus-within:shadow-none">
            <AccordionTrigger className="text-[1.1rem] md:text-[1.2rem] text-black font-light border-b border-app-border shadow-none h-[75px] md:h-[85px]">באר שבע | יועץ/ת שירות ומכירה בסניף iStore</AccordionTrigger>
            <AccordionContent className="bg-white">
            <div className='py-2.5 text-app-text px-4 w-full flex flex-col'>
                <div className="pb-4">
                  <p className="text-[.9rem] font-light">מיקום החנות</p>
                  <p className="text-[.9rem] font-light">תל אביב</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">תיאור</p>
                  <p className="text-[.9rem] font-light">
                    רשת iStore, המשווקת הרשמית של מוצרי Apple בישראל, מזמינה אתכם להצטרף וליהנות מתגמול גבוה ואפשרויות קידום רבות בחברה עם אווירה צעירה ודינאמית!<br />אם אתם מכורים לגאדג׳טים ומכירות זה בדם שלכם, מקומכם איתנו.<br />משרה מלאה.<br />הכשרה מלאה עלינו.<br />העבודה בסניף הרשת בבאר שבע.<br />נגישות תחבורתית רחבה.
                  </p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">דרישות</p>
                  <p className="text-[.9rem] font-light">
                    בעל /ת יכולות מכירה, הכשרה מלאה תינתן למתאימים /ות!<br />אהבה למוצרי Apple וזיקה לטכנולוגיה וגאדג'טים.<br />מוסר עבודה גבוה, יכולת למידה, רצון להתפתח.<br />יתרון לבעלי /ות ידע במחשבי MAC.<br />יתרון לניסיון על רצפת המכירה.<br />מתאים גם לחיילים /ות משוחררים /ות.
                  </p>
                  <p className="text-[.9rem] font-light">הכשרה מלאה על חשבוננו.</p>
                  <p className="text-[.9rem] font-light">* המשרה מיועדת לנשים וגברים כאחד.</p>
                </div>

                <Button
                  variant="border"
                  size="none"
                  className="py-[.6em] px-3.5 text-[.7rem] min-w-[8em] rounded-full leading-4 font-light"
                  style={{ alignSelf: "end" }}
                  title="להגשת מעומדות"
                  role="link"
                  onClick={() => navigate("/careers/application/apply/ref/70/")}
                >להגשת מעומדות</Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="קרית אונו | יועץ/ת שירות ומכירה בסניף iStore" className="border-b border-app-border focus-within:shadow-none">
            <AccordionTrigger className="text-[1.1rem] md:text-[1.2rem] text-black font-light border-b border-app-border shadow-none h-[75px] md:h-[85px]">קרית אונו | יועץ/ת שירות ומכירה בסניף iStore</AccordionTrigger>
            <AccordionContent className="bg-white">
            <div className='py-2.5 text-app-text px-4 w-full flex flex-col'>
                <div className="pb-4">
                  <p className="text-[.9rem] font-light">מיקום החנות</p>
                  <p className="text-[.9rem] font-light">תל אביב</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">תיאור</p>
                  <p className="text-[.9rem] font-light">
                    רשת iStore, המשווקת הרשמית של מוצרי Apple בישראל, מזמינה אתכם להצטרף וליהנות מתגמול גבוה ואפשרויות קידום רבות בחברה עם אווירה צעירה ודינאמית!<br />אם אתם מכורים לגאדג׳טים ומכירות זה בדם שלכם, מקומכם איתנו.<br />משרה מלאה.<br />הכשרה מלאה עלינו.<br />העבודה בסניף הרשת בקרית אונו.<br />נגישות תחבורתית רחבה.
                  </p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">דרישות</p>
                  <p className="text-[.9rem] font-light">
                    בעל /ת יכולות מכירה, הכשרה מלאה תינתן למתאימים /ות!<br />אהבה למוצרי Apple וזיקה לטכנולוגיה וגאדג'טים.<br />מוסר עבודה גבוה, יכולת למידה, רצון להתפתח.<br />יתרון לבעלי /ות ידע במחשבי MAC.<br />יתרון לניסיון על רצפת המכירה.<br />מתאים גם לחיילים /ות משוחררים /ות.
                  </p>
                  <p className="text-[.9rem] font-light">הכשרה מלאה על חשבוננו.</p>
                  <p className="text-[.9rem] font-light">* המשרה מיועדת לנשים וגברים כאחד.</p>
                </div>

                <Button
                  variant="border"
                  size="none"
                  className="py-[.6em] px-3.5 text-[.7rem] min-w-[8em] rounded-full leading-4 font-light"
                  style={{ alignSelf: "end" }}
                  title="להגשת מעומדות"
                  role="link"
                  onClick={() => navigate("/careers/application/apply/ref/70/")}
                >להגשת מעומדות</Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="רעננה | יועץ/ת שירות ומכירה בסניף iStore" className="border-b border-app-border focus-within:shadow-none">
            <AccordionTrigger className="text-[1.1rem] md:text-[1.2rem] text-black font-light border-b border-app-border shadow-none h-[75px] md:h-[85px]">רעננה | יועץ/ת שירות ומכירה בסניף iStore</AccordionTrigger>
            <AccordionContent className="bg-white">
            <div className='py-2.5 text-app-text px-4 w-full flex flex-col'>
                <div className="pb-4">
                  <p className="text-[.9rem] font-light">מיקום החנות</p>
                  <p className="text-[.9rem] font-light">תל אביב</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">תיאור</p>
                  <p className="text-[.9rem] font-light">
                    רשת iStore, המשווקת הרשמית של מוצרי Apple בישראל, מזמינה אתכם להצטרף וליהנות מתגמול גבוה ואפשרויות קידום רבות בחברה עם אווירה צעירה ודינאמית!<br />אם אתם מכורים לגאדג׳טים ומכירות זה בדם שלכם, מקומכם איתנו.<br />משרה מלאה.<br />הכשרה מלאה עלינו.<br />העבודה בסניף הרשת ברעננה.
                  </p>
                  <p className="text-[.9rem] font-light">נגישות תחבורתית רחבה.</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">דרישות</p>
                  <p className="text-[.9rem] font-light">
                    בעל /ת יכולות מכירה, הכשרה מלאה תינתן למתאימים /ות!<br />אהבה למוצרי Apple וזיקה לטכנולוגיה וגאדג'טים.<br />מוסר עבודה גבוה, יכולת למידה, רצון להתפתח.<br />יתרון לבעלי /ות ידע במחשבי MAC.<br />יתרון לניסיון על רצפת המכירה.<br />מתאים גם לחיילים /ות משוחררים /ות.
                    <p className="text-[.9rem] font-light">הכשרה מלאה על חשבוננו.</p>
                    <p className="text-[.9rem] font-light">* המשרה מיועדת לנשים וגברים כאחד.</p>
                  </p>
                </div>

                <Button
                  variant="border"
                  size="none"
                  className="py-[.6em] px-3.5 text-[.7rem] min-w-[8em] rounded-full leading-4 font-light"
                  style={{ alignSelf: "end" }}
                  title="להגשת מעומדות"
                  role="link"
                  onClick={() => navigate("/careers/application/apply/ref/70/")}
                >להגשת מעומדות</Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="תל אביב | יועץ מכירות למוקד הטלפוני iStore" className="border-b border-app-border focus-within:shadow-none">
            <AccordionTrigger className="text-[1.1rem] md:text-[1.2rem] text-black font-light border-b border-app-border shadow-none h-[75px] md:h-[85px]">תל אביב | יועץ מכירות למוקד הטלפוני iStore</AccordionTrigger>
            <AccordionContent className="bg-white">
            <div className='py-2.5 text-app-text px-4 w-full flex flex-col'>
                <div className="pb-4">
                  <p className="text-[.9rem] font-light">מיקום החנות</p>
                  <p className="text-[.9rem] font-light">תל אביב</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">תיאור</p>
                  <p className="text-[.9rem] font-light">
                    רשת iStore, המשווקת הרשמית של מוצרי Apple בישראל, מזמינה אתכם להצטרף וליהנות מתגמול גבוה ואפשרויות קידום רבות בחברה עם אווירה צעירה ודינאמית! לא דרוש נסיון קודם.<br />אם אתם מכורים לגאדג׳טים ומכירות זה בדם שלכם, מקומכם איתנו.<br />• משרה מלאה.<br />• הכשרה מלאה עלינו.<br />• נגישות תחבורתית רחבה.
                  </p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">דרישות</p>
                  <p className="text-[.9rem] font-light">
                    • ניסיון בשירות ומכירה במוקד טלפוני - יתרון.<br />• אהבה לטכנולוגיה וגאדג׳טים ואהבה למוצרי Apple.<br />• יכולת למידה ורצון להתפתח.
                  </p>
                </div>

                <Button
                  variant="border"
                  size="none"
                  className="py-[.6em] px-3.5 text-[.7rem] min-w-[8em] rounded-full leading-4 font-light"
                  style={{ alignSelf: "end" }}
                  title="להגשת מעומדות"
                  role="link"
                  onClick={() => navigate("/careers/application/apply/ref/70/")}
                >להגשת מעומדות</Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="iStore תל אביב | יועץ מכירה ושירות ללקוחות עסקיים" className="border-b border-app-border focus-within:shadow-none">
            <AccordionTrigger className="text-[1.1rem] md:text-[1.2rem] text-black font-light border-b border-app-border shadow-none h-[75px] md:h-[85px]">iStore תל אביב | יועץ מכירה ושירות ללקוחות עסקיים</AccordionTrigger>
            <AccordionContent className="bg-white">
            <div className='py-2.5 text-app-text px-4 w-full flex flex-col'>
                <div className="pb-4">
                  <p className="text-[.9rem] font-light">מיקום החנות</p>
                  <p className="text-[.9rem] font-light">תל אביב</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">תיאור</p>
                  <p className="text-[.9rem] font-light">
                    רשת iStore, המשווקת הרשמית של מוצרי Apple בישראל, מזמינה אתכם להצטרף ולבנות את השלב הבא בקריירה.<br />הזדמנות להשתלב ולצמוח בחברה עם אווירה צעירה ודינאמית, ליהנות מאפשרויות קידום רבות ותגמול גבוה!<br />אם אתם חובבי גאדג׳טים ובעלי תודעת שירות ומכירה עסקית, מקומכם איתנו.
                  </p>
                  <p className="text-[.9rem] font-light">התפקיד כולל:</p>
                  <p className="text-[.9rem] font-light">איתור לקוחות פוטנציאליים וגיוס לקוחות עסקיים.</p>
                  <p className="text-[.9rem] font-light">ניהול תיקי לקוחות.</p>
                  <p className="text-[.9rem] font-light">ניהול משא ומתן.</p>
                  <p className="text-[.9rem] font-light">מתן מענה שירותי VIP בתחום השירות העסקי.</p>
                  <p className="text-[.9rem] font-light">
                    משרה מלאה.<br />הכשרה מלאה עלינו.<br />העבודה במרכז תל אביב.
                  </p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light pb-4">דרישות</p>
                  <p className="text-[.9rem] font-light pb-4">
                    דרישות
                    <span>&nbsp;</span>
                    המשרה
                    <span>:</span>
                  </p>
                  <p className="text-[.9rem] font-light pb-4">נסיון בתחום המכירות והשירות (עדיפות ב-B2B)</p>
                  <p className="text-[.9rem] font-light pb-4">תקשורת בינאישית גבוה, אסרטיביות ויוזמה</p>
                  <p className="text-[.9rem] font-light pb-4">נאמינות, אחריות, חריצות ומחויבות גבוהה</p>
                  <p className="text-[.9rem] font-light pb-4">יכולת ארגון ועבודה עצמאית,</p>
                  <p className="text-[.9rem] font-light pb-4">זיקה לתחום הטכנולוגי ומוצרי Apple בפרט</p>
                </div>

                <Button
                  variant="border"
                  size="none"
                  className="py-[.6em] px-3.5 text-[.7rem] min-w-[8em] rounded-full leading-4 font-light"
                  style={{ alignSelf: "end" }}
                  title="להגשת מעומדות"
                  role="link"
                  onClick={() => navigate("/careers/application/apply/ref/70/")}
                >להגשת מעומדות</Button>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="רוטשילד ת״א | יועץ/ת שירות ומכירה בסניף iStore" className="border-b border-app-border focus-within:shadow-none">
            <AccordionTrigger className="text-[1.1rem] md:text-[1.2rem] text-black font-light border-b border-app-border shadow-none h-[75px] md:h-[85px]">רוטשילד ת״א | יועץ/ת שירות ומכירה בסניף iStore</AccordionTrigger>
            <AccordionContent className="bg-white">
            <div className='py-2.5 text-app-text px-4 w-full flex flex-col'>
                <div className="pb-4">
                  <p className="text-[.9rem] font-light">מיקום החנות</p>
                  <p className="text-[.9rem] font-light">תל אביב</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">תיאור</p>
                  <p className="text-[.9rem] font-light">
                    רשת iStore, המשווקת הרשמית של מוצרי Apple בישראל, מזמינה אתכם להצטרף וליהנות מתגמול גבוה ואפשרויות קידום רבות בחברה עם אווירה צעירה ודינאמית!<br />אם אתם מכורים לגאדג׳טים ומכירות זה בדם שלכם, מקומכם איתנו.<br />משרה מלאה.<br />הכשרה מלאה עלינו.<br />העבודה בסניף הרשת בתל אביב.&nbsp;
                  </p>
                  <p className="text-[.9rem] font-light"> נגישות תחבורתית רחבה.</p>
                </div>

                <div className="pb-4">
                  <p className="text-[.9rem] font-light">דרישות</p>
                  <p className="text-[.9rem] font-light">
                    <span>בעל /ת יכולות מכירה, הכשרה מלאה תינתן למתאימים /ות!</span>
                    <br />
                    <span>אהבה למוצרי Apple וזיקה לטכנולוגיה וגאדג'טים.</span>
                    <br />
                    <span>מוסר עבודה גבוה, יכולת למידה, רצון להתפתח.</span>
                    <br />
                    <span>יתרון לבעלי /ות ידע במחשבי MAC.</span>
                    <br />
                    <span>יתרון לניסיון על רצפת המכירה.</span>
                    <br />
                    <span>מתאים גם לחיילים /ות משוחררים /ות.</span>
                  </p>
                  <p className="text-[.9rem] font-light">הכשרה מלאה על חשבוננו.</p>
                  <p className="text-[.9rem] font-light">* המשרה מיועדת לנשים וגברים כאחד.</p>
                </div>

                <Button
                  variant="border"
                  size="none"
                  className="py-[.6em] px-3.5 text-[.7rem] min-w-[8em] rounded-full leading-4 font-light"
                  style={{ alignSelf: "end" }}
                  title="להגשת מעומדות"
                  role="link"
                  onClick={() => navigate("/careers/application/apply/ref/70/")}
                >להגשת מעומדות</Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </section>
    </>
  )
}

export default Careers