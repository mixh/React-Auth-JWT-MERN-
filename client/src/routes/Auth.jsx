// TO DO
// Create a login form, send a post request to api, store token in localstorage, store time in localstorage
// if successfull login redirect the user to /dashboard else go back to /auth
// .... in dashboard check if the user token for auth - if true good, else redirect back to /auth
// ... create a logout post link which sends it to an action that removes localStorage token and then redirects to /auth

import LoginForm from "../Components/LoginForm";
import Navbar from "../Components/NavBar";
export default function Auth() {
  return (
    <>
      <div className="flex">
        <div className="w-1/3">
          <Navbar />
        </div>

        <div className="w-2/3">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
