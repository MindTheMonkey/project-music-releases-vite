import { ArtistName } from "./ArtistName"
import { AlbumCover } from "./AlbumCover"

export const Album = ({ album }) => {
  console.log(album)
  return (
    <div className="album">
      <AlbumCover images={album.images} />
      <h3 className="title">{album.name}</h3>
      <ArtistName artists={album.artists} />
    </div>
  )
}