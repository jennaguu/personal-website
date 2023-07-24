
import classes from './general.module.css';

function General() {
  return (
    <section className={classes.general}>
      <section className={classes.imageContainer}>
        <Image 
          src=''
          alt=''
          width={300}
          height={300}
        />
      </section>
      <section className={classes.generalDescription}>
        <h1>Your Name</h1>
        <p>College Student</p>
        <p>Add your general introduction here.</p>
      </section>
  </section>
  )
}

export default General;

<div className={classes.image}>
<Image
  src='/images/site/jenna.JPG'
  alt='An image of Jenna'
  width={300}
  height={300}
/>
</div>