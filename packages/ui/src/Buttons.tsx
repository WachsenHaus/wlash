import React, { useEffect } from "react";

export const Buttons = () => {
  useEffect(() => {
    console.log("button");
    console.log("button");
  }, []);
  return (
    <>
      <div className="text-3xl text-center">Buttons</div>;
      <div className="ml">Buttons</div>;
    </>
  );
};
