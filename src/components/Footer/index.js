import React from 'react'
import { Div } from './style'
import UpFooter from './upfooter'
import DownFooter from './downFooter'

// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

// const images = importAll(require.context('./logos', false, '/\.png/'));

class Footer extends React.Component{

    render(){
        return(
            <Div>
                <UpFooter/>
                <DownFooter/>
            </Div>
        )
    }
}
export default Footer