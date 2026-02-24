import AlbumSection from "../AlbumSection/AlbumSection";

function NewAlbums() {
  return (
    <AlbumSection
      title="New Albums"
      endpoint="https://qtify-backend.labs.crio.do/albums/new"
    />
  );
}

export default NewAlbums;
