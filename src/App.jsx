import data from "./data.json";
import { Header } from "./components/Header"
import { Album } from "./components/Album"

console.log(data);
const albums = data.albums.items;

export const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <div className="albumContainer">
        {albums.map(album => (
          <Album key={album.id} album={album} />
          )
        )}
      </div>
    </div>
  )
};
