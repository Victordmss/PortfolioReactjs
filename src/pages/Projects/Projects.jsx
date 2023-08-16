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
import ProjectIcon from "./../../assets/Icons/ICONProjects.png"



const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleRow = styled.h1`
  //background: #db2b39;
  padding-top: 30px;
  font-size: 74px;
  padding-bottom: 10px;
  height: 120px;
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;


const ProjectBox = styled.div`
  margin-inline: 7%;
  margin-block: 3%;
  margin-bottom: 6%;
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

const TitleIcon = styled.div`
  margin-left: 100px;
  margin-right: 20px;
  border-radius: 10px;
  height: 100px;
  width: 100px;
  background-image: url(${ProjectIcon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
        height: 490px;
      }
      
      .myCustomSwiper .swiper-pagination-bullet {
        height : 15px;
        width : 15px;
        background-color: rgba(239, 236, 236, 0.71);
      }
        
      .myCustomSwiper .swiper-pagination-bullet-active:nth-child() {
        background-color: rgba(238, 238, 238, 0.19); 
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
                <TitleIcon/>
                Projects
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