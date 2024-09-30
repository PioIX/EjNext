// URL base para todas las peticiones
const baseURL = 'http://localhost:3001';

// Función para obtener los usuarios
async function getUsers() {
    try {
        const response = await fetch(`${baseURL}/getUsers`);
        const data = await response.json();
        console.log("Usuarios:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
}

// Función para obtener los chats
async function getChats() {
    try {
        const response = await fetch(`${baseURL}/getChats`);
        const data = await response.json();
        console.log("Chats:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener los chats:", error);
    }
}

// Función para obtener las relaciones entre usuarios y chatsv
async function getChatXUser() {
    try {
        const response = await fetch(`${baseURL}/getChatXuser`);
        const data = await response.json();
        console.log("Relaciones Usuario-Chats:", data);
        return data; 
    } catch (error) {
        console.error("Error al obtener los chats:", error);
    }
}

// Función para obtener los mensajes
async function getMensajes() {
    try {
        const response = await fetch(`${baseURL}/getMensajes`);
        const data = await response.json();
        console.log("Mensajes:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener los mensajes:", error);
    }
}

// Ejemplos de uso (puedes llamarlas desde tu aplicación)
getUsers();
getChats();
getChatXUser();
getMensajes();
