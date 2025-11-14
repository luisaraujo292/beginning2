'use client'

// Exercise on page 12.
function UserProfile(props) {
  return (
    <div>
      <h2>{props.user.name}</h2>
      <p>Email: {props.user.email}</p>
      <p>Age: {props.user.name}</p>
    </div>
  );
}

export default UserProfile;
