import React from "react";

const AuthPage = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex-1 flex overflow-hidden dark:bg-[#651c2b55] bg-[#651c2b] relative justify-center items-center">
        <img
          src="/redis-logo.svg"
          alt="Redis logo"
          className="absolute -left-1/4 opacity-25 -bottom-52 lg:scale-125 xl:scale-100 scale-[2] pointer-events-none select-none -z-1"
        />
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default AuthPage;
