import React from "react";
import styles from "./safety.module.css";

const SafetyTipsPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.wrapper}>
          <h1 className={styles.heroTitle}>Motorcycle Safety Tips</h1>
          <p className={styles.heroSubtitle}>
            Explore essential safety practices to make every ride secure and
            enjoyable.
          </p>
        </div>
      </section>
      {/* Section 1 */}
      <section
        id="about"
        className={styles.section}
        style={{ padding: "20px" }}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>SAFETY CULTURE</h2>
          <p className={styles.text}>
            Motorcycle Safety Culture refers to the practices and precautions
            taken to protect riders from risks while using motorcycles on the
            road. It encompasses multiple safety aspects, from rider behavior
            and protective gear to motorcycle maintenance and compliance with
            traffic laws. Following these practices can significantly reduce the
            likelihood of accidents and keep individuals safe on the road.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="about"
        className={styles.section}
        style={{ padding: "20px" }}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>Motorcycle Safety Tips:</h2>
          <h3 className={styles.subTitle}>1. Wear Protective Gear</h3>
          <p className={styles.text}>
            Using protective gear is the single most effective way to protect
            yourself on the road. Donning the appropriate helmet, gloves,
            jacket, pants, and boots greatly reduces the impact of falls and
            collisions on your body and safeguards you from head injuries,
            burns, fractures, and abrasions.
          </p>
        </div>
      </section>

      {/* Section 3 */}
      <section
        id="about"
        className={styles.section}
        style={{ padding: "20px" }}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>2. Ride Within Your Limits</h2>
          <p className={styles.text}>
            Self-awareness is crucial for motorcycle safety on the road. It’s
            important to know your riding capabilities and stay within your
            limits. For example, if you’ve ingested alcohol or taken medication,
            it’s best to refrain from driving. Furthermore, if you’re new to
            motorcycle riding, it’s recommended to avoid taking unnecessary
            risks or trying maneuvers beyond your skill level. Instead, you can
            gradually push your limits as you gain more experience.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section
        id="about"
        className={styles.section}
        style={{ padding: "20px" }}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>3. Observe Traffic Laws</h2>
          <p className={styles.text}>
            Another great way to be safe on the road is by following traffic
            laws and regulations in your area. Pay attention to the speed limit,
            turn signals, and traffic lights as you navigate the roads. Doing so
            is vital not only for your safety but also for the safety of other
            drivers.
          </p>
        </div>
      </section>

      {/* Section 5 */}
      <section
        id="about"
        className={styles.section}
        style={{ padding: "20px" }}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>
            4. Perform Regular Maintenance and Inspections
          </h2>
          <p className={styles.text}>
            Inspections and maintenance help keep your motorcycle in good
            condition and ensure it’s safe to use. Periodically carrying them
            out reduces the risk of mechanical failures that can result in
            avoidable accidents.
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section
        id="about"
        className={styles.section}
        style={{ padding: "20px" }}
      >
        <div className={styles.content}>
          <h2 className={styles.title}>5. Develop Defensive Riding Skills</h2>
          <p className={styles.text}>
            Defensive riding skills are a must for any motorcycle rider, as it
            helps them anticipate and avoid potential hazards on the road. Not
            only does it lower the chances of crashes, but it also reduces
            maintenance and repair costs resulting from these accidents.
          </p>
          <h3 className={styles.subTitle}>
            Here are a few tips to help you enhance this skill:
          </h3>
          <p className={styles.text}>i. Stay focused on the road</p>
          <p className={styles.text}>ii. Be aware of your surroundings</p>
          <p className={styles.text}>
            iii. Watch out for pedestrians on the road
          </p>
          <p className={styles.text}>
            iv. Maintain a safe distance from vehicles
          </p>
          <p className={styles.text}>
            v. Anticipate the actions of other drivers
          </p>
          <p className={styles.text}>
            vi. Use turn signals to alert other drivers of your movements
          </p>
        </div>
      </section>
    </div>
  );
};

export default SafetyTipsPage;
