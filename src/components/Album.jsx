/* eslint-disable react/prop-types */

import { CoverImage } from "../CoverImage/CoverImage.jsx"
import { AlbumName } from "../AlbumName/AlbumName.jsx"
import { ArtistName } from "../ArtistName/ArtistName.jsx"

export const Album = ({ name, albumUrl, artists, image }) => {
  return (
    <div className="album">
      <CoverImage image={image} />
      <AlbumName name={name} albumUrl={albumUrl} />
      <ArtistName artists={artists} />
    </div>
  );
};