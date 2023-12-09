import React from "react";
import styles from "./diagnosis.module.css";

const DiagnosisPage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section
        id="hero"
        className={styles.hero}
        style={{
          backgroundImage: "url('black.jpg')",
          backgroundSize: "cover",
          color: "#fff",
          textAlign: "center",
          padding: "100px 0",
        }}
      >
        <h2 className={styles.title}>FULL SYSTEM DIAGNOSIS</h2>
        <p style={{ fontSize: "25px" }}>
          The Complete Motorcycle Diagnosis Guide
        </p>
      </section>

      {/* Section 1 */}
      <section
        id="about"
        className={styles.section}
        style={{ backgroundColor: "#fff", padding: "20px" }}
      >
        <h2 className={styles.title}>
          How to Diagnose and Fix Common Problems with Motorcycles
        </h2>
        <p className={styles.text}>
          Motorcycles look cool and are a blast to ride, but they are also
          machines that require maintenance and regular upkeep to keep them
          running smoothly. You can expect to encounter a few issues from time
          to time, as you keep riding your bike for newer adventures.
          Fortunately, the problems you might encounter are usually small,
          simple fixes that almost any rider can tackle with ease. With proper
          care and routine inspections, your bike will continue running smoothly
          for years.
        </p>
      </section>

      {/* Section 2 */}
      <section
        id="about"
        className={styles.section}
        style={{ backgroundColor: "#fff", padding: "20px" }}
      >
        <h2 className={styles.title}>1. Flat Tires</h2>
        <p className={styles.text}>
          Tires are the only part of your bike in contact with the road. The
          condition of your tires directly impacts your handling, braking
          performance and mileage. To say that they are important and should be
          looked after is an understatement. With the exception of riding over
          something sharp, a lot of issues that may cause your tires to deflate
          over time are preventable with proper care. Before heading out on long
          rides, check for cracks in the tyre wall, bald spots or places that
          are bulging. Any of the above can lead to what is called a Tyre
          Blowout, which can be disastrous, to say the least. If you notice that
          your tread is nearly worn out, get your tires replaced immediately.
          Riding on bald tyres will not increase the chances of a puncture but
          will also have a drastic impact on the levels of grip when riding in
          bad weather.
        </p>

        <h2 className={styles.title}>Pro Tips:</h2>
        <p className={styles.text}>
          Check your tire pressure frequently and especially before you head out
          on long rides.
        </p>
        <p className={styles.text}>
          Always carry a puncture repair kit and a compact tyre inflator. That
          way, you are not left stranded in the middle of anywhere in the event
          of a flat tyre.
        </p>
      </section>

      {/* Section 3 */}
      <section
        id="about"
        className={styles.section}
        style={{ backgroundColor: "#fff", padding: "20px" }}
      >
        <h2 className={styles.title}>2. Battery Issues</h2>
        <p className={styles.text}>
          Issues with the battery are probably one of the most common problems
          with motorcycles. A majority of the motorcycles, with the exception of
          a few recent and expensive ones, use Sealed Lead-Acid Batteries.
          Unlike the newer Lithium Ion batteries, lead Acid batteries are
          finicky things. Improper grounding and the cold can have a severe
          effect on its life and performance. Lead acid batteries also do not
          hold charge when left unused for long durations. Lead acid batteries
          have a typical lifespan of 2-3 years. Batteries used on motorcycles
          are not deep cycle batteries, which in laypersons terms means that
          they do not like to be drained regularly. The key to extending their
          life span is to make sure that the vehicle is used regularly. Even if
          you dont intend to ride, you should run your bike for a few minutes at
          least once a week to keep your battery topped up.
        </p>

        <h2 className={styles.title}>Pro Tips:</h2>
        <p className={styles.text}>
          If you know you will not use your bike for an extended period,
          disconnect the battery terminals.
        </p>
        <p className={styles.text}>
          If you have an intelligent battery charger, leave your battery hooked
          to it. The trickle charge will keep your battery in good working order
          until you put it back into your motorcycle.
        </p>
        {/* Section 3 */}
      </section>

      {/* Section 4 */}
      <section
        id="about"
        className={styles.section}
        style={{ backgroundColor: "#fff", padding: "20px" }}
      >
        <h2 className={styles.title}>
          3. Your Engine Is Running Hotter than Usual
        </h2>
        <p className={styles.text}>
          Your motorcycle engine should settle down to its normal operating
          temperature after running for a few minutes. If you notice that your
          engine is running hotter than usual, it could be down to one of the
          below issues. If you have an oil-cooled or a liquid-cooled motorcycle,
          check if your engine has sufficient engine oil or coolant in the
          coolant reservoir. If not, address this immediately. The next thing to
          check is your tyres. If your tyres are under-inflated, they will
          drastically increase the rolling resistance of your motorcycle and
          will make the engine work harder, thus making it run hotter. If you
          notice a rise in temperature and white smoke coming out of your
          exhaust, your engine is running rich. You should get your carburettor
          checked before it causes irreplaceable damage. Check if your brakes
          are working well. Brakes should reset to their original position when
          you let go of the brake levers; sometimes, they get stuck midway and
          remain partially engaged. This puts a tremendous strain on both your
          engine and the components of the braking system of your motorcycle.
          Address this issue immediately.
        </p>

        <h2 className={styles.title}>Pro Tips:</h2>
        <p className={styles.text}>
          If you notice your engine running hotter than usual, stop and let it
          cool down immediately. If the engine gets too hot, it can seize. There
          is no coming back from that.
        </p>
      </section>
    </div>
  );
};

export default DiagnosisPage;
