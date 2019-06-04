import React,{Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Buger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {...props};
    // }

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        }

    }

    render() {
        return(
            <Aux>
                <Buger ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Aux>
        )
    }

}

export default BurgerBuilder;