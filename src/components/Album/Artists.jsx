export const Artists = ({artists}) => {
  return (
    <div className="artists">
      {artists.map((artist, index) => (
        <>
        <span className="artist" key={artist.id}>
          <a href={artist.external_urls.spotify} className="artist">{artist.name}</a>
        </span>
        {index !== artists.length - 1 ? ', ' : null}
        </>
      ))}
    </div>
  )
}
