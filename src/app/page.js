"use client"
import Button from "@/components/button";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Input from "@/components/input"; // Importamos el componente Input
import styles from "@/app/page.module.css"; // Estilos para el formulario

const userID=-1
export default function Home() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  
  function linkLogin() {
    window.alert("puto")
    window.location.href = '/chats';
  }

  function linkRegister(){
  }

  return (
    <main>
      <div className={styles.container}>
      <h2>Login / Sign-Up</h2>
        <Input
          label="Nombre"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          label="Apellido"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          label="Usuario"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Contraseña"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Correo Electrónico"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button  onClick={linkLogin}>
          Login
        </Button>
        <Button onClick={linkRegister}>
          Registrarse
        </Button>
      </div>
      <script src="./js/fetchAPI.js"></script>
    </main>
  );
}
