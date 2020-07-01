import React from "react";
import "./App.css";
import Timeline from "./components/Timeline";
import { Title, TimelineContainer } from "./styles";

function App() {
  return (
    <div>
      <Title>My Timeline</Title>

      <TimelineContainer>
        <Timeline />
      </TimelineContainer>
    </div>
  );
}

export default App;
