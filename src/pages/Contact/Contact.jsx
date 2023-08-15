import React, {useState} from "react"
import styled from "styled-components";
import LOGOGithub from './../../assets/Logos/logoGITHUBwhite.png'
import LOGOLinkedin from './../../assets/Logos/logoLINKEDIN.png'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const FirstColumn = styled.div`
  //background: #db2b39;
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
  //background: chartreuse;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
`;

const ContactContainer = styled.div`
  padding-bottom : 20px;
  border-radius: 30px;
  height: fit-content;
  width: 500px;
  background: rgba(180, 180, 180, 0.28);
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

const ContactTitle = styled.div`
  margin-top: 30px;
  width: 200px;
  background: linear-gradient(70deg, rgba(66, 5, 119, 0.73), rgba(89, 25, 143, 0.49));
  border: 2px inset rgba(108, 37, 169, 0.73);
  padding: 10px;
  margin-bottom: 10px ;
  font-size: 22px;
  text-align: center;
  height: max-content;
  border-radius: 15px;
  animation: 2s scaling infinite alternate ;

  @keyframes scaling {
    to {
      transform: scale(1.05);
    }
  }
`;

const Form = styled.form`
  width: 90%;
  //background: #db2b39;
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
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: black;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
  font-size: 20px;
  background: linear-gradient(70deg, rgba(66, 5, 119, 0.73), rgba(89, 25, 143, 0.49));
  border: none;

  &:hover {
    background-color: #683891;
    transform: scale(1.1);
  }
`;

function Contact() {
    const [formData, setFormData] = useState({
        Name: "",
        requestType: "",
        description: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <Section id="Contact">
            <FirstColumn>
               <IconNetwork url={LOGOGithub}/>
                <span className="darkmode-ignore"><IconNetwork url={LOGOLinkedin}/></span>
            </FirstColumn>
            <SecondColumn>
                <ContactContainer>
                    <ContactTitle>Contact me</ContactTitle>
                    <Form onSubmit={handleSubmit}>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <Label htmlFor="requestType">Request Type</Label>
                        <Select
                            id="requestType"
                            name="requestType"
                            value={formData.requestType}
                            onChange={handleInputChange}
                        >
                            <option value="">Select an option</option>
                            <option value="General">General Inquiry</option>
                            <option value="Support">Support Request</option>
                            <option value="Feedback">Feedback</option>
                        </Select>

                        <Label htmlFor="description">Description</Label>
                        <TextArea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows="4"
                        />

                        <Button type="submit">Send me !</Button>
                    </Form>
                </ContactContainer>
            </SecondColumn>
        </Section>
    )
}

export default Contact;