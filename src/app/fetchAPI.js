// URL base para todas las peticiones
const baseURL = 'http://localhost:3001';

// Función para obtener los usuarios
export async function getUsers() {
    try {
        const response = await fetch(`${baseURL}/getUsers`);
        const data = await response.json();
        //console.log(data)
        return data;
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
    }
}

// Función para obtener los chats
export async function getChats() {
    try {
        const response = await fetch(`${baseURL}/getChats`);
        const data = await response.json();
        //console.log("Chats:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener los chats:", error);
    }
}

// Función para obtener las relaciones entre usuarios y chatsv
export async function getChatXUser() {
    try {
        const response = await fetch(`${baseURL}/getChatXuser`);
        const data = await response.json();
        //console.log("Relaciones Usuario-Chats:", data);
        return data; 
    } catch (error) {
        console.error("Error al obtener los chats:", error);
    }
}

// Función para obtener los mensajes
export async function getMensajes() {
    try {
        const response = await fetch(`${baseURL}/getMensajes`);
        const data = await response.json();
        //console.log("Mensajes:", data);
        return data;
    } catch (error) {
        console.error("Error al obtener los mensajes:", error);
    }
}
export async function fetchRegister(newUser) {
    try {
      const response = await fetch('http://localhost:3001/postUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      // Verificamos si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('Error al registrar el usuario');
      }
  
      // Parseamos la respuesta
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error en fetchRegister:', error);
      throw error; // Propagamos el error para manejarlo en el componente
    }
  }

export function FindUserByID(id) {
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].id === id) {
            return i; // Devuelve la posición del cliente en el vector
        }
    }
    return -1; // Si no se encuentra el cliente, devuelve -1
}

export function FindMensajeByID(id) {
    for (let i = 0; i < Mensajes.length; i++) {
        if (Mensajes[i].id === id) {
            return i; // Devuelve la posición del cliente en el vector
        }
    }
    return -1; // Si no se encuentra el cliente, devuelve -1
}
  
export function FindChatByID(id) {
    for (let i = 0; i < Chats.length; i++) {
        if (Chats[i].id === id) {
            return i; // Devuelve la posición del cliente en el vector
        }
    }
    return -1; // Si no se encuentra el cliente, devuelve -1
}

export function FindChatXUserByID(id) {
    for (let i = 0; i < ChatXUser.length; i++) {
        if (ChatXUser[i].id === id) {
            return i; // Devuelve la posición del cliente en el vector
        }
    }
    return -1; // Si no se encuentra el cliente, devuelve -1
}

export function buscarDatos(vectorObjetos, datoABuscar, propiedadABuscar, propiedadASumar) {
    // Vector para almacenar los resultados
    console.log(vectorObjetos)
    let resultado = [];

    // Recorremos el vector de objetos
    for (let objeto of vectorObjetos) {
        // Verificamos si la propiedad a buscar coincide con el dato
        if (objeto[propiedadABuscar] == datoABuscar) {
            // Si coincide, sumamos el dato de la otra propiedad al resultado
            resultado.push(objeto[propiedadASumar]);
        }
    }
    
    return resultado;
}
