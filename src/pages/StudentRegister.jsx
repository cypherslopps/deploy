import React, { useState } from 'react';
import { Icons, Input, Radio, File, SEO, Select, Button } from '../components';
import { useOffscreen } from '../providers';
import IStoreStudentProgram from "../assets/images/istore_student_program.png";

const StudentRegister = () => {
    const { setType, openOffscreen } = useOffscreen();
    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        telephone: "",
        idCard: "", 
        attachDocument: "",
        approveYear: "",
        password: "",
        confirmPassword: ""
    });
    const [attachment1, setAttachment1] = useState(null);
    const [attachment2, setAttachment2] = useState(null);

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [telephoneError, setTelephoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [idCardError, setIdCardError] = useState("");
    const [attachDocumentError, setAttachDocumentError] = useState("");
    const [attachment1Error, setAttachment1Error] = useState("");
    const [attachment2Error, setAttachment2Error] = useState("");
    const [approveYearError, setApproveYearError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmError] = useState("");

    const openUserFormModal = () => {
        // Set offscreen type
        setType("user-form-modal");
    
        // Toggle modal
        openOffscreen();
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setRegister({
            ...register,
            [name]: value
        })
    }

    return (
    <>
        <SEO 
            title="הרשמה סטודנטים"
            description="iStore הינה החנות הראשונה בארץ אשר הביאה את בשורת ה-iPod ומוצרי Apple השונים לישראל כחנות קונספט אשר כל כולה מוקדשת ל Apple"
            keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
        />

        <main className="wrapper grid grid-cols-1 md:grid-cols-2 direction-rtl">
            {/* Info */}
            <section className='flex xl:items-center'>
                <div className="w-[90%] max-w-[1060px] mx-[5%] mt-0 mb-[60px] md-md:mt-[55px] md-md:mb-[120px] md:my-[76px] xl:my-[120px] text-right">
                    {/* Headline Container */}
                    <div className="mt-[70px] mb-[30px] text-center flex flex-col items-center">
                        <img 
                            src={IStoreStudentProgram}
                            alt="iStore Student Program | תוכנית סטודנטים באייסטור"
                            className="w-[55%] max-w-[400px] mb-[30px]"
                        />
                        <p className="text-[15px] md-md:text-[17px] leading-[1.2em]">
                            סטודנטים, סגל אקדמי ומורים בבתי ספר,
                            <br />
                            iStore מזמינה אתכם לרכוש Mac במחיר מיוחד עבורכם - לאורך כל השנה!
                        </p>
                    </div>
                    <p className="text-[15px] md-md:text-[17px] leading-[1.2em]">
                        לקבלת ההטבה יש למלא את פרטיכם כפי שמופיעים בתעודת הסטודנט.
                        <br />
                        חשבונית העסקה תצא על שם הסטודנט כפי שמוצג בתעודה בלבד. לא ניתן יהיה לשנות את השם בחשבונית.
                        <br />
                        על תעודת הסטודנט חייב להיות מוטבע הכיתוב Student ID, שנת הלימודים ושם הסטודנט באנגלית - יש לצרף את 2 צידי התעודה.
                        <br />
                        במקרה של אישור לימודים / העסקה - על האישור להיות בשפה האגלית בלבד ולכלול את לוגו המוסד, שם הסטודנט / סגל אקדמי / מורה ושנת הלימודים.
                    </p>
                    <p className="text-[12px] md-md:text-[13px] mt-[25px] leading-[1.2em]">ללא כפל מבצעים או הטבות | ההטבה הינה על דגמים נבחרים ממשפחת מחשבי ה-Mac.</p>
                </div>
            </section>

            {/* Form */}
            <section className='pb-8 p-2'>
                <div className="pt-[35px] pb-[20px] border-b-2 border-[#f4f4f4]">
                    {/* Student Login */}
                    <div className="mb-[13.5px] md:mb-[15px] flex items-center gap-x-1">
                        <Icons.User className="h-[1.55em] leading-[1em]" />
                        <span className="text-base md:text-[1.2em]">רשומים לאתר?</span>
                        <span
                            onClick={openUserFormModal} 
                            className="text-base md:text-[1.2em] underline text-[#004567]"
                        >
                            {"יש להתחבר תחילה >"}
                        </span>
                    </div>
                    <div className='title text-base md:text-[1.2em]'>
                        פרטים אישיים 
                        <span className='note text-[12px] md:text-[13px] pr-[15px]'>יש למלא את כל הפרטים באנגלית בלבד</span>
                    </div>
                </div>

                {/* Form */}
                <form className="w-[562px] max-w-full grid gap-y-3 mt-6 md:mt-10">
                    <Input 
                        type="text"
                        name="firstName"
                        placeholder="שם פרטי"
                        title="שם פרטי"
                        className="h-[45px] border-2 border-[#f4f4f4] text-black placeholder:text-black/50 placeholder:font-normal"
                        value={register.firstName}
                        onChange={handleChange}
                        error={firstNameError}
                    />

                    <Input 
                        type="text"
                        name="lastName"
                        placeholder="שם משפחה"
                        title="שם משפחה"
                        className="h-[45px] border-2 border-[#f4f4f4] text-black placeholder:text-black/50 placeholder:font-normal"
                        value={register.lastName}
                        onChange={handleChange}
                        error={lastNameError}
                    />

                    <Input 
                        type="text"
                        name="telephone"
                        placeholder="טלפון"
                        title="טלפון"
                        className="h-[45px] border-2 border-[#f4f4f4] text-black placeholder:text-black/50 placeholder:font-normal"
                        value={register.telephone}
                        onChange={handleChange}
                        error={telephoneError}
                    />

                    <Input 
                        type="text"
                        name="email"
                        placeholder="כתובת EMAIL"
                        title="כתובת EMAIL"
                        className="h-[45px] border-2 border-[#f4f4f4] text-black placeholder:text-black/50 placeholder:font-normal"
                        value={register.email}
                        onChange={handleChange}
                        error={emailError}
                    />

                    <Input 
                        type="text"
                        name="idCard"
                        placeholder="תעודת זהות"
                        title="תעודת זהות"
                        className="h-[45px] border-2 border-[#f4f4f4] text-black placeholder:text-black/50 placeholder:font-normal"
                        value={register.idCard}
                        onChange={handleChange}
                        error={idCardError}
                    />

                    <Radio 
                        name="attachDocument"
                        label="בחר את סוג המסמך שברשותך"
                        setRadioValue={(value) => setRegister({ ...register, attactDocument: value })}
                        error={attachDocumentError}
                        options={["אישור לימודים", "תעודת סטודנט"]}
                        className="direction-ltr items-end"
                        childrenClassName="font-normal text-black"
                    />

                    <File 
                        name="attachment1"
                        label="הוסף מסמך"
                        className="mt-1.5"
                        setFile={setAttachment1}
                        value={attachment1}
                        error={attachment1Error}
                    />

                    <File 
                        name="attachment1"
                        label="הוסף מסמך"
                        className="mt-1.5"
                        setFile={setAttachment1}
                        value={attachment1}
                        error={attachment1Error}
                    />
                    
                    <Select 
                        name="approveYear"
                        label=" תוקף תעודה"
                        value={register.approveYear}
                        onChange={handleChange}
                        containerClassName="flex-col items-start gap-y-2"
                        labelClassName="md:text-base text-black"
                        className="h-[45px] border-2 border-[#f4f4f4] w-[153px] text-md xs:text-base md:text-base lg:text-lg text-black font-normal"
                        options={[
                            2023,
                            2024,
                            2025,
                            2026,
                            2027,
                            2028,
                            2029,
                            2030,
                            2031,
                            2032
                        ]}
                        error={approveYearError}
                    />

                    <Input 
                        type="password"
                        name="password"
                        placeholder="סיסמה"
                        title="סיסמה"
                        className="h-[45px] border-2 border-[#f4f4f4] text-black placeholder:text-black/50 placeholder:font-normal"
                        value={register.password}
                        onChange={handleChange}
                        error={passwordError}
                    />

                    <Input 
                        type="password"
                        name="confirmPassword"
                        placeholder="אימות סיסמה"
                        title="אימות סיסמה"
                        className="h-[45px] border-2 border-[#f4f4f4] text-black placeholder:text-black/50 placeholder:font-normal"
                        value={register.confirmPassword}
                        onChange={handleChange}
                        error={confirmPasswordError}
                    />

                    <Button
                        variant="primary"
                        className="h-[37px] leading-[37px] md:text-[.8em] min-w-[8em] rounded-[1.2em] justify-self-center md:justify-self-end mt-2"
                    >
                        שלח בקשה
                    </Button>
                </form>
            </section>
        </main>
    </>
    )
}

export default StudentRegister