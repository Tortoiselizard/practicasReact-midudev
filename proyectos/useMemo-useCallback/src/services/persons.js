import { solititudFetch } from './solicitudes'

// función searchPersons modo async-await
// export async function searchPersons({input}) {
//     try {
//         if (input === '') {
//             console.log('entre en el if')
//             return []
//         }
//         const data = await solititudFetch(input)
//         return data
//     }
//     catch {
//         throw new Error('Error search persons')
//     }
// }

// función searchPersons modo promesa
export function searchPersons ({ input }) {
  if (input === '') {
    console.log('entre en el if')
    return new Promise(resolve => resolve([]))
  }
  return solititudFetch(input)
}
