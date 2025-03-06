"use client";

import { useRef } from "react";

export const useScrollToRegistration = () => {
  const registrationRef = useRef(null);

  const handleScrollToRegistration = () => {
    registrationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { registrationRef, handleScrollToRegistration };
};
