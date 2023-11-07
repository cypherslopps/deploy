import React, { useState } from 'react'
import { Button, Input, SEO, Textarea } from '../components'
import { Link } from 'react-router-dom'

const CareersApplication = () => {
    const [applicationForm, setApplicationForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        telephone: "",
        coveringLetter: "",
        uploadResume: ""
    });
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [telephoneError, setTelephoneError] = useState("");
    const [coveringLetterError, setCoveringError] = useState("");
    const [uploadResumeError, setUploadResumeError] = useState("");

    const handleChange = ({ target }) => {
        const { name, value } = target;
        
        setApplicationForm({
            ...applicationForm,
            [name]: value
        })
    }

    return (
    <>
        <SEO 
            title="תל אביב | מנהל/ת חשבונות סוג 1+2"
            description="iStore הינה החנות הראשונה בארץ אשר הביאה את בשורת ה-iPod ומוצרי Apple השונים לישראל כחנות קונספט אשר כל כולה מוקדשת ל Apple"
            keywords="דרושים
            jobs
            קורות חיים
            עובדים"
        />

        <section className="pt-8 pb-10 px-2 lg:px-0">
            <header className='p-2 text-right grid grid-cols-1 xs:grid-cols-[60%_40%] items-center'>
                <h6 className="text-base xs:text-[1.1rem] md:text-[1.2rem] font-light">
                    תל אביב | מנהל/ת חשבונות סוג 1+2 {" "}
                    <small className="text-[80%] text-app-text">קוד משרה (70)</small>
                </h6>

                <Link to="/careers" title="בטל" className="text-base font-light xs:text-left">חזור לרשימת המשרות ›</Link>
            </header>

            {/* Form */}
            <form className="p-2 flex flex-col gap-y-4">
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-2 gap-y-4">
                    <Input
                        type="text" 
                        name="firstName"
                        placeholder="* שם פרטי"
                        value={applicationForm.firstName}
                        onChange={handleChange}
                        error={firstNameError}
                    />

                    <Input
                        type="text" 
                        name="lastName"
                        placeholder="* שם משפחה"
                        value={applicationForm.lastName}
                        onChange={handleChange}
                        error={lastNameError}
                    />
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-2 gap-y-4">
                    <Input
                        type="email" 
                        name="email"
                        placeholder="* מייל"
                        value={applicationForm.email}
                        onChange={handleChange}
                        error={emailError}
                    />

                    <Input
                        type="tel" 
                        name="telephone"
                        placeholder="* שם משפחה"
                        value={applicationForm.telephone}
                        onChange={handleChange}
                        error={telephoneError}
                    />
                </div>

                <Textarea 
                    name="coveringLetter"
                    placeholder="הודעה"
                    value={applicationForm.coveringLetter}
                    onChange={handleChange}
                    className="h-20"
                    error={coveringLetterError}
                />

                {/* File */}
                <div className="p-2 xs:p-4 flex flex-col gap-y-1">
                    <label for="uploadResume" className="text-black text-sm xs:text-md font-light">
                        <em>*</em>{" "}
                        קובץ קורות חיים
                    </label>
                    <input 
                        type="file"
                        name="uploadResume"
                        id="uploadResume"
                        value={applicationForm.uploadResume}
                        onChange={({ target }) => setApplicationForm({ ...applicationForm, uploadResume: target.files[0] })}
                        className='bg-grey-400/70 text-app-text outline-none leading-[1.5] w-max font-light py-1'
                    />
                    {/* Error */}
                    {uploadResumeError && (
                        <span className='text-[#f00] text-[.8em] leading-[1.4em] font-bold mt-[.3em]'>{uploadResumeError}</span>
                    )}
                </div>

                <Button
                    variant="border"
                    type="submit"
                    size="none"
                    className="py-[.6em] px-3.5 text-[.8rem] min-w-[8em] rounded-full leading-4 font-light"
                    style={{ alignSelf: "end" }}
                    title="להגשת מעומדות"
                    role="submit button"
                >
                    שליחה
                </Button>
            </form>
        </section>
    </>
    )
}

export default CareersApplication