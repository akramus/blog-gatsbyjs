import React, { Component } from 'react'
import Link from 'gatsby-link'
import './index.scss'

class Main extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <header id="homepage-hero">
        </header>
        <section>
          <article className="container">
            <div id="homepage-description">
              <h2>Consultant, Architecte technique  & Développeur </h2>
              <h2>Java | JEE | React | Kafka | Spark </h2>              
            </div>
          </article>
        </section>
      </div>
    )
  }
}

export default Main
