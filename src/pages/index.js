import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Background"
import Terminal from "../components/Terminal"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Background>
      <Terminal />
    </Background>
  </Layout>
)

export default IndexPage
