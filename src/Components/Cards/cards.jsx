import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import './cards.css'

function Cards({ data }) {
  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.id} className="card-item">
          <Card className="card-height">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item.text}
              </Typography>
              <Typography>{item.para}</Typography>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Cards;
