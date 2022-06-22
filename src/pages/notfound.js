import React from "react"
import Layout from "../components/layout"
import "./pages.css"

const notfound = () => {
  return (
    <Layout>
      <h1 className="notfound">The Page you are looking for doesn't exist</h1>
    </Layout>
  )
}

export default notfound
