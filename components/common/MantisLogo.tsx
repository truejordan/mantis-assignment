import React from "react";
import { NextPage } from "next";


interface MantisLogoProps {
  height?: number;
  width?: number;
}


const MantisLogo:NextPage<MantisLogoProps> = ({height = 14, width = 12 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7181 0V14H9.02496V2.6931H7.13363V14H4.44053V2.6931H2.6931V14H0V0H4.44053H11.7181Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MantisLogo;
