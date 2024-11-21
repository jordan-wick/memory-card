export default async function getCharacters() {
  const response = await fetch(`https://api.disneyapi.dev/character?films=Ralph%20Breaks%20the%20Internet&pageSize=150`, {
    mode: 'cors',
  });
  const result = await response.json();
  return result.data;
}