//React
import { useEffect, useState } from "react";
//Images
import user from "../../assets/images/ProfilePic.png";
//CSS
import "../Avatar/avatar.css";

function Avatar({ style }) {
  const [id, setId] = useState("Anonimo");

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("user"))?.name) {
      const user = prompt("Ingrese su nombre:");
      localStorage.setItem("user", JSON.stringify({ name: user }));
    }
    setId(JSON.parse(localStorage.getItem("user"))?.name || id);
  }, []);

  return (
    <div style={style} className="avatar">
      <img src={user} className="avatar-img" alt="profilePic" />
      <p style={style} className="user-name">
        {id}
      </p>
    </div>
  );
}

export default Avatar;
