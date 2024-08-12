"use client"
import Button from "@/components/button";

export default function Home({children}) {
  function funcionA(){
    console.log("hola mundo")
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
};
