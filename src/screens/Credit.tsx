import styled from "styled-components";
import colors from "../configs/colors";
import Footer from "./Footer";
import { useLocation } from "react-router";
import { useEffect } from "react";
import CreditLink from "../components/CreditLink";

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
          <CreditLink desc="Document animation by RICARDO GASPAR OCHOA" url="https://lottiefiles.com/5095-google-form"/>
          <CreditLink desc="Handshake animation by Jemmy Se" url="https://lottiefiles.com/50463-shake-hands"/>
          <CreditLink desc="Tools animation by Korhan Ulusoy" url="https://lottiefiles.com/36760-settings-icon"/>
          <CreditLink desc="Light Bulb animation by Sin Xiang Yi" url="https://lottiefiles.com/42848-light-bulk-line-art"/>
        </Section>

        <Section>
          <h1>Unsplash Images</h1>
          <CreditLink desc="Footer background by Omar Ram" url="https://unsplash.com/photos/1L2aV1n6g4o?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLinkvvvvv"/>
          <CreditLink desc="Landing page background by Pablo Heimplatz" url="https://unsplash.com/photos/EAvS-4KnGrk"/>
          <CreditLink desc="Project page background by Microsoft Edge" url="https://unsplash.com/photos/mt4xBHKxFH4"/>
          <CreditLink desc="About page top background by Elena Mozhvilo" url="https://unsplash.com/photos/E00p5ySEHmM"/>
          <CreditLink desc="Graduation photo by Pang Yuhao" url="https://unsplash.com/photos/_kd5cxwZOK4"/>
          <CreditLink desc="Work productivity photo by Surface" url="https://unsplash.com/photos/FuAY8UmLZnc"/>
        </Section>
        <Section>
          <h1>Iconfinder icons</h1>
          <CreditLink desc="Icon 1" url="https://www.iconfinder.com/icons/317755/badge_html_html5_achievement_award_reward_trophy_icon"/>
          <CreditLink desc="Icon 2" url="https://www.iconfinder.com/icons/652581/code_command_develop_javascript_language_programming_software_icon"/>
          <CreditLink desc="Icon 3" url="https://www.iconfinder.com/icons/4373213/js_logo_logos_icon"/>
          <CreditLink desc="Icon 4" url="https://www.iconfinder.com/icons/7423887/react_react_native_icon"/>
          <CreditLink desc="Icon 5" url="https://www.iconfinder.com/icons/4518774/vuejs_icon"/>
          <CreditLink desc="Icon 6" url="https://www.iconfinder.com/icons/4691328/postgresql_icon"/>
          <CreditLink desc="Icon 7" url="https://www.iconfinder.com/icons/1175544/firebase_google_icon"/>
          <CreditLink desc="Icon 8" url="https://www.iconfinder.com/icons/4923041/aws_icon"/>
          <CreditLink desc="Icon 9" url="https://www.iconfinder.com/icons/2993672/brand_brands_google_logo_logos_playstore_icon"/>
          <CreditLink desc="Icon 10" url="https://www.iconfinder.com/icons/939835/a_appstore_icon"/>
          <CreditLink desc="Icon 11" url="https://www.iconfinder.com/icons/211904/social_github_icon"/>
          <CreditLink desc="Icon 12" url="https://www.iconfinder.com/icons/6802160/astronomy_earth_galaxy_planet_science_space_world_icon"/>
          <CreditLink desc="Icon 13" url="https://www.iconfinder.com/icons/2992666/content_create_customer_human_man_people_icon"/>
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

  @media (max-width: 768px) {
    padding: 100px 50px;
  }

  `;

const Section = styled.div`
  margin-bottom: 35px;
`;

export default Credit;