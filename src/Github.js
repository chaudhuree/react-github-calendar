import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Container } from "react-bootstrap";

function Github() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 style={{ paddingBottom: "20px" }}>
          My Coding <strong className="purple">Days</strong>
        </h1>
        <div>
          <GitHubCalendar
            username="chaudhuree"
            blockSize={15}
            blockMargin={5}
            fontSize={16}
            hideTotalCount={true}
          />
        </div>
      </Row>
    </Container>
  );
}

export default Github;
