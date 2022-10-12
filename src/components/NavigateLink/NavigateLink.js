//React Router
import { NavLink } from "react-router-dom";
//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavigateLink({ route, text, icon }) {
  return (
    <NavLink to={route}>
      <li>
        <FontAwesomeIcon icon={icon} className="icon" />
        {text}
      </li>
    </NavLink>
  );
}

export default NavigateLink;
