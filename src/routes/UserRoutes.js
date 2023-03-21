import React from "react";
import { Route } from "react-router-dom";
//components
//layouts
import RQSuperHerolayout from "../layouts/RQSuperHerolayout";
import SuperHerolayout from "../layouts/SuperHerolayout";
import AddSuperHero from "../pages/AddSuperHero";
import InfiniteQueryesTest from "../pages/InfiniteQueryesTest";
import PaginatedSample from "../pages/PaginatedSample";
//pages
import RQsuperheroes from "../pages/RQsuperheroes";
import SingleSuperHero from "../pages/SingleSuperHero";
import SuperHeroes from "../pages/SuperHeroes";
export default function UserRoutes() {
  return (
    <>
      <Route path="superhroes" element={<SuperHerolayout />}>
        <Route index element={<SuperHeroes />} />
        <Route path=":heroId" element={<SingleSuperHero />} />
      </Route>

      <Route path="Rqsuperhroes" element={<RQSuperHerolayout />}>
        <Route path="heros" element={<RQsuperheroes />}>
          <Route path="addhero" element={<AddSuperHero />} />
        </Route>

        <Route path=":heroId" element={<SingleSuperHero />} />
      </Route>
      <Route path="products" element={<PaginatedSample />} />
      <Route path="infinte-pro" element={<InfiniteQueryesTest />} />
    </>
  );
}
