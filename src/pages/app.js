import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Counter from '../elm/Main.elm';
import Elm from 'react-elm-components'



class SecondPage extends React.Component {
  render() {
    return (<Layout>
    <SEO title="page 2" keywords={[`gatsby`, `application`, `react`]} />
    <Elm src={Counter.Elm.Main}/>
    <Link to="/">Go to home</Link>
  </Layout>)
  }
}

export default SecondPage
