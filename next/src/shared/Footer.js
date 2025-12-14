import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-gray-800 to-black text-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold mb-4">RContacts</h3>
          <p className="text-gray-400">Your digital rolodex, reimagined.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Navigate</h3>
          <ul>
            <li><Link href="/home" className="text-gray-400 hover:text-gray-300">Home</Link></li>
            <li><Link href="/signup" className="text-gray-400 hover:text-gray-300">Sign Up</Link></li>
            <li><Link href="/signin" className="text-gray-400 hover:text-gray-300">Sign In</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul>
            <li><a href="#" className="text-gray-400 hover:text-gray-300">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-gray-300">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-300"><FaGithub size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-300"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-300"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
        <p>&copy; 2025 RContacts. All rights reserved.</p>
      </div>
    </footer>
  );
}