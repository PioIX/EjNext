"use client"
import Button from "@/components/button";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavChats from "@/components/navChats";
import Chat from "@/components/chat";

export default function Home() {
  let [contador, setCuenta] = useState(0)
  
  function funcionNombre(){
    let nNombre=document.getElementById("ingresoNombre").value
    setNombre(nNombre)
  }
  
  return (
    <main>
      <Link href="/">
      <NavChats chat={chat} ></NavChats>
      </Link>
      <Chat messages={messages}/>  

    </main>
  );
}
