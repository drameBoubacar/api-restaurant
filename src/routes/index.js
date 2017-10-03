import express from "express";
import config from "../config";
import initializeDb from "../db" ;
import middleware from "../middlewares" ;

let router = express();

initializeDb(db => {
    router.use(middleware({ config, db}));

//api routes v1(/v1)

});
export default router;