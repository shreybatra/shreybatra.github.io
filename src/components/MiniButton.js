import { Button } from "react-bootstrap";

export const MiniButton = ({ children, size = "sm" }) => {
  return (
    <Button
      size={size}
      className="mt-2 custom-background border-0"
      variant="secondary"
    >
      {children}
    </Button>
  );
};
