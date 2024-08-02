import Button from "@mui/material/Button";

function Subscribe() {
    return (
        <div className="bg-red-900 p-6 w-full">
            <h1 className="text-center text-white font-bold text-2xl lg:text-4xl mb-4">Save time, Save money!</h1>
            <h2 className="text-center text-white mb-6">Sign up and we will send the best deals to you</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
                <input 
                    className="w-full lg:w-80 p-2 rounded" 
                    type="text" 
                    placeholder="Enter your email" 
                />
                <Button 
                    className="w-full lg:w-auto h-12 lg:h-14" 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: 'darkorange', 
                        '&:hover': {
                            backgroundColor: 'darkred'
                        } 
                    }}
                >
                    Subscribe
                </Button>
            </div>
        </div>
    );
}

export default Subscribe;
