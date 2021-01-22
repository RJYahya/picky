import React from 'react'
import { ADiv, Input, TagDiv, AtDiv,TDiv ,RaDiv} from './style'
import { connect } from 'react-redux'


class RatingExampleControlled extends React.Component {
    state = { price: 0 }

    handleChange = (e) => this.setState({ price: e.target.value })

    render() {
        const { price } = this.state

        return (
            <ADiv>
                <RaDiv>
                <h4>Price Range</h4>
                <hr></hr>
                
                    <div>Filter by price: {price}</div>
                    <Input
                        type='range'
                        min={0}
                        max={50}
                        value={price}
                        onChange={this.handleChange}
                    />
                    <br />
                </RaDiv>
                <TDiv>
                    <h2>Tags</h2>
                    <hr />
                    <AtDiv>
                        {console.log(this.props._catagory)}
                        {this.props._catagory && this.props._catagory.map(tag => <TagDiv>{tag.name}</TagDiv>)}
                    </AtDiv>
                </TDiv>
            </ADiv>


        )
    }
}

const mapStateToProps = state => {
    return {
        _catagory: state.catagory,
    }
}

export default connect(
    mapStateToProps,
    null
)(RatingExampleControlled)
