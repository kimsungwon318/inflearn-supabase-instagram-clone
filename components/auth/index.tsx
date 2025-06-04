"use client";

import { useState } from "react";

export default function Auth() {
  const [view, setView] = useState("SIGNUP");

  return <main>{view === "SIGNUP" ? <SignUp /> : <SignIn />}</main>;
}
