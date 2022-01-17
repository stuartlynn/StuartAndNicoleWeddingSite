import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
//@ts-ignore
import YoutubeBackground from "react-youtube-background";

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.videocontainer}>
          <video autoPlay muted className={styles.video}>
            <source src="/background_video.webm" type="video/webm"></source>
          </video>
        </div>
        <div className={styles.heroText}>
          <h1>Nicole and Stuart do the thing</h1>
          <h3>... and by thing we mean getting married</h3>
        </div>
      </div>

      <section className={`${styles.rsvp} ${styles.section}`}>
        <h2 className={styles.rsvpLink}>
          <a target="_blank" href="https://forms.gle/685ckkc7eL4o56LD8">RSVP Here</a>
        </h2>
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
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </section>

      <section className={`${styles.section} ${styles.atire}`}>
        <h2>Attire</h2>
        <p>
          We have a very strict dress code for the wedding. After reading many
          many books on wedding etiquette, do's and dont's, faux pas and trends,
          we have decided to adopt the{" "}
          <span className={styles.emph}>WWETFMYH</span> dress code.{" "}
        </p>
        <p>
          For those of you who have not done as extensive
          research as we have,  that means
        </p>
        <h2>Wear What Ever The Fuck Makes You Happy</h2>
        <p>
          People arriving in clothes that do not spark joy in their
          hearts will be asked to go home and think about the choices they have
          made in life
        </p>
      </section>

      <section className={`${styles.section} ${styles.accomodation}`}>
        <h2>Where to stay</h2>
        <p>
          Anywhere in Manhatten or western Brooklyn will put you within a reasonable subway journey of the venue.
        </p>
        <p>
          The following subway lines have stations within a few blocks of the venue: A, C, E, L, 1, 2, 3, F, M. Google Maps is a good way to check subway commute times between the venue and your hotel.
        </p>
        <p>
          Airbnbs are another good option and there are a ton of them in every neighborhood. 
        </p>
      </section>

      <section className={`${styles.section} ${styles.thingsToDo}`}>
        <h2>Things to do</h2>
        <p>
        If you've got some time to kill, here are some of our favorites. 
        </p>
        <ul>
          <li>
            <p>
              <a target="_blank" href="https://goo.gl/maps/HSwcXuGSU1Haz2wY6">John's Of Bleecker Street</a> (pizza)
            </p>
          </li>
          <li>
            <p>
              <a target="_blank" href="https://goo.gl/maps/dHmLtKXqA8Angadz9">McSorley's Ale Huse</a> (oldest bar in nyc)
            </p>
          </li>
          <li>
            <p>
              <a target="_blank" href="https://goo.gl/maps/3a9uiEgJ5rR7FL6y8">Ivan Ramen</a> (get the Triple Pork Triple Garlic)
            </p>
          </li>
          <li>
            <p>
              <a target="_blank" href="https://amplehills.com/">Ample Hills Creamery</a> (ice cream)
            </p>
          </li>
          <li>
            <p>
              <a target="_blank" href="https://littlefieldnyc.com/">Littlefield</a> (comedy)
            </p>
          </li>
          <li>
            <p>
              <a target="_blank" href="https://goo.gl/maps/LYyKpUHKXKo9whEZ9">Thai Diner</a> (Thai comfort food)
            </p>
          </li>
          <li>
            <p>
              <a target="_blank" href="https://www.bunkernyc.com/">Bunker</a> (Vietnamese street food)
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
