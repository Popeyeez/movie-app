import { HomePage, HomePageSkeleton } from "@/components/home";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomePage />
    </Suspense>
  );
}
