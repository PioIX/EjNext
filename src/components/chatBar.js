"use client";

import React from "react";
import ProfilePic from "@/components/profilePic.js";  // Importamos la foto de perfil
import LastMessage from "@/components/lastMessage.js";  // Último mensaje
import NameChat from "@/components/nameChat.js";  // Nombre del chat
import Notification from "@/components/notification.js"; // Notificación
import styles from "@/components/chatBar.module.css"; // Estilos CSS

export default function ChatBar({ user, message, imageUrl, chatName, notificationCount, group}) {
  return (
    <div className={styles.chatContainer}>
      <ProfilePic imageUrl={imageUrl} /> {/* Foto de perfil */}
      <div className={styles.chatContent}>
        <NameChat chat={chatName} /> {/* Nombre del chat */}
        <LastMessage user={user} content={message} group={group} /> {/* Último mensaje */}
      </div>
      <Notification count={notificationCount} /> {/* Notificaciones */}
    </div>
  );
}