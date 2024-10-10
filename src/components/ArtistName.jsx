/* eslint-disable react/prop-types */
import "./ArtistName.css"

export const ArtistName = ({ artists }) => {
  return (
    <div className="artistName">
      {artists.map(({ id, name, external_urls }) => (
        <p key={id}>
          <a href={external_urls.spotify}>
            {name}
          </a>
        </p>
      ))}
    </div>
  );
};