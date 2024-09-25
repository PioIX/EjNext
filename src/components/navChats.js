"use client";

import React from "react";
import ChatBar from "@/components/chatBar";  // Importamos el componente ChatBar
import styles from "@/components/navChats.module.css";  // Estilos CSS para NavChats

export default function NavChats({ chat }) {
  return (
    <div className={styles.navChatsContainer}>
      {chat.map((chat, index) => (
        <ChatBar
          key={index}  // Usamos el índice como clave para evitar advertencias de React
          user={chat.user}
          message={chat.message}
          imageUrl={chat.imageUrl}
          chatName={chat.chatName}
          notificationCount={chat.notificationCount}
          group={chat.group}
        />
      ))}
    </div>
  );
}