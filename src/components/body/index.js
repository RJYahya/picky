import { AlDiv, Span, P, P1, Hr, TagDiv, ResDiv, ConDiv, TagSpan, Img, H4, FoDiv, H41, P4, Button, TiDiv } from './style'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchResturants, fetchCatagory, sendResturantsFailure } from '../redux/featuredResturants/resturantsAction'
import Header from '../header'
import Regist from './regest'
import Footer from '../Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



function ResturantsContainer({ _loading, _error, _resturants, _catagory, _fetchResturants, _fetchCatagory }) {

    useEffect(() => {
        _fetchResturants();
        _fetchCatagory();
    }, [])
    return (
        <>
            <P1>325 Resturant Was Found in <Span>New York , gaza, gaza--</Span></P1>
            <Hr />
            <TiDiv>
                <h2>Featured Resturants</h2>
                <TagDiv>
                    {_catagory && _catagory.map(cat => <TagSpan onClick={() => console.log(cat.name)}>{cat.name} </TagSpan>)}
                </TagDiv>
            </TiDiv>
            {_loading ? (
                <h2>Loading</h2>
            ) : _error ? (
                <h2>{_error}</h2>
            ) : (
                        <AlDiv>
                            <ResDiv>
                                {_resturants &&
                                    _resturants.map(resturants => {
                                        return (
                                            <ConDiv>
                                                <div><Img src="https://via.placeholder.com/95" /></div>
                                                <div>
                                                    <H4>{resturants.name}</H4>
                                                    <P>{resturants.description}</P>
                                                    <P> &#x2714; Min ${resturants.mealsMinPrice} &emsp;
                                   &#xf21c;{resturants.deliveryTime} &emsp; </P>
                                                </div>
                                            </ConDiv>
                                        )
                                    })}
                            </ResDiv>
                        </AlDiv>
                    )}
            <FoDiv>
                <H41>Add Your Restaurant</H41>
                <P4>Join the thousands of other restaurant who benefit from having their menus on <Span>FoodPicky directory</Span></P4>
                <Link to={'/rest'}>
                    <Button>Iam Resturants</Button>
                </Link>
                {/* <Switch >
                        <Route path="/rest">
                            <Regist />
                        </Route>
                    </Switch > */}

            </FoDiv>
        </>)
}

const mapStateToProps = state => {
    return {
        _resturants: state.resturants,
        _catagory: state.catagory,
        _loading: state.loading,
        _error: state.error
    }
}

const mapDispatchToProps = {

    _fetchResturants: fetchResturants,
    _fetchCatagory: fetchCatagory,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ResturantsContainer)