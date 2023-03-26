import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
        title='Model S' 
        description='Order online for Touchless Delivery'
        backgroundImage='model-s.jpg'
        leftBtnText='Custom order'
        rightBtnText='Existing inventory'
        ></Section>
        <Section
         title='Model Y' 
         description='Order online for Touchless Delivery'
         backgroundImage='model-y.jpg'
         leftBtnText='Custom order'
         rightBtnText='Existing inventory'
        ></Section>
        <Section
         title='Model 3' 
         description='Order online for Touchless Delivery'
         backgroundImage='model-3.jpg'
         leftBtnText='Custom order'
         rightBtnText='Existing inventory'
        
        ></Section>
        <Section
         title='Model X' 
         description='Order online for Touchless Delivery'
         backgroundImage='model-x.jpg'
         leftBtnText='Custom order'
         rightBtnText='Existing inventory'
        ></Section>
        <Section
        title='Lowest cost Solar Panels in America' 
        description='Money-back gurantee'
        backgroundImage='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'>
        </Section>
        <Section
        title='Solar for new Roofs' 
        description='Solar Roof Costs Less Than a New Roog Plus Solar Panels'
        backgroundImage='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText='Learn more'>
        </Section>
        <Section
        title='Accessories' 
        description='Solar Roof Costs Less Than a New Roog Plus Solar Panels'
        backgroundImage='accessories.jpg'
        leftBtnText='shop now'>
        </Section>
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
     `