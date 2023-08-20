import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { getTokenDuration } from "./utils";
import Navbar from "../Components/NavBar";

export default function Root() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token == "expired") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      {!token && (
        <div className="flex">
          <div className="w-1/3">
            <Navbar />
          </div>

          <div className="w-2/3">
            <Outlet />
          </div>
        </div>
      )}
      {token && (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
}
