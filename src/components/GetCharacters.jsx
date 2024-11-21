export default async function getCharacters() {
  const response = await fetch('https://api.disneyapi.dev/character', {
    mode: 'cors',
  });
  const result = await response.json();
  return result.data;
}