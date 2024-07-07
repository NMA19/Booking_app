import 'tailwindcss/tailwind.css'; // Make sure to include Tailwind CSS in your project
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="bg-white min-h-screen flex">
      <div
        className="w-1/2 bg-cover md:block hidden"
        style={{
          background: "linear-gradient(rgba(2, 2, 2, 0.7), rgba(0, 0, 0, 0.7)), url('./imag/im.jpg') center center",
          backgroundSize: 'cover',
        }}
      ></div>
      
      <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <div className="text-left p-0 font-sans">
          <h1 className="text-gray-800 text-3xl font-medium">Create an account for free</h1>
          <h3 className="p-1 text-gray-700">Free forever. No payment needed.</h3>
        </div>

        <form action="#" className="p-0">
          <div className="mt-5">
            <input
              type="text"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
              placeholder="Email"
            />
          </div>
          <div className="mt-5">
            <input
              type="text"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
              placeholder="User-name"
            />
          </div>
          <div className="mt-5">
            <input
              type="password"
              className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
              placeholder="Password"
            />
          </div>

          <div className="mt-6 block p-5 text-sm md:font-sans  text-gray-800">
            <input type="checkbox" className="inline-block border-0" />
            <span className="">
              By creating an account you are agreeing to our{' '}
              <a className="" href="#" target="_blank" data-test="Link">
                <span className="underline">Terms and Conditions</span>
              </a>{' '}
              and{' '}
              <a className="" href="#" target="_blank" data-test="Link">
                <span className="underline">Privacy Policy</span>
              </a>
            </span>
          </div>

          <div className="mt-10">
            <input
              type="submit"
              value="Sign up with email"
              className="py-3 bg-sky-800 rounded-xl text-white w-full hover:bg-green-600"
            />
          </div>
        </form>
        <Link to="/acc" data-test="Link">
          <span className="block p-5 text-center text-gray-800 text-xs">
            Already have an account?
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
