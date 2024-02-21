import { defineConfig } from "@pandacss/dev";

import { recipes } from "../design-systems/src/theme/recipes";
import { semanticTokens } from "../design-systems/src/theme/semantic-tokens";
import { slotRecipes } from "../design-systems/src/theme/slot-recipes";
import { datagrid } from "@theme/slot-recipes/datagrid";
import { textStyles } from "../design-systems/src/theme/text-styles";
import { tokens } from "../design-systems/src/theme/tokens";
import { globalCss } from "../design-systems/src/theme/global-css";
import { conditions } from "../design-systems/src/theme/conditions";

export default defineConfig({
  emitPackage: true,
  exclude: [],
  include: [
    "../**/*.{ts,tsx}",
    "../../../node_modules/@tailor-platform/src/**/*/tsx",
    "./node_modules/@tailor-platform/design-systems/dist/panda.buildinfo.json",
    "./theme/**/*.{ts,tsx}",
  ],
  jsxFramework: "react",
  outdir: "../../../node_modules/@tailor-platform/styled-system",
  preflight: true,
  theme: {
    extend: {
      recipes,
      semanticTokens,
      slotRecipes: {
        ...slotRecipes,
        datagrid,
      },
      textStyles,
      tokens,
    },
  },
  conditions,
  globalCss: { extend: globalCss },
  importMap: "@tailor-platform/styled-system",
  patterns: {
    extend: {
      // temporary workaround for ts error in /packages/design-systems/src/components/Form.tsx
      box: {
        properties: {
          className: { type: "string" },
        },
      },
    },
  },
});
