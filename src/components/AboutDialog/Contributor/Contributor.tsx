import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { IconLinkButton } from "../../IconButton/IconButton";
import styles from "./Contributor.module.css";

export const Contributor = ({
  gitHubLink,
  linkedInLink,
  name,
}: {
  gitHubLink: string;
  linkedInLink: string;
  name: string;
}) => (
  <span className={styles.contributor}>
    <span>{name}</span>
    <IconLinkButton label="GitHub" to={gitHubLink}>
      <GitHubLogoIcon />
    </IconLinkButton>
    <IconLinkButton label="LinkedIn" to={linkedInLink}>
      <LinkedInLogoIcon />
    </IconLinkButton>
  </span>
);
