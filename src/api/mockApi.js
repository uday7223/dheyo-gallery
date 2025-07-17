import mockGallery from './mockData';

// Simulated delay (500ms)
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchGallery = async ({ offset = 0, limit = 10 }) => {
  await sleep(3000); // simulate network delay of 500ms

  // console.log( `the whole data before ${limit} is ${mockGallery.length}`);
  const data = mockGallery.slice(offset, offset + limit);
  // console.log( `the data is after ${limit} is ${data}`);
  const hasMore = offset + limit < mockGallery.length;

  return {
    data,
    nextOffset: offset + limit,
    hasMore,
  };
};
