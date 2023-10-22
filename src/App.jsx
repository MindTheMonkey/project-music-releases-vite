import data from "./data.json";
import { Album } from "./components/Album";

console.log(data);
const albums = data.albums.items;

export const App = () => {
  return (
    <div className="albumContainer">
      {albums.map(album => (
         <Album key={album.id} album={album} />
        )
      )}
    </div>
  )
};
