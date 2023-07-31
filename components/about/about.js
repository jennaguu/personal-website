// pages/about.js

import styles from './about.module.css';
import Image from 'next/image';

const Section = ({ title, content }) => (
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    <div className={styles.sectionContent}>
      {typeof content === 'string' ? (
        <p dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
        <ul>
          {content.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const About = () => {
  const introductionText = "Hi! My name is Jenna Gu, welcome to my website! Here are a few facts about me...";
  const introductionPoints = [
    'I have a twin sister who is currently studying at Rice University',
    "I've figure skated for 13 years, and I'm part of Cornell's figure skating team (CUFSC)",
    "One of my favorite things is traveling with my family, and my two favorite places that we've been to are Singapore and Florence, Italy!"
  ];

  const educationContent = [
    'Rising junior at Cornell University studying computer and information science',
    'Favorite courses include "Data Structures and Functional Programming", "Discrete Structures", and "Intermediate Chinese Reading and Writing"'
  ];

  const workExperienceContent =
    "I'm currently interning as a software developer at <a href='https://www.verisk.com' class='" +
    styles.linkUnderline +
    "'>Verisk</a>";

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
      <Section title="Introduction" content={introductionText} />
      <Section title="" content={introductionPoints} />
      <Section title="Education" content={educationContent} />
      <Section title="Work Experience" content={workExperienceContent} />
    </div>
  );
};

export default About;
