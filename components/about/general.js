
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
          <h4>Currently interning as a developer @ <span>Verisk</span></h4>
          <p>more content about me...</p>
        </section>
      </div>

  </section>
  )
}

export default General;