"use client";
import React from "react";
import Icons from "./Icons";
import { NextPage } from "next";
import { useAppContext } from "@/context/AppContext";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

interface LoginButtonProps {
  connectButton?: boolean;
  label?: string;
}

const LoginButton: NextPage<LoginButtonProps> = ({
  connectButton,
  label = "Login",
}) => {
  const { openWallet } = useAppContext();
  const { open,  } = useAppKit();
  const { isConnected} = useAppKitAccount();

  const onBUttonClick = () => {
    if (connectButton) {
      open();
    } else {
      openWallet();
    }
  };

  return (
    <button
      onClick={onBUttonClick}
      className="flex items-center py-3.5 px-4 h-11 bg-green-mantis text-black gap-2 rounded-2xl"
    >
      <Icons height={16} width={16} icon="wallet-02" />
      {!isConnected && <p>{label}</p>}
    </button>
  );
};

export default LoginButton;
