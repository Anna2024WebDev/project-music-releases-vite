//the Menu for Hover Effects, This component will contain the icons that appear when the album is hovered over.

import playIcon from "./assets/icons/play.svg"
import heartIcon from "./assets/icons/heart.svg"
import dotIcon from "./assets/icons/dots.svg"

const HoverMenu = () => {

  return (
    <div className="hover-menu">
      <img src={playIcon} alt="Play" className="play-icon" />
      <img src={heartIcon} alt="Favorite" className="favorite-icon" />
      <img src={dotIcon} alt="More options" className="ellipsis-icon" />
    </div>
  )
}

export default HoverMenu;