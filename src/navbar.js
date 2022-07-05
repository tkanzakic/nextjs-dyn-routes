import Link from 'next/link';

export const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link href='/static-1'>Static-1</Link>
      </li>
      <li>
        <Link href='/static-2'>Static-2</Link>
      </li>
      <li>
        <Link href='/static-3'>Static-3</Link>
      </li>
      <li>
        <Link href='/dynamic-1'>dynamic-1</Link>
      </li>
      <li>
        <Link href='/dynamic-2'>dynamic-2</Link>
      </li>
      <li>
        <Link href='/dynamic-3'>dynamic-3</Link>
      </li>
      <li>
        <Link href='/long/dynamic'>long/dynamic</Link>
      </li>
    </ul>
  </nav>
);
