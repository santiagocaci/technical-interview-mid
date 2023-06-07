import useSWR from 'swr';
import { getArticleInfo } from '../services/hacker-news';

import ListOfComments from './ListOfComments';
import { hacknewsComment, hacknewsCommentText } from './Comment.css';
import HackerNewsLoader from './HackerNewsLoader';

export default function Comments(props: { id: number }) {
  const { id } = props;
  const { data, isLoading } = useSWR(`/comment/${id}`, () =>
    getArticleInfo(id)
  );

  if (isLoading) return <HackerNewsLoader />;
  if (!data) return <span>Error!</span>;

  const { by, text, kids } = data;

  return (
    <>
      <details open>
        <summary>
          <small className={hacknewsComment}>
            <span>{by}</span>
            <span>.</span>
            <span>4 hours ago</span>
          </small>
        </summary>
        <p className={hacknewsCommentText}>{text?.slice(0, 300)}...</p>
      </details>
      {kids && <ListOfComments ids={kids.slice(0, 10)} />}
    </>
  );
}
