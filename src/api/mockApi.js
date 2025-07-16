import mockGallery from './mockData';

// Simulated delay (500ms)
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchGallery = async ({ offset = 0, limit = 10 }) => {
  await sleep(500); // simulate network delay

  const data = mockGallery.slice(offset, offset + limit);
  const hasMore = offset + limit < mockGallery.length;

  return {
    data,
    nextOffset: offset + limit,
    hasMore,
  };
};
