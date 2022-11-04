import Cards from "../components/Cards";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaHome />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Dashboard</h1>
      </div>

      <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Cards />
      </div>
    </div>
  );
}
