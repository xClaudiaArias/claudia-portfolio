import React from 'react'
import styled from 'styled-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import CA from '../assets/images/CA.jpeg'
import { Instagram } from '@mui/icons-material';

const Container = styled.div`
    margin-top: 100px;
    color: white;
    /* border: 1px solid orange; */
    height: 85vh;
`

const Heading = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 36px;
    margin-bottom: 0;
    padding: 5px 0;
`

const SubHeading = styled.h2`
    text-align: center;
    font-size: 24px;
    font-weight: 300;
    margin: 0;
`

const Dividers = styled.div`
    display: flex;
    /* border: 1px solid green; */
    height: 60vh;
    padding: 20px 0;
    gap: 20px;
    justify-content: center;
    align-items: center;
`

const Left = styled.div`
    height: 450px;
`

const Right = styled.div`
    /* border: 1px solid pink; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    gap: 5px;
    height: 450px;
    width: 450px;
`

const Form = styled.form`
    width: 800px;
    display: flex;
    flex-direction: column;
`

const SocialLink = styled.a`
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
    padding: 5px;
    border-radius: 50px;
    cursor: pointer;
`;

const Input = styled.input`
    display: block;
    height: 40px;
    padding: 0 10px;
    font-size: 16px;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    margin-bottom: 5px;
    color: white;
    font-weight: 700;


    &:focus {
        outline: none;
    }
`

const Label = styled.label`
    margin-bottom: 20px;
`

const Textarea = styled.textarea`
    height: 250px;
    padding: 0 10px;
    font-size: 16px;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    margin-bottom: 5px;
    color: white;
    font-weight: 700;
    resize: none;

    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    width: 300px;
    background-color: white;
    color: black;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 50px;
    align-self: center;
    cursor: pointer;
`

const Pfp = styled.img`
    width: 150px;
    height: 150px;
    border: 1px solid white;
    border-radius: 50%;
    object-fit: cover;

`
const Socials = styled.div`
    /* border: 1px solid yellow; */
    width: 120px;
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
`


const Paragraph = styled.p`
    font-weight: 14px;
    /* border: 1px solid red; */
    width: 250px;
    text-align: center;
`

const Contact = () => {
    return (
        <Container>
            <Heading>Contact</Heading>
            <SubHeading>Let's get in touch...</SubHeading>

            <Dividers>
                <Left>
                    <Form>
                        <Input type="text" id="fullname"></Input>
                        <Label for="fullname">Your name</Label>

                        <Input type="email" id="email" required></Input>
                        <Label for="email">Email</Label>

                        <Textarea type="text" id="message" rows="5" cols="33"></Textarea>
                        <Label for="message">Message</Label>

                        <Button type="submit">Send me a message</Button>
                    </Form>
                </Left>
                <Right>
                    <Pfp src={CA} alt="Claudia Icon"></Pfp>
                    <Paragraph>Follow me on my socials as well to see what I am up to...</Paragraph>
                    <Socials>
                        <SocialLink href="#">
                            <LinkedInIcon style={{width: 24, height: 24, fill: 'white'}} />
                        </SocialLink>
                        <SocialLink href="#">
                            <FacebookIcon style={{width: 24, height: 24, fill: 'white'}} />
                        </SocialLink>
                        <SocialLink href="#">
                            <Instagram style={{width: 24, height: 24, fill: 'white'}} />
                        </SocialLink>
                        <SocialLink href="#">
                            <XIcon style={{width: 24, height: 24, fill: 'white'}} />
                        </SocialLink>
                    </Socials>
                </Right>
            </Dividers>
        </Container>
    )
}

export default Contact