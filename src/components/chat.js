"use client";

import React from "react";
import Message from "@/components/message"; // Importa el componente que renderiza el mensaje
import styles from "@/components/chat.module.css"; // Estilos para el componente Chat

export default function Chat({ messages }) {
  return (
    <div className={styles.chatContainer}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={
            message.own
              ? styles.ownMessageContainer  // Mensajes propios a la derecha
              : styles.otherMessageContainer // Mensajes de otros a la izquierda
          }
        >
          <Message
            timestamp={message.timestamp}
            content={message.content}
            group={message.group}
            userName={message.userName}
            own={message.own}
          />
        </div>
      ))}
    </div>
  );
}