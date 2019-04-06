import html from '../html/index.js'
import Hello from '../Hello/index.js'
const App = () => html`
  <main>
    <${Hello} name="you" />
  </main>
`

export default App