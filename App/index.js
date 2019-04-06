import html from '../html/index.js'
import Hello from '../Hello/index.js'

// This method allows us to use media queries!
const blockStyles = () => html`
  <style>
    main {
      background-color: yellow;
    }

    @media (min-width: 800px) {
      main {
        background-color: blue;
      }
    }
  </style>
`

const styles = {
  color: "red"
}

const App = () => html`
  <main style=${styles}>
    ${blockStyles()}
    <${Hello} name="you" />
    <p>I'm an app!</p>
  </main>
`

export default App