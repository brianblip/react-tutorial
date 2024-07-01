interface PostProps {
  showDate: boolean;
}

export const Post: React.FC<PostProps> = ({ showDate }) => {
  const date = new Date().toDateString();

  return <div>{showDate && <h1>{date}</h1>}</div>;
};
