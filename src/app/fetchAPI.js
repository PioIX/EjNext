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

export function FindXByID(id, vector) {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i].id == id) {
            return i; // Devuelve la posición del cliente en el vector
        }
    }
    return -1; // Si no se encuentra el cliente, devuelve -1
}

//perfecta
export function buscarDatos(vectorObjetos, datoABuscar, propiedadABuscar, propiedadASumar) {
    // Vector para almacenar los resultados
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
//funciona
export function userByMensaje(mensajes, idChatXUser, chatXUser, users) {
    for (let mensaje of mensajes) {
        // Si el mensaje tiene el idChat buscado
        if (mensaje.idChatXUser == idChatXUser) {
            const chatUserObj = chatXUser.find(chatUser => chatUser.id == idChatXUser);

            if (chatUserObj) {
                // Obtener el idUser del objeto encontrado
                const idUser = chatUserObj.idUser;
                // Buscar en el vector de usuarios el usuario con el idUser
                const user = users.find(user => user.id === idUser);
                // Si se encuentra el usuario, retornarlo
                if (user) {
                    return user;
                }
            }
        }
    }
    return null;
}
//funciona
export function mensajesXChat(mensajes, chatXUser, idChat) {
    // Crear un vector para almacenar los ids de chatXUser que coinciden con idChat
    let idsChatXUser = [];
    for (let i = 0; i < chatXUser.length; i++) {
        if (chatXUser[i].idChat === idChat) {
            idsChatXUser.push(chatXUser[i].id); // Agregamos el id que coincide
        }
    }
    // Crear un vector para almacenar los mensajes cuyo idChatXUser coincida con los ids encontrados
    let vectorMensajes = [];
    for (let j = 0; j < mensajes.length; j++) {
        if (idsChatXUser.includes(mensajes[j].idChatXUser)) {
            vectorMensajes.push(mensajes[j]); // Agregamos el mensaje que coincide
        }
    }
    // Retornamos el vector con los mensajes filtrados
    vectorMensajes.sort((a, b) => new Date(b.fecha) + new Date(a.fecha));
    // Retornar el vector de mensajes
    //console.log("funcion mensajes:", vectorMensajes,"chat", idChat)
    return vectorMensajes;
}

export function userChat(chatId, idUser, chatXUser) {
    // Recorremos el vector chatXUser
    for (let chat of chatXUser) {
        // Verificamos si el chat.idChat coincide con chatId
        // y el chat.idUser es diferente del idUser proporcionado
        if (chat.idChat == chatId && chat.idUser != idUser) {
            return chat.idUser; // Retornar el id del registro encontrado
        }
    }
    return null; // Si no se encuentra ningún registro, devolver null
}

export async function prepararChats(idUser, chats, mensajes, users, chatXUser) {
    let resultado = [];
    const vectorIds = await buscarDatos(chatXUser, idUser, 'idUser', 'idChat');
    // Recorremos el vector de chats
    for (let chat of chats) {
        // Verificar si el ID del chat está en el vectorIds
        if (vectorIds.includes(chat.id)) {
            // Crear un nuevo objeto chat copiando el del vector chats
            let nuevoChat = { ...chat };
            // Obtener el vector de mensajes del chat con la función mensajesXChat
            let mensajesChat = mensajesXChat(mensajes, chatXUser, chat.id);
           
            if (mensajesChat.length > 0) {
                // Agregar la propiedad content y fecha del mensaje con índice 0 (el más reciente)
                nuevoChat.message = mensajesChat[0].content;

                // Obtener el idUser del mensaje más reciente con userByMensaje
                let lastUser = userByMensaje(mensajes, mensajesChat[0].idChatXUser, chatXUser, users);

                    // Agregar las propiedades image y username del objeto users correspondiente al idUser
                nuevoChat.imageUrl ="data:image/jpeg;base64,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";
                nuevoChat.user = lastUser.username;
                if (!nuevoChat.isGroup){
                    let otroUserId = userChat(nuevoChat.id, idUser, chatXUser);
                    let user=users[FindXByID(otroUserId,users)]
                    nuevoChat.user = null
                    nuevoChat.imageUrl = user.image
                    nuevoChat.nombre = user.username
                }
            }

            // Sumar el nuevo objeto chat al vector resultado
            resultado.push(nuevoChat);
        }
    }

    // Retornar el vector resultado
    return resultado;
}

export async function prepararMensajes(idUser, idChat, chats, users, mensajes, chatXUser) {
    let resultado = [];
    idUser=parseInt(idUser)
    const vectorIdsCXU = await buscarDatos(chatXUser, idChat, 'idChat', 'idUser');
    for (let mensaje of mensajes) {
        const vectorIdsCXU = await buscarDatos(chatXUser, idChat, 'idChat', 'idUser');
        // Verificar si el idChatXUser está en el vector de chatXUser
        for (let i = 0; i < chatXUser.length; i++) {
            if(vectorIdsCXU[i]==mensaje.idChatXUser){
                let nuevoMensaje = { ...mensaje };
                let cxu = vectorIdsCXU[i]

            // 4. Verificar si el mensaje pertenece al usuario actual (idUser)
                if(idUser==cxu){
                    nuevoMensaje.own = true
                } else{
                    nuevoMensaje.own = false
                }

            // 6. Añadir propiedad isGroup (true si es un grupo, false si es un chat individual)
                nuevoMensaje.group = Boolean(chats[FindXByID(idChat, chats)].isGroup) 
                nuevoMensaje.userName = users[FindXByID(cxu, users)].username 

            // 7. Agregar el mensaje procesado al resultado
                resultado.push(nuevoMensaje);
            }
        }
    }
    // Retornar el vector con los mensajes preparados
    return resultado.slice(-5);;
}
