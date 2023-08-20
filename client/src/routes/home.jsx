import Navbar from "../Components/NavBar";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-1/3">
          <Navbar />
        </div>

        <div className="w-2/3">
          <h1> Home Page Information</h1>
        </div>
      </div>
    </>
  );
}
