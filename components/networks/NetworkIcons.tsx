import React from "react";
import { NextPage } from "next";

export type NetworkIconType = "phantom" | "MetaMask" | string | undefined;

interface props {
  icon?: NetworkIconType;
  height?: number;
  width?: number;
}

const NetworkIcons: NextPage<props> = ({ icon, width, height }) => {
  switch (icon) {
    default:
    case "phantom":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.57774 17.2186C8.20421 19.3234 5.90258 21.9871 2.83997 21.9871C1.39218 21.9871 4.62299e-05 21.3912 1.11278e-09 18.8021C-0.000115571 12.2083 9.00212 2.00099 17.3548 2.00085C22.1065 2.00076 24 5.29754 24 9.04142C24 13.847 20.8816 19.3419 17.782 19.3419C16.7983 19.3419 16.3156 18.8017 16.3156 17.9451C16.3156 17.7215 16.3526 17.4793 16.427 17.2186C15.3689 19.0252 13.3272 20.7019 11.4153 20.7019C10.0232 20.7019 9.31793 19.8263 9.31791 18.5969C9.31791 18.1498 9.41072 17.6843 9.57774 17.2186ZM15.7775 7.07074C15.0215 7.07208 14.506 7.71445 14.5076 8.63084C14.5092 9.54723 15.027 10.2061 15.7831 10.2048C16.5209 10.2035 17.0361 9.5428 17.0345 8.62638C17.0329 7.70999 16.5153 7.06944 15.7775 7.07074ZM19.7881 7.06637C19.032 7.06771 18.5166 7.71008 18.5182 8.62647C18.5198 9.54287 19.0373 10.2018 19.7936 10.2004C20.5315 10.1992 21.0467 9.53843 21.0451 8.62201C21.0434 7.70562 20.5259 7.06507 19.7881 7.06637Z"
            fill="#AB9FF2"
          />
        </svg>
      );
      
    case "MetaMask":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M22.8046 1L13.4398 7.87731L15.1716 3.8198L22.8046 1Z"
            fill="#E2761B"
            stroke="#E2761B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.18616 1L10.4756 7.94246L8.82851 3.8198L1.18616 1Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.4357 16.9417L16.9415 20.72L22.2781 22.1717L23.8122 17.0254L19.4357 16.9417Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.197021 17.0254L1.72173 22.1717L7.05823 20.72L4.5641 16.9417L0.197021 17.0254Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75709 10.5576L5.27002 12.7818L10.5689 13.0144L10.3806 7.38416L6.75709 10.5576Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.2327 10.5576L13.5622 7.31897L13.4398 13.0144L18.7292 12.7818L17.2327 10.5576Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.05872 20.7198L10.2399 19.1843L7.49166 17.0625L7.05872 20.7198Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.7504 19.1843L16.9409 20.7198L16.4986 17.0625L13.7504 19.1843Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.9409 20.7199L13.7504 19.1844L14.0045 21.2411L13.9762 22.1066L16.9409 20.7199Z"
            fill="#D7C1B3"
            stroke="#D7C1B3"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.05872 20.7199L10.0235 22.1066L10.0046 21.2411L10.2399 19.1844L7.05872 20.7199Z"
            fill="#D7C1B3"
            stroke="#D7C1B3"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.0703 15.7039L7.41614 14.9315L9.28907 14.0846L10.0703 15.7039Z"
            fill="#233447"
            stroke="#233447"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.9198 15.7039L14.701 14.0846L16.5834 14.9315L13.9198 15.7039Z"
            fill="#233447"
            stroke="#233447"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.05846 20.72L7.51022 16.9417L4.56433 17.0254L7.05846 20.72Z"
            fill="#CD6116"
            stroke="#CD6116"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4896 16.9417L16.9414 20.72L19.4355 17.0254L16.4896 16.9417Z"
            fill="#CD6116"
            stroke="#CD6116"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.7292 12.7816L13.4398 13.0143L13.9292 15.7038L14.7104 14.0845L16.5927 14.9314L18.7292 12.7816Z"
            fill="#CD6116"
            stroke="#CD6116"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.41591 14.9314L9.2983 14.0845L10.07 15.7038L10.5688 13.0143L5.27002 12.7816L7.41591 14.9314Z"
            fill="#CD6116"
            stroke="#CD6116"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.27002 12.7816L7.49121 17.0625L7.41591 14.9314L5.27002 12.7816Z"
            fill="#E4751F"
            stroke="#E4751F"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5931 14.9314L16.499 17.0625L18.7296 12.7816L16.5931 14.9314Z"
            fill="#E4751F"
            stroke="#E4751F"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5697 13.0145L10.0709 15.704L10.6921 18.8774L10.8333 14.6989L10.5697 13.0145Z"
            fill="#E4751F"
            stroke="#E4751F"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4402 13.0145L13.186 14.6896L13.299 18.8774L13.9296 15.704L13.4402 13.0145Z"
            fill="#E4751F"
            stroke="#E4751F"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.9292 15.7038L13.2986 18.8772L13.7504 19.1844L16.4987 17.0625L16.5928 14.9314L13.9292 15.7038Z"
            fill="#F6851B"
            stroke="#F6851B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.41614 14.9314L7.49143 17.0625L10.2397 19.1844L10.6914 18.8772L10.0703 15.7038L7.41614 14.9314Z"
            fill="#F6851B"
            stroke="#F6851B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.9764 22.1066L14.0046 21.2411L13.7694 21.0364H10.2211L10.0046 21.2411L10.0235 22.1066L7.05872 20.72L8.094 21.5575L10.1928 23H13.7975L15.9058 21.5575L16.9411 20.72L13.9764 22.1066Z"
            fill="#C0AD9E"
            stroke="#C0AD9E"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.7502 19.1845L13.2984 18.8773H10.6914L10.2396 19.1845L10.0043 21.2411L10.2207 21.0364H13.769L14.0043 21.2411L13.7502 19.1845Z"
            fill="#161616"
            stroke="#161616"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.1998 8.32402L23.9998 4.52707L22.8045 1L13.7504 7.64466L17.2327 10.5575L22.1551 11.9813L23.2469 10.725L22.7763 10.39L23.5293 9.71067L22.9457 9.26392L23.6986 8.69627L23.1998 8.32402Z"
            fill="#763D16"
            stroke="#763D16"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0 4.52707L0.800003 8.32402L0.291766 8.69627L1.04471 9.26392L0.47059 9.71067L1.22353 10.39L0.752946 10.725L1.8353 11.9813L6.75768 10.5575L10.2401 7.64466L1.18589 1L0 4.52707Z"
            fill="#763D16"
            stroke="#763D16"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.1555 11.9814L17.2331 10.5576L18.7296 12.7817L16.499 17.0627L19.4355 17.0254H23.812L22.1555 11.9814Z"
            fill="#F6851B"
            stroke="#F6851B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75705 10.5576L1.83467 11.9814L0.197021 17.0254H4.5641L7.49117 17.0627L5.26999 12.7817L6.75705 10.5576Z"
            fill="#F6851B"
            stroke="#F6851B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4398 13.0144L13.7504 7.64469L15.181 3.81982H8.828L10.2398 7.64469L10.5692 13.0144L10.6821 14.7081L10.6915 18.8773H13.2986L13.3174 14.7081L13.4398 13.0144Z"
            fill="#F6851B"
            stroke="#F6851B"
            strokeWidth="0.101334"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

export default NetworkIcons;
