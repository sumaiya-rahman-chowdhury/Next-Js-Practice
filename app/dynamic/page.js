// "use client"
import React from "react";
import { getCatFacts } from "../api/api";
import Button from "../component/button";

export default async function Dynamic() {
  const catfact = await getCatFacts("dynamic");
  console.log(catfact);
  return (
    <div>
      <h1
        className="text-center text-6xl mt-20
      uppercase text-blue-800 font-bold
      "
      >
        Hello,from Dynamic
      </h1>
      <div>
        <p className="text-center text-2xl mt-10">Here is a random cat fact:</p>
        <p className="text-center text-xl mt-4">{catfact.fact}</p>
      </div>
      <div className="flex justify-center">
        <Button />
      </div>
    </div>
  );
}
