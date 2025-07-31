import Image from "next/image";
import localFont from 'next/font/local'
import Header from "@/components/Header";

const tusker=localFont({
  src:'../../public/fonts/TuskerGrotesk-2500Medium.woff2'
})

const migra = localFont({
  src:'../../public/fonts/Migra-Extralight.woff2',
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
        <div className="flex flex-col">
          <div className="max-w-[40%]">
            <p
              className={`${tusker.className} text-amber-100 font-extralight text-9xl `}
            >
              DEVELOPER <span className={`${migra.className} text-5xl font-bold text-shadow-amber-100`}>&</span> PENTESTER
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
