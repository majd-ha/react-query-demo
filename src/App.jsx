import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import RQsuperheroes from "./components/RQsuperheroes";
import SuperHeroes from "./components/SuperHeroes";
import RootLayout from "./layouts/RootLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="/superhroes" element={<SuperHeroes />} />
      <Route path="/Rqsuperhroes" element={ <RQsuperheroes/>} />
    </Route>
  )
)
function App() {
 const queryClient=new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false } position='bottom-left' />
      </QueryClientProvider>
     

   
   
    </div>
  );
}

export default App;
