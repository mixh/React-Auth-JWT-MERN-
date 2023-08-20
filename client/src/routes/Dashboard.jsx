import { Form, NavLink } from "react-router-dom";
import { useAuth } from "./utils";

export default function Dashboard() {
  useAuth();

  return (
    <>
      <h2> Dashboard Page </h2>
      <Form action="/logout" method="post">
        <button> Logout</button>
      </Form>
      <NavLink to="/user">User Server Data </NavLink>
    </>
  );
}
