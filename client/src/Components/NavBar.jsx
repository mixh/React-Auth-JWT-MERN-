import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-1/3 bg-gray-900 h-full p-6">
      <ul className="space-y-4">
        <li>
          <NavLink
            to="/"
            className="text-white hover:text-blue-500 transition duration-300"
            activeClassName="font-semibold"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth"
            className="text-white hover:text-blue-500 transition duration-300"
            activeClassName="font-semibold"
          >
            Authenticate
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
