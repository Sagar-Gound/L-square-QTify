import AlbumSection from "../AlbumSection/AlbumSection";

function TopAlbums() {
  return (
    <AlbumSection
      title="Top Albums"
      endpoint="https://qtify-backend.labs.crio.do/albums/top"
    />
  );
}

export default TopAlbums;
