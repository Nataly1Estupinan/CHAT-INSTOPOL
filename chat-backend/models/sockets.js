

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            //Si el token no es válido, desconectar



            //Saber cuál usuario está activo mediuante el uid
            

            //Emitir todos los usuarios conectados

            //Socket join, uid

            //Escuchar cuando el cliente envía un mensaje
            //mensaje-personal

            // Disconnect
            //Marcar en la DB que el usuario se desconectó

            //Emitir todos los usuarios conectados
            
        
        });
    }


}


module.exports = Sockets;