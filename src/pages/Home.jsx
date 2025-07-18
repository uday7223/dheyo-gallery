import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchGallery } from '../api/mockApi';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
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
    queryFn: ({ pageParam = 0 }) => fetchGallery({ offset: pageParam, limit: 10 }),
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.nextOffset : undefined,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (

    <>
        <div className="columns-2 md:columns-3 gap-4 p-4 space-y-4">
      {/* Show skeletons while loading initial content */}
      {isLoading &&
        Array.from({ length: 1 }).map((_, i) => <MediaSkeleton key={i} />)}
        

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
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/300x400')}
                  className="w-full min-h-[200px] rounded-lg mb-4 transition-all duration-500 ease-in-out"

                />
              ) : (
                <video
                  src={item.url}
                  controls
                      onLoadedData={(e) => e.target.classList.add('fade-in-up')}
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/300x400')}
                      className="w-full rounded-lg mb-4 "
                />
              )}
            </Link>
        </div>

          ))}
        </div>
      ))}

      {/* Skeleton while loading next page */}
      {isFetchingNextPage &&
        Array.from({ length: 1 }).map((_, i) => <MediaSkeleton key={`skeleton-${i}`} />)}

      {/* Loader at bottom when fetching next page */}
      {isFetchingNextPage && (
        <div className="flex justify-center my-6">
          <Loader />
        </div>
      )}

      {/* Intersection observer trigger */}
      <div ref={ref} className="h-10" />
     
    </div>
    
    

     {!hasNextPage && !isLoading && (
  <div className="text-center text-gray-500 py-2">
    You’ve reached the end 👋🏼
  </div>
)}
    </>


    
    

  );
};

export default Home;
