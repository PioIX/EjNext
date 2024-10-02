"use client"
import Button from "@/components/button";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import styles from "@/app/chats/page.module.css"
import { useRouter } from "next/router";
import NavChats from "@/components/navChats";
import Chat from "@/components/chat";
import { useSearchParams } from 'next/navigation';
import { getUsers, getChats, getChatXUser, getMensajes, buscarDatos, prepararChats } from "@/app/fetchAPI.js";

export default function Home() {
  const searchParams = useSearchParams();
  const idUser = searchParams.get('idUser');
  //console.log(idUser)
  let [select, setSelect] = useState("");  

  async function cargarChats(){
    const chatXUser = await getChatXUser()
    const mensajes = await getMensajes()
    const chats = await getChats()
    const users = await getUsers()
    const chatsUser = await buscarDatos(chatXUser,idUser,'idUser','idChat')
    const chatsPreparados = await prepararChats(chats, chatsUser)
    console.log("ids de chats", chatsUser)
  }
  cargarChats()
  const chat = [
  {
    user: "Juan",
    message: "¿Cómo estás?",
    imageUrl: "https://images.contentstack.io/v3/assets/blt3db103350eb1264b/bltcdde08c9378053ea/61f8a1b7dc6df77ee044f583/ztUXqRTw.jpeg",
    chatName: "Juan",
    notificationCount: 3,
    group: false
  },]

  const messages = [
  {
    timestamp: "2023-09-25T14:48:00.000Z",
    content: "peronista cabezon te voy a mostrar como se had asdkua shhjds kjdbkbjbsabh ahhhshd hjadhb gajdsd dnas dbsadshdvd  dhsbdhabjvoy a mostrar como se had asdkua shhjds kjdbkbjbsabh ahhhshd hjadhb gajdsd dnas dbsadshdvd  dhsbdhabj voy a mostrar como se had asdkua shhjds kjdbkbjbsabh ahhhshd hjadhb gajdsd dnas dbsadshdvd  dhsbdhabj voy a mostrar como se had asdkua shhjds kjdbkbjbsabh ahhhshd hjadhb gajdsd dnas dbsadshdvd  dhsbdhabj",
    group: true,
    userName: "Juan",
    own: false, // Mensaje de otro usuario
  },
];

  return (
    <main>
      <Link href="/">
      <NavChats chat={chat} ></NavChats>
      </Link>
      <Chat messages={messages}/>  

    </main>
  );
}
