import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 80px;
    color: white;
`

const Heading = styled.h1`
    text-transform: uppercase;
    text-align: center;
    font-size: 36px;
`
const ProjectCards = styled.div`
    width: 100%;
    height: 74vh;
    display: flex;
    justify-content: space-between;
`

const ProjectCard = styled.div`
    height: 600px;
    width: 450px;
    border: 1px solid white;
    background: url('https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
    background-size: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 8px;
`

const ProjectInfo = styled.div`
    background: linear-gradient(to top, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 100%);
    padding: 10px;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

const H2 = styled.h2`
    margin: 0;
    margin-bottom: 5px;
    width: 100%;
    display: flex;
`

const ProjectHeader = styled.div`

`

const Span = styled.span`
    font-weight: 700;
    color: #ffabdd;
    margin-left: auto;
`

const ProjectBody = styled.div`
    width: 100%;
`
const ProjectBtns = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
`

const Button1 = styled.button`
    width: 200px;
    color: black;
    border-radius: 50px;
    background-color: white;
    height: 38px;
    font-weight: 16px;
    cursor: pointer;
`

const Button2 = styled.button`
    width: 200px;
    background-color: black;
    border: 1px solid white;
    border-radius: 50px;
    color: white;
    height: 38px;
    font-weight: 16px;
    cursor: pointer;
`


const Projects = () => {
    return (
        <Container>
            <Heading>Projects</Heading>
            <ProjectCards>
                <ProjectCard>
                    <ProjectInfo>
                        <ProjectHeader>
                            <H2>Project Name <Span>2024</Span></H2>
                        </ProjectHeader>
                        <ProjectBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit rem doloribus repudiandae voluptate nobis reprehenderit? Aspernatur, id. Voluptatum hic, aperiam facere cum cupiditate et eos dolor deleniti laudantium totam.</ProjectBody>
                        {/* NOTE: MARQUEE GOES HERE */}
                        <ProjectBtns>
                            <Button1>Live Demo</Button1>
                            <Button2>Guthub</Button2>
                        </ProjectBtns>
                    </ProjectInfo>
                </ProjectCard>

                {/* 2 */}

                <ProjectCard>
                    <ProjectInfo>
                        <ProjectHeader>
                            <H2>Project Name <Span>2024</Span></H2>
                        </ProjectHeader>
                        <ProjectBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit rem doloribus repudiandae voluptate nobis reprehenderit? Aspernatur, id. Voluptatum hic, aperiam facere cum cupiditate et eos dolor deleniti laudantium totam.</ProjectBody>
                        {/* NOTE: MARQUEE GOES HERE */}
                        <ProjectBtns>
                            <Button1>Live Demo</Button1>
                            <Button2>Guthub</Button2>
                        </ProjectBtns>
                    </ProjectInfo>
                </ProjectCard>

                {/* 3 */}

                <ProjectCard>
                    <ProjectInfo>
                        <ProjectHeader>
                            <H2>Project Name <Span>2024</Span></H2>
                        </ProjectHeader>
                        <ProjectBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit rem doloribus repudiandae voluptate nobis reprehenderit? Aspernatur, id. Voluptatum hic, aperiam facere cum cupiditate et eos dolor deleniti laudantium totam.</ProjectBody>
                        {/* NOTE: MARQUEE GOES HERE */}
                        <ProjectBtns>
                            <Button1>Live Demo</Button1>
                            <Button2>Guthub</Button2>
                        </ProjectBtns>
                    </ProjectInfo>
                </ProjectCard>
            </ProjectCards>
        </Container>
    )
}

export default Projects