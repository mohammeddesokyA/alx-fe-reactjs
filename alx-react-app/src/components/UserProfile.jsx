const UserProfile = (props) => {
  return (
    <div style={{ color: '#333', border: '1px solid #ccc', padding: '20px', borderRadius: '10px', maxWidth: '300px', margin: '20px auto' }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
