import data from "./data.json";
import { Album } from "./components/Album.jsx"

console.log(data);


export const App = () => {
  const { albums } = data;
  const renderAlbums = albums.items.map(
    ({ id, name, external_urls, artists, images }) => (
      <Album
        key={id}
        name={name}
        albumUrl={external_urls.spotify}
        artists={artists}
        image={images[1].url}
      />
    )
  );
  return (
    <div>
      <div className="albumSection">{renderAlbums}</div>
    </div>
  )
};