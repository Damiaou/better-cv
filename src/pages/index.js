import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Background"
import Mobile from "../components/Mobile"
import Terminal from "../components/Terminal"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Background>
      <Mobile />
      <Terminal />
    </Background>
  </Layout>
)

export default IndexPage
