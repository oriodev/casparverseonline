import getCharacters from "./api/characters.api";

export default async function Home() {

  const characters = await getCharacters();  

  return (
    <div>
      <h1>Casparverse Online</h1>
      {
        characters.map((chara) => (
          <p key={chara.id}>{chara.name}</p>
        ))
      }
    </div>
  );
}
