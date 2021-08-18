export default function logger(reducer) {
    return (prevState, action, args) => {
        const nextState = reducer(prevState, action, args)
        if (action){
            console.group(action)
            console.log('Prev State: ', prevState);
            console.log('Action Arguments: ', args);
            console.log('Next State: ', nextState);
        }

        console.groupEnd()
        return nextState
    }
}