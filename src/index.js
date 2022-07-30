import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import Home from "./pages/home"
import About from "./pages/about"
import Post from "./pages/post"
import NotFound from "./pages/notfound"
console.log("hello")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route index exec path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="404" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
