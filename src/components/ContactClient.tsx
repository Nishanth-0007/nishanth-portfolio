"use client";

import dynamic from "next/dynamic"; // ✅ THIS WAS MISSING

const Contact = dynamic(() => import("./Contact"), {
  ssr: false,
});

export default function ContactClient() {
  return <Contact />;
}
