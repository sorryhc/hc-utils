
import { defineConfig } from 'saqu';
// import autoCreateRoutes from '@saqu/auto-create-routes';
import autoConfigRoutes from '@saqu/auto-config-to-routes';
import autoCreateEnter from "@saqu/auto-create-enter"

export default defineConfig({
  entry: '!src/.cache/main.jsx',
  output: {
    publicPath: "./"
  },
  plugins: [
    // new autoCreateRoutes(),
    new autoConfigRoutes(),
    new autoCreateEnter({
      rootRoutes: "@/layout"
    })
  ],
  module: {
    rules: [
      {
        test: /\.md$/,
        use: ['@saqu/loader-md-react-preview'],
        type: 'typescript',
      },
    ],
  },
});
