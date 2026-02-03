import React from "react";

function Background() {
  return (
    <div className="bg-zinc-800 min-h-screen text-zinc-600 font-gilroy">
      
      {/* Header */}
      <div className="py-6 flex items-center justify-center">
        <h3 className="text-md tracking-wide font-semibold">
          Documents
        </h3>
      </div>

      {/* Hero */}
      <div className="flex items-center justify-center h-[calc(100vh-72px)]">
        <h1 className="text-[13rem] leading-[0.9] tracking-tighter font-semibold">
          Docs.
        </h1>
      </div>

    </div>
  );
}

export default Background;
