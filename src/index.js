import {setupServer} from "./server.js";
import {initMongoDBConnection} from "./db/initDBconnection.js"


const bootstrap = async () => {
    await initMongoDBConnection();
    setupServer()
};

bootstrap();