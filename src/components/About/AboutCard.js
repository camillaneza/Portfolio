import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola! Mi nombre es <span className="purple">Camila Fernández Llaneza </span> 
            de <span className="purple">Buenos Aires, Argentina.</span>
            <br />
            Soy Data Scientist con muchas ganas de aprender más cada día.
            <br />
            Me apasiona la Inteligencia Artificial, y quiero crear sistemas técnicos sostenibles y escalables para crear impacto.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;