import { ListOfEmployees } from "@/containers/ListOfEmployees";
import React from "react";

const Home = () => {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ListOfEmployees />
      </React.Suspense>
    </div>
  );
};

export default Home;
