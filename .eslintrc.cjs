module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
    quotes: [2, "double", { avoidEscape: true }],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: "always",
        ObjectPattern: { multiline: true },
        ImportDeclaration: "never",
        ExportDeclaration: { multiline: true, minProperties: 3 }
      }
    ],
    "comma-dangle": ["error", "never"],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: true, optionalDependencies: false, peerDependencies: false }
    ],
    "linebreak-style": ["error", process.platform === "win32" ? "windows" : "unix"],
    "import/extensions": ["error", "never", { svg: "always" }],
    "import/no-unresolved": "off",
    "func-names": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off"
  }
};
