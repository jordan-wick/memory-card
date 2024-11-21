export default async function getCharacters(movie) {
  console.log('Calling on API...')
  const response = await fetch(`https://api.disneyapi.dev/character?films=${movie}&pageSize=200`, {
    mode: 'cors',
  });
  const result = await response.json();
  console.log(`API called successfully! Returning ${result.data.length} characters.`);
  return result.data;
}