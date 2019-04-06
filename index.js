// Note that this version of React is not the latest patch version
// Would be nice to have something like that
import { ReactDOM } from 'https://unpkg.com/es-react@16.8.30'
import html from './html/index.js'
import App from './App/index.js'

ReactDOM.render(html`<${App} />`, document.getElementById('root'))
