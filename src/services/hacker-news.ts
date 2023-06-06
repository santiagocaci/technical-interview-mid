const HACKER_NEWS_URL = 'https://hacker-news.firebaseio.com/v0/';

export const getTopStories = async (
  page: number,
  limit: number
): Promise<number[]> => {
  const response = await fetch(HACKER_NEWS_URL + 'topstories.json');
  const json = (await response.json()) as number[];

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const ids = json.slice(startIndex, endIndex);
  return ids;
};

export const getArticleInfo = async (id: number) => {
  const response = await fetch(HACKER_NEWS_URL + id + '.json');
  return await response.json();
};
