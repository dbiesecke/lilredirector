import type { Redirect } from './types'

export default ({
  baseUrl,
  redirects,
}: {
  baseUrl: string
  redirects: Redirect[]
}) => () => `

${redirects
    .filter((redirect: Redirect) => !!redirect.path)
    .map(
      (redirect: Redirect) => `
#EXTINF:-1 tvg-chno="-1" tvg-id="" tvg-name="${redirect.path}" tvg-logo="" group-title="",${redirect.path}\n
${redirect.redirect}
              `,
    )
    .join('\n')}
    `