import logo from './logo.svg';
import './App.css';

const users = ["Andrii", "Oleh", "Kiril", "Stepan"]



function createList(users) {
  if (users.length) {
    return users.map(user => <li className="list">Активний користувач <span> {user}</span></li>);
  } return <h2>There are no users</h2>
}


function App() {
  return (
    <div>
      <h1>My first react project</h1>
      <ul>
        {createList(users)}
      </ul >
    </div>


  );
}

export default App;
