import dotsIcon from "../../assets/icons/dots.svg";
import heartIcon from  "../../assets/icons/heart.svg";
import playIcon from "../../assets/icons/play.svg";

export const AlbumCover = ({images}) => {
  console.log()
  return (
      <div className="albumCover">
        <div className="albumControls">
          <img className="controlIcon" src={heartIcon}></img>
          <img className="controlIcon play" src={playIcon}></img>
          <img className="controlIcon" src={dotsIcon}></img>
        </div>
        <img src={images[1].url}></img>
      </div>
    )
}
