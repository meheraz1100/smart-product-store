"use client";
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const goToLogin = () => router.push("/login");

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="loogo/sps_logo.png" className="h-8 w-8 rounded-md" alt="logo" />
          <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
            Smart Product Store
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-200">
          
          <Link href="/" className="hover:text-indigo-500 transition">
            Home
          </Link>

          <Link href="/products" className="hover:text-indigo-500 transition">
            Products
          </Link>

          {session && (
            <Link href="/dashboard/add-products" className="hover:text-indigo-500 transition">
              Add Products
            </Link>
          )}
          <Link href="/about" className="hover:text-indigo-500 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-indigo-500 transition">
            Contact
          </Link>
          
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">

          <ThemeToggle />

          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-4 py-2 text-sm font-semibold rounded-xl
              bg-red-500 hover:bg-red-600 text-white
              transition shadow-sm hover:shadow-md"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={goToLogin}
              className="px-4 py-2 text-sm font-semibold rounded-xl
              bg-gradient-to-r from-indigo-500 to-purple-600 text-white
              hover:opacity-90 transition shadow-md"
            >
              Sign In
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300
            hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">

          <Link onClick={() => setMenuOpen(false)} href="/" className="block py-2 text-gray-800 dark:text-white">
            Home
          </Link>

          <Link onClick={() => setMenuOpen(false)} href="/products" className="block py-2 text-gray-800 dark:text-white">
            Products
          </Link>

          {session && (
            <Link onClick={() => setMenuOpen(false)} href="/dashboard/add-products" className="block py-2 text-gray-800 dark:text-white">
              Add Products
            </Link>
          )}
          <Link onClick={() => setMenuOpen(false)} href="/about" className="block py-2 text-gray-800 dark:text-white">
            About
          </Link>
          <Link onClick={() => setMenuOpen(false)} href="/contact" className="block py-2 text-gray-800 dark:text-white">
            Contact
          </Link>
        </div>
      )}

    </nav>
  );
};

export default Navbar;