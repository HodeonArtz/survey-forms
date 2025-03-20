import { Button, Container, Text, Title } from "@mantine/core";
import classes from "./HeroText.module.css";
import { Dots } from "../components/Dots";
import { useTranslation } from "react-i18next";

// CÓDIGO COPIADO DE MANTINEUI
export function Home() {
  // usamos el hook de i18n para conseguir la traduccion de ciertos textos
  const { t } = useTranslation();

  return (
    <Container className={classes.wrapper} size={1400}>
      {/* Decoración de puntitos para el fondo de la página */}
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      {/* Título de la página */}
      <div className={classes.inner}>
        <Title className={classes.title}>
          {t("home.title.weCollect")}{" "}
          <Text component="span" className={classes.highlight} inherit>
            {t("home.title.yourData")}
          </Text>{" "}
          {t("home.title.toImprove")}
        </Title>

        {/* Descripción */}
        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            {t("home.subtitle")}
          </Text>
        </Container>

        {/* Botón que nos lleva directamente a la página de formularios */}
        <div className={classes.controls}>
          <Button className={classes.control} size="lg">
            {t("home.startButton")}
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Home;
