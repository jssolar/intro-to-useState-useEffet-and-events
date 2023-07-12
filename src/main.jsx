import React from "react";
import ReactDom  from "react-dom/client";
import Home from "./Home";
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


const root = ReactDom.createRoot(document.querySelector("#root"))
root.render(
    <Home />
)

