function HotelCard({ source }) {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl max-w-sm md:max-w-md lg:max-w-lg w-full">
        <div className="rounded-3xl bg-slate-100 flex flex-col">
          <img
            src={source}
            className="rounded-t-3xl w-full h-60 object-cover md:h-72 lg:h-80"
            alt="Hotel"
          />

          <div className="p-4">
            <h2 className="text-xl font-extrabold">Aparthotel Stare Miastro</h2>
            <span className="text-slate-400 block text-md font-semibold mt-2">Madrid</span>
            <p className="line-clamp-4 text-md font-semibold leading-relaxed mt-2">
              Starting from $100
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="flex flex-col items-start">
                <span className="text-yellow-500 text-lg font-black">Excellent</span>
                <span className="text-2xl flex gap-x-1 items-center group-hover:text-yellow-600">
                  9.2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
