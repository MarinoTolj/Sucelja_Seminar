import Photo from "./photo";

const TrendingBirds = () => {
  return (
    <div className="bg-beige mt-9 flex  items-center flex-col gap-3">
      <h3 className="text-2xl">TRENDING BIRDS</h3>
      <Photo
        src="/photos/Bird2.jpg"
        alt={`Bird2`}
        loading="eager"
        overlayText="Bird Name"
      />
      <Photo
        src="/photos/Bird3.jpg"
        alt={`Bird3`}
        loading="eager"
        overlayText="Bird Name"
      />
    </div>
  );
};
export default TrendingBirds;
