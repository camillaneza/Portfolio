/*
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

*/

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import googleyelp from "../../Assets/Projects/proyecto_googleyelp.png";
import mercadofinanciero from "../../Assets/Projects/proyecto_mercadofinanciero.png";
import accidentesviales from "../../Assets/Projects/proyecto_accidentesviales.png";
import steam from "../../Assets/Projects/proyecto_steam.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis trabajos <strong className="purple">recientes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googleyelp}
              isBlog={false}
              title="Proyecto Google-Yelp"
              description="Este proyecto consiste en analizar el mercado estadounidense referido a restaurantes y afines, desarrollando el rol de una empresa consultora de datos, mediante la utilización y extracción de los mismos de las fuentes de Yelp y Google Maps. Se analizarán los restaurantes en el estado de Florida, entre los años 2017-2022. Se busca impactar tanto a empresarios como a clientes al proporcionar información valiosa sobre la percepción de la ronda de inversores y brindar recomendaciones personalizadas. "
              ghLink="https://github.com/camillaneza/PF_Google_Yelp"
              demoLink="https://dainsightsolutions.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mercadofinanciero}
              isBlog={false}
              title="Proyecto Predicciones del Mercado Financiero"
              description="En un mundo donde la conciencia sobre la importancia de las prácticas financieras responsables está en constante crecimiento, este proyecto se centra en impulsar la adopción de hábitos financieros sostenibles en la vida diaria de las personas. "
              ghLink="https://github.com/camillaneza/c16-106-n-data-bi"
              demoLink="https://finanalytica.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accidentesviales}
              isBlog={false}
              title="Proyecto Siniestros Viales en CABA"
              description="Proyecto de análisis de datos, con el fin de generar información que le permita a las autoridades locales tomar medidas para disminuir la cantidad de víctimas fatales de los siniestros viales. Para ello, se puso a disposición un conjunto de datos sobre homicidios en siniestros viales acaecidos en la Ciudad de Buenos Aires durante el periodo 2016-2021."
              ghLink="https://github.com/camillaneza/PI2_Siniestros_Viales"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={steam}
              isBlog={false}
              title="Proyecto MLOps Plataforma Steam"
              description="En este proyecto se trabajó sobre la plataforma de juegos Steam, desarrollando un rol de Data Engineer para lograr tener un MVP (Producto Mínimo Viable). En base a 3 conjuntos de datos iniciales, se desarrolló el correspondiente proceso de ETL (Extracción, Transformación y Carga) y de EDA (Análisis Exploratorio de Datos). Además, se realizó un análisis de sentimiento con PNL, y un modelo de aprendizaje automático, con un sistema de recomendación."
              ghLink="https://github.com/camillaneza/PI1_MLOps_Steam_Games"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;