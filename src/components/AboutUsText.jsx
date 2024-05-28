import React from 'react'
import styled from 'styled-components'

const AboutUsTitle = styled.h2`
font-size:4rem;
font-family:'play',sans-serif;
width:100%;
color:#002155;
align-self:flex-start;
max-width:100%;
margin-bottom:2rem;
`
const AboutUsSubTitle1 = styled.h3`
font-size:1.2rem;
color:${props => props.theme.text};
margin-top: 3rem;
font-weight:600;
margin-bottom:3rem;
align-self:flex-start;
width:100%;
font-family:'montserrat',sans-serif;
`
const AboutUsSubTitle2 = styled.h3`
font-size:1.2rem;
color:${props => props.theme.text};
margin-top: 1rem;
font-weight:600;
margin-bottom:3rem;
align-self:flex-start;
width:100%;
font-family:'montserrat',sans-serif;
`
const AboutUsSubTitle3 = styled.h3`
font-size:1.2rem;
color:${props => props.theme.text};
margin-top: 1rem;
font-weight:600;
margin-bottom:3rem;
align-self:flex-start;
width:100%;
font-family:'montserrat',sans-serif;
`


function AboutUsText() {
  return (
    <>
    <AboutUsTitle>
        Про нас :)
    </AboutUsTitle>
    <AboutUsSubTitle1>
    "Фляндрівка" - це простір для творчості, 
    який відкриває свої двері всім охочим хто хоче творити
    своїми руками красу
    </AboutUsSubTitle1>
    <AboutUsSubTitle2>
     Студія занована у 2019 році та за цей час обзавелася
    майстрами які знаються як на гончарстві , так і на
    ліпці з глини й радо навчать цьому вас та вашу малечу.
    </AboutUsSubTitle2>
    <AboutUsSubTitle3>
     Ми радо допоможемо вам втілити ваші задуми в життя 
     та створити унікальний та неповторний посуд або 
     прикраси для дому своїми руками.
    
   
     Наші вироби обпалюються в гончарних печах, аби 
     зліплені вами предмети могли використовуватись у 
     повсякденному житті та нагадувати вам про чудовий
     досвід у створенні цієї краси.
   </AboutUsSubTitle3>
    </>
  )
}

export default AboutUsText