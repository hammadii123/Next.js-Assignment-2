import Image from "next/image";
import "./globals.css"; // Import your SCSS file

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="navBar bg-gray-800 text-white py-4 shadow-lg">
        <ul className="flex justify-center space-x-8 text-lg font-semibold">
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">Courses</li>
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">Certifications</li>
          <li className="hover:text-indigo-400 transition duration-300 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Main Body */}
      <div className="body flex flex-1 items-center justify-center py-20 bg-gradient-to-r from-gray-100 to-gray-300">
        {/* Left Side */}
        <div className="body">
        <div className="leftSide w-1/2 flex flex-col items-start px-12">
          <div className="textParent mx-auto text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Hello, I'm <span className="text-indigo-600">Hammad Mustafa</span> <br />
              <span className="text-2xl font-medium">Web Developer</span> <br />
              based in Pakistan
            </h1>
            <button className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="rightside w-1/2 flex justify-center">
          <Image
            src="/images/image.jpg"
            alt="Hammad"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
