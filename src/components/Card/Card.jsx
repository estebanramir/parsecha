import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';


function Cardd(companyy) {
  console.log("🚀 ~ Cardd ~ companyy:", companyy)
  const { name, company} = companyy.company;
  const cName = company.name
  const catchPhrase = company.catchPhrase
  return (
    <Card
    bg={"primary"}
    style={{ width: "18rem" }}
    className="mb-2"
    >
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>{cName}</Card.Title>
        <Card.Text>{catchPhrase}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cardd;
