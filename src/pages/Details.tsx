import useSWR from 'swr';

import { getArticleInfo } from '../services/hacker-news';
import ListOfComments from '../components/ListOfComments';

export default function Details(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;

  const { data, isLoading } = useSWR(`/story/${id}`, () =>
    getArticleInfo(Number(id))
  );

  if (isLoading) return <span>loading...</span>;
  if (!data) return <span>Undefined?</span>;

  const commentIds = data.kids?.slice(0, 10) ?? [];

  return <ListOfComments ids={commentIds} />;
}
