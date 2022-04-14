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
                  <tr>
                    <td class="border px-4 py-2">${redirect.path}</td>
                    <td class="border px-4 py-2">${redirect.redirect}</td>
                    <td class="border px-4 py-2">${redirect.visits}</td>
                    <td class="border px-4 py-2">
                      <button class="hover:underline text-gray-800 font-semibold" data-target="${redirect.path}" id="edit">Edit</button>
                      <button class="hover:underline text-red-800 font-semibold ml-4" data-target="${redirect.path}" id="delete">Delete</button>
                    </td>
                  </tr>
                `,
      )
      .join('\n')}

`