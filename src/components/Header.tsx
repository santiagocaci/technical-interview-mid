import { header, link } from './Header.css';

export const Header = () => {
  return (
    <header className={header}>
      <img src='vite.svg' alt='vite logo' />
      <a className={link}>Hacker News</a>
    </header>
  );
};
