import Nav from "react-bootstrap/Nav";

function Tabs() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" style={{}}>
      <Nav.Item>
        <Nav.Link eventKey="Ops">Ops Action Items</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Summary">PM Summary</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Data">PM Data</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="LampInfo">Lamp Info</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Tabs;
