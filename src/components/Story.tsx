import useSWR from 'swr';
import { Link } from 'wouter';

import { getArticleInfo } from '../services/hacker-news';

import {
  smallLink,
  story,
  storyDomain,
  storyFooter,
  storyHeader,
  storyTitle,
} from './Story.css';
import HackerNewsLoader from './HackerNewsLoader';
import { Item } from '../types';
import { getRelativeTime } from '../utils';

export default function Story(props: { id: number; index: number }) {
  const { index, id } = props;
  const { data, isLoading, error } = useSWR(`/story/${id}`, () =>
    getArticleInfo(id)
  );

  if (isLoading) return <HackerNewsLoader />;

  if (error) return <span>Error!</span>;

  if (!data) return <span>Undefined???</span>;

  const { by, kids, score, title, url, time } = data as Item;
  let domain = 'not domain';
  try {
    if (url) domain = new URL(url).hostname.replace('www.', '');
  } catch (error) {
    domain = 'not domain';
  }

  return (
    <article className={story}>
      <header className={storyHeader}>
        <small style={{ fontSize: '1rem' }}>{index + 1}. </small>
        <a
          className={storyTitle}
          href={url}
          target='_blank'
          rel='noonpener noreferrer'
        >
          {title}{' '}
        </a>
        <a
          href={url}
          target='_blank'
          rel='noonpener noreferrer'
          className={storyDomain}
        >
          ({domain})
        </a>
      </header>

      <footer className={storyFooter}>
        <span>{score} points</span>{' '}
        <Link href={`/article/${id}`} className={smallLink}>
          by {by}
        </Link>{' '}
        <Link href={`/article/${id}`} className={smallLink}>
          {getRelativeTime(time)}
        </Link>{' '}
        |{' '}
        <Link href={`/article/${id}`} className={smallLink}>
          {kids?.length || 0} comments
        </Link>
      </footer>
    </article>
  );
  // return <HackerNewsLoader />;
}
