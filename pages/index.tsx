import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import FluidAnimation from "react-fluid-animation";
import Image from "next/image";
import { Jiggle } from "../components/jiggle";
import { TagCloud } from "react-tagcloud";
import { useEffect, useLayoutEffect, useState } from "react";

const data = [
  { value: "JavaScript", count: 40 },
  { value: "React", count: 40 },
  { value: "Nodejs", count: 20 },
  { value: "HTML5", count: 35 },
  { value: "CSS3", count: 35 },
  { value: "Jest", count: 15 },
  { value: "CI/CD", count: 30 },
  { value: "Typescript", count: 35 },
  { value: "Agile", count: 20 },
  { value: "Full Stack", count: 30 },
  { value: "Git", count: 30 },
  { value: "NEXTjs", count: 25 },
];

const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: "blinker 3s linear infinite",
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      margin: "10px",
      padding: "20px",
      display: "inline-block",
      color: color,
    }}
  >
    {tag.value}
  </span>
);

const options = {
  luminosity: "light",
  hue: "blue",
};

const Home: NextPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <FluidAnimation />
      <div className={styles.container}>
        <div className={styles.sideBar}>
          <div className={styles.logoColourContainer}>
            <div className={styles.logoContainer}>
              <span className={styles.center}>
                <div className={styles.logoimage}>
                  <Image
                    src="/jordan2.svg"
                    alt="Logo"
                    width={150}
                    height={150}
                  />
                </div>
              </span>
              <div className={styles.name}>Jordan </div>
              <div className={styles.name2}>Web Developer</div>
            </div>
          </div>
          <div className={styles.logoContainer2}></div>
          <button type="button" className={styles.block}>
            About me
          </button>
          <div className={styles.squiggle}>
            <Image src="/line.svg" alt="divider" width={120} height={10} />
          </div>
          <button type="button" className={styles.block}>
            Skills
          </button>
          <div className={styles.squiggle}>
            <Image src="/line.svg" alt="divider" width={120} height={10} />
          </div>
          <button type="button" className={styles.block}>
            Projects
          </button>
          <div className={styles.squiggle}>
            <Image src="/line.svg" alt="divider" width={120} height={10} />
          </div>
          <button type="button" className={styles.block}>
            Contact me
          </button>
        </div>
        <main className={styles.main}>
          <div className={styles.mainhello}>
            <div className={styles.mainhello1}>
              <Jiggle>I</Jiggle>
              <Jiggle>&apos;</Jiggle>
              <Jiggle>m</Jiggle>
              <Jiggle> </Jiggle>
              <Jiggle>J</Jiggle>
              <Jiggle>o</Jiggle>
              <Jiggle>r</Jiggle>
              <Jiggle>d</Jiggle>
              <Jiggle>a</Jiggle>
              <Jiggle>n</Jiggle>
              <br></br>
              <Jiggle>E</Jiggle>
              <Jiggle>n</Jiggle>
              <Jiggle>g</Jiggle>
              <Jiggle>i</Jiggle>
              <Jiggle>n</Jiggle>
              <Jiggle>e</Jiggle>
              <Jiggle>e</Jiggle>
              <Jiggle>r</Jiggle>
              <Jiggle> </Jiggle>
              <Jiggle>t</Jiggle>
              <Jiggle>u</Jiggle>
              <Jiggle>r</Jiggle>
              <Jiggle>n</Jiggle>
              <Jiggle>e</Jiggle>
              <Jiggle>d</Jiggle>
              <Jiggle> </Jiggle>
              <Jiggle>.</Jiggle>
              <Jiggle> </Jiggle>
              <Jiggle>.</Jiggle>
              <Jiggle> </Jiggle>
              <Jiggle>.</Jiggle>
              <Jiggle> </Jiggle>
              <br></br>
              <Jiggle>W</Jiggle>
              <Jiggle>e</Jiggle>
              <Jiggle>b</Jiggle>
              <Jiggle> </Jiggle>
              <Jiggle>D</Jiggle>
              <Jiggle>e</Jiggle>
              <Jiggle>v</Jiggle>
              <Jiggle>e</Jiggle>
              <Jiggle>l</Jiggle>
              <Jiggle>o</Jiggle>
              <Jiggle>p</Jiggle>
              <Jiggle>e</Jiggle>
              <Jiggle>r</Jiggle>
            </div>
          </div>

          <div className={styles.sideAboutMe}>
            <div>
              <h1 className={styles.textCatTitle}>About me</h1>
              <div className={styles.sideAboutMe}>
                <div className={styles.containerAnoutMe}>
                  <div className={styles.itemMeLeft}>
                    <p className={styles.text}>
                      Full stack Developer, with a frontend flare. Focusing on
                      astatically pleasing user design. <br></br>
                      <br></br>Where form meets function. Good UI needs no
                      explanation,if you have to explain your UI, your UI is bad
                    </p>
                  </div>
                  <div className={styles.itemMeRight}>
                    <div className={styles.ImageMe}>
                      <Image
                        src="/jordan2.svg"
                        alt="Logo"
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sideSkills}>
            <h1 className={styles.textCatTitle}>Skills</h1>
            <div className={styles.containerSkills}>
              <div className={styles.itemLeft}>
                <h1 className={styles.skillsText}>
                  <TagCloud
                    tags={data}
                    minSize={3}
                    maxSize={7}
                    renderer={customRenderer}
                    colorOptions={options}
                  />
                </h1>
              </div>

              <div className={styles.itemRight}>
                <p className={styles.text}>
                  Full stack Developer, with a frontend flare. Focusing on
                  astatically pleasing user design. <br></br>
                  <br></br>Where form meets function. Good UI needs no
                  explanation,if you have to explain your UI, your UI is bad
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sideProjects}>
            <div>
              <h1 className={styles.textCatTitle}>Projects</h1>
            </div>
          </div>

          <div className={styles.sideContactMe}>
            <div>
              <h1 className={styles.textCatTitle}>Contact Me</h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
