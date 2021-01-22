import React from 'react'
import { connect } from 'react-redux'
import { FirstDiv, Form, Button, FFirstDiv, Form1, SecondDiv, Select, SFirstDiv, H2, H3, SuFirstDiv, Div, Span, CalDiv, P, Input } from './style'
import {sendResturants} from '../../redux/featuredResturants/resturantsAction'

class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info : {
            name: '',
            lastName: '',
            country: '',
            companyName: '',
            fullAddress: '',
            city: '',
            email: '',
            zip: '',
            phone: '',
            selectedOption: ''},
        };
        this.handleState=this.handleState.bind(this);
    }
handleState = (name , event) =>{
    this.setState(prevState => ({
        info: {
          ...prevState.info,
             name : event.target.value  
        
        }
      }))
      
}
    render() {
        return (
            <Form  onSubmit={
                e => {
                    e.preventDefault()
                    console.log(this.state.info.selectedOption)
                   
                }
            }>
                <h2>Cart summary</h2>
                <hr></hr>
                { console.log(this.state.info.country)}
                {console.log(this.state.info.name)}
                <Div>
                    <FirstDiv>
                        <SuFirstDiv>
                            <FFirstDiv>
                                <label>First Name*</label><br />
                                <Input type='text' placeholder='Johe' onChange={
                                    (e) => this.setState({...this.state.info, name: e.target.value})}
                                ></Input><br />
                                <label>Country*</label><br />
                                <Select
                                onChange={e => this.setState({info :{ country : e.target.value}})}
                                >
                                    <option>gaza</option>
                                    <option>gaaaza</option>
                                    <option>gazaaa</option>

                                </Select>
                            </FFirstDiv>
                            <SFirstDiv>
                                <label>Last Name*</label><br />
                                <Input type='text' placeholder='Doe' onChange={
                                    (e) => { this.setState({ info : {lastName: e.target.value} }) }
                                }></Input><br />

                                <label>Company Name</label><br />
                                <Input type='text' placeholder='Johe Doe' onChange={
                                    (e) => { this.setState({info :{ companyName: e.target.value} }) }
                                }></Input><br />
                            </SFirstDiv>
                        </SuFirstDiv>
                        {/* </FirstDiv> */}
                        <label>Full Address</label><br />
                        <Input type='text' placeholder='124.gaza' onChange={
                            (e) => { this.setState({ info : {fullAddress: e.target.value} }) }
                        }></Input>
                        <SuFirstDiv>
                            {/* <FirstDiv> */}
                            <FFirstDiv>
                                <label>City / state*</label><br />
                                <Input type='text' placeholder='Johe' onChange={
                                    (e) => { this.setState({ info: {city: e.target.value} }) }
                                }></Input><br />
                                <label>Email addree*</label><br />
                                <Input type='email' placeholder='fad@gmasl.cm' onChange={
                                    (e) => { this.setState({ info : {email: e.target.value} }) }
                                }></Input>
                            </FFirstDiv>
                            <SFirstDiv>
                                <label>Zip / Postal code*</label>
                                <Input type='text' placeholder='Doe' onChange={
                                    (e) => { this.setState({ info : {zip: e.target.value} }) }
                                }></Input><br />

                                <label>Phone*</label><br />
                                <Input type='text' placeholder='123 123 123' onChange={
                                    (e) => { this.setState({ info : {phone: e.target.value} }) }
                                }></Input>
                            </SFirstDiv>
                        </SuFirstDiv>
                    </FirstDiv>

                    <SecondDiv>
                        <H2>Cart Summary</H2><hr />
                        <CalDiv>
                            <H3>Cartotal</H3>
                            <Span>%29.00</Span>
                        </CalDiv>
                        <hr />
                        <CalDiv>
                            <H3>Shipping and Handling</H3>
                            <Span>%29.00</Span>
                        </CalDiv>
                        <hr />
                        <CalDiv>
                            <H3>Total</H3>
                            <Span>%29.00</Span>
                        </CalDiv>
                        <Form1>
                            <input type="radio" name="pay" value="delivary"
                                checked={this.state.info.selectedOption === "delivary"}
                                onChange={e => { this.setState({ info : {selectedOption: e.target.value} }) }} />
                            <label>payment on delivary</label>
                            <P> please send you street, town , umber and store and storepostcode</P>
                            <input type="radio" name="pay" value="paypal"
                                checked={this.state.info.selectedOption === "paypal"}
                                onChange={e => this.setState({ info : {selectedOption: e.target.value} })} />
                            <label>PayPal</label><br />
                            <Button >Pay now</Button>
                        </Form1>
                    </SecondDiv>
                </Div>
            </Form>
        )
    }
}
const mapDispatchToProps = {
    _sendResturants: sendResturants
}
export default connect(
    null,
    mapDispatchToProps
)(CheckOut)

