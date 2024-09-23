"use client"
import Button from "@/components/button";
<<<<<<< Updated upstream

export default function Home({children}) {
  function funcionA(){
    console.log("hola mundo")
=======
import Checkbox from "@/components/checkbox";
import LastMessage from "@/components/lastMessage";
import NameChat from "@/components/nameChat";
import ProfilePic from "@/components/profilePic";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  let [contador, setCuenta] = useState(0)
  let [nombre, setNombre] = useState("Anon")

  function funcionSumar(){
    setCuenta(contador++)
  }

  function funcionRestar(){
    setCuenta(contador--)
  }

  function funcionNombre(){
    let nNombre=document.getElementById("ingresoNombre").value
    setNombre(nNombre)
>>>>>>> Stashed changes
  }
  function funcionB(){
    console.log("hola chungo")
  }
  return (
    <main>
      <h1>Hola amigo</h1>
      <Button onClick={funcionA}>pepepe</Button>
      <Button onClick={funcionB}>papap'0 </Button>
      {children}
    </main>
  );
<<<<<<< Updated upstream
};
=======
};*/
  return (
    <main>
      <Link href="/">
      <ProfilePic imageUrl="https://images.contentstack.io/v3/assets/blt3db103350eb1264b/bltcdde08c9378053ea/61f8a1b7dc6df77ee044f583/ztUXqRTw.jpeg?auto=webp&format=pjpg&quality=80&width=1200&height=769&fit=crop"/>
      <NameChat chat={"Los mosqueteros"}> </NameChat>
      <LastMessage user={"Brancovich"} content={"Mamadera sos un chorro"}></LastMessage>
      </Link>
      <input type="text" id="ingresoNombre" placeholder="pepeado"></input>
      <Button onClick={funcionNombre}> modificar nombre</Button>
    </main>


  );
}
>>>>>>> Stashed changes
