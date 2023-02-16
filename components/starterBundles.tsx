import Photo from "./photo";

const StarterBundles = () => {
  return (
    <>
      <div className=" h-full mt-9">
        <h2 className="bg-beige m-auto mb-3 text-center text-2xl rounded-2xl w-fit p-3">
          Our bundles offer a great deal!
        </h2>
      </div>
      <div className="md:flex md:gap-5 md:justify-center">
        <div className="flex flex-col justify-center">
          <h3 className="text-center">The robin bundle</h3>
          <div className="m-auto">
            <Photo
              src="/photos/birds/Robin.jpg"
              alt={`Robin`}
              loading="eager"
              overlayText="Robin + cage + food = 500€"
              clickable
              productType="birds"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-center">The crow bundle</h3>
          <div className="m-auto">
            <Photo
              src="/photos/birds/Crow.jpg"
              alt={`Crow`}
              loading="eager"
              overlayText="Crow + cage + food = 400€"
              clickable
              productType="birds"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default StarterBundles;
