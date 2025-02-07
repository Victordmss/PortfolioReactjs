import React from "react"
import styled from "styled-components";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/bundle';
import {OthelloProject, DaDProject, PortfolioProject, EDUTCProject, DAFourProject, CookeatProject, TitleRow} from "../components"
import {theme} from "../theme"


const Section = styled.div`
  height: 92vh;
  width : 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
`;

const ProjectBox = styled.div`
  height: 70vh;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  flex-direction: row;
  background: ${theme.colors.primary};
  border: 1px solid rgba(180, 180, 180, 0.12);
  box-shadow: #00479015 0px 0px 1rem 1rem;
  border-radius: 40px;
  overflow: hidden;
  
  
`;

function Projects() {

    const data = [
        { component: <OthelloProject />, color: "hsl(116, 91%, 18%)", gradient: "linear-gradient(to right,hsl(116, 91%, 18%) 0, hsla(122, 20%, 61%, 0.85) 15%, hsl(116, 91%, 18%) 25%)"},
        { component: <PortfolioProject />, color: "rgba(116, 10, 147, 0.62)" },
        { component: <DaDProject />, color: "hsl(192, 65%, 65%)", gradient: "linear-gradient(to right, hsl(192, 65%, 65%) 0, hsla(180, 82%, 94%, 0.85) 15%, hsl(192, 65%, 65%) 25%)"},
        { component: <CookeatProject />, color: "hsl(334, 86%, 25%)" },
        { component: <EDUTCProject />, color: "rgb(238,238,238)" },
        { component: <DAFourProject />, color: "hsl(52, 100%, 50%)" },
    ];

    const customSwiperStyles = `
      .myCustomSwiper {
        height: 100%;
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
                            {React.cloneElement(item.component, { color: item.color , gradient: item.gradient})}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ProjectBox>
        </Section>
    )
}

export default Projects;