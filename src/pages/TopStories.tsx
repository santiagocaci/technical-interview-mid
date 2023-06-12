// import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

import { getTopStories } from '../services/hacker-news';

import Story from '../components/Story';
import { body, buttonMore } from './TopStories.css';

export default function TopStories() {
  // const { data, error } = useSWR('top-stories', () => getTopStories(1, 10));

  const { data, error, size, setSize } = useSWRInfinite(
    index => `stories/${index + 1}`,
    key => {
      const [, page] = key.split('/');
      return getTopStories(Number(page), 10);
    }
  );

  const stories = data?.flat() ?? [];

  return (
    <div className={body}>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
        }}
      >
        {error && <li>Something went wrong</li>}
        {stories?.map((storyId, index) => (
          <li key={storyId}>
            <Story id={storyId} index={index} />
          </li>
        ))}
      </ul>
      <button className={buttonMore} onClick={() => setSize(size + 1)}>
        Load More
      </button>
    </div>
  );
}
