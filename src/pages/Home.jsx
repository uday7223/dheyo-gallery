import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchGallery } from '../api/mockApi';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import MediaSkeleton from '../components/MediaSkeleton';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 3,
  768: 2,
  480: 2,
};

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

  const { ref, inView } = useInView();
  const prevInView = useRef(inView);

  useEffect(() => {
    if (inView && hasNextPage && inView !== prevInView.current) {
      setTimeout(() => fetchNextPage(), 100);
    }
    prevInView.current = inView;
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      <div className="home-container px-4">
        {/* Initial Skeleton Loaders */}
        {isLoading && (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <MediaSkeleton key={i} />
            ))}
          </Masonry>
        )}

        {/* Masonry Gallery */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {data?.pages.map((page) =>
            page.data.map((item) => (
              <div key={item.id} className="mb-4">
                <Link to={`/g/${item.generation_id}`}>
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={`item-${item.id}`}
                      loading="lazy"
                      onLoad={(e) => e.target.classList.add('fade-in-up')}
                      className="w-full min-h-[200px] rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:scale-[1.01]"
                    />
                  ) : (
                    <video
                      src={item.url}
                      controls
                      onLoadedData={(e) => e.target.classList.add('fade-in-up')}
                      onError={(e) => (e.target.src = 'https://via.placeholder.com/300x400')}
                      className="w-full rounded-lg opacity-0 transition-all duration-500 ease-in-out hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:scale-[1.01]"
                    />
                  )}
                </Link>
              </div>
            ))
          )}
        </Masonry>

        {/* Loader while fetching next page */}
        {isFetchingNextPage && (
          <div className="flex justify-center py-4">
            <Loader />
          </div>
        )}

        {/* Scroll Trigger */}
        <div ref={ref} className="h-10" />

        {/* End Message */}
        {!hasNextPage && !isLoading && (
          <div className="text-center text-black py-2">
            You’ve reached the end 👋🏼
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
