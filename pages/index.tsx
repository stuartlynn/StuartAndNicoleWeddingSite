import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
//@ts-ignore
import YoutubeBackground from "react-youtube-background";

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.hero}>
        <h1>Nicole and Stuart do the thing</h1>
        <h3>... and by thing we mean getting married</h3>
      </div>
      <section className={`${styles.rsvp} ${styles.section}`} >
        <h2>RSVP here</h2>
        <p>
          We would love to know if your coming to the wedding so we can plan on
          how many snakes... I mean drinks and food and stuff to order. This is
          a webform to do just that. We trust you know how to use it.
        </p>
      </section>
      <section className={`${styles.section} ${styles.location}`}>
        <h2>Time and Location</h2>
        <p>
          We are going to be getting married in NYC, our home of almost 7 years
          now. Come join us at the beautiful{" "}
          <a href="https://www.632onhudson.com/">632 on Hudson</a> which is also
          conveniently it's address.
        </p>
        <p>If you still need help finding it, we googled it for you</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.072264462709!2d-74.00747018459428!3d40.73843537932902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259955f9db39b%3A0x809cbac85f9cb27b!2s632%20On%20Hudson!5e0!3m2!1sen!2sus!4v1641747911059!5m2!1sen!2sus"
          className={styles.map}
          //@ts-ignore
          allowfullscreen={false}
          loading="lazy"
        ></iframe>
      </section>
      <section className={`${styles.section} ${styles.atire}`} >
        <h2>Attire: or what to wear</h2>
        <p>We have a very strict dress code for the wedding. After reading many many books on wedding etiquette, do's and dont's, faux pas and trends, we have decided to adopt the <span className={styles.emph}>WWETFMYH</span> dress code for the wedding. </p>
          <p>For those of you now in the know, or who have not done as extensive research as we have that means</p>
          <h2>Wear What Ever The Fuck Makes You Happy</h2>
          <p>Seriously, people arriving in clothes that do not spark joy in their hearts will be asked to go home and think about the choices they have made in life</p>

          <p>Here are some pictures for inspiration</p>

      </section>
    </div>
  );
};

export default Home;
