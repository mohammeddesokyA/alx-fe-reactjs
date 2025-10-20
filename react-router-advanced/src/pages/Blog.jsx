import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Learning React Router" },
    { id: 3, title: "Dynamic Routing in React" },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
