import html from '../html/index.js'

const logClick = (e) => {
  e.preventDefault();
  console.log('I have been clicked!')
}

// This works, but doesn't allow us
// to use media queries
const styles = {
  backgroundColor: "red",
  color: "black"
}

const Hello = ({ name }) => html`<p style=${styles} onClick={${logClick}}>Hello ${name}!</p>`

export default Hello