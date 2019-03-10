export const AddCounter = 'ADD_COUNTER';
export const MinusCounter = 'MINUS_COUNTER';
export const ResetCounter = 'RESET_COUNTER';

export function addCounterAction() {
    return {
        type: AddCounter,
        data: 'something data Add'
    }
}

export function minusCounterAction() {
    return {
        type: MinusCounter,
        data: 'something data Minus'
    }
}

export function resetCounterAction() {
    return {
        type: ResetCounter,
        data: 'something data Reset'
    }
}