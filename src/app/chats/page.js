"use client";
import Button from "@/components/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "@/app/chats/page.module.css";
import Header from "@/components/header";
import { useRouter } from "next/router";
import NavChats from "@/components/navChats";
import Chat from "@/components/chat";
import Loading from "@/components/loading";
import { useSearchParams } from 'next/navigation';
import { getUsers, getChats, getChatXUser, getMensajes, FindXByID, prepararChats, prepararMensajes, fetchPostMensaje, prepararPostMensaje } from "@/app/fetchAPI.js";

export default function Home() {
  const searchParams = useSearchParams();
  const idUser = searchParams.get('idUser');
  const [select, setSelect] = useState(-1);
  const [MyChats, setMyChats] = useState([]);
  const [Users, setUsers] = useState([]);
  const [Mensajes, setMensajes] = useState([]);
  const [ChatXUser, setChatXUser] = useState([]);
  const [Chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [profilePic, setProfilePic] = useState("");
  const [myMensajes, setMyMensajes] = useState([]);
  const [Mensaje, setMensaje] = useState("");

  async function cargarChats() {
    try {
      setIsLoading(true);
      const chatXUser = await getChatXUser();
      const chats = await getChats();
      const mensajes = await getMensajes();
      const users = await getUsers();
      const chatList = await prepararChats(idUser, chats, mensajes, users, chatXUser);
      setMyChats(chatList);
      setUsers(users);
      setChatXUser(chatXUser);
      setChats(chats);
      setMensajes(mensajes)
      setProfilePic(users[FindXByID(idUser, users)].image);
    } catch (error) {
      console.error("Error cargando los chats:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function enviarMsg() {
    try {
      let newMensaje = prepararPostMensaje(select, idUser, Mensaje, ChatXUser)
      fetchPostMensaje(newMensaje)
    } catch (error) {
      console.error("Error enviando:", error);
    } finally{
      recargarChats()
    }
  }

  async function cargarMensajes() {
    try {
      const mensajesList = await prepararMensajes(idUser, select, Chats, Users, Mensajes, ChatXUser);
      setMyMensajes(mensajesList);
    } catch (error) {
      console.error("Error cargando los mensajes:", error);
    } 
  }

  async function recargarChats() {
    try {
      const chatXUser = await getChatXUser();
      const chats = await getChats();
      const mensajes = await getMensajes();
      const users = await getUsers();
      const chatList = await prepararChats(idUser, chats, mensajes, users, chatXUser);
      setMyChats(chatList);
      setUsers(users);
      setChatXUser(chatXUser);
      setChats(chats);
    } catch (error) {
      console.error("Error recargando los chats:", error);
    }
  }

  useEffect(() => {
    cargarChats();
  }, [idUser]);

  useEffect(() => {
    cargarMensajes();
  }, [select, Chats]);

  // Usamos useEffect para cargar los chats al montar el componente
  useEffect(() => {
    recargarChats();

    // Si deseas que los chats se actualicen automáticamente cada cierto tiempo, puedes añadir un intervalo
    const intervalId = setInterval(() => {
      recargarChats();
    }, 5000); // Actualiza los chats cada 5 segundos (ajusta el tiempo si es necesario)

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonte
  });

 
  return (
    <div>
        <Header userId={idUser} imageUrl={profilePic} />
      {isLoading ? (
        <Loading/>
      ) : (
        // Usamos un fragmento o un `div` para agrupar múltiples elementos
        <main>
          <NavChats chat={MyChats} select={select} setSelect={setSelect} />
          <Chat messages={myMensajes} setSelect={setSelect} setMensaje={setMensaje} onClick={enviarMsg}/>
        </main>
      )}
    </div>
  );
}