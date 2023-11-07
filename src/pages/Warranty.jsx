import React from 'react'
import { Link } from 'react-router-dom'
import { SEO } from '../components'

const Warranty = () => {
  return (
    <>
        <SEO 
            title="יתרונות לרכישה"
            description="iStore הינה החנות הראשונה בארץ אשר הביאה את בשורת ה-iPod ומוצרי Apple השונים לישראל כחנות קונספט אשר כל כולה מוקדשת ל Apple"
            keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
        />

        <main className="wrapper p-2 text-center direction-rtl">
            <section className="py-9 px-2">
                <h1 className="text-[2em] pb-10 leading-4 font-light">תנאי אחריות | iStore</h1>

                {/* Content */}
                <div className="w-[93%] max-w-[980px] mx-auto space-y-5 text-right">
                    <p>
                        <span className="text-[.9rem] xl:text-base font-light">סער טכנולוגיות (ז.ח) בע”מ, ח.פ. 514632561 (להלן: ״<strong className="font-bold">החברה</strong>״) אחראית בזאת כלפי הקונה, לתקינותו של הציוד אשר מסומן בחשבונית שהינו באחריות ״iStore״ וזאת לתקופה של 12 חודשים או 24 חודשים (<strong className="font-bold">לרוכשים אחריות מורחבת ל-24 חודשים</strong>) או 36 חודשים (<strong className="font-bold">לרוכשים אחריות מורחבת ל-36 חודשים</strong>) החל מיום רכישת המוצר (להלן: "<strong className="font-bold">תקופת האחריות</strong>"), בכפוף לאמור להלן:</span>
                    </p>

                    {/* List */}
                    <ol className="flex flex-col gap-y-3.5 mt-1 pr-10 pb-6 pl-6 list-none" style={{ counterReset: "item" }}>
                        <li className="orderedList pr-2">
                            <span className="font-light text-[.9rem] xl:text-base">האחריות תחול במתכונתה הנוכחית כמפורט במסמך זה רק על ציוד המופיע בחשבונית הרכישה (להלן: ”<strong className="font-bold">הציוד</strong>”/”<strong className="font-bold">פרטי הציוד</strong>״) ומסומן בחשבונית ״באחריות iStore״ ולצרכן הפרטי שרכש את הציוד לשימוש אישי, ביתי או משפחתי ולא למטרות מסחריות.</span>
                        </li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">לרוכשים iStoreCare עבור מוצר Apple שלא נרכש מהחברה, תקופת האחריות תחל בהתאם למועד תחילת תקופת אחריות Apple, כפי שמעודכן במערכות Apple, ובכל מקרה לא תחל במועד מאוחר למועד רכישת המוצר המכוסה באחריות המורחבת.</li>

                        <li className="orderedList pr-2">
                            <span className="font-light text-[.9rem] xl:text-base">בתקופת האחריות, החברה, ועל פי שיקול דעתה הבלעדי, תתקן או תחליף, בכפוף לסעיף 5 להלן, את הציוד או חלקו ואשר ימצאו ע”י החברה פגומים או בלתי תקינים וזאת ללא חיוב הקונה בתשלום ובלבד שפריטי הציוד יובאו אל תחנת השירות/החנות (כל סניפי רשת iStore) (להלן: ״<strong className="font-bold">נקודת השירות</strong>״).</span>
                        </li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">ההובלה תעשה ע”י הקונה, על חשבונו ועל אחריותו בלבד, בהתאם לקבוע בחוק.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">במקרה של שירות בבית הלקוח (שירות בתשלום), ינתן השירות בתחומים אשר יקבעו עפ”י החלטת החברה.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">אחריות החברה ע”פ כתב אחריות זה ובכלל, לא תחול בכל אחד מהמקרים הבאים, אשר בהם כל תיקון ו/או החלפה של הציוד, לרבות עלות חלפים ופרטי ציוד מוחלפים, בדיקתו ושעות עבודה שיושקעו בתיקון יבוצעו בתשלום בהתאם למחירון החברה שיהיה בתוקף באותה העת, ואלה המקרים:</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">אם ניזוק פריט הציוד ע”י שבר, כוח עליון, רשלנות, זדון, שפיכת נוזלים, לחץ בלתי סביר על המעטפת, חשיפה לשמש או לטמפ׳ חריגה.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">אם ניזוק פריט חומרה כתוצאה משימוש לא נכון, או שלא לפי הוראות היצרן, או בלתי זהיר, או כתוצאה משינויים במתח החשמל או כתוצאה משימוש במתח חשמל אשר אינו מתאים או כתוצאה משימוש בציוד שאינו מתאים.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">אם נעשה כל טיפול, שינוי או תיקון בפריט הציוד ע”י מישהו שאינו טכנאי מורשה מטעם החברה.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">באם מקור הקלקול בנזק מכוון/בלתי מכוון שנגרם ע”י הקונה ו/או צד שלישי.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">במקרים של שחיקת חלקים מתכלים, כגון סוללות או ציפויי מגן שמיועדים להתבלות עם הזמן, אלא אם כן הכשל אירע כתוצאה מפגם בחומרים או בעבודת הייצור.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">בכל מוצר הכולל מסך, כמות הפיקסלים לרבות כמות הפיקסלים ה״שרופים״ הנורמלית, צבעם וצפיפותם, נקבעים כתנאי ע״י היצרן, לשם החלפת או תיקון המוצר במסגרת האחריות. במקרה כזה, תפעיל החברה ע״פ הנחיות היצרן.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">מובהר כי אחריות ”החברה“ על פי תעודה זו ובכלל, אינה חלה ביחס לתוכנה או לכל הקשור בתוכנה.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">החברה אינה אחראית לכל נזק עקיף או תוצאתי מכל מין וסוג, ומבלי לפגוע מכלליות האמור בראשית הסעיף, מוצהר במפורש שבמידה והתיקון ו/או השירות כרוך בהעברת אינפורמציה בדיסקים קשיחים ו/או במדיה מגנטית ו/או אופטית ו/או בכל צורה אחרת, החברה אינה אחראית בכל צורה שהיא, לאינפורמציה האמורה ו/או להעברתה וכל אחריות לגיבוי אינפורמציה תחול על הלקוח בלבד.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">במידה ותידרש החברה להתקין מחדש את מערכת ההפעלה מתחייב הלקוח כתנאי להתקנה לספק לחברה את מערכת ההפעלה המקורית שרכש כדין ו/או אשר סופקה לו במעמד רכישת הציוד.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">מוצהר במפורש, שבמידה והחברה תחליף באחריות פריט או חלק פגום בציוד, ישאר החלק או הפריט הפגום בבעלותה הבלעדית, כאשר הלקוח רשאי לרכוש מהחברה את הפריט/החלק הפגום שהוחלף במחיר כמפורט במחירוני החברה באותה העת. מוסכם כי האחריות על הפריט המוחלף תסתיים עם תום תקופת האחריות של תעודה זו.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">בכל פניה בדבר מימוש האחריות יציג הקונה הוכחת רכישה. במידה ופתחתם כרטיס לקוח בעת הרכישה, נוכל לשחזר את הוכחת הרכישה עבורכם.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">באחריות מורחבת מסוג iStore Care עבור iPhone, Apple TV, iPad, iPod ו-Apple Watch, החברה תעניק שירות במעבדותיה בהתאם לתנאי האחריות המפורטים במסמך זה לפרק זמן נוסף של 12 חודשים נוספים ממועד סיום שנת האחריות הראשונה ובהתאם לתנאי האחריות של חברת Apple.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">באחריות מורחבת מסוג iStore Care for Mac, החברה תעניק שירות במעבדותיה בהתאם לתנאי האחריות המפורטים במסמך זה לפרק זמן של עד 24 חודשים נוספים ממועד סיום שנת האחריות הראשונה (בהתאם לסוג הרחבת האחריות שנרכשה) ובהתאם לתנאי האחריות של חברת Apple.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">באחריות מורחבת מסוג iStore Care Plus עבור Mac, iPhone, iPad ו-Apple Watch, החברה תעניק שירות במעבדותיה בהתאם לתנאי האחריות המפורטים במסמך זה לפרק זמן של עד 36 חודשים (פרק הזמן הקובע יהיה בהתאם לפרק הזמן המפורט בחשבונית הקנייה להרחבת אחריות זו) החל ממועד רכישת המכשיר ובהתאם לתנאי האחריות של iStore כמפורט בסעיפים 20-21:</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">תנתן אפשרות לטיפול יחיד בנזקים פיזיים או נזקי מים שנגרמו למכשיר בהשתתפות עצמית בסך 20% מעלות התיקון ומוגבל למימוש אחד לכל אורך תקופת ההרחבה.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">האמור בסעיף 19 לא יתקיים במידה ויימצא כי המכשיר שיימסר הוא במצב ״טוטאל-לוס״ על פי הגדרת היצרן (VMI Red).</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">באחריות מורחבת מסוג iStore Care עבור אביזרים נלווים, תעניק החברה שירות עבור תחנות עגינה,כבלים, מתאמים, כונני אחסון, ספקים וסוללות, מקלדות, עכברים, אזניות ורמקולים כמפורט במסמך זה לפרק זמן של עד 12 חודשים נוספים ממועד סיום שנת אחריות הראשונה בהתאם לתנאי האחריות המפורטים במסמך זה.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">באחריות מורחבת מסוג iStore Care עבור מגני מסך ל-iPhone, יתאפשר ללקוח לבצע עד 5 החלפות למגן המסך המשתתף בתוכנית לפרק זמן של 12 חודשים נוספים ממועד סיום שנת אחריות הראשונה.</li>

                        <li className="orderedList pr-2 text-[.9rem] xl:text-base font-light">מוסכם בזאת כי בכל מקרה של מחלוקת משפטית יהיו בתי המשפט באזור תל אביב היחידים המורשים לדון בענייניה של החברה.</li>
                    </ol>
                </div>
            </section>
        </main>
    </>
  )
}

export default Warranty