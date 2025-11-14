import React from 'react';

function UserProfile(props) {
  return (
    <div className="user-profile">
      <img src={props.avatar} alt="User Avatar" />
      <h2>Email: {props.name}</h2>
      <p>Location: {props.location}</p>
    </div>
  )
}

function App() {
  const user1 = {
    name:'John Doe',
    avatar:'john.jpg',
    email:'john@example.com',
    location:'New York'
  };
  const user2 = {
    name:'Jane Smith',
    avatar:'jane.jpg',
    email:'jane@example.com',
    location:'London'
  };
  return (
    <div>
      <UserProfile
        name    ={user1.name}
        avatar  ={user1.avatar}
        email   ={user1.email}
        location={user1.location}>
      </UserProfile>
      <UserProfile
        name    ={user2.name}
        avatar  ={user2.avatar}
        email   ={user2.email}
        location={user2.location}>
      </UserProfile>
    </div>
  )
}

export default App;
