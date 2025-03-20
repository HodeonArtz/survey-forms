import { Container, Stack } from "@mantine/core";
import classes from "./FooterSocial.module.css";
import BrandLogo from "../layout/BrandLogo";

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Stack>
          <BrandLogo />
        </Stack>
      </Container>
    </div>
  );
}
