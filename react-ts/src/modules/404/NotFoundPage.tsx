import { Link } from 'react-router';

export default function NotFoundPage(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-lg mx-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center border border-blue-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-50 text-[#61dafb] shadow-md">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="w-12 h-12" />
          </div>
          <h1 className="text-6xl font-extrabold text-[#3178c6]">404</h1>
          <p className="text-lg text-gray-700">Upsss Page Notfound.</p>
          <p className="text-sm text-gray-500">Maybe the route changed or the page was removed.</p>
          <Link
            to="/"
            className="mt-4 inline-block px-6 py-2 bg-[#61dafb] text-white rounded-lg hover:bg-[#21b4d6] transition-colors shadow"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}