export const AlbumTitle = ({title, url}) => {
  return (
    <div className="title">
      <a href={url}>
        <h3>{title}</h3>
      </a>
    </div>
  )
}