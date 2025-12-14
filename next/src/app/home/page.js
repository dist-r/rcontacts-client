
import { getContacts } from '../../lib/contact/actions';
import { getProfile } from '../../lib/user/actions';
import { logout } from '../../lib/auth/actions';
import ContactList from './ContactList';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { FaUsers } from 'react-icons/fa';

export default async function Home() {
  const token = (await cookies()).get('token')?.value;
  if (!token) {
    redirect('/signin');
  }

  try {
    const contacts = await getContacts();
    const profile = await getProfile();

    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 to-black text-white">
        <nav className="bg-gray-800 shadow-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <FaUsers className="w-8 h-8 mr-2 text-white" />
              <img src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png" alt="Next.js Logo" className="w-6 h-6 mr-2" />
              <h1 className="text-2xl font-bold">R-Contacts</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span>Welcome, {profile.name}</span>
              <form action={logout}>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                >
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-6 py-8">
          <ContactList initialContacts={contacts} />
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    redirect('/signin');
  }
}