
import classes from './general.module.css';
import Image from 'next/image';


function General() {
  return (
    <section className={classes.general}>
      <div className={classes.imageAndDescription}>
        <div className={classes.mainCircularImage}>
          <Image 
            src='/images/about/general/sgpic.jpg'
            alt='picture of Jenna'
            width={300}
            height={400}
          />      
          </div>
        <section className={classes.generalDescription}>
          <h3>Hello! I'm Jenna Gu, a junior at Cornell University studying Information and Computer Science</h3>
          <h4>Currently working on <a href="https://core.verisk.com/" className={classes.underlineLink}> core.verisk.com</a> @ <a href="https://www.verisk.com/" className={classes.underlineLink}>Verisk</a></h4>
          <p>more content about me...</p>
        </section>
      </div>

  </section>
  )
}

export default General;