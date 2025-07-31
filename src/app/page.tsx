import Image from "next/image";
import localFont from 'next/font/local'
import Header from "@/components/Header";
import Clock from "@/components/Clock";
import { Rajdhani } from "next/font/google";

const tusker=localFont({
  src:'../../public/fonts/TuskerGrotesk-2500Medium.woff2'
})

const migra = localFont({
  src:'../../public/fonts/Migra-Extralight.woff2',
})

const rajdhani = Rajdhani({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false
})

export default function Home() {
  return (
    <>
      <div>
        <Image
          src="/mainBG.jpg"
          alt="main-bg"
          width={100}
          height={100}
          className="w-screen h-screen fixed -z-10"
          unoptimized
        />
        <Header />
        <div className="flex py-12 px-4">
          <div className="max-w-[40%]">
            <p
              className={`${tusker.className} text-amber-100 font-extralight text-9xl `}
            >
              DEVELOPER{" "}
              <span
                className={`${migra.className} text-5xl font-bold text-shadow-amber-100`}
              >
                &
              </span>{" "}
              PENTESTER
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Clock />
            </div>
          </div>
          <div className="max-w-[60%]">
            <p
              className={`${migra.className} text-amber-100 font-semibold text-2xl mt-4 w-2/3`}
            >{ /*Description Here*/ }</p>
          </div>
        </div>
        <div className="text-white text-center mt-4 w-full flex flex-col">
          <p className={`${rajdhani.className} font-semibold text-2xl`}>
            वीराः न पतन्ति, ते स्वर्गं गच्छन्ति।
          </p>
          <p className={`${migra.className} text-2xl`}>Что нас не убивает, делает нас сильнее</p>
        </div>
      </div>
    </>
  );
}
