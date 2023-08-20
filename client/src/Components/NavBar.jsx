import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/auth"> Authenticate</NavLink>
        </li>
      </ul>
    </>
  );
}
