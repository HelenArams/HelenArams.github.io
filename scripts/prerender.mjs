// Writes the rendered app into dist/index.html so crawlers get real content.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const dist = resolve('dist')
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-server.js')).href)
const html = readFileSync(resolve(dist, 'index.html'), 'utf8')
const out = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
if (out === html) throw new Error('root placeholder not found')
writeFileSync(resolve(dist, 'index.html'), out)
rmSync(resolve('dist-ssr'), { recursive: true, force: true })
console.log('prerendered dist/index.html')
