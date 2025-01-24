export async function getRickAndMoryData ({ page = 1, name = ''}) {
  return await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
    .then((res) => res.json())
    .then((data) => {
      return data
    })
}