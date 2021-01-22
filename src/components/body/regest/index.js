import React from 'react'
import { Div, Form, Option, SDiv, Select, Button, ADiv, H2, CDiv, P, P1, Input, TextArea } from './style'

class Regist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            url: '',
            openHours: '',
            closeHours: '',
            openDays: '',
            email: '',
            phone: '',
            selectedOption: '',
        };
    }
    render() {
        return (
            <CDiv>
                <Div>
                    <P>Home / Resturants Registration</P>
                </Div>
                <hr />
                <ADiv>
                    <Form>
                        <>
                            {console.log(this.state.subject)}
                            {console.log(this.state.url)}
                            {console.log(this.state.openHours)}
                            {console.log(this.state.closeHours)}
                            {console.log(this.state.email)}
                            {console.log(this.state.phone)}
                            {console.log(this.state.selectedOption)}
                        </>
                        <label>Subject*</label><br />
                        <Input type='text' placeholder='Johe'
                            onChange={
                                (e) => { this.setState({ subject: e.target.value }) }
                            }
                        ></Input><br />
                        <P1>We Will never share yor information </P1>
                        <label>Email Adress*</label><br />
                        <Input type='email' placeholder='Johe@gmail.com'
                            onChange={
                                (e) => { this.setState({ email: e.target.value }) }
                            }
                        ></Input><br />
                        <P1>We Will never share yor information </P1>
                        <label>Phone Number*</label><br />
                        <Input type='text' placeholder='1-(555)-555-5555'
                            onChange={
                                (e) => { this.setState({ phone: e.target.value }) }
                            }
                        ></Input><br />
                        <P1>We Will never share yor information </P1>
                        <label>Url*</label><br />
                        <Input type='text' placeholder='httip://Johe.com' onChange={
                            (e) => { this.setState({ url: e.target.value }) }
                        }
                        ></Input><br />
                        <P1>We Will never share yor information </P1>
                        <label>Open Hours*</label><br />
                        <Input type='text'
                            onChange={
                                (e) => { this.setState({ openHours: e.target.value }) }
                            }></Input><br />
                        <P1>We Will never share yor information </P1>
                        <label>Closing Hours*</label><br />
                        <Input type='text'
                            onChange={
                                (e) => { this.setState({ closeHours: e.target.value }) }
                            }
                        ></Input><br />
                        <P1>We Will never share yor information </P1>
                        <lable>Open Days</lable><br />
                        <Button>MON</Button>
                        <Button>TUE</Button>
                        <Button>WED</Button>
                        <Button>THUR</Button>
                        <Button>FRI</Button>
                        <Button>SAR</Button>
                        <Button>SUN</Button>

                        <lable>Example select</lable><br />
                        <Select>
                            <Option>SUN</Option>
                            <Option>MON</Option>
                            <Option>THUE</Option>
                            <Option>WED</Option>
                            <Option>THUR</Option>
                            <Option>FRI</Option>

                        </Select> <br />
                        <lable>Example textarea</lable><br />
                        <TextArea></TextArea><br />
                        <lable>File input</lable><br />
                        <input type='file'></input><br />
                        <Button>Submit</Button>

                    </Form>
                    <SDiv>
                        <H2>Registration is easy,fast and free. </H2>
                        <hr />
                        <img src="https://via.placeholder.com/400x300" />
                    </SDiv>
                </ADiv>
            </CDiv>
        )
    }
}

export default Regist