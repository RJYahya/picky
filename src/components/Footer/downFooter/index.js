import React from 'react'
import bitcoin from '../logos/bitcoin.png'
import mastro from '../logos/maestro.png'
import master from '../logos/mastercard.png'
import paypal from '../logos/paypal.png'
import strip from '../logos/stripe.png'
import { AlDiv, FirstDiv, Img, SecondDiv, ThiredDiv, P,Span,Span2 } from './style'


class DownFooter extends React.Component {
    render() {
        return (
            <AlDiv>
                <FirstDiv>
                    <h2>Payments Methods</h2>
                    <Img src={bitcoin} />
                    <Img src={mastro} />
                    <Img src={master} />
                    <Img src={paypal} />
                    <Img src={strip} />
                </FirstDiv>
                <SecondDiv>
                    <h2>Address</h2>
                    <P>Concepts desgin of online food order and delivery, planned as returants directory</P>
                    <Span>phone: </Span> <Span2>080 000012 222</Span2>
                </SecondDiv>
                <ThiredDiv>
                    <h2>Adddition informations</h2>
                    <P>Join thousands of other returants who benifit from having thier menu on TakeOff</P>
                </ThiredDiv>
            </AlDiv>

        )
    }

}
export default DownFooter;