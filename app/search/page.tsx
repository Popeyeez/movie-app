import React, { Suspense } from "react";
import SearchClientComponent from "./SearchClientComponent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchClientComponent />
    </Suspense>
  );
}
