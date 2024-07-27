import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ButtonUsage() {
  return (
    <div className="p-1 absolute left-3/4 top-3">
      <Link to="/register">
        <Button 
          className="m-3 relative right-3" 
          variant="contained" 
          style={{ 
            backgroundColor: 'darkorange', 
            color: 'white' 
          }}
        >
          Register
        </Button>
      </Link>
      <Link to="/login">
        <Button 
          className="m-3" 
          variant="contained" 
          style={{ 
            backgroundColor: 'darkorange', 
            color: 'white' 
          }}
        >
          Login
        </Button>
      </Link>
    </div>
  );
}
