import React from 'react'
import { Head, HeadContainer, Container, Slider, Title, P, Input, Button, Span, Div } from './style'
import logo from './foodPickyLogo.png'
import { Link } from "react-router-dom";


class Header extends React.Component {

    render() {
        return (
            <>
                <Head>
                    <Container>
                        <HeadContainer>
                            <img src={logo} margin={20} />
                            <Link to={'/home'}>Home</Link>
                            <Link to={'/check'}>Check</Link>
                        </HeadContainer>
                    </Container>
                </Head>
                <Slider>
                    <Container>
                        <Title> Order Delivary or Take-Out</Title>
                        <P>Find Resturant, specials and coupons for free</P>
                        <Input type="text" placeholder="I Would Like To eat" />
                        <Link to={'/search'}><Button>Search Food</Button></Link><br />
                        <Div><Span>1.</Span> Chose Location </Div>
                        <Div><Span>2.</Span> Order Food</Div>
                        <Div><Span>3.</Span> Delivay or Take out</Div>
                    </Container>
                </Slider>

            </>
        )
    }
}

export default Header;