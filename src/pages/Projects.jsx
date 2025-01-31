import React from "react"
import styled from "styled-components";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/bundle';
import {OthelloProject, DaDProject, PortfolioProject, EDUTCProject, DAFourProject, CookeatProject, TitleRow} from "../components"
import {theme} from "../theme"


const Section = styled.div`
  height: 90vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${theme.colors.secondary};
`;

const ProjectBox = styled.div`
  margin-inline: 4rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: rgba(180, 180, 180, 0.28);
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
        { component: <OthelloProject />, color: "hsl(116, 91%, 18%)" },
        { component: <PortfolioProject />, color: "rgba(116, 10, 147, 0.62)" },
        { component: <DaDProject />, color: "hsl(192, 65%, 65%)" },
        { component: <CookeatProject />, color: "hsl(334, 86%, 25%)" },
        { component: <EDUTCProject />, color: "rgb(238,238,238)" },
        { component: <DAFourProject />, color: "hsl(52, 100%, 50%)" },
    ];

    const customSwiperStyles = `
      .myCustomSwiper {
        height: 500px;
      }
      
      .myCustomSwiper .swiper-pagination-bullet {
        height : 15px;
        width : 15px;
        background-color: ${theme.colors.tertiary};
      }
        
      ${data
      .map((item, index) => `
          .myCustomSwiper .swiper-pagination-bullet-active:nth-child(${index + 1}) {
              background-color: ${item.color};
          }
      `)
      .join("")}
`;

    return (
        <Section id="Projects">
            <style>{customSwiperStyles}</style>
            <TitleRow>
                PROJECTS
            </TitleRow>
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