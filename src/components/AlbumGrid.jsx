import albumData from "./data.json" //Data inport for the music URLs
import AlbumCard from "./Components/AlbumCard"

const AlbumGrid = () => {
  return (
    <div className="album-grid">
      {albumData.map((album) => (
        <AlbumCard
          key={album.id}
          albumCover={album.images[0].url}  // Pass the album cover URL
          albumName={album.name}            // Pass the album name
          artists={album.artists}           // Pass the artists array
          externalUrl={album.external_urls.spotify}  // Pass the album's external Spotify URL
        />
      ))}
    </div>
  );
};

export default AlbumGrid;
