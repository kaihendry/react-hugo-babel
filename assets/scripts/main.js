const App = () => {
  function sayHello () {
    alert('Hello, World!')
  }

  return (
    <button onClick={sayHello}>Click me!</button>
  )
}

// Render to #root
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)
