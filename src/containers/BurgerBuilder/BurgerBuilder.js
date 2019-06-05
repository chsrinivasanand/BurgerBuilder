import React,{Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Buger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTS_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat : 1.3,
    bacon: 0.7
}


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
        },
        totalPrice: 4
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount+1 ;

        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice+priceAddition ;

        const updatedIngredents = {
            ...this.state.ingredients
        };
        console.log("anand updateCount",updateCount);
        console.log("anand type",type);

        updatedIngredents[type] = updateCount;


        this.setState({totalPrice: newPrice,ingredients: updatedIngredents});

    }

    removeIngredientHandler = (type) =>{

    }

    render() {
        console.log(this.state.ingredients.salad)
        return(
            <Aux>
                <Buger ingredients={this.state.ingredients}/>
               <BurgerControls
                   indredientAdded = {this.addIngredientHandler} />
            </Aux>
        )
    }

}

export default BurgerBuilder;