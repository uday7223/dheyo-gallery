import { useParams } from 'react-router-dom';

const GalleryDetail = () => {
  const { generation_id } = useParams();

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Gallery Item: {generation_id}</h2>
      {/* Render specific video/image based on generation_id */}
    </div>
  );
};

export default GalleryDetail;
