import Button from "@mui/material/Button";


function Subscribe() {
    return (
        <div className="bg-red-900 absolute top-[260%] p-6 w-full">
          <h1 className="text-center text-white font-bold text-4xl mb-4">Save time, Save money!</h1>
          <h2 className="text-center text-white mb-6">Sign up and we will send the best deals to you</h2>
          <div className="inline-flex gap-4 relative left-[34%]">
            <input className="w-80 p-2 rounded" type="text" placeholder="Enter your email" />
            <Button className=" h-14" variant="contained" sx={{ 
            backgroundColor: 'darkorange', 
            '&:hover': {
              backgroundColor: 'darkred'
            } 
          }}>Subscribe</Button>
          </div>
        </div>
      );
      
}export default Subscribe;