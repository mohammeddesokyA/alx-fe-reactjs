import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is a dynamic blog post page using React Router.</p>
    </div>
  );
}
