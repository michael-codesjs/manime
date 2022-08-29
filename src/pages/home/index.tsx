import Grid from "./anime-grid";
import PopularAnime from "./popular-anime";

export default function Home() {

  return (
    <>
      <div className="w-full vstack space-y-2">
        <h2 className="w-full text-2xl text-center font-medium text-gray-800"> What Anime Are You Looking For ? </h2>
        <p className="w-full text-center text-md text-gray-600"> We have it all ! </p>
      </div>
      <Grid />
      <PopularAnime />
    </>
  )

}