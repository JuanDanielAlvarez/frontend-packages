import { tabsAnatomy } from "@ark-ui/anatomy";
import { defineParts, defineRecipe } from "@pandacss/dev";

const parts = defineParts(tabsAnatomy.build());

export const tabs = defineRecipe({
  className: "tabs",
  description: "A tabs style",
  base: parts({
    root: {
      width: "full",
    },
    list: {
      borderBottomWidth: "1px",
      display: "flex",
      gap: "4",
      height: "8",
      position: "relative",
    },
    trigger: {
      background: "transparent",
      cursor: "pointer",
      color: "fg.muted",
      display: "inline-flex",
      fontWeight: "semibold",
      textStyle: "sm",
      px: "1",
      _hover: {
        color: "fg.emphasized",
      },
      _selected: {
        color: "accent.default",
        _hover: {
          color: "accent.default",
        },
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
    indicator: {
      height: "2px",
      background: "accent.default",
      bottom: "-1px",
    },
    content: {
      background: "brown.700",
      borderRadius: "lg",
      borderWidth: "1px",
      borderTopRightRadius: "0",
      borderTopLeftRadius: "0",
      borderTopWidth: "0px",
      minH: "xl",
      p: "4",
    },
  }),
  variants: {
    variant: {
      fill: parts({
        list: {
          alignItems: "center",
          background: {
            base: "gray.200",
            _dark: "brown.600",
          },
          borderWidth: "1px",
          borderRadius: "lg",
          gap: "6",
          px: "4",
          height: "10",
        },
        trigger: {
          color: "fg.muted",
          fontWeight: "medium",
          _selected: {
            color: "fg.default",
          },
        },
        indicator: {
          background: "accent.default",
        },
      }),
    },
  },
});
