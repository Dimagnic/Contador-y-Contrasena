import Contador from "./Components/Contador";
import Contrasena from "./Components/Contrasena";

function App() {
  return (
    <div className="App">
      <div className="container" >
        <h1>Contador</h1>
        <Contador />
        <hr />
        <h1>Contraseña</h1>
        <Contrasena />
      </div>
    </div>
  )
}

export default App
