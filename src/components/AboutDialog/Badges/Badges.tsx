import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import { Theme } from "../../../models/theme";
import styles from "./Badges.module.css";

const SITE_URL = "ws4u.netlify.app";
const WEBSITE_CARBON = {
  C02: "0.03",
  PERCENTAGE: "97",
};
const GREEN_WEB_CHECK = {
  URL: `https://www.thegreenwebfoundation.org/green-web-check?url=${SITE_URL}`,
  IMAGE_SRC: `https://api.thegreenwebfoundation.org/greencheckimage/${SITE_URL}?nocache=true`,
  IMAGE_ALT:
    "This website is hosted Green - checked by thegreenwebfoundation.org",
};

export const Badges = ({ theme }: { theme: Theme }) => (
  <div className={styles.badges}>
    <WebsiteCarbonBadge
      co2={WEBSITE_CARBON.C02}
      dark={theme === "dark"}
      percentage={WEBSITE_CARBON.PERCENTAGE}
      url={SITE_URL}
    />
    <a href={GREEN_WEB_CHECK.URL} rel="noreferrer" target="_blank">
      <img src={GREEN_WEB_CHECK.IMAGE_SRC} alt={GREEN_WEB_CHECK.IMAGE_SRC} />
    </a>
  </div>
);
