import Image from "next/image";

export default function Home() {
  return (
    <div className=" m-6 flex items-end justify-center">
      <div>
        <h1 className="text-center">0</h1>
        <button className=" p-2 border border-solid border-white w-36">
          add
        </button>
      </div>
    </div>
  );
}
