import { Artist } from "./artist"

export const Artists = ({artists}) => {
  const artistSeparator = (artistCount, index) => {
    if (index === artistCount - 2) {
      // If we have 1 artist this will never match as index would have to be -1
      // If we have 2 artists this will match for the first artist
      // If we have 3 artists this will match for the second artist
      return " & ";
    } else if (index < artistCount - 2) {
      // if we didn't get a match above we continue on.
      // If we have 1 artist this will never match as index would have to be -2
      // If we have 2 artists this will never match as index would have to be -1
      // If we have 3 artists this will match for the first artist
      // If we have 4 artists this will match for the first and second artist
      return ", ";
    } else {
      // if none of the rules above matches we return a empty string
      // If we have 1 artist this will match this artist
      // If we have 2 artists this will match the second artist
      // If we have 3 artists this will match the third artist
      return "";
    }
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
