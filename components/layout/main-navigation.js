import Link from 'next/link';

import Logo from './logo';
import classes from './main-navigation.module.css';
import { useRouter } from 'next/router';


function MainNavigation() {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts" className={router.pathname === '/posts' ? `${classes.navLink} ${classes.active}` : classes.navLink}>Portfolio</Link>
          </li>
          <li>
          <Link href="/about" className={router.pathname === '/about' ? `${classes.navLink} ${classes.active}` : classes.navLink}>About</Link>
          </li>
          <li>
          <Link href="/contact" className={router.pathname === '/contact' ? `${classes.navLink} ${classes.active}` : classes.navLink}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
