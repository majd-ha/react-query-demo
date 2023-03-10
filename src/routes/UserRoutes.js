import React from "react";
import { Route } from "react-router-dom";
//components
//layouts
import RQSuperHerolayout from "../layouts/RQSuperHerolayout";
import SuperHerolayout from "../layouts/SuperHerolayout";
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
        <Route index element={<RQsuperheroes />} />
        <Route path=":heroId" element={<SingleSuperHero />} />
      </Route>
    </>
  );
}
