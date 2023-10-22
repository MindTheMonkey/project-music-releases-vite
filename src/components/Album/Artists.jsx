import { Artist } from "./artist"

export const Artists = ({artists}) => {
  return ""
  }

  return (
    <div className="artists">
      {artists.map((artist, index) => (
        <>
        <Artist key={artist.id} artist={artist} />
        {artistSeparator(artists.length, index)}
        </>
      ))}
    </div>
  )
}
