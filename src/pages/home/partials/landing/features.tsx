import { useMemo } from "react";
import Feature from "./feature";

export default function Features() {
  const FEATURES = useMemo(() => {
    const features = [
      {
        icon: "https://anilist.co/img/landing/stats.svg",
        title: "Discover your obsessions",
        description:
          "What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics.",
      },
      {
        icon: "https://anilist.co/img/landing/apps.svg",
        title: "Bring Manime anywhere",
        description:
          "Keep track of your progress on-the-go with one of many Manime appsacross iOS, Android, macOS, and Windows",
      },
      {
        icon: "https://anilist.co/img/landing/social.svg",
        title: "Join the conversation",
        description:
          "Share your thoughts with our thriving community, make friends, socialize, and receive recommendations.",
      },
      {
        icon: "https://anilist.co/img/landing/custom.svg",
        title: "Tweak it to your liking",
        description:
          "Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode.",
      },
    ];
    return features.map((feature) => <Feature key={feature.title} {...feature} />);
  }, []);

  return (
    <div className="w-full grid lg:grid-cols-2 gap-y-8 gap-x-6 py-5 md:py-10 max-w-[700px]">
      {FEATURES}
    </div>
  );
}
