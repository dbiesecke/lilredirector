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
 ${redirects
    .filter((redirect: Redirect) => !!redirect.path)
    .map(
      (redirect: Redirect,myindex) => `<li> <a href="${redirect.path.slice(1)}">${redirect.path.slice(1)}/</a></li>`,
    )
    .join('\n')}
    
   </ul>
 </body></html>`
