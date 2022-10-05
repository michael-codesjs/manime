import { Button } from "../../../components/buttons/base";
import Feature from "./feature";

export default function Landing() {
  return (
    <div className="flex flex-col h-full items-center justify-center space-y-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-800 dark:text-white max-w-[600px]">
        The next generation anime platform.
      </h1>
      <p className="text-md md:text-lg font-medium text-center max-w-[400px] text-gray-500 dark:text-gray-300">
        Track, share, and discover your favorite anime and manga with manime.
      </p>

      <div className="w-full grid lg:grid-cols-2 gap-y-8 gap-x-6 py-5 md:py-10 max-w-[700px]">
        <Feature
          icon={"https://anilist.co/img/landing/stats.svg"}
          title={"Discover your obsessions"}
          description={
            "What are your highest rated genres or most watched voice actors? Follow your watching habits over time with in-depth statistics."
          }
        />

        <Feature
          icon={"https://anilist.co/img/landing/apps.svg"}
          title={"Bring Manime anywhere"}
          description={
            "Keep track of your progress on-the-go with one of many Manime appsacross iOS, Android, macOS, and Windows"
          }
        />

        <Feature
          icon={"https://anilist.co/img/landing/social.svg"}
          title={"Join the conversation"}
          description={
            "Share your thoughts with our thriving community, make friends, socialize, and receive recommendations."
          }
        />

        <Feature
          icon={"https://anilist.co/img/landing/custom.svg"}
          title={"Tweak it to your liking"}
          description={
            "Customize your scoring system, title format, color scheme, and much more! Also, we have a dark mode."
          }
        />
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700 transition-all text-white py-4 px-16 rounded-full">
        Get Started!
      </Button>
    </div>
  );
}
