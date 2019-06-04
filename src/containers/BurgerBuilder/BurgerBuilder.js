import React,{Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Buger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    render() {
        return(
            <Aux>
                <Buger/>
                <div>Build Controls</div>
            </Aux>
        )
    }

}

export default BurgerBuilder;