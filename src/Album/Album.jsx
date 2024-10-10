import { AlbumCover } from "../AlbumCover/AlbumCover"
import { AlbumName } from "../AlbumName/AlbumName"
import { ArtistName } from "../ArtistName/ArtistName"

export const Album = ({ album }) => {

  return (
    <div className="album">
      <AlbumCover coverUrl={album.images[0].url} />



    </div>




  )



}