"use client";

import MobileNavigation from "@/components/navigation/MobileNavigation";
import QuestList from "@/components/quests/QuestList";
import { useGlobalState } from "@/context/GlobalStateContext";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

export default function Quests() {
  const { token } = useGlobalState();

  useEffect(() => {
    if (!token) redirect("/sign-up");
  }, [token]);

  return (
    <div className="font-xeroda">
      <div
        style={{
          background: "linear-gradient(93.77deg, #0057FF 0%, #16A0FF 95.76%)",
        }}
        className="h-[340px] w-full lg:px-16 px-4 pt-9 lg:pt-10"
      >
        <div className="flex h-full flex-col items-stretch">
          <div className="flex items-center justify-between">
            {/* <FaArrowLeft className="lg:w-11 lg:h-11 w-[22px] h-[22px]" /> */}
            <div className=""></div>
            <p className="lg:text-4xl text-xl">Your Quest</p>
            <div className="">
              <div className="lg:hidden">
                <MobileNavigation />
              </div>
            </div>
          </div>

          <div className="h-full flex-grow space-x-3 flex items-center justify-center">
            <p className="lg:text-5xl text-2xl">Quest</p>
          </div>
        </div>
      </div>

      <section>
        <QuestList />
      </section>
    </div>
  );
}
