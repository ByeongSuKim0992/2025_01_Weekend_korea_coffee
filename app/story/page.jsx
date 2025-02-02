"use client";

import { MSG } from "@/constants/msg";
import StoryFadeIn from "@/shared/StoryFadeIn";
import StoryCard from "@/widgets/storycard/StoryCard";
import StoryHero from "@/widgets/storyhero/StoryHero";

const page = () => {
  return (
    <main>
      <StoryFadeIn />
      <StoryCard {...MSG.STORY.FIRST} />
      <StoryCard {...MSG.STORY.SECOND} />
      <StoryHero />
    </main>
  );
};

export default page;
