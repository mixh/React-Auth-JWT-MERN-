import { Form, NavLink, useRouteLoaderData } from "react-router-dom";

function Navigation() {
  const token = useRouteLoaderData("root");

  return (
    <>
      <nav>
        <NavLink to="/"> Home </NavLink>

        {!token && (
          <>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
        {token && (
          <>
            <Form action="/logout" method="post">
              {" "}
              logout{" "}
            </Form>
          </>
        )}
      </nav>
    </>
  );
}

export default Navigation;
