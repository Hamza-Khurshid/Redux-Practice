import { AddCounter, MinusCounter, ResetCounter } from '../action/MyCounterAction'

let initState = {
    counter: 0,
    name: 'Hamza'
}

function MyCounterRed( state = initState, action ) {

    switch (action.type) {
        case AddCounter:
        {
            let counter = initState.counter;
            return {
                ...state,
                counter: counter + 1
            }
            console.log(counter)
        }

        case MinusCounter:
        {
            let counter = initState.counter;
            return {
                ...state,
                counter: counter - 1
            }
        }

        case ResetCounter:
        {
            return {
                ...state,
                counter: 0
            }
        }
    
        default:
            return state;
            break;
    }

}

export default MyCounterRed;