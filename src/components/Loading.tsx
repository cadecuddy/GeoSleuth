import React from "react";

export default function Loading() {
  return (
    <div className="h-screen">
      <div className="flex h-full items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-[#72cea6]"></div>
      </div>
    </div>
  );
}
