import Comment from './Comment';

export default function ListOfComments(props: { ids: number[] }) {
  const { ids } = props;
  console.log({ ids });

  return (
    <ul style={{ listStyle: 'none' }}>
      {ids?.map(id => (
        <li key={id}>
          <Comment id={id} />
        </li>
      ))}
    </ul>
  );
}
