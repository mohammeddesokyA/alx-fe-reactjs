import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    dataUpdatedAt,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 30, // 30 ثانية
    cacheTime: 1000 * 60 * 5, // 🕒 تخزين البيانات في الكاش لمدة 5 دقائق
    refetchOnWindowFocus: false, // 🚫 ما يعيدش الجلب لما ترجع على النافذة
    keepPreviousData: true, // ✅ يحتفظ بالبيانات القديمة أثناء التحديث
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  // 🕒 نحول التوقيت إلى شكل قابل للقراءة
  const lastUpdated = new Date(dataUpdatedAt).toLocaleTimeString();

  // ✨ Shuffle بسيط عشان نلاحظ تغيير بصري
  const shuffled = [...posts].sort(() => Math.random() - 0.5).slice(0, 5);

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", textAlign: "center" }}>
      <h2>React Query Posts</h2>

      <button
        onClick={() => {
          console.log("🔁 Refetch triggered...");
          refetch();
        }}
        style={{
          background: "#4caf50",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        🔄 Refetch Posts
      </button>

      {isFetching && <p style={{ color: "blue" }}>Fetching latest data...</p>}
      <p style={{ fontSize: "14px", color: "gray" }}>
        Last updated at: {lastUpdated}
      </p>

      <ul style={{ textAlign: "left" }}>
        {shuffled.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
