import styled from "styled-components";
import colors from "../configs/colors";
import Footer from "./Footer";
import { useLocation } from "react-router";
import { useEffect } from "react";

function Credit() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Page>
        <Section>
          <h1>Lottiefiles</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lottiefiles.com/5095-google-form"
          >
            Document animation by RICARDO GASPAR OCHOA
            <br />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lottiefiles.com/50463-shake-hands"
          >
            Handshake animation by Jemmy Se
            <br />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lottiefiles.com/36760-settings-icon"
          >
            Tools animation by Korhan Ulusoy
            <br />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lottiefiles.com/42848-light-bulk-line-art"
          >
            Light Bulb animation by Sin Xiang Yi
            <br />
          </a>
        </Section>

        <Section>
          <h1>Unsplash Images</h1>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://unsplash.com/photos/1L2aV1n6g4o?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLinkvvvvv"
            >
              Footer background by Omar Ram
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://unsplash.com/photos/EAvS-4KnGrk"
            >
              Landing page background by Pablo Heimplatz
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://unsplash.com/photos/mt4xBHKxFH4"
            >
              Project page background by Microsoft Edge
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://unsplash.com/photos/E00p5ySEHmM"
            >
              About page top background by Elena Mozhvilo
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://unsplash.com/photos/_kd5cxwZOK4"
            >
              Graduation photo by Pang Yuhao
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://unsplash.com/photos/FuAY8UmLZnc"
            >
              Work productivity photo by Surface
              <br />
            </a>
          </p>
        </Section>
        <Section>
          <h1>Iconfinder icons</h1>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/317755/badge_html_html5_achievement_award_reward_trophy_icon"
            >
              Icon 1
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/652581/code_command_develop_javascript_language_programming_software_icon"
            >
              Icon 2
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/4373213/js_logo_logos_icon"
            >
              Icon 3
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/7423887/react_react_native_icon"
            >
              Icon 4
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/4518774/vuejs_icon"
            >
              Icon 5
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/4691328/postgresql_icon"
            >
              Icon 6
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/1175544/firebase_google_icon"
            >
              Icon 7
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/4923041/aws_icon"
            >
              Icon 8
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/2993672/brand_brands_google_logo_logos_playstore_icon"
            >
              Icon 9
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/939835/a_appstore_icon"
            >
              Icon 10
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/211904/social_github_icon"
            >
              Icon 11
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/6802160/astronomy_earth_galaxy_planet_science_space_world_icon"
            >
              Icon 12
              <br />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.iconfinder.com/icons/2992666/content_create_customer_human_man_people_icon"
            >
              Icon 13
              <br />
            </a>
          </p>
        </Section>

      </Page>
      <Footer hasBackground={false} />
    </>
  );
}

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.bg_color};
  padding: 100px;

  h1 {
    font-size: 20px;
    color: ${colors.yellow};
    margin-bottom: 10px;
  }

  a {
    color: white;
    font-size: 12px;
    font-style: italic;
    font-weight: 500;
  }

  a:hover {
    color: ${colors.yellow};
  }

  @media (max-width: 768px) {
    padding: 100px 50px;
  }

  `;

const Section = styled.div`
  margin-bottom: 35px;
`;

export default Credit;