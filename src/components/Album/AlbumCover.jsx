import dotsIcon from "@/assets/icons/dots.svg";
import heartIcon from  "@/assets/icons/heart.svg";
import playIcon from "@/assets/icons/play.svg";

export const AlbumCover = ({images}) => {
  console.log()
  return (
      <div className="album-cover">
        <div className="album-controls">
          <img className="control-icon" src={heartIcon}></img>
          <img className="control-icon play" src={playIcon}></img>
          <img className="control-icon" src={dotsIcon}></img>
        </div>
        <img src={images[1].url}></img>
      </div>
    )
}
