import Photo from "./photo";

const StarterBundles = () => {
  return (
    <div className="bg-beige h-full mt-9">
      <h2 className="text-center text-2xl">STARTER BUNDLES</h2>
      <h3 className="text-center">BUNDLE #1</h3>
      <div className="flex justify-center">
        <Photo
          src="/photos/birds/Bird1.jpg"
          alt={`Bird1`}
          loading="eager"
          overlayText="Bird Name PARROT + CAGE + FOOD=500€"
          clickable
          productType="Birds"
        />
      </div>
    </div>
  );
};
export default StarterBundles;
