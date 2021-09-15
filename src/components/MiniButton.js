import { Button } from "react-bootstrap";

export const MiniButton = ({ children }) => {
  return (
    <Button size="sm" className="mt-2" variant="secondary">
      {children}
    </Button>
  );
};
