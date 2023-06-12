import Comment from './Comment';

export default function ListOfComments(props: { ids: number[] }) {
  const { ids } = props;
  console.log({ ids });

  return (
    <ul
      style={{
        listStyle: 'none',
        padding: '0 2rem',
        maxWidth: '768px',
        margin: '2rem auto 0',
      }}
    >
      {ids?.map(id => (
        <li key={id}>
          <Comment id={id} />
        </li>
      ))}
    </ul>
  );
}
