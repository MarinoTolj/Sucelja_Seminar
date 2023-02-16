import Photo from "./photo";

const TrendingBirds = () => {
  return (
    <div className="bg-beige mt-9 flex  items-center flex-col gap-3">
      <h3 className="text-2xl">TRENDING BIRDS</h3>
      <Photo
        src="/photos/birds/Green Parrot.jpg"
        alt={`Green Parrot`}
        loading="eager"
        overlayText="Green Parrot"
        clickable
        productType="birds"
      />
      <Photo
        src="/photos/birds/White Parrot.jpg"
        alt={`White Parrot`}
        loading="eager"
        overlayText="White Parrot"
        clickable
        productType="birds"
      />
    </div>
  );
};
export default TrendingBirds;
