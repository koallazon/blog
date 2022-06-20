import React from "react"
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
              <h2>{post.title}</h2>
              <small>
                Published on {post.date} by {post.author}
              </small>
              <hr />
              <Markdown children={excerptList[i]} rehypePlugins={[rehypeRaw]} />
              <p>Read more...</p>
            </div>
          )
        })}
    </div>
  )
}

export default postlist
