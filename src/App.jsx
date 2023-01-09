import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import MainLayout from "./layouts/Main";
import EditProfile from "./pages/EditProfile";
import MyPosts from "./pages/MyPosts";
import Profile from "./pages/Profile";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 2 * 60 * 1000, // 2 minutes
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/user" element={<Profile />} />
            <Route path="/modify-user" element={<EditProfile />} />
            <Route path="/comments" element={<MyPosts />} />
            <Route path="/" element={<Navigate to={"/user"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
