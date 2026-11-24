"use client";
import { ASSETS_BASE_URL } from "@/lib/variables";
import { motion } from "motion/react";
import Image from "next/image";

export function WorldMapDemo() {
  return (
    <div className="w-full h-full">
      <img src={`${ASSETS_BASE_URL}/tempAssets/offices.svg?updatedAt=1739013270604`} alt="World Map" className='w-full h-full object-cover' />
    </div>
    // <div className=" dark:bg-black bg-white w-full">
    //   <WorldMap
    //     dots={[
    //       {
    //         start: { lat: 51.52742508409249, lng: -0.0888550865049684 }, // London
    //         end: { lat: 25.277776576910497, lng: 55.68048731533995 }, // Dubai
    //       },
    //       {
    //         start: { lat: 25.277776576910497, lng: 55.68048731533995 }, // Dubai
    //         end: { lat: 25.17251450463322, lng: 75.85073259203975 }, // Kota
    //       },
    //       {
    //         start: { lat: 25.17251450463322, lng: 75.85073259203975 }, // kota
    //         end: { lat: 26.853769335847314, lng: 75.77015394233001 }, // jaipur
    //       },
    //       {
    //         start: { lat: 26.853769335847314, lng: 75.77015394233001 }, // jaipur
    //         end: { lat: 51.52742508409249, lng: -0.0888550865049684 } // London
    //       }
    //     ]}
    //   />
    // </div>
  );
}
