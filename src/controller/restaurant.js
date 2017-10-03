import mongoose from "mongoose";
import { Router } from "express";
import Restaurant from "../models/restaurant";
import bodyParser from "body-parser";


export default ({config, db}) => {
    let api = Router();

    //'v1/restaurant/add'

    api.post("/add", (req, res) =>{
        let newRest = new Restaurant();
        newRest.name = req.body.name;

        newRest.save((err)=> {
            if(err) {
                res.send(err);
            }
            res.json({ message: 'Restaurant saved successfully'});
        });
    });
    return api
};