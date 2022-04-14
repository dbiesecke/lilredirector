import type { Redirect } from './types'

export default ({
  baseUrl,
  redirects,
}: {
  baseUrl: string
  redirects: Redirect[]
}) => () => `{ "type": "list",    "headline": "Playlist",    "template": {      "type": "control",      "layout": "0,0,12,1",      "color": "msx-glass"    },    "items": [
${redirects
      .filter((redirect: Redirect) => !!redirect.path)
      .map(
        (redirect: Redirect) => `{ "label": "${redirect.path.slice(1)}", "icon": "msx-yellow:folder","action": "content:${redirect.redirect}" }`,
      )
      .join(',').slice(0, -1)}
        ] }}
`