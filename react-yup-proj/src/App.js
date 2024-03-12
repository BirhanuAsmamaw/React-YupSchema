import './App.css';
import { userSchema } from './Validations/UserValidation';

function App() {

  const createUser = async (event) =>{
    event.preventDefault()  // not to refresh when we click the submit button
    let formData = {       
      name: event.target[0].value, //this will return the value for the first input
      email: event.target[1].value,
      password: event.target[2].value,
    };
     const isValid = await userSchema.isValid(formData)
  };

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


