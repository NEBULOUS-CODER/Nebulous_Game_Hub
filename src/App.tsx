import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  // List of games with display name and TurboWarp fullscreen URL
  const games = [
    { name: "Fire", url: "https://turbowarp.org/101444247/fullscreen/" },
    { name: "Minecraft", url: "https://turbowarp.org/10128407/fullscreen/" },
    { name: "Ping Pong", url: "https://turbowarp.org/34985394/fullscreen/" },
    { name: "Stick War", url: "https://turbowarp.org/339574490/fullscreen/" },
    { name: "Football", url: "https://turbowarp.org/103746364/fullscreen/" },
    { name: "Badminton", url: "https://turbowarp.org/13516615/fullscreen/" },
    { name: "Platformer", url: "https://turbowarp.org/853110869/fullscreen/" },
    {
      name: "Watermelon Game",
      url: "https://turbowarp.org/907856686/fullscreen/",
    },
    {
      name: "Sans Boss Fight",
      url: "https://turbowarp.org/848806116/fullscreen/",
    },
    { name: "Checkers", url: "https://turbowarp.org/65950146/fullscreen/" },
    { name: "Zombie Wars", url: "https://turbowarp.org/442993897/fullscreen/" },
    { name: "Car Game", url: "https://turbowarp.org/359071241/fullscreen/" },
    {
      name: "Days Of Decay",
      url: "https://turbowarp.org/1197940824/fullscreen/",
    },
    {
      name: "Space Monster Clicker",
      url: "https://turbowarp.org/363458418/fullscreen/",
    },
    { name: "Chess", url: "https://turbowarp.org/569176/fullscreen/" },
    {
      name: "Candy Clicker",
      url: "https://turbowarp.org/716187043/fullscreen/",
    },
    {
      name: "Geometry Dash",
      url: "https://turbowarp.org/958044257/fullscreen/",
    },
  ];

  // Filter games based on search input (case-insensitive)
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="neon" style={{ textAlign: "center" }}>
        Nebulous Game Hub
      </h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search games... (Scratch Edition)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="games">
        {filteredGames.map((game, index) => (
          <div
            key={index}
            className="game-box"
            onClick={() => window.open(game.url, "_blank")}
          >
            {game.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
