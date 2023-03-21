import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
//layouts
import AdminLayout from "./layouts/AdminLayout";
import RootLayout from "./layouts/RootLayout";
import UserLayout from "./layouts/UserLayout";

//routes

import ErrorPage from "./components/ErrorPage";
import SwitchUser from "./pages/SwitchUser";
import UserRoutes from "./routes/UserRoutes";

///

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="switchUser" element={<SwitchUser />} />

      <Route
        path="profile"
        element={<UserLayout />}
        errorElement={<ErrorPage />}
      >
        {UserRoutes()}
      </Route>

      <Route
        path="adminPanel"
        element={<AdminLayout />}
        errorElement={<ErrorPage />}
      >
        <Route index element={<DashBoard />} />
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
