// 30 dummy items: mix of images & videos
const mockGallery = Array.from({ length: 30 }).map((_, index) => ({
  id: index + 1,
  type: index % 5 === 0 ? 'video' : 'image',
  url:
    index % 5 === 0
      ? 'https://www.w3schools.com/html/mov_bbb.mp4'
      : `https://source.unsplash.com/random/300x${300 + index}`,
  generation_id: `gen_${index + 1}`,
}));

export default mockGallery;
