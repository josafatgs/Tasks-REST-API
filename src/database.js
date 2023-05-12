import mongoose from 'mongoose';
import config from "./config.js";

(async () => {

        try {
            
            const db = await mongoose.connect(config.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("Database is connected to: ", db.connection.name);

        } catch (error) {
            console.error(error);
        }
	
	
})();
