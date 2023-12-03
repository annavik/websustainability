import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Theme } from "../../models/theme";
import { Button, LinkButton } from "../Button/Button";
import { IconButton } from "../IconButton/IconButton";
import styles from "./AboutDialog.module.css";
import { Badges } from "./Badges/Badges";
import { Contributor } from "./Contributor/Contributor";

export const AboutDialog = ({ theme }: { theme: Theme }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button theme="ghost">About</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className={styles.dialogOverlay} />
      <Dialog.Content className={styles.dialogContent}>
        <div className={styles.section}>
          <h1>About WSG 1.0</h1>
          <p>
            In October 2023, the{" "}
            <a href="https://www.w3.org/groups/cg/sustyweb/">W3C Community</a>{" "}
            published the first draft of the{" "}
            <a href="https://w3c.github.io/sustyweb/">
              Web Sustainability Guidelines
            </a>{" "}
            (WSG). These guidelines offer recommendations on how to enhance the
            sustainability of web applications by considering environmental,
            social, and governance (ESG) factors. The guidelines cover user
            experience design, web development, infrastructure, business
            strategy, and various combinations of these topics. Although the
            document is still a work in progress, the guidelines can be a
            valuable resource for teams on their sustainability journey.
          </p>
        </div>
        <div className={styles.section}>
          <h1>About Web Sustainability 4U</h1>
          <p>
            This tool is an independent side project that offers a way to
            navigate and prioritize the Web Sustainability Guidelines. When it
            comes to sustainability, progress beats perfection. Instead of
            working broadly through all guidelines, it is recommended to
            identify the ones matching your skill set and also consider effort
            and impact. With this tool, we hope to help you in this process.
          </p>
        </div>
        <div className={styles.row}>
          <div className={styles.section}>
            <h2>Contributors</h2>
            <p>
              <Contributor
                gitHubLink="https://github.com/c0ldbear"
                linkedInLink="https://linkedin.com/in/teddyjh"
                name="Teddy Juhlin-Henricson"
              />
              <Contributor
                gitHubLink="https://github.com/annavik"
                linkedInLink="https://www.linkedin.com/in/anna-viklund/"
                name="Anna Viklund"
              />
            </p>
            <p>
              Do you want to get involved, suggest a feature or report a bug?
              Come visit us on GitHub!
            </p>
            <p className={styles.gitHubLinks}>
              <LinkButton to="https://github.com/annavik/websustainability">
                GitHub project <GitHubLogoIcon />
              </LinkButton>
            </p>
          </div>
          <div className={styles.section}>
            <h2>Acknowledgements</h2>
            <p>
              Huge thanks to our friends in{" "}
              <a href="https://daresay.co/">Daresay</a> Sustainability Group!
              Without your support, this would never have happen. Thank you,
              thank you, thank you!
            </p>
            <p>
              Also, cred to the W3C Community for the hard work on the WSG
              document. Thank you so much for sharing it!
            </p>
          </div>
        </div>
        <Badges theme={theme} />
        <div className={styles.dialogClose}>
          <Dialog.Close asChild>
            <IconButton label="Close">
              <Cross2Icon />
            </IconButton>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
