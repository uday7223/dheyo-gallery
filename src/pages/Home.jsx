import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchGallery } from '../api/mockApi';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import MediaSkeleton from '../components/MediaSkeleton';

const Home = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['gallery'],
    queryFn: ({ pageParam = 0 }) => fetchGallery({ offset: pageParam, limit: 8 }),
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextOffset : undefined,
  });

    // Observer with rootMargin for early triggering
 const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '300px',
  });

  const prevInView = useRef(inView);



  useEffect(() => {
    if (inView && hasNextPage && inView !== prevInView.current) {
      setTimeout(() => fetchNextPage(), 100); // slight delay = smoother
      
    }
      prevInView.current = inView;

  }, [inView, hasNextPage, fetchNextPage]);

  return (

    <>

    <div className='home-container bg-black'>
              <div className="columns-2 main-con md:columns-3 gap-5 p-4 space-y-4">
      {/* Show skeletons while loading initial content */}
      {isLoading &&
        Array.from({ length: 6 }).map((_, i) => <MediaSkeleton key={i} />)}
        

      {/* Render actual content */}
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.data.map((item) => (
              <div key={item.id} className="break-inside-avoid mb-4">

            <Link key={item.id} to={`/g/${item.generation_id}`}>
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={`item-${item.id}`}
                  loading="lazy"
                  onLoad={(e) => e.target.classList.add('fade-in-up')}
                  // onError={(e) => (e.target.src = 'https://via.placeholder.com/300x400')}
                  className="w-full min-h-[200px] rounded-lg mb-4 transition-all  
                   duration-300 ease-in-out hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)]
                   hover:scale-[1.01]

                  "

                />
              ) : (
                <video
                  src={item.url}
                  controls
                  onLoadedData={(e) => e.target.classList.add('fade-in-up')}
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/300x400')}
                      className="w-full rounded-lg mb-4 opacity-0 transition-all duration-500 ease-in-out
                      hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)]
                      hover:scale-[1.01]
                      "
                />
              )}
            </Link>
        </div>

          ))}
        </div>
      ))}

      {/* Skeleton while loading next page */}
      {/* {isFetchingNextPage &&
        Array.from({ length: 1 }).map((_, i) => <MediaSkeleton  ratio={getRandomRatio()} key={i}/>)} */}



      {/* Scroll trigger */}
      {/* Intersection observer trigger */}
      <div ref={ref} className="h-10" />
     
    </div>

              {/* Loader at bottom when fetching next page */}
      {isFetchingNextPage && (
        <div className="flex justify-center bg-black">
          <Loader />
        </div>
      )}

     {!hasNextPage && !isLoading && (
  <div className="text-center bg-black text-white py-2">
    You’ve reached the end 👋🏼
  </div>
)}

    </div>


    
      
    </>


    
    

  );
};

export default Home;
