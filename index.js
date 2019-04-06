// Note that this version of React is not the latest patch version
// Would be nice to have something like that
import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.30'
import html from './html/index.js'

const App = ({ name }) => html`<div>Hello ${name}!</div>`

ReactDOM.render(html`<${App} name="you" />`, document.getElementById('root'))
