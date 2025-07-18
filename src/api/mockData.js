// 40 dummy items: images & videos fetched from external apis
// const mockGallery = Array.from({ length: 40 }).map((_, index) => ({
//   id: index + 1,
//   type: index % 5 === 0 ? 'video' : 'image',
//   url:
//     index % 5 === 0
//       ? 'https://www.w3schools.com/html/mov_bbb.mp4'
//       : `https://picsum.photos/id/${index + 10}/300/400`,
//   generation_id: `gen_${index + 1}`,
// }));


// dummy data from local assets
const mockGallery = Array.from({ length: 30 }).map((_, index) => ({
  id: index + 1,
  type: index % 6 === 0 ? 'video' : 'image',
  url:
    index % 6 === 0
      ? `/assets/videos/video1.mp4` 
      : `/assets/images/img${index}.jpg`,  
  generation_id: `gen_${index + 1}`,
}));



export default mockGallery;
