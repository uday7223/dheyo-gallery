import mockGallery from './mockData';


export const fetchGallery = async ({ offset = 0, limit = 10 }) => {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 5000));

  const slice = mockGallery.slice(offset, offset + limit);
  const hasMore = offset + limit < mockGallery.length;

  return {
    data: slice,
    nextOffset: offset + limit,
    hasMore,
  };
};