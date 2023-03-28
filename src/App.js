import './App.css';

function App() {
  return (
    <div className='App'>
      <form onSubmit={mostrar}>
        <input type="text" name="texto"/><br/>
        <input type="submit" value="Mostrar"/>
      </form>
    </div>
  );
}

function mostrar(e){
  e.preventDefault();
  alert(e.target.texto.value);
}

export default App;
