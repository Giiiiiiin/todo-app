import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css-components/main.css';
import ToDoList from './js-components/main';
// import MyComponent from './main';

function App() {
  return (
    <div className="App">
      <h1>To Do List:</h1>
      <ToDoList></ToDoList>

    </div>
  );
}

export default App;
