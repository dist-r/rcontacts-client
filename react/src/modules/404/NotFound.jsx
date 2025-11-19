import { Link } from "react-router";
import { FaReact } from 'react-icons/fa';

function NotFoundPage(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-md mx-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 text-center border border-blue-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-md">
            <FaReact className="w-12 h-12" />
          </div>
          <h1 className="text-7xl font-extrabold text-blue-600">404</h1>
          <p className="text-xl text-gray-700">Oops — The page you're looking for doesn't exist.</p>
          <p className="text-sm text-gray-500">Maybe the route changed or the page was removed.</p>
          <Link
            to="/"
            className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  ) 
}

export default NotFoundPage;