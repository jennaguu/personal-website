import React from 'react';
// import classes from './general.module.css';
import { Fragment } from 'react';
import General from '../components/about/general';

function About () {
  return (
    <section>
      <General /> 
    </section>
  );
};

export default About;

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Projects</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}