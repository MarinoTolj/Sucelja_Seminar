import Photo from "./photo";

const TrendingBirds = () => {
  return (
    <div className="bg-beige mt-9 flex  items-center flex-col gap-3">
      <h3 className="text-2xl">TRENDING BIRDS</h3>
      <Photo
        src="/photos/Birds/Green Parrot.jpg"
        alt={`Green Parrot`}
        loading="eager"
        overlayText="Green Parrot"
        clickable
        productType="Birds"
      />
      <Photo
        src="/photos/Birds/White Parrot.jpg"
        alt={`White Parrot`}
        loading="eager"
        overlayText="White Parrot"
        clickable
        productType="Birds"
      />
    </div>
  );
};
export default TrendingBirds;
