import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center p-6">
        <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">
          Welcome to OH Appointment Management System!
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-md mx-auto">
          Manage your office hours and appointments with ease and efficiency.
        </p>
        <Button className="mt-8 bg-white text-blue-600 hover:bg-gray-100">
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}
