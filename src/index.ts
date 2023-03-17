import type { Plugin } from 'vite'

export default function forceNomodulePlugin(): Plugin {
  return {
    name: 'vite-plugin-force-nomodule',
    enforce: 'post',
    apply: 'build',
    transformIndexHtml(html) {
      return html
        .replace(/<script.*?\s+type="module"[\w\W]+?<\/script>/g, '')
        .replace(/<link.*?\s+rel="modulepreload".+?>/g, '')
        .replace(/\s+nomodule/g, '')
        .replace(/\s+crossorigin/g, '')
    },
  }
}
