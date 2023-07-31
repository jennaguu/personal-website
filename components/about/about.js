// pages/about.js

import styles from './about.module.css';
import Image from 'next/image';

const Section = ({ title, content }) => (
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <p className={styles.sectionContent}>{content}</p>
  </div>
);

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profilePicture}>
        <Image
          src='/images/about/sgpic.jpg'
          alt="Jenna Gu"
          width={200}
          height={200}
          layout="responsive"
          className={styles.roundedPicture}
        />
      </div>
      <h1 className={styles.title}>About Me</h1>
      <Section
        title="Introduction"
        content="Hello! I am [Your Name], and this is my personal website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget arcu euismod, vestibulum est at, laoreet eros."
      />
      <Section
        title="Education"
        content="I have completed my Bachelor's in Computer Science from [University Name]. Currently, I am pursuing a Master's degree in [Your Field of Study]."
      />
      <Section
        title="Work Experience"
        content="I have worked as a [Your Job Title] at [Company/Organization Name] for [Number of Years]. During this time, I was responsible for [Your Key Responsibilities]."
      />
      {/* Add more sections as needed */}
    </div>
  );
};

export default About;
