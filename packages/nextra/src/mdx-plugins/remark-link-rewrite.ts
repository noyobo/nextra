import { visit } from 'unist-util-visit'
import { Plugin } from 'unified'
import { Root } from 'mdast'

export type RemarkLinkRewriteOptions = {
  pattern: RegExp
  replace: string
}

export const remarkLinkRewrite: Plugin<[RemarkLinkRewriteOptions], Root> = ({
  pattern,
  replace
}) => {
  return (tree, _file, done) => {
    visit(tree, 'link', node => {
      node.url = node.url.replace(pattern, replace)
    })
    done()
  }
}
