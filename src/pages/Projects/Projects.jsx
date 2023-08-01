import React from "react"
import styled from "styled-components";
import {Autoplay} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {OthelloProject} from "./OthelloProject";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  padding-top: 30px;
  font-size: 74px;
  padding-bottom: 10px;
  text-align: center;
`;

const ProjectBox = styled.div`
  margin-inline: 7%;
  margin-block: 3%;
  margin-bottom: 6%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: rgba(238, 238, 238, 0.19);
  border-radius: 40px;
  overflow: hidden;
  animation: floating 3s infinite ease alternate;

  @keyframes floating {
    to {
      transform: translateY(10px);
    }
  }
`;

function Projects() {

    const data = [
        {component : <OthelloProject/>},
    ];

    return (
        <Section id="Projects">
            <Title>
                Projects
            </Title>
            <ProjectBox>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    spaceBetween={100}
                    loop={true}
                    autoplay={{
                        delay: 8000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            {item.component}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ProjectBox>
        </Section>
    )
}

export default Projects;