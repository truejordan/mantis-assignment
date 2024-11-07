'use server'
import React from "react";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-3xl font-medium text-center text-white/20">404</h1>
      <Link href={"/"}>
        <p className="text-center text-white/10 hover:text-green-mantis/60 mt-3">Home</p>
      </Link>
    </div>
  );
}
