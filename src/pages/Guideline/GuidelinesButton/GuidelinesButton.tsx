import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button/Button";

export const GuidelinesButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Button
      theme="ghost"
      onClick={() => {
        if (location.key === "default") {
          navigate("/");
        } else {
          navigate(-1);
        }
      }}
    >
      <ChevronLeftIcon /> Guidelines
    </Button>
  );
};
