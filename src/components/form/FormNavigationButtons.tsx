import { ActionIcon, Button, Group, MantineSize } from "@mantine/core";
import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react";
import { MouseEventHandler } from "react";

export  interface FormNavigationButtonsProps {
  handlePrevForm: MouseEventHandler<HTMLButtonElement>;
  handleNextForm: MouseEventHandler<HTMLButtonElement>;
  formsLength: number;
  currentForm: number;
  showArrows?: boolean;
  showText?: boolean;
  size?:
    | (string & {})
    | MantineSize
    | "compact-xs"
    | "compact-sm"
    | "compact-md"
    | "compact-lg"
    | "compact-xl"
    | undefined;
}

export const FormNavigationButtons = ({
  handlePrevForm,
  handleNextForm,
  formsLength,
  currentForm,
  showArrows = false,
  showText = true,
  size = "sm",
}: FormNavigationButtonsProps) => {
  const prevText = "Back";
  const nextText = currentForm >= formsLength - 1 ? "Complete" : "Next";
  const iconOnly = showArrows && !showText;
  const rightIcon =
    currentForm >= formsLength - 1 ? <IconCheck /> : <IconArrowRight />;

  const ButtonComponent = iconOnly ? ActionIcon : Button;

  return (
    <Group justify="space-between" mt="xs">
      <ButtonComponent
        variant="subtle"
        color="gray"
        disabled={currentForm === 0}
        onClick={handlePrevForm}
        leftSection={iconOnly ? undefined : showArrows && <IconArrowLeft />}
        size={size}
      >
        {showText && prevText}
        {iconOnly && <IconArrowLeft />}
      </ButtonComponent>
      {currentForm !== formsLength && (
        <ButtonComponent
          onClick={handleNextForm}
          variant={currentForm >= formsLength - 1 ? "filled" : "subtle"}
          rightSection={iconOnly ? undefined : showArrows && rightIcon}
          size={size}
        >
          {showText && nextText}
          {iconOnly && rightIcon}
        </ButtonComponent>
      )}
    </Group>
  );
};
