import React from "react";
import Layout from "@theme/Layout";
import MainHomepage from "../components/home/main";

export default function Home() {
  return (
    <Layout
      title={`Welcome`}
      description="A client management app built for small businesses and side hustles.
      Focus on your clients, leave the rest to us.">
      <MainHomepage />
    </Layout>
  );
}
