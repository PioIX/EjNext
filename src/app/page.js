"use client"
import Button from "@/components/button";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const userID=-1
export default function Home() {
  let [contador, setCuenta] = useState(0)
  
  function funcionNombre(){
    let nNombre=document.getElementById("ingresoNombre").value
    setNombre(nNombre)
  }
  
  return (
    <main>
      

    </main>
  );
}
