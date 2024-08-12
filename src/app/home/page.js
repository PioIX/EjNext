"use client"
import ButtonClass from "@/components/class";

export default function Home() {
  let [contador, setCuenta] = useState=
  function funcionSumar(){
    setCuenta(contador++)

  }
  function funcionB(){
    console.log("hola chungo")
  }
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
    </main>


  );
}