import React, { useState } from 'react'
import { 
    CartCheckoutItem, 
    SEO, 
    Tabs, 
    TabsList, 
    TabsTrigger,
    TabsContent, 
    Icons,
    Input,
    Button,
    Radio
} from '../components';
import ShippingIcon from "../assets/images/shopping_icon.webp";

const checkoutTabs = ["פרטים אישיים", "אפשרויות שילוח", "שיטת תשלום"];

const OneStepCheckout = () => {
    const [checkoutForm, setCheckoutForm] = useState({
        firstName: "",
        lastName: "",
        createInvoice: "",
        company: "",
        telephone: "",
        email: "",
        city: "",
        street0: "",
        street1: "",
        postCode: "",
        street2: "",
        street3: "",
        usePersonalId: "",
        fax: "",
        createNewAccount: true,
        customerPassword: "",
        confirmCustomerPassword: ""
    });
    const [firstNameError, setFirstNameError] = useState("שדה חובה.");
    const [lastNameError, setLastNameError] = useState("שדה חובה.");
    const [createInvoiceError, setCreateInvoiceError] = useState("שדה חובה.");
    const [companyError, setCompanyError] = useState("שדה חובה.");
    const [telephoneError, setTelephoneError] = useState("שדה חובה.");
    const [emailError, setEmailError] = useState("שדה חובה.");
    const [cityError, setCityError] = useState("שדה חובה.");
    const [street0Error, setStreet0Error] = useState("שדה חובה.");
    const [street1Error, setStreet1Error] = useState("שדה חובה.");
    const [postCodeError, setPostCodeError] = useState("שדה חובה.");
    const [street2Error, setStreet2Error] = useState("שדה חובה.");
    const [street3Error, setStreet3Error] = useState("שדה חובה.");
    const [usePersonalIdError, setUsePersonalIdError] = useState("שדה חובה.");
    const [faxError, setFaxError] = useState("שדה חובה.");
    const [createNewAccountError, setCreateNewAccountError] = useState("שדה חובה.");
    const [customerPasswordError, setCustomerPasswordError] = useState("שדה חובה.");
    const [confirmCustomerPasswordError, setConfirmCustomerPasswordError] = useState("שדה חובה.");

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setCheckoutForm({
            ...checkoutForm,
            [name]: value
        })
    }

    return (
        <>
            <SEO 
                title="קופה"
                description="iStore הינה החנות הראשונה בארץ אשר הביאה את בשורת ה-iPod ומוצרי Apple השונים לישראל כחנות קונספט אשר כל כולה מוקדשת ל Apple"
                keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
            />

            <div className='wrapper pt-5 pb-2 px-2 grid grid-cols-[30%_1fr] gap-x-8 items-start'>
                {/* Order Summary Box */}
                <aside className="bg-grey-70 pt-1 pb-4 px-4 direction-rtl divide-y divide-app-border">
                    <header className="pb-1"> 
                        <h3 className="text-[1.4rem] font-light">סיכום הזמנה</h3>
                    </header>

                    {/* Order summary */}
                    <div className='pt-2.5'>
                        {Array.from({ length: 3 }).map((_, i) => (
                            <CartCheckoutItem key={i} />
                        ))}
                    </div>

                    {/* Shipping Date */}
                    <div className='flex items-center justify-center py-4'>
                        <img 
                            src={ShippingIcon}
                            alt="shipping"
                            className="h-[2rem] leading-4 p-2"
                        />

                        <h4 className="text-base font-light">
                        זמן אספקה משוער כ- {" "}
                        <span className='current-cart-shipping-date'>30</span>{" "}
                        ימי עסקים            
                        </h4>
                    </div>

                    {/* Discount */}
                    <p className="text-primary-400 text-[.8em] py-4 underline">יש לך קוד קופון ?</p>

                    {/* Total Price Container */}
                    <div className="space-y-2 pt-2">
                        <div className="flex justify-between">
                            <span className="leading-6 text-base font-light">סכום ביניים</span>
                            <p className="leading-6 text-base font-light">16,596.00 ₪</p>
                        </div>

                        <div className="flex justify-between">
                            <span className="leading-6 text-base">סה״כ</span>
                            <p className="leading-6 text-base">16,596.00 ₪</p>
                        </div>
                    </div>
                </aside>

                {/* Checkout Container */}
                <section className='pr-2 pb-7 direction-rtl'>
                    <Tabs defaultValue="פרטים אישיים">
                        <TabsList className="w-full grid grid-cols-3 direction-rtl gap-x-0">
                            {checkoutTabs.map((tab, index) => (
                                <TabsTrigger 
                                    key={tab}    
                                    value={tab}
                                    className="py-[10px] pr-[15px] bg-[#bcbdc0] text-white border border-white rounded-full text-center data-[state=active]:z-30 ml-0 data-[state=active]:bg-primary-550 data-[state=active]:first:mr-0 data-[state=active]:-ml-10 data-[state=active]:border-white data-[state=active]:text-right first:mr-0 -mr-10 mb-5"
                                >
                                    {index + 1}. {tab}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {/* Tab contents */}
                        <TabsContent value="פרטים אישיים" className="direction-rtl">
                            {/* Form Icon */}
                            <header className="flex items-center gap-x-2">
                                <Icons.User className="h-[1.4rem] leading-4" />

                                {/* Content */}
                                <div className="flex items-center text-base font-light space-x-2">
                                    <p>רשומ/ה לאתר ?</p>{" "}
                                    <Button 
                                        size="none"
                                        className="underline  text-primary-460"
                                    >
                                        התחברות
                                    </Button>
                                {">"}
                                </div>
                            </header>

                            {/* Form */}
                            <div className="w-1/2 px-2 mt-4 pt-2">
                                <h1 className="pb-2 border-b border-app-border text-[1.4em] font-light">פרטים אישיים</h1>

                                {/* Checkout Form */}
                                <form className="flex flex-col gap-y-4 pt-4">
                                    <Input 
                                        type="text"
                                        name="firstName"
                                        placeholder="* שם פרטי"
                                        value={checkoutForm.firstName}
                                        onChange={handleChange}
                                        error={firstNameError}
                                    />

                                        <Input 
                                        type="text"
                                        name="lastName"
                                        placeholder="* שם משפחה"
                                        value={checkoutForm.lastName}
                                        onChange={handleChange}
                                        error={lastNameError}
                                    />

                                    <Radio 
                                        name="createInvoice"
                                        label="תרצה לשנות שם בחשבונית?"
                                        setRadioValue={(value) => setCheckoutForm({ ...checkoutForm, createInvoice: value })}
                                        error={createInvoiceError}
                                        options={["כן", "לא"]}
                                    />

                                    <Input 
                                        type="text"
                                        name="company"
                                        placeholder="* שם בחשבונית"
                                        value={checkoutForm.company}
                                        onChange={handleChange}
                                        error={companyError}
                                    />
                                    
                                    <Input 
                                        type="tel"
                                        name="telephone"
                                        placeholder="* טלפון"
                                        value={checkoutForm.telephone}
                                        onChange={handleChange}
                                        error={telephoneError}
                                        validateNumber
                                        ValidateTelephone
                                    />

                                    <Input 
                                        type="email"
                                        name="email"
                                        placeholder="* כתובת מייל"
                                        value={checkoutForm.email}
                                        onChange={handleChange}
                                        error={emailError}
                                    />

                                    <div className='grid grid-cols-2 gap-x-4'>
                                        <Input 
                                            type="text"
                                            name="city"
                                            placeholder="* עיר"
                                            value={checkoutForm.city}
                                            onChange={handleChange}
                                            error={cityError}
                                        />

                                        <Input 
                                            type="text"
                                            name="street0"
                                            placeholder="* רחוב"
                                            value={checkoutForm.street0}
                                            onChange={handleChange}
                                            error={street0Error}
                                        />
                                    </div>

                                    <div className='grid grid-cols-2 gap-x-4'>
                                        <Input 
                                            type="text"
                                            name="street1"
                                            placeholder="* מספר"
                                            value={checkoutForm.street1}
                                            onChange={handleChange}
                                            error={street1Error}
                                        />

                                        <Input 
                                            type="tel"
                                            name="postCode"
                                            placeholder="מיקוד"
                                            value={checkoutForm.postCode}
                                            onChange={handleChange}
                                            error={postCodeError}
                                        />
                                    </div>

                                    <div className='grid grid-cols-2 gap-x-4'>
                                        <Input 
                                            type="text"
                                            name="street2"
                                            placeholder="* מספר דירה"
                                            value={checkoutForm.street2}
                                            onChange={handleChange}
                                            error={street2Error}
                                        />

                                        <Input 
                                            type="text"
                                            name="street3"
                                            placeholder="כניסה"
                                            value={checkoutForm.street3}
                                            onChange={handleChange}
                                            error={street3Error}
                                        />
                                    </div>

                                    <Input 
                                        type="text"
                                        name="fax"
                                        placeholder="* ת.ז"
                                        value={checkoutForm.fax}
                                        onChange={handleChange}
                                        error={faxError}
                                    />

                                    <label htmlFor='createNewAccount' className='flex items-center gap-x-1.5 text-app-text select-none font-light'>
                                        <Input 
                                            type="checkbox"  
                                            name="createNewAccount"
                                            id="createNewAccount"
                                            containerClassName="w-max"
                                            className="w-max"
                                            value={checkoutForm.createNewAccount}
                                            onChange={handleChange}
                                        />
                                        מעוניינים לפתוח חשבון באתר?
                                    </label>

                                    <Input 
                                        type="password"
                                        name="customerPassword"
                                        placeholder="* סיסמה"
                                        value={checkoutForm.customerPassword}
                                        onChange={handleChange}
                                        error={customerPasswordError}
                                    />

                                    <Input 
                                        type="password"
                                        name="confirmCustomerPassword"
                                        placeholder="* אימות סיסימה"
                                        value={checkoutForm.confirmCustomerPassword}
                                        onChange={handleChange}
                                        error={confirmCustomerPasswordError}
                                    />

                                    <Button 
                                        variant="primary"
                                        title="המשך"
                                        className="rounded-[1.2em] text-[.8em] leading-[1em] min-w-[7em] mt-4 font-light"
                                    >
                                        המשך
                                    </Button>
                                </form>
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>
            </div>
        </>
    )
}

export default OneStepCheckout