import { getUrlParam } from "hc-utils";
import { SimplePreview } from "simple-markdown-preview"

const App = () => {
  const token = getUrlParam('key')
  console.log(466, token);
  return (
    <div>
      home
    </div>
  )
}

export const element = <App />;