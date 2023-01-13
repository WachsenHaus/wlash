import React, { useEffect } from "react";

export const List = ({
  primary,
  label,
  size,
}: {
  primary?: boolean;
  label?: string;
  size?: "small" | "large";
}) => {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
};
