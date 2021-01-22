import React from 'react'
import { AlDiv, FirstDiv, SecondDiv, P, UL, Li, ThiredDiv,LiDiv } from './style'


class UpFooter extends React.Component {
    render() {
        return (
            <AlDiv>
                <FirstDiv>
                    <h2>pickey food</h2>
                    <P>Order Delivary or Take-Out</P>
                </FirstDiv>
                <SecondDiv>
                    <h2>About Us</h2>
                    <UL>
                        <Li>About Us</Li>
                        <Li>History</Li>
                        <Li>Our Team</Li>
                        <Li>We Are Hiring</Li>
                    </UL>
                </SecondDiv>
                <ThiredDiv>
                    <h2>Popular Location</h2>
                    <LiDiv>
                    <UL>
                        <Li>About Us</Li>
                        <Li>History</Li>
                        <Li>Our Team</Li>
                        <Li>We Are Hiring</Li>
                    </UL>
                    <UL>
                        <Li>About Us</Li>
                        <Li>History</Li>
                        <Li>Our Team</Li>
                        <Li>We Are Hiring</Li>
                    </UL>
                    </LiDiv>
                </ThiredDiv>
            </AlDiv>

        )
    }
}

export default UpFooter