import { SimplePreview } from "simple-markdown-preview"
import type { MdDataHandle } from 'simple-markdown-preview/lib/useMdData'

export const Preview = ({ path }: { path: MdDataHandle }) => {
  return (
    <SimplePreview
      handleMetaData={(style) => {
        return {
          preview: {
            style
          }
        }
      }}
      path={path}
    />
  )
}