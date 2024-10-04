"use client";
import Link from "next/link";
import React from "react";
import ActualProfilePic from "@/components/actualProfilePic"
import LastMessage from "@/components/lastMessage.js";  // Último mensaje
import NameChat from "@/components/nameChat.js";  // Nombre del chat
import Notification from "@/components/notification.js"; // Notificación
import styles from "@/components/chatBar.module.css"; // Estilos CSS
import { FindXByID } from "@/app/fetchAPI";

export default function Header({ userId, imageUrl }) {
  return (
    <header>
    <Link href="/">
      <h1>Whatsapp</h1>
    </Link>
    <Link href={`/chats?idUser=${userId}`}>
      <ActualProfilePic imageUrl={imageUrl} />
    </Link>
    </header>
  );
}