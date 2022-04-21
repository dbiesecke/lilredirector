import type { Redirect } from './types'

export default ({
  baseUrl,
  redirects,
}: {
  baseUrl: string
  redirects: Redirect[]
}) => () => `<html><head>
<title></title>
</head>
 <body>
  <h1>Index of / </h1>
   <ul>
   <table summary="Directory Listing" cellpadding="0" cellspacing="0">
    <thead><tr><th class="n">Name</th><th class="m">Last Modified</th><th class="s">Size</th><th class="t">Type</th></tr></thead>
    <tbody>
    <tr><td class="n"><a href="../">Parent Directory</a>/</td><td class="m">&nbsp;</td><td class="s">- &nbsp;</td><td class="t">Directory</td></tr>
 ${redirects
    .filter((redirect: Redirect) => !!redirect.path)
    .map(
      (redirect: Redirect,myindex) => `<tr><td class="n"> <a href="${redirect.path.slice(1)}">${redirect.path.slice(1)}</a>/</td><td class="m">2019-Jan-18 07:59:36</td><td class="s">- &nbsp;</td><td class="t">Directory</td></tr>`,
    )
    .join('\n')}
    </tbody>
    </table>
    </div>
   </ul>
 </body></html>`
