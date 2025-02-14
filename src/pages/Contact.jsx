import React, { useRef, useState } from "react";
import styled from "styled-components";
import LOGOGithub from '../assets/Logos/logoGITHUB.png';
import LOGOLinkedin from '../assets/Logos/logoLINKEDIN.png';
import { theme } from "../theme";
import emailjs from "emailjs-com"; // Assurez-vous que emailjs est bien installé

const Section = styled.div`
  height: 70vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FirstRow = styled.div`
  flex: 0.9;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SecondRow = styled.div`
  background: ${theme.gradient.secondary};
  color: white;
  font-weight: bold;
  padding-block: 2vh;
  flex: 0.1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const FirstColumn = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconNetwork = styled.div`
  width: min(10vw, 10vh);
  aspect-ratio: 1 / 1; 
  cursor: pointer;
  background-image: url(${props => props.url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition : scale 0.1s ease-in-out;

  &:hover {
    scale: 1.2;
  }
`;

const SecondColumn = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactContainer = styled.div`
  padding-block: 4vh;
  border-radius: 30px;
  height: fit-content;
  width: 40vw;
  background: ${theme.colors.primary};
  border: 1px solid rgba(180, 180, 180, 0.12);
  box-shadow: #00479015 0px 0px 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation: floating 3s infinite ease alternate;

  @keyframes floating {
    to {
      transform: translateY(10px);
    }
  }

  @media (max-width: 768px) {
    width: 80vw;
    padding-block: 3vh;
  }
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  align-items: start;
  padding-inline: 20px;
`;

const Label = styled.label`
  font-size: 1.5vw;

  @media (max-width: 768px) {
    font-size: 1.5vh;
  }
`;

const Input = styled.input`
  font-size: 1.5vw;
  color: black;
  font-weight: bold;
  background: ${theme.colors.secondary_transparent};
  width: 100%;
  padding-block: 2vh;
  padding-inline: 1vw;
  border: 0px;
  border-radius: 5px;

  @media (max-width: 768px) {
    font-size: 1.5vh;
  }
`;

const TextArea = styled.textarea`
  font-weight: bold;
  font-size: 1.5vw;
  color: black;
  width: 100%;
  background: ${theme.colors.secondary_transparent};
  height: 15vh;
  padding-block: 2vh;
  padding-inline: 1vw;
  border: 0px;
  border-radius: 5px;
  resize: none;

  @media (max-width: 768px) {
    font-size: 1.5vh;
  }
`;

const Select = styled.select`
  font-weight: bold;
  background: ${theme.colors.secondary_transparent};
  font-size: 1.5vw;
  cursor: pointer;
  width: 100%;
  padding-block: 2vh;
  padding-inline: 1vw;
  border: 0px;
  border-radius: 5px;
  color: black;
  margin-bottom: 2vh;

  @media (max-width: 768px) {
    font-size: 1.5vh;
  }
`;

const Button = styled.button`
  margin-top: 1vh;
  padding: 1vh 1.5vw;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
  font-size: 2vw;
  border: 0px;
  background: ${theme.gradient.secondary};
  transition: scale 0.1s ease-in-out;

  &:hover {
    scale: 1.1;
  }

  &:active {
    background: ${theme.gradient.secondary_transparent};
    scale: 1;
  }

  @media (max-width: 768px) {
    font-size: 2vh;
  }
`;

function Contact() {
    const ref = useRef();
    const [success, setSuccess] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        requestType: "",
        message: "", // Utilise 'message' ici pour rester cohérent
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_txtz9qn", 
            "template_q17gzx7", 
            formData,
            "bRAhh3LI5_aJoB2t3"
        )
        .then((response) => {
            console.log('Message sent successfully:', response);
            setSuccess(true); 
        })
        .catch((err) => {
            console.error('Error sending message:', err);
            setSuccess(false); 
        });
    };

    const optionStyle = {
        color: 'black',
        fontWeight: 'bold',
    };

    return (
        <Section id="Contact">
            <FirstRow>
                <FirstColumn>
                    <a href="https://github.com/Victordmss" target="_blank" rel="noreferrer">
                        <IconNetwork url={LOGOGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/victor-demessance-65a9431b0/" target="_blank" rel="noreferrer">
                        <IconNetwork url={LOGOLinkedin} />
                    </a>
                </FirstColumn>
                <SecondColumn>
                    <ContactContainer>
                        <Form onSubmit={handleSubmit} ref={ref} autoComplete="true">
                            <Input
                                placeholder="Full Name"
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <Label htmlFor="requestType">Who are you ?</Label>
                            <Select
                                id="requestType"
                                name="requestType"
                                value={formData.requestType}
                                onChange={handleInputChange}
                            >
                                <option value="Entreprise" style={optionStyle}>Company</option>
                                <option value="Particulier" style={optionStyle}>Individual</option>
                                <option value="Etudiant" style={optionStyle}>Student</option>
                            </Select>
                            <TextArea
                                placeholder="Write your message"
                                id="message"
                                name="message" 
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="4"
                            />
                            <Button type="submit">Send me !</Button>
                            {success === true && <p>The message has been sent. I'll get back to you soon</p>}
                            {success === false && <p>There was an error sending the message. Please try again.</p>}
                        </Form>
                    </ContactContainer>
                </SecondColumn>
            </FirstRow>
            <SecondRow>
                Created by Victor Demessance <br/><br/>
                @All rights reserved
            </SecondRow>
        </Section>
    );
}

export default Contact;
