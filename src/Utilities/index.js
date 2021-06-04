export const getId = (str) => {
  let newStr = str.split('breeds/')[1].split('/')
  
  let breed = newStr[0].split('-')
  let subBreed = breed.length > 1 && breed[1]

  return {
    breed: breed[0],
    subBreed,
  }
}