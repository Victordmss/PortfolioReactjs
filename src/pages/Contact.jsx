import React, {useRef, useState} from "react"
import styled from "styled-components";
import LOGOGithub from '../assets/Logos/logoGITHUB.png'
import LOGOLinkedin from '../assets/Logos/logoLINKEDIN.png'
import {theme} from "../theme"

const Section = styled.div`
  height: 92vh;
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
  flex: 0.1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const FirstColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 200px;
  align-items: center;
`;

const IconNetwork = styled.div`
  height: 100px;
  width: 100px;
  cursor: pointer;
  background-image: url(${props => (props.url)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

const ContactContainer = styled.div`
  padding-block : 2rem;
  border-radius: 30px;
  height: fit-content;
  width: 500px;
  background: ${theme.colors.primary};
  border: 1px solid rgba(180, 180, 180, 0.12);
  box-shadow: #00479015 0px 0px 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  animation: floating 3s infinite ease alternate;

  @keyframes floating {
    to {
      transform: translateY(10px);
    }
  }
`;

const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: start;
  padding-inline: 20px
`;

const Label = styled.label`
  font-size: 18px;
`;

const Input = styled.input`
  font-size: 18px;
  color: black;
  font-weight: bold;
  background: ${theme.colors.secondary_transparent};
  width: 100%;
  padding: 10px;
  border: 0px;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  font-weight: bold;
  font-size: 15px;
  color: black;
  width: 100%;
  background: ${theme.colors.secondary_transparent};
  height: 120px;
  padding: 10px;
  border: 0px;
  border-radius: 5px;
  resize: none;
`;

const Select = styled.select`
  font-weight: bold;
  background: ${theme.colors.secondary_transparent};
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  border: 0px;
  border-radius: 5px;
  color: black;
  margin-bottom: 15px;
`;

const Button = styled.div`
  margin-top: 10px;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
  font-size: 20px;
  background: ${theme.gradient.secondary};
  transition: scale 0.1s ease-in-out;

  &:hover {
    scale: 1.1;
  }
`;

function Contact() {
    const ref = useRef();
    const [success, setSuccess] = useState(null);


    const [formData, setFormData] = useState({
        name: "",
        requestType: "",
        message: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {};

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
                <a href="https://www.linkedin.com/in/victor-demessance-65a9431b0/"  target="_blank" rel="noreferrer">
                    <span className="darkmode-ignore"><IconNetwork url={LOGOLinkedin}/></span>
                </a>
            </FirstColumn>
            <SecondColumn>
                <ContactContainer>
                    <Form onSubmit={handleSubmit} ref={ref}>
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
                            value={formData.description}
                            onChange={handleInputChange}
                            rows="4"
                        />

                        <Button type="submit">Send me !</Button>
                        {success &&
                            "The message has been sent. I'll get back to you soon"}
                    </Form>
                </ContactContainer>
            </SecondColumn>
            </FirstRow>
            <SecondRow>
                <span><i>Created by <b>Victor Demessance</b></i></span>
                <b>@All rights reserved</b>
            </SecondRow>
        </Section>
    )
}

export default Contact;