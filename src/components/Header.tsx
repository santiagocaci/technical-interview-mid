import { Link } from 'wouter';
import { header, link } from './Header.css';

export const Header = () => {
  return (
    <header className={header}>
      <img src='vite.svg' alt='vite logo' />
      <Link href='/'>
        <a className={link}>Hacker News</a>
      </Link>
    </header>
  );
};
