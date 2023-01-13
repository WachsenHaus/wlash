import React, { useEffect } from "react";

interface Props {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
}

export const Button = ({ primary, label, size }: Props) => {
  useEffect(() => {
    console.log("button");
    console.log("button");
    console.log("button");
    console.log("button");
    console.log("button");
  }, []);
  return (
    <div>
      <div
        className={`${
          primary ? "bg-blue-300" : "bg-white"
        } text-3xl text-center`}
      >
        Button
      </div>
    </div>
  );
};
