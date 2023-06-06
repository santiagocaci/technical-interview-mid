import useSWR from 'swr';

import { getTopStories } from '../services/hacker-news';

import Story from '../components/Story';

export default function TopStories() {
  const { data, error } = useSWR('top-stories', () => getTopStories(1, 10));
  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {error && <li>Something went wrong</li>}
        {data &&
          data.map((storyId, index) => (
            <li key={storyId}>
              <Story id={storyId} index={index} />
            </li>
          ))}
      </ul>
    </>
  );
}
