import React from "react";
import { usePingQuery } from "../generated/graphql";

export const Home: React.FC = () => {
  const { loading, data } = usePingQuery();

  if (loading || !data) return <p>loading....</p>;

  return (
    <>
      <h2>gql response : {data.ping || "no data"}</h2>
    </>
  );
};
