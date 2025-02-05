export function SeparteText (text, caracter = '-') {
  if(typeof text === 'string') {
    return text.split(' ').join(caracter)
  } else {
    console.error('El parametro "Text" proporcionado debe ser un string')
  }
}