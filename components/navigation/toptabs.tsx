"use client"

import { useState } from "react";

const Toptabs = () => {
  const [main, setMain] = useState(true);

  const tabs = [
    {
      title: 'main',
      active: main
    },
    {
      title: 'extra',
      active: !main
    }
  ]

  const handleTabSwitch = () => {
    setMain(!main);
  }

  return (
    <section className="flex justify-center w-full h-[60px] visible sm:hidden p-2">
      {
        tabs.map(tab => (
          <div
            key={tab.title}
            className={`${tab.active ? "bg-lightgreenblue" : "bg-white" } rounded-lg hover:cursor-pointer text-black text-xl w-full flex justify-center items-center`}
            onClick={handleTabSwitch}
          >
            <p> {tab.title} </p>
          </div>
        ))
      }
    </section>
  );
};

export default Toptabs;