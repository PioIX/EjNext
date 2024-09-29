"use client"
import Button from "@/components/button";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import NavChats from "@/components/navChats";
import Chat from "@/components/chat";
import React, { useState } from "react";
import InputEdit from "@/components/inputEdit"; // Importamos el componente Input
import styles from "@/app/user/page.module.css"; // Estilos para el formulario
import UserProfilePic from "@/components/userProfilePic";


export default function Home() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [image, setImage] = useState("");

  useEffect(() => {
    // Simulación de un objeto user que obtendrías de una fuente de datos
    const user = {
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      password: "12345",
      email: "johndoe@example.com",
      image: "data:image/webp;base64,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"
    };

    // Establecemos los valores de user en las variables de estado
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setUsername(user.username);
    setPassword(user.password);
    setEmail(user.email);
    setImage(user.image);

    // Este efecto se ejecutará una sola vez al montar el componente
  }, []);
  function linkSave() {
    window.alert("puto")
    window.location.href = '/chats';
  }
  function linkBack() {
    window.location.href = '/chats';
  }


  return (
    <main>
      <div className={styles.division}>
      <UserProfilePic imageUrl={image}/>
      <div className={styles.container}>
      <h2>Editar perfil</h2>
      <br/>
      <div className={styles.division}>
        <div className={styles.lateral}>
          <InputEdit
            label="Nombre"
            type="text"
            name="firstName"
            value={firstName}
            placeholder={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputEdit
            label="Apellido"
            type="text"
            name="lastName"
            value={lastName}
            placeholder={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputEdit
            label="Usuario"
            type="text"
            name="username"
            value={username}
            placeholder={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.lateral}>
          <InputEdit
            label="Contraseña"
            type="password"
            name="password"
            value={password}
            placeholder={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputEdit
            label="Correo Electrónico"
            type="email"
            name="text"
            value={email}
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputEdit
            label="Imagen de perfil"
            type="text"
            name="image"
            value={image}
            placeholder={image}
            onChange={(e) => setImage(e.target.value)}
          />
          </div>
        </div>
        <Button  onClick={linkBack}>
          volver
        </Button>
        <Button  onClick={linkSave}>
          Guardar
        </Button>
      </div>
      </div>
    </main>
  );
}
