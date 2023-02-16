import Photo from "./photo";

const TrendingBirds = () => {
  return (
    <>
      <div className="text-2xl bg-beige mt-5 mb-1 text-center">
        <h3>Trending</h3>
      </div>

      <div className="bg-white mt-9 flex  items-center flex-col md:flex-row md:justify-center gap-3">
        <Photo
          src="/photos/Birds/Green Parrot.jpg"
          alt={`Green Parrot`}
          loading="eager"
          overlayText="Green Parrot"
          clickable
          productType="Birds"
        />
        <Photo
          src="/photos/cages/Cottage cage.jpg"
          alt={`Cottage cage`}
          loading="eager"
          overlayText="Cottage cage"
          clickable
          productType="Cages"
        />
        <Photo
          src="/photos/food/Apples.jpg"
          alt={`Apples`}
          loading="eager"
          overlayText="Apples"
          clickable
          productType="Food"
        />
        <Photo
          src="/photos/Birds/Eagle.jpg"
          alt={`Eagle`}
          loading="eager"
          overlayText="Eagle"
          clickable
          productType="Birds"
        />
      </div>
    </>
  );
};
export default TrendingBirds;
