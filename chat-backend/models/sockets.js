const { userConnect, userDisconnect } = require('../controllers/sockets');
const {comprobateJWR} = require('../helpers/jwt');


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async( socket ) => {

            const [valide, uid] = comprobateJWR(socket.handshake.query['x-token']);

            if (!valide){
                console.log('socket no identificado');
                return socket.disconnect();
            }

            await userConnect(uid);
            
            

            //Si el token no es válido, desconectar



            //Saber cuál usuario está activo mediuante el uid
            

            //Emitir todos los usuarios conectados

            //Socket join, uid

            //Escuchar cuando el cliente envía un mensaje
            //mensaje-personal

            // Disconnect
            //Marcar en la DB que el usuario se desconectó

            //Emitir todos los usuarios conectados
            socket.on('disconnect',async() => {
            await userDisconnect(uid);
            })
            
        
        });
    }


}


module.exports = Sockets;