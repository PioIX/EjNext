"use client"
import Button from "@/components/button";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { getUsers } from "@/app/fetchAPI.js";
import Input from "@/components/input"; // Importamos el componente Input
import styles from "@/app/page.module.css"; // Estilos para el formulario

export default function Home() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");  

  async function linkLogin() {
    try {
      const users = await getUsers(); // Obtener los usuarios desde el API
      const user = users.find(u => u.username === username); // Buscar usuario por nombre de usuario

      if (user) {
        // Si el usuario existe, verificar la contraseña
        if (user.password === password) {
          window.alert("Login exitoso");
          router.push('/chats'); // Redirigir al chat
        } else {
          window.alert("Contraseña incorrecta");
        }
      } else {
        window.alert("El usuario no existe");
      }
    } catch (error) {
      console.error("Error al intentar hacer login:", error);
      window.alert("Error al iniciar sesión");
    }
  }

  // Función para registrar una nueva cuenta
  async function linkRegister() {
    try {
      const users = await getUsers(); // Obtener los usuarios desde el API
      const userExists = users.some(u => u.username === username); // Verificar si el usuario ya existe

      if (!userExists) {
        // Si el nombre de usuario es único, registrar el nuevo usuario
        const newUser = {
          firstName,
          lastName,
          username,
          password,
          email
        };

        const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser)
        });

        if (response.ok) {
          window.alert("Registro exitoso");
          router.push('/chats'); // Redirigir al chat después del registro
        } else {
          window.alert("Error al registrar el usuario");
        }
      } else {
        window.alert("El nombre de usuario ya existe, elige otro");
      }
    } catch (error) {
      console.error("Error al registrar la cuenta:", error);
      window.alert("Error al registrar la cuenta");
    }
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
    </main>
  );
}
