function App() {
    const [texto, serText] = useState ('Medellín')
  
    function cambiar (e){
    e.preventDefault()
    let inputNombre = document.querySelector ('#nombre');
    serTexto (inputNombre.value)
    }
    return (
      <>
      <h1 style={{fontSize: "3rem"}}>{texto}</h1>
      <button onClick={cambiar}>Cambiar</button>
  
      <form onSubmit={cambiar} action="">
        <input type="text" name='' id='nombre' placeholder='Inserta un texto' />
        <input type="submit" value={Cambiar}/>
      </form>
  