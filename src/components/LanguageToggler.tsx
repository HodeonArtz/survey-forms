import { ActionIcon, Tooltip } from "@mantine/core";
import { IconLanguage } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const LanguageToggler = () => {
  const { i18n } = useTranslation();

  return (
    <Tooltip label={"Change language"} withArrow>
      <ActionIcon
        onClick={() => {
          // hacemos un "toggle" para intercambiar el idioma de la página de español a inglés y viceversa
          if (i18n.language === "en") i18n.changeLanguage("es");
          else i18n.changeLanguage("en");
        }}
        variant="default"
        size="lg"
        aria-label="Toggle color scheme"
      >
        <IconLanguage color="#7048E8" stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
};

export default LanguageToggler;
