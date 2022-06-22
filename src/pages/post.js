import React from "react"
import { Navigate } from "react-router-dom"
import Markdown from "react-markdown"
import Layout from "../components/layout"
import postlist from "../posts.json"
import rehypeRaw from "rehype-raw"
import "./pages.css"

const post = (props) => {
  const validId = parseInt(props.match.params.id)
  if (!validId) {
    return <Navigate to="/404"></Navigate>
  }
  const fetchedPost = {}
  let postExists = false
  postlist.forEath((post, i) => {
    if (validId === post.id) {
      fetchedPost.title = post.title ? post.title : "No given ttile"
      fetchedPost.author = post.author ? post.author : "No date author"
      fetchedPost.content = post.content ? post.content : "No date content"
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
        <Markdown source={fetchedPost.content} rehypePlugins={[rehypeRaw]} />
      </div>
    </Layout>
  )
}

export default post
