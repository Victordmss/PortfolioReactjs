import React from "react"
import styled from "styled-components";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/bundle';
import {OthelloProject, DaDProject, PortfolioProject, CookeatProject, TitleRow, ARS4Project, ARS5Project, PicassoProject} from "../components"
import {theme} from "../theme"

const Section = styled.div`
  height: 92vh;
  width : 100vw;
  display: flex;
  flex-direction: column;
  background: ${theme.gradient.background_inverted};
  justify-content: flex-start;
  align-items: center;
  gap: 2vh;

  @media (max-width: 768px) {
    height: 75vh;
  }
`;

const ProjectBox = styled.div`
  height: 70vh;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  padding-inline: 2vw;
  padding-block: 2vh;
  flex-direction: row;
  background: ${theme.colors.primary};
  border: 1px solid rgba(180, 180, 180, 0.12);
  box-shadow: #00479015 0px 0px 1rem 1rem;
  border-radius: 30px;
  overflow: hidden; 

  @media (max-width: 768px) {
    width: 75vw;
    padding-block: 1vh;
    height: fit-content;
    max-height: 60vh;
  }
`;

function Projects() {

    const data = [
        { component: <PicassoProject/>, color: "rgb(170, 113, 66)", gradient: "linear-gradient(to right,rgb(170, 113, 66) 0, rgba(203, 156, 117, 0.82) 15%, rgb(170, 113, 66) 25%)"},
        { component: <ARS4Project/>, color: "rgb(172, 14, 0)", gradient: "linear-gradient(to right,rgb(172, 14, 0) 0, rgba(166, 54, 44, 0.66) 15%, rgb(172, 14, 0) 25%)"},
        { component: <ARS5Project/>, color: "rgb(0, 20, 172)", gradient: "linear-gradient(to right,rgb(0, 20, 172) 0, rgba(62, 74, 170, 0.44) 15%, rgb(0, 20, 172) 25%)"},
        { component: <PortfolioProject/>, color: theme.colors.tertiary, gradient: "linear-gradient(to right, "+ theme.colors.tertiary +" 0, "+ theme.colors.tertiary_dark +" 15%, "+ theme.colors.tertiary +" 25%)"},
        { component: <OthelloProject/>, color: "rgb(10, 88, 4)", gradient: "linear-gradient(to right,rgb(10, 88, 4) 0, rgba(136, 175, 137, 0.85) 15%, rgb(10, 88, 4) 25%)"},
        { component: <DaDProject/>, color: "rgb(108, 201, 224)", gradient: "linear-gradient(to right, rgb(108, 201, 224) 0, rgba(227, 252, 252, 0.85) 15%, rgb(108, 201, 224) 25%)"},
        { component: <CookeatProject/>, color: "rgb(119, 9, 56)", gradient: "linear-gradient(to right,rgb(119, 9, 56) 0, rgba(175, 136, 145, 0.85) 15%, rgb(119, 9, 56) 25%)"},
        //{ component: <EDUTCProject />, color: "rgb(238,238,238)" },
        //{ component: <DAFourProject />, color: "rgb(255, 221, 0)" },
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