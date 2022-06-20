import React from "react"
import Layout from "../components/layout"
import PostList from "../components/postlist"
import "./pages.css"

const home = () => {
  return (
    <div>
      <Layout>
        <PostList />
      </Layout>
    </div>
  )
}

export default home
