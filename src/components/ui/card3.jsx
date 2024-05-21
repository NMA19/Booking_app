

function HotelCard3() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mx-auto bg-white rounded-3xl shadow-xl">
        <div className="grid rounded-3xl max-w-[370px] shadow-sm bg-slate-100 flex-col">
          <img
            src="./public/imag/im3.jpg"
            width="275"
            height="150"
            className="rounded-t-3xl h-80 object-cover"
            alt="Aparthotel Stare Miastro"
          />

          <div className="group p-6 grid z-10 font-extrabold">
             Aparthotel Stare Miastro
            <span className="text-slate-400 pt-2 font-semibold">
              Madrid 
            </span>
            <div >
              <span className="line-clamp-4 py-2 text-start font-semibold leading-relaxed">
                starting from 100$
                </span>
            </div>
            <div className="grid-cols-2 flex justify-between">
              <div className="font-black flex flex-col">
                <span className="text-yellow-500 text-xl">Excellent</span>
                <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-600">
                  8.7
                </span>
              </div>
             </div>        
           </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard3;
