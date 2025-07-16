import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchGallery } from '../api/mockApi';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-300 h-48 animate-pulse rounded"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="columns-2 md:columns-3 gap-4 p-4 space-y-4">
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.data.map((item) => (
            <Link key={item.id} to={`/g/${item.generation_id}`}>
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={`item-${item.id}`}
                  className="w-full rounded-lg mb-4 break-inside-avoid"
                />
              ) : (
                <video
                  src={item.url}
                  controls
                  className="w-full rounded-lg mb-4 break-inside-avoid"
                />
              )}
            </Link>
          ))}
        </div>
      ))}

      {/* Loading more skeleton */}
      {isFetchingNextPage && (
        <div className="space-y-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-gray-300 h-48 animate-pulse rounded" />
          ))}
        </div>
      )}

      {/* Observer trigger */}
      <div ref={ref} className="h-10" />
    </div>
  );
};

export default Home;
