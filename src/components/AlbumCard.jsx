/* eslint-disable react/prop-types */
import HoverMenu from "./Components/HoverMenu" //Import HoverMenu Component


const AlbumCard = ({ albumCover, albumName, artists, externalUrl }) => {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  return (
    <div
      className="album-card"
      onMouseEnter={() => setIsHovered(true)}  // Show menu on hover
      onMouseLeave={() => setIsHovered(false)} // Hide menu when not hovered
    >
      <img src={albumCover} alt={albumName} className="album-cover" />
      <h3>{albumName}</h3>
      <p>
        {artists.map((artist, index) => (
          <span key={artist.id}>
            <a href={artist.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              {artist.name}
            </a>
            {index < artists.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        Listen on Spotify
      </a>

      {/* Show HoverMenu when the album card is hovered */}
      {isHovered && <HoverMenu />}
    </div>
  );
};

export default AlbumCard;

