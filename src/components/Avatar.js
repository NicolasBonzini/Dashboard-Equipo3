import user from "../assets/images/ProfilePic.png";
import '../assets/styles/avatar.css'

function Avatar() {
  return (
    <div className="avatar">
      <img src={user} className="avatar-img" alt="profilePic" />
      <p className="user-name">Pablito</p>
    </div>
  );
}

export default Avatar;
