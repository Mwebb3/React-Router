import { useParams, Link } from "react-router-dom";

const User = ({users}) => {
    const params = useParams();
    const id = params.id*1;
    
    const user = users.find(user => user.id === id);
    
    if(!user){
      return null;
    }
  
    return (
      <div>
        <Link to="/users">Back to Users</Link>
        <h1>{user.name}</h1>
        <ul className="details">
          <li>Username: {user.username}</li>
          <li>Email: {user.email}</li>
          <li>Company: {user.company.name}</li>
        </ul>
      </div>
    )
  }

  export default User