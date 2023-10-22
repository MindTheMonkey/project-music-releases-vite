export const Artists = ({artists}) => {
  return (
    <div className="artists">
      {artists.map((artist, index) => (
        <div className="artist" key={artist.id}>
          <a href={artist.external_urls.spotify} className="artist">{artist.name}</a>
          {index !== artists.length - 1 ? ', ' : null}
        </div>
      ))}
    </div>
  )
}
