// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  settings: { react: { version: "18.3" } },
  plugins: { react },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
