import React from "react"
import { Link } from "react-router-dom"
import Markdown from "react-markdown"
import postList from "../posts.json"
import "./components.css"
import rehypeRaw from "rehype-raw"

const postlist = () => {
  const excerptList = postList.map((post) => {
    return post.content.split(" ").slice(0, 50).join(" ")
  })
  return (
    <div className="postlist">
      {postList.length &&
        postList.map((post, i) => {
          return (
            <div key={i} className="post-card">
              <small>
                Published on {post.date} by {post.author}
              </small>
              <hr />
              <Markdown children={excerptList[i]} rehypePlugins={[rehypeRaw]} />
              <small>
                <Link className="links" to={`/post/${post.id}`}></Link>
                Read more
              </small>
            </div>
          )
        })}
    </div>
  )
}

export default postlist
