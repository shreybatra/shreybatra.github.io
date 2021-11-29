import { ListGroup } from "react-bootstrap";

export const ExpCard = ({ heading, subTitle, children }) => {
  return (
    <ListGroup.Item className="custom-background1">
      <h4>{heading}</h4>
      <h6 className="text-muted">{subTitle}</h6>
      {children}
    </ListGroup.Item>
  );
};
