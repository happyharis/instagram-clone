import { Button, Col, Row } from "react-bootstrap";

export default function App() {
  return (
    <Row>
      <Col
        sm={1}
        className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
        style={{ position: "sticky", top: 0 }}
      >
        <Button variant="light my-4" style={{ marginBottom: "7px" }}>
          <i className="bi bi-instagram" style={{ fontSize: "24px" }}></i>
        </Button>
        <Button variant="light" style={{ marginBottom: "7px" }}>
          <i className="bi bi-house" style={{ fontSize: "24px" }}></i>
        </Button>
        <Button variant="light" style={{ marginBottom: "7px" }}>
          <i className="bi bi-search" style={{ fontSize: "24px" }}></i>
        </Button>
        <Button variant="light" style={{ marginBottom: "7px" }}>
          <i className="bi bi-compass" style={{ fontSize: "24px" }}></i>
        </Button>
        <Button variant="light" style={{ marginBottom: "7px" }}>
          <i className="bi bi-film" style={{ fontSize: "24px" }}></i>
        </Button>
        <Button variant="light" style={{ marginBottom: "7px" }}>
          <i className="bi bi-chat" style={{ fontSize: "24px" }}></i>
        </Button>
        <Button variant="light" style={{ marginBottom: "7px" }}>
          <i className="bi bi-heart" style={{ fontSize: "24px" }}></i>
        </Button>
        <Button variant="light" style={{ marginBottom: "7px" }}>
          <i className="bi bi-plus-square" style={{ fontSize: "24px" }}></i>
        </Button>
        <Button variant="light" style={{ marginBottom: "7px" }}>
          <i className="bi bi-person-circle" style={{ fontSize: "24px" }}></i>
        </Button>
        <Button variant="light mt-auto mb-3" style={{ marginBottom: "7px" }}>
          <i className="bi bi-list" style={{ fontSize: "24px" }}></i>
        </Button>
      </Col>
      <Col sm={11}>Main</Col>
    </Row>
  );
}
