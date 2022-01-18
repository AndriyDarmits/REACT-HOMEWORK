import logo from './logo.svg';
import './App.scss';





const users = ["Andrii", "Oleh", "Kiril", "Stepan"];

function createList(users) {

  if (users.length) {
    return (
      <div>

        <h3>Список активних юзерів</h3>
        <ul>
          {users.map(user => <li className="list">Активний користувач <span> {user}</span></li>)}
        </ul>
      </div>
    );
  } return <p>There are no users</p>
}


function checkUserAmount(users) {
  if (users.length) {
    return (
      <div>
        <p>Кількість активних юзерів ({users.length})</p>
      </div>
    )
  }
  return <p>There are no active users.</p>
}


const obj = {
  firstName: 'Andrii',
  lastName: 'Darmits',

  getFullName: function () {
    return (
      <p>User name: {this.firstName} {this.lastName}</p>)
  }
}




function App() {
  return (

    <div>
      <h1 className="header">My first react application</h1>
      {obj.getFullName()}
      <div className="flex">
        {checkUserAmount(users)}
        {createList(users)}
      </div>
    </div>


  );
}

export default App;
