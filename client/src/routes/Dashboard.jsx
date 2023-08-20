import { Form, NavLink } from "react-router-dom";
import { useAuth } from "./utils";

export default function Dashboard() {
  useAuth();

  return (
    <div className="flex">
      <div className="w-1/3 bg-gray-900 h-screen p-6">
        {/* Navbar component */}
      </div>

      <div className="w-2/3 p-6 bg-gray-100">
        <h2 className="text-5xl font-semibold mb-4">Dashboard Page</h2>
        <Form action="/logout" method="post">
          <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            Logout
          </button>
        </Form>
        <NavLink
          to="/user"
          className="text-blue-500 hover:underline transition duration-300"
        >
          User Server Data
        </NavLink>
      </div>
    </div>
  );
}
