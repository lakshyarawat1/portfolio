'use client'
import { Manufacturing_Consent } from 'next/font/google';
import React, { useEffect, useState } from 'react'

type Props = {}

const latin = Manufacturing_Consent({
  subsets: ["latin"],
    weight: "400",
    display: "swap",
  adjustFontFallback: false
});

const Clock = (props: Props) => {

      const [time, setTime] = useState<String | null>(null);
      
      useEffect(() => {
        const timer = setInterval(() => {
          setTime(new Date().toLocaleTimeString());
        }, 1000);
    
        return () => clearInterval(timer);
      },[])

  return (
    <span className={`${latin.className} text-amber-100 font-semibold text-2xl`}>
      {time}
    </span>
  );
}

export default Clock