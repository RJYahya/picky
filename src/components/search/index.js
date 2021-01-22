import React from 'react'
import { BiRestaurant, BiSearch } from 'react-icons/bi';
import RatingExampleControlled from './range/index'
import { ConDiv, SideDiv, TitleDiv, Span, CusDiv, ConsDiv } from './style';


class Search extends React.Component {

    render() {
        return (
            <>
            <p>Results so far</p><hr/>
                <ConDiv>
                    <SideDiv>
                        <ConsDiv>
                            <TitleDiv>
                                <h4>Choose Cusine</h4> <Span><BiRestaurant /></Span>
                            </TitleDiv>

                            <input
                                type="text"
                                id="search-input"
                                placeholder="Search Your Favorite Food"
                            />
                            <Span><BiSearch /></Span><hr />
                            <CusDiv>
                                <input type="radio" name="cus" />
                                <label>Soup and Salads</label><br /><hr />
                                <input type="radio" name="cus" />
                                <label>Seafood</label><br /><hr />
                                <input type="radio" name="cus" />
                                <label>Beverages</label><br /><hr />
                                <input type="radio" name="cus" />
                                <label>Appetizers</label><br /><hr />
                                <input type="radio" name="cus" />
                                <label>Barbecuing and Grilling	</label><br /><hr />
                                <div>
                                    <input type="radio" name="pay" />
                                    <label>Delivary	</label>
                                    <input type="radio" name="pay" />
                                    <label>TakeOut	</label>
                                </div>

                            </CusDiv>
                        </ConsDiv>
                        <RatingExampleControlled />
                    </SideDiv>
                </ConDiv>
            </>
        )
    }
}
export default Search;