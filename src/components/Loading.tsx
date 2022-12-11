import React from "react";

export default function Loading() {
  // put picture slightly up up on screen to compensate for the header
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center">
      <div className=" items-center justify-center">
        <img src="/geosleuth.png" className="h-32 w-32 animate-spin" />
      </div>
    </div>
  );
}
