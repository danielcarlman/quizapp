function Results() {
  return (
    <div className="border-4 border-cadetblue solid bg-white p-4 space-y-4">
      <h3 className="text-xl font-semibold tracking-widest">
        Seafood Restaurant
      </h3>

      <img
        src="https://cdn.vox-cdn.com/thumbor/0io5H1tQWLpgVToq6PJVwanJb8w=/0x0:5903x4480/1200x800/filters:focal(2480x1768:3424x2712)/cdn.vox-cdn.com/uploads/chorus_image/image/66156135/RPM_Seafood_Jan_2020_004_cropped.0.jpg"
        alt=""
      />
      <div className="flex flex-col text-left text-sm pb-6 space-y-2 tracking-wide leading-6">
        This is the definition of high-class dining experience. One of our best
        restaurants features prawns, shrimps and pretty much all great creatures
        from under the sea!
      </div>
    </div>
  );
}

export default Results;
