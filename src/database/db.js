import Dexie from "dexie";

// Create database instance
const db = new Dexie("Multistepformdb");

// Define database 

db.version(1).stores({
    forms:'id'
});

export default db;