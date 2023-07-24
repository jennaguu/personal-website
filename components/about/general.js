
import classes from './general.module.css';
import Image from 'next/image';


function General() {
  return (
    <section className={classes.general}>
      <div className={classes.mainCircularImage}>
        <Image 
          src='/images/about/general/sgpic.jpg'
          alt='picture of Jenna'
          width={300}
          height={400}
        />
        <h1> circularImage class tester </h1>
      </div>
      <section className={classes.generalDescription}>
        <h3>College Student</h3>
        <p>Add your general introduction here.</p>
      </section>
  </section>
  )
}

export default General;