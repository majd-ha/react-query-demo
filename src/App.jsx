import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import RootLayout from "./layouts/RootLayout";
import SuperHerolayout from "./layouts/SuperHerolayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RQsuperheroes from "./pages/RQsuperheroes";
import SingleSuperHero from "./pages/SingleSuperHero";
import SuperHeroes from "./pages/SuperHeroes";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/superhroes" element={<SuperHeroes />} />
      <Route
        path="/Rqsuperhroes"
        element={<SuperHerolayout />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<RQsuperheroes />} />
        <Route path=":heroId" element={<SingleSuperHero />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
