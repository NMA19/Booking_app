import Button from "@mui/material/Button";

export default function ButtonUsage() {
  return (
    <div className="p-1 absolute left-3/4 top-3">
      <Button className="m-3 relative right-3 " variant="contained">Register</Button>
      <Button className="m-3" variant="contained">Login</Button>
    </div>
  );
}
