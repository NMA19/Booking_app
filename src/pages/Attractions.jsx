import Search from "../components/ui/Searchbar2.jsx";
import Header from '../components/ui/header.jsx';

const Att = () => {
    return (
        <div>
            <div className="bg-red-900 ">
                <Header 
                    title={"Attractions, activities and experiences"} 
                    text={"Discover new attractions and experiences to match your interests and travel style"}
                />
                <div className='relative mx-10 top-16'>
                    <Search />
                </div>
            </div>
            <div className="bg-white mt-24 py-8 px-4">
                <h1 className="font-bold text-xl text-center lg:text-left lg:pl-12" >Top destinations</h1>
                <div className="flex flex-wrap justify-center lg:justify-between gap-4 lg:gap-2">
                    {["./public/imag/anglesey br.jpg", "./public/imag/Helsinki.jpg", "./public/imag/takayama .jpg", "./public/imag/anglesey br.jpg", "./public/imag/Helsinki.jpg", "./public/imag/takayama .jpg"].map((src, index) => (
                        <div key={index} className="flex-1 min-w-[calc(100%-1rem)] sm:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1rem)]">
                            <img
                                className="w-full h-48 rounded-lg object-cover"
                                src={src}
                                alt="Destination"
                            />
                        </div>
                    ))}
                </div>
                <h1 className="mt-12 text-center lg:text-left lg:pl-12">We've got you covered</h1>
            </div>
        </div>
    );
}

export default Att;
