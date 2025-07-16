import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import mockGallery from '../api/mockData';

const fetchByGenerationId = async (id) => {
  // Simulate API delay
  await new Promise((res) => setTimeout(res, 400));
  return mockGallery.find((item) => item.generation_id === id);
};

const GalleryDetail = () => {
  const { generation_id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['galleryItem', generation_id],
    queryFn: () => fetchByGenerationId(generation_id),
  });

  if (isLoading) {
    return (
      <div className="p-4 text-center">
        <div className="bg-gray-300 h-64 w-full max-w-md mx-auto animate-pulse rounded"></div>
        <p className="mt-4 text-gray-500">Loading...</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="p-4 text-center text-red-600">
        Failed to load item.
      </div>
    );
  }

  return (
    <div className="p-4 max-w-3xl mx-auto text-center">
      <h2 className="text-xl font-semibold mb-4">Gallery Item Detail</h2>
      {data.type === 'image' ? (
        <img src={data.url} alt={data.id} className="rounded-lg mx-auto" />
      ) : (
        <video
          src={data.url}
          controls
          className="rounded-lg mx-auto w-full max-w-md"
        />
      )}
      <p className="mt-4 text-gray-600">Generation ID: {data.generation_id}</p>
    </div>
  );
};

export default GalleryDetail;
