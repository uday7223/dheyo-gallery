// 30 dummy items: mix of images & videos fetched from external apis
// const mockGallery = Array.from({ length: 40 }).map((_, index) => ({
//   id: index + 1,
//   type: index % 5 === 0 ? 'video' : 'image',
//   url:
//     index % 5 === 0
//       ? 'https://www.w3schools.com/html/mov_bbb.mp4'
//       : `https://picsum.photos/id/${index + 10}/300/400`,
//   generation_id: `gen_${index + 1}`,
// }));


// dummy data from local
const mockGallery = Array.from({ length: 30 }).map((_, index) => ({
  id: index + 1,
  type: index % 6 === 0 ? 'video' : 'image',
  url:
    index % 6 === 0
      ? `/assets/videos/video1.mp4` 
      : `/assets/images/img${index}.jpg`,  
  generation_id: `gen_${index + 1}`,
}));


// const mockGallery = Array.from({ length: 40 }).map((_, index) => {
//   const isVideo = index < 10; // First 10 are videos, rest are images

//   return {
//     id: index + 1,
//     type: isVideo ? 'video' : 'image',
//     url: isVideo
//       ? `/assets/videos/video${index}.mp4`         // video0.mp4 → video9.mp4
//       : `/assets/images/img${index - 10}.jpg`,     // img0.jpg → img29.jpg
//     generation_id: `gen_${index + 1}`,
//   };
// });


export default mockGallery;
