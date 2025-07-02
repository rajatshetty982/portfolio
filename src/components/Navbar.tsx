'use client';
import Link from 'next/link';
import { useTheme } from '../context/ThemeProvider';

export default function Navbar() {
  const { toggle, mode } = useTheme();

  return (
    <nav className="nav">
      <Link href="/">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/resume">Resume</Link>
      <button onClick={toggle} className="theme-toggle">
        {mode === 'dark' ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}
