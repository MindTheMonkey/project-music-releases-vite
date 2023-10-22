export const ArtistName = ({artists}) => {
  console.log(artists)
  return (
    <p className="artist">{artists.map(artist => artist.name).join(", ")}</p>
  )
}
