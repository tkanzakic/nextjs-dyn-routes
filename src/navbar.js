import Link from 'next/link';

export const NavBar = () => (
  <nav>
    <Link href='/static-1'>Static-1</Link>
    <Link href='/static-2'>Static-2</Link>
    <Link href='/static-3'>Static-3</Link>
    <Link href='/dynamic-1'>dynamic-1</Link>
    <Link href='/dynamic-2'>dynamic-2</Link>
    <Link href='/dynamic-3'>dynamic-3</Link>
  </nav>
);
