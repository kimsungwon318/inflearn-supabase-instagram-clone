import { useState } from "react";

export default function SignIn({ setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return <div className="flex flex-col gap-4">Signin</div>;
}
