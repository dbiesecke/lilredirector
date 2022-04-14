import type { Redirect } from './types'

export default ({
  baseUrl,
  redirects,
}: {
  baseUrl: string
  redirects: Redirect[]
}) => () => `#EXTM3U
${redirects
    .filter((redirect: Redirect) => !!redirect.path)
    .map(
      (redirect: Redirect) => `#EXTINF:-1 tvg-chno="-1" tvg-id="" tvg-name="${redirect.path.slice(1)}" tvg-logo="" group-title="",${redirect.path.slice(1)}
${redirect.redirect}`,
    )
    .join('\n')}
    `