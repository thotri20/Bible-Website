import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-white flex flex-col items-center justify-center text-white">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
          Welcome to the <span className="text-yellow-300">Bible Website</span>
        </h1>
        <p className="mt-4 text-lg opacity-90">
          A gateway to explore the timeless wisdom of the Holy Scriptures
        </p>
      </header>

      <nav className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-lg w-full">
        <ul className="flex flex-col space-y-6">
          <li>
            <Link
              href="/bible"
              className="block w-full text-center text-xl font-semibold bg-gradient-to-r from-white to-gray-500 hover:from-white hover:to-gray-700 text-white py-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              📖 Read the Bible
            </Link>
          </li>
          <li>
            <Link
              href="/chatbot"
              className="block w-full text-center text-xl font-semibold bg-gradient-to-r from-gray-400 to-green-600 hover:from-gray-400 hover:to-green-700 text-white py-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
              🤖 Bible Chatbot
            </Link>
          </li>
        </ul>
      </nav>

      <footer className="mt-16 text-sm opacity-75">
        © {new Date().getFullYear()} The-Bible. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
