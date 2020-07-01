import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  color: Pink;
`;

const TimelineContainer = styled.div`
display: grid;
  flex-direction: column;
  margin: 40px 0;
position: absolute;
content: '';
left: calc(50% - 2px);
width 4px;
height: 1000px;
background-color: pink;
`;

const TimelineItemStyle = styled.div`
  text-align: center;
  border: 3px double pink;
  padding: 10px;
  margin: 10px 0;
`;
const TimelineContainer2 = styled.div`
  background-color: pink;
`;
export { Title, TimelineContainer };
export { TimelineItemStyle, TimelineContainer2 };
