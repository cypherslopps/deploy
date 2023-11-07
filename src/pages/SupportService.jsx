import React from 'react'
import { SEO } from '../components'
import { Link } from 'react-router-dom'
import { buttonVariants } from '../components/ui/Button'
import { cn } from '../lib/utils'

const SupportService = () => {
  return (
    <>
      <SEO 
        title="תמיכה מרחוק"
        description="iStore הינה החנות הראשונה בארץ אשר הביאה את בשורת ה-iPod ומוצרי Apple השונים לישראל כחנות קונספט אשר כל כולה מוקדשת ל Apple
        "
        keywords="iPhone, iPad, iPod, iMac, Mac Mini, MacBook Air, MacBookPro, Apple Tv"
      />

      <main className="wrapper p-2 text-center direction-rtl">
        <div className="py-8 px-2">
          {/* Team Viewer */}
          <div className="mb-6 mt-4">
            <h4 className="text-[1.3rem] mb-5 lg:mb-4 lg:text-[1.4em] font-light">תמיכה באמצעות TeamViewer</h4>

            {/* Download Link Container */}
            <div className='mt-4 w-max md:w-[70%] xl:w-3/5 mx-auto flex flex-col items-center md:flex-row md:justify-between'>
              <Link 
                to="http://download.teamviewer.com/download/TeamViewerQS.dmg"
                className={cn(`${buttonVariants({ variant: "primary", size: "none" })}`,  "rounded-[1.2em] my-3 md:m-2 border border-primary-400 px-2.5 xl:px-4 py-[.45em] xl:py-[.3em] min-w-[8em] text-sm md:text-[.92rem] xl:text-md leading-4 font-light")}
              >
                הורד גרסה ל-Mac
              </Link>

              <Link 
                to="http://download.teamviewer.com/download/TeamViewerQS_he.exe"
                className={cn(`${buttonVariants({ variant: "primary", size: "none" })}`,  "rounded-[1.2em] my-3 md:m-2 border border-primary-400 px-2.5 xl:px-4 py-[.45em] xl:py-[.3em] min-w-[8em] text-sm md:text-[.92rem] xl:text-md leading-4 font-light")}
              >
                הורד גרסה ל-Windows
              </Link>
            </div>
          </div>

          {/* AnyDesk */}
          <div className='mt-24'>
            <h4 className="text-[1.3rem] mb-5 lg:mb-4 lg:text-[1.4em] font-light">תמיכה באמצעות AnyDesk</h4>

            <div className='w-max md:w-[70%] xl:w-3/5 mx-auto flex flex-col items-center md:flex-row md:justify-between'>
              <Link 
                to="https://anydesk.com/download?os=mac"
                className={cn(`${buttonVariants({ variant: "primary", size: "none" })}`,  "rounded-[1.2em] my-3 md:m-2 border border-primary-400 px-2.5 xl:px-4 py-[.45em] xl:py-[.3em] min-w-[8em] text-sm md:text-[.92rem] xl:text-md leading-4 font-light")}
              >
                הורד גרסה ל-Mac
              </Link>

              <Link 
                to="https://anydesk.com/download?os=win"
                className={cn(`${buttonVariants({ variant: "primary", size: "none" })}`,  "rounded-[1.2em] my-3 md:m-2 border border-primary-400 px-2.5 xl:px-4 py-[.45em] xl:py-[.3em] min-w-[8em] text-sm md:text-[.92rem] xl:text-md leading-4 font-light")}
              >
                הורד גרסה ל-Windows
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SupportService