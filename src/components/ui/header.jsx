import ButtonUsage from "./Button";
import Items from './List'

function Header({ title, text }) {
  return (
    <div className="bg-red-900 p-1 pb-8">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-white font-bold">TravelEase</h1>
        <ButtonUsage />
      </div>
      <div className="hidden lg:block">
        <Items/>
     </div>
      <h4 className="mx-4 relative top-[16%] text-white font-bold text-4xl lg:text-5xl top-[9%] ">
        {title}
      </h4>
      <h1 className="mx-4 relative text-sm top-[13%] text-white lg:text-xl top-[9%]">
        {text}
      </h1>
    </div>
  );
}

export default Header;
