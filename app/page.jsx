"use client";

import FadeIn from "@/shared/FacdeIn";
import Sample from "@/shared/Sample";
import Contents from "@/widgets/contents/Contents";
import MD from "@/widgets/md/MD";
import MainSwiper from "@/widgets/swiper/MainSwiper";

export default function Home() {
  return (
    <main>
      <MainSwiper />
      <Contents />
      <FadeIn>
        <MD />
      </FadeIn>
    </main>
  );
}
