import React from "react"
import styled from "styled-components";

const Section = styled.div`
  height: 10vh;
  scroll-snap-align: center;
`

const Container = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(to top, rgba(75, 26, 117, 0), rgba(75, 26, 117, 0.7));
  font-size: 14px;
  box-shadow: 0px -12px 10px 5px rgba(75, 26, 117, 0.7);
`;


function Credits() {
    return (
        <Section id="Credits">
            <Container>
                © 2023 Victor Demessance. All rights reserved.
            </Container>
        </Section>
    );
}

export default Credits;