import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import "typeface-raleway"
import Home from "./pages/home"
import About from "./pages/about"
import Post from "./pages/post"
import NotFound from "./pages/notfound"
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Routes>
      <Route index exact path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="post/:id" render={(props) => <Post {...props} />} />
      <Route path="404" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

// reportWebVitals();
