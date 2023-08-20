import Navbar from "../Components/NavBar";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/3 bg-gray-900 h-screen p-6">
        <Navbar />
      </div>

      <div className="w-2/3 p-6 bg-gray-100">Home Page Information</div>
    </div>
  );
}
