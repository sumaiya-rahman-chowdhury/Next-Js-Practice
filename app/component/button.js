"use client";

export default function Button() {
  return (
    <div>
      <button
        onClick={() => console.log("first")}
        className="bg-blue-300 text-black px-4 py-2 
        mt-4 "
      >
        Get new fact
      </button>
    </div>
  );
}
