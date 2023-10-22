export const ArtistName = ({artist}) => {
  return (
        <span className="artist" key={artist.id}>
          <a href={artist.external_urls.spotify} className="artist">{artist.name}</a>
        </span>
  )
}
