import React from "react";
import styles from "./builderpage.module.css";
import DownloadWithGitBlock from "../ui/download_withgit/downloadwgit_block";

const BuilderPage: React.FC = () => {
  return (
    <div className={styles.builderpage}>
      <div className={styles.container}>
        <section className={styles.builder_section}>
          <div className={styles.title_part}>
            <svg
              className={styles.build_icon}
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 6.57099C23 6.26869 22.8341 5.99104 22.5679 5.84811L11.8894 0.097958C11.647 -0.0326527 11.3538 -0.0326527 11.1115 0.097958L0.432893 5.84811C0.165929 5.99104 0 6.26869 0 6.57099C0 6.87328 0.165929 7.15093 0.432071 7.29387L3.66604 9.03534L0.432893 10.7768C0.165929 10.9197 0 11.1974 0 11.4997C0 11.802 0.165929 12.0796 0.432071 12.2226L3.66604 13.964L0.432893 15.7055C0.165929 15.8485 0 16.1261 0 16.4284C0 16.7307 0.165929 17.0083 0.432071 17.1513L11.1106 22.9014C11.2322 22.9671 11.3661 23 11.5 23C11.6339 23 11.7678 22.9671 11.8894 22.9014L22.5679 17.1513C22.8341 17.0083 23 16.7307 23 16.4284C23 16.1261 22.8341 15.8485 22.5679 15.7055L19.334 13.964L22.5671 12.2226C22.8341 12.0796 23 11.802 23 11.4997C23 11.1974 22.8341 10.9197 22.5679 10.7768L19.334 9.03534L22.5671 7.29387C22.8341 7.15093 23 6.87328 23 6.57099ZM17.6024 14.8972L20.4462 16.4284L11.5 21.2454L2.55382 16.4284L5.39761 14.8972L11.1106 17.9735C11.2322 18.0384 11.3661 18.0713 11.5 18.0713C11.6339 18.0713 11.7678 18.0384 11.8894 17.9727L17.6024 14.8972ZM17.6024 9.96851L20.4462 11.4997L11.5 16.3167L2.55382 11.4997L5.39761 9.96851L11.1106 13.0448C11.2322 13.1097 11.3661 13.1426 11.5 13.1426C11.6339 13.1426 11.7678 13.1097 11.8894 13.044L17.6024 9.96851ZM11.5 11.388L2.55382 6.57099L11.5 1.754L20.4462 6.57099L11.5 11.388Z"
                fill="white"
              />
            </svg>
            <h1 className={styles.main_title}>Builder</h1>
          </div>
          <div className={styles.meet_block}>
            <div className={styles.meet_block_txt}>
              <h2 className={styles.expl_title}>
                What is WebCraftery Builder ?
              </h2>
              <div className={styles.expl_txt_block}>
                <p className={styles.expl_txt}>
                  The WebCraftery Builder allows you to select from a vast
                  library of high-quality web components, including{" "}
                  <a
                  className={styles.elementslink}
                    target="_blank"
                    rel="noreferrer"
                    href="/elements/classic-navbar"
                  >
                    navigation menus
                  </a>
                  ,{" "}
                  <a
                  className={styles.elementslink}
                    target="_blank"
                    rel="noreferrer"
                    href="/elements/3d-coverflow-slider"
                  >
                    sliders
                  </a>
                  ,{" "}
                  <a
                  className={styles.elementslink}
                    target="_blank"
                    rel="noreferrer"
                    href="/elements/classic-footer"
                  >
                    footers
                  </a>{" "}
                  and more.
                </p>
                <p className={styles.expl_txt}>
                  With just a few clicks, you can compile these components into
                  a cohesive website project.
                </p>
                <p className={styles.expl_txt}>
                  Once you've chosen your components, you can download the
                  entire project or clone it directly from our{" "}
                  <a
                    className={styles.github_link}
                    href="https://github.com/wyfir/web_components"
                  >
                    GitHub Ropository
                  </a>{" "}
                  .
                </p>
              </div>
              <p className={styles.star_txt}>
                Enjoying WebCraftery Builder? <br />
                Give us a ⭐ on{" "}
                <a
                  className={styles.github_link}
                  href="https://github.com/wyfir/web_components"
                >
                  GitHub
                </a>{" "}
                to show your support!
              </p>
            </div>
            <img
              className={styles.components_img}
              src={require("../../assets/images/github_builder_screen.png")}
              alt="Image"
            />
          </div>
          <DownloadWithGitBlock
            project_title="Enitire Components Project"
            clone_url={
              "clone https://github.com/wyfir/web_components.git" || ""
            }
            visit_url={"https://github.com/wyfir/web_components" || ""}
          />
        </section>
        <section className={styles.sec_section}>
          <h2 className={styles.expl_title}>Recommendations for Best Use</h2>
          <ul>
            <li>
              <strong className={styles.strong_txt}>
                1. Preview Components on the Elementspage:
              </strong>{" "}
              Before finalizing your selection, we recommend visiting our
              elementspage to see each component in action. This will give you a
              clear idea of how they look and function, helping you make
              informed choices about which elements to include in your project.
            </li>
            <li>
              <strong className={styles.strong_txt}>
                2. Experiment with Different Combinations:
              </strong>{" "}
              Don’t hesitate to experiment with different component combinations
              to find the layout that best suits your needs.
            </li>
            <li>
              <strong className={styles.strong_txt}>
                3. Leverage GitHub for Version Control:
              </strong>{" "}
              Use the git clone command to integrate WebCraftery components into
              your existing project. This also allows you to keep track of
              changes and updates easily through version control.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default BuilderPage;
