import { cn } from "./ui/cn";

const Title = ({ children, className }) => {
  return (
    <h2 className={cn("text-2xl font-semibold", className)}>{children}</h2>
  );
};

export default Title;