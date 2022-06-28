import React from "react"
import { Navigate, useParams } from "react-router-dom"
import Markdown from "react-markdown"
import Layout from "../components/layout"
import postlist from "../posts.json"
import rehypeRaw from "rehype-raw"
import "./pages.css"

const post = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let { id } = useParams()
  if (!id) {
    return <Navigate to="/404"></Navigate>
  }
  const fetchedPost = {}
  let postExists = false
  postlist.forEach((post) => {
    if (id === post.id.toString()) {
      fetchedPost.title = post.title || "No given ttile"
      fetchedPost.author = post.author || "No author"
      fetchedPost.date = post.date || "No date"
      fetchedPost.content = post.content || "No date content"
      postExists = true
    }
  })
  if (postExists === false) {
    return <Navigate to="/404" />
  }
  return (
    <Layout>
      <div className="post">
        <h2>{fetchedPost.title}</h2>
        <small>Published on {fetchedPost.date}</small>
        <hr />
        <Markdown children={fetchedPost.content} rehypePlugins={[rehypeRaw]} />
      </div>
    </Layout>
  )
}

export default post
