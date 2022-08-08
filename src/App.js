import './App.css';


const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = ()  => {
  const name = 'Kendrick';
  const isNameShowing = false;


  return (
    <div className="App">
      <Person name={'Luis'} lastName={'De Jesus'} age={345}/>
      {/* <h1>Hello, {isNameShowing ? name : "Sad"}!</h1> */}
    </div>
  );
}

export default App;
