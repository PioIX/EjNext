"use client"
import ButtonClass from "@/components/class";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import { useState } from "react";
import { useEffect } from "react";

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
  }
  function funcionB(){
    console.log("hola chungo")
  }

  useEffect(()=>{
    setCuenta(10)
  }, []
)

useEffect(()=>{
  setCuenta(contador+=5)
}, [nombre]
)

  /*

  return (
    <main>
      <h1>Hola amigo</h1>
      
      <Form title="title" btn1="logIn" btn2="signIn" btn1onClick="funcionA()" btn2onClick="funcionA()"> </Form>
    </main>
  );
};*/
  return (
    <main>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi es el unico que trabaja"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionSumar}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi es el unico que trabaja"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi es el unico que trabaja"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi es el unico que trabaja"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <ButtonClass textTitle={"FaconApps"} textSubtitle={"Marchesi es el unico que trabaja"} nameTeacher={"Nicola Facón"} expireDate={"2/10"} taskName={"Tp final"} onClick={funcionB}></ButtonClass>
      <Checkbox value={"checked"}></Checkbox>
      <h2> contador: { contador }</h2>
      <h2> nombre: { nombre }</h2>
      <input type="text" id="ingresoNombre" placeholder="pepeado"></input>
      <Button onClick={funcionNombre}> modificar nombre</Button>
    </main>


  );
}