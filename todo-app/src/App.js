import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css-components/main.css';
import ToDoList from './js-components/main.js';

function App() {
  return (
      <div className="App" style={{
        backgroundImage: `linear-gradient(#662D8C, #ED1E79)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      >
        <div
          class="row justify-content-center align-items-center g-2"
        >
          <div class="col"></div>
          <div class="col-9">
            <h1 className='mt-5'>To Do List:</h1>
            <ToDoList></ToDoList></div>
          <div class="col"></div>
        </div>
      </div> 
  );
}

export default App;
