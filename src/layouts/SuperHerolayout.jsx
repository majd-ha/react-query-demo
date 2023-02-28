import { Outlet } from "react-router-dom";
export default function SuperHerolayout() {
  return (
    <div>
      <h1 className="text-center">super hero page</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
