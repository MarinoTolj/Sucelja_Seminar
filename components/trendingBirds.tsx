import Photo from "./photo";

const TrendingBirds = () => {
  return (
    <>
      <h3 className="bg-beige text-2xl rounded-2xl p-3 text-center w-fit m-auto">
        Trending
      </h3>
      <div className="mt-9 flex  items-center flex-col gap-3 md:flex-row md:justify-center md:flex-wrap md:w-3/5 md:m-auto md:mt-5">
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
        <Photo
          src="/photos/birds/Robin.jpg"
          alt={`Robin`}
          loading="eager"
          overlayText="Robin"
          clickable
          productType="birds"
        />
        <Photo
          src="/photos/birds/Eagle.jpg"
          alt={`Eagle`}
          loading="eager"
          overlayText="Eagle"
          clickable
          productType="birds"
        />
        <Photo
          src="/photos/cages/Brown cage.jpg"
          alt={`Brown Cage`}
          loading="eager"
          overlayText="Brown Cage"
          clickable
          productType="cages"
        />
        <Photo
          src="/photos/food/Apples.jpg"
          alt={`Apples`}
          loading="eager"
          overlayText="Apples"
          clickable
          productType="food"
        />
      </div>
    </>
  );
};
export default TrendingBirds;
