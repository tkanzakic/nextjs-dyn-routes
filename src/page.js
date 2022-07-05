import { NavBar } from './navbar';

export const Page = ({ content }) => (
  <div>
    <NavBar />
    <main>{content}</main>
  </div>
);
