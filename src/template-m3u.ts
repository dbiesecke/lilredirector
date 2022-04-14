import type { Redirect } from './types'

export default ({
  baseUrl,
  redirects,
}: {
  baseUrl: string
  redirects: Redirect[]
}) => () => `
${JSON.stringify(
    redirects,
  )}
    `