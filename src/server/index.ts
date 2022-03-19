import express from "express";
import router from "../routers";
import cors from "cors";
import fileUpload from "express-fileupload";

const app = require("express")();

app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

export default app;
