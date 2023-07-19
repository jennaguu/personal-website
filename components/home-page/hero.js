import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/jenna.JPG'
          alt='An image of Jenna'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jenna</h1>
      <p>
         Thanks for visiting my website! I'd love to <a href="https://www.linkedin.com/in/jenna-gu-738060124/" className={classes.underlineLink}>connect</a> with you
      </p>
    </section>
  );
}

export default Hero;
