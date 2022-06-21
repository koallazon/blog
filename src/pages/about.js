import React from "react"
import Markdown from "react-markdown"
import aboutText from "../pages.json"
import rehypeRaw from "rehype-raw"
import Layout from "../components/layout"

const about = (props) => {
  console.log(aboutText)
  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        This is the About Page.
      </h1>
      <div className="page-content">
        <Markdown
          children={aboutText[0].contents}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
    </Layout>
  )
}
export default about
