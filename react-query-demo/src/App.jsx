import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <h1>React Query Demo</h1>
      </div>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
