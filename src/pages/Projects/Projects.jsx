import React from "react"
import styled from "styled-components";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {OthelloProject} from "./OthelloProject";
import {DaDProject} from "./DaDProject";
import {PortfolioProject} from "./PortfolioProject";
import {EDUTCProject} from "./EDUTCProject";
import {DAFourProject} from "./DAFourProject";
import {CookeatProject} from "./CookeatProject";
import 'swiper/css/bundle';



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
  height: fit-content;

  @keyframes floating {
    to {
      transform: translateY(10px);
    }
  }
`;

function Projects() {

    const data = [
        {component : <OthelloProject/>},
        {component : <PortfolioProject/>},
        {component : <DaDProject/>},
        {component : <CookeatProject/>},
        {component : <EDUTCProject/>},
        {component : <DAFourProject/>},

    ];

    const customSwiperStyles = `
      .myCustomSwiper {
        height: 480px;
      }
        
      .swiper-pagination-bullet-active {
        background-color: rgba(238, 238, 238, 0.19); 
      }
`;

    return (
        <Section id="Projects">
            <style>{customSwiperStyles}</style>
            <Title>
                Projects
            </Title>
            <ProjectBox>
                <Swiper
                    className={"myCustomSwiper"}
                    modules={[Pagination]}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
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