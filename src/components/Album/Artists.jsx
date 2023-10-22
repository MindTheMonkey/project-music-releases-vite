export const Artists = ({artists}) => {
  return (
    <>
    <p className="artist">{artists.map(artist => artist.name).join(", ")}</p>
    </>
  )
}
