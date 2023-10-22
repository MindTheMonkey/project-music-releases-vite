import { Artists } from "./Artists"
import { AlbumTitle } from "./AlbumTitle"
import { AlbumCover } from "./AlbumCover"

export const Album = ({ album }) => {
  return (
    <div className="album">
      <AlbumCover images={album.images} title={album.name} />
      <AlbumTitle title={album.name} url={album.external_urls.spotify} />
      <Artists artists={album.artists} />
    </div>
  )
}