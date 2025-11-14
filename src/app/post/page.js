'use client'

// Exercise on page 12.
function UserProfile(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>Email: {props.user.email}</p>
      <p>Age: {props.user.age}</p>
    </div>
  );
}

function App() {
  const user = {
    name:"Luís Sérgio",
    email:"luisaraujo292@yahoo.com",
    age:"67"
  }
  return <UserProfile user={user}></UserProfile>
}

export default App;
