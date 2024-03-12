import './App.css';
import * as yup from 'yup';
import { userSchema } from './Validations/UserValidation';

function App() {

  const createUser = (event) =>{
    
  }

  return (
    <div className="App">
      <form onSubmit={createUser}>
        <input type="text"  placeholder="Name..." />
        <input type="text"  placeholder="email@email.com" />
        <input type="text"  placeholder="password123" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;


