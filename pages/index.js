import Head from "next/head";
import Image from "next/image";
import React from "react";
import "@/styles/globals.css";

const index = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center h-screen overflow-y-hidden relative">
          <div className="z-0 absolute opacity-25">
            <video autoPlay loop id="CSvideo">
              <source src="CSbgV.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="z-0 absolute">
            <Image src="/CScircle.svg" alt="" width="470" height="470" />
          </div>
          <div className="z-0 text-white flex items-center justify-center flex-col w-4/6 max-lg:w-5/6 text-center  ">
            <Image src="/edc_logo.png" alt="" width="150" height="150" />
            <div className="space-y-4">
              <div className="space-y-3">
                <h1
                  className="text-3xl max-md:text-2xl  pl-5 tracking-4"
                  id="CStagline"
                >
                  Get Ready to Pitch & Sizzle!🚀
                </h1>
                <p className="px-40 max-lg:px-20 max-md:px-12 max-sm:px-4 text-32 italic ">
                  {" "}
                  Introducing EDC&apos;s latest venture: &quot;Pitch. Get
                  Roasted. Elevate&quot; Have a startup idea? We&apos;re here to
                  give it a witty twist, pinpoint its strengths, and highlight
                  areas for improvement. Stay tuned. The ultimate startup roast
                  experience is brewing !
                </p>
              </div>
              <div className="text-orange">
                <h2 className="text-3xl font-bold tracking-3">COMING SOON</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
