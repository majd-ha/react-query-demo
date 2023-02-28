import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RQsuperheroes from "./pages/RQsuperheroes";
import SingleSuperHero from "./pages/SingleSuperHero";
import SuperHeroes from "./pages/SuperHeroes";
//layouts

import RootLayout from "./layouts/RootLayout";
import RQSuperHerolayout from "./layouts/RQSuperHerolayout";
import SuperHeroLayout from "./layouts/SuperHeroLayout";
//components
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/superhroes" element={<SuperHeroLayout />}>
        <Route index element={<SuperHeroes />} />
        <Route path=":heroId" element={<SingleSuperHero />} />
      </Route>

      <Route
        path="/Rqsuperhroes"
        element={<RQSuperHerolayout />}
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
