"use client";

import Contents from "@/widgets/contents/Contents";
import MD from "@/widgets/md/MD";
import MainSwiper from "@/widgets/swiper/MainSwiper";

export default function Home() {
  return (
    <main>
      <MainSwiper />
      <Contents />
      <MD />
    </main>
  );
}
