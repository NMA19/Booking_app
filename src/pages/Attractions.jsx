import ButtonUsage from "../components/ui/Button.jsx";
import List from '../components/ui/List.jsx';
import Search from "../components/ui/Searchbar2.jsx";

const Att = () => {
    return (
        <div className="bg-red-900 p-1 h-[490px]">
            <h1 className="m-4 relative left-20 text-white font-bold">
            TravelEase
            </h1>
            <ButtonUsage />
            <List />
            <h1 className="relative top-[40%] left-24 font-bold text-5xl text-white">
                Attractions, activities and <br /> experiences
            </h1>
            <h2 className="relative top-[43%] left-24 text-xl text-white">
                Discover new attractions and experiences to match <br /> your interests and travel style
            </h2>
            <div className='relative top-[55%] left-28'>
                <Search />
            </div>
            <div className="relative top-[55%] left-12">
  
              <h1 className="font-bold relative left-[14%] text-xl top-6"> Top destinations</h1>

                <div className="flex flex-wrap justify-between gap-2 relative">
                    <div className="flex-1 min-w-[calc(33.333%-1rem)]">
                        <img
                            className="w-[70%] h-48 rounded-lg object-cover relative left-[43%] top-10"
                            src="./public/imag/anglesey br.jpg"
                            alt="Anglesey Bridge"
                        />
                    </div>
                    <div className="flex-1 min-w-[calc(33.333%-1rem)]">
                        <img
                            className="w-[70%] h-48 rounded-lg object-cover relative left-16 top-10"
                            src="./public/imag/Helsinki.jpg"
                            alt="Helsinki"
                        />
                    </div>
                    <div className="flex-1 min-w-[calc(33.333%-1rem)]">
                        <img
                            className="w-[70%] h-48 rounded-lg object-cover relative right-[14%] top-10"
                            src="./public/imag/takayama .jpg"
                            alt="Takayama"
                        />
                    </div>
                    <div className="flex-1 min-w-[calc(33.333%-1rem)]">
                        <img
                            className="w-[70%] h-48 rounded-lg object-cover relative left-[43%] top-10"
                            src="./public/imag/anglesey br.jpg"
                            alt="Anglesey Bridge"
                        />
                    </div>
                    <div className="flex-1 min-w-[calc(33.333%-1rem)]">
                        <img
                            className="w-[70%] h-48 rounded-lg object-cover relative left-16 top-10"
                            src="./public/imag/Helsinki.jpg"
                            alt="Helsinki"
                        />
                    </div>
                    <div className="flex-1 min-w-[calc(33.333%-1rem)]">
                        <img
                            className="w-[70%] h-48 rounded-lg object-cover relative right-[14%] top-10"
                            src="./public/imag/takayama .jpg"
                            alt="Takayama"
                        />
                    </div>
                </div>
                <h1 className="relative top-12">We've got you covered</h1>
            </div>
        </div>
    );
}

export default Att;
