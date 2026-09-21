interface TaskPropTypes {
    name: string,
    isDone: boolean
}



export default function Task({ name, isDone }: TaskPropTypes) {

    let list;
    
    if(isDone){
        // list = <li>Done: {name}</li>
    }
    else{
        list = <li>Not Done: {name}</li>
    }
    return list;
}
// export default function Task({ name, isDone }: TaskPropTypes) {

//     // return isDone === true && <li>Completed: {name} </li> 
//     // return isDone === false && <li>Hurry up: {name} </li> 
//     return isDone === false || <li>done up: {name} </li> 
    
// }
// export default function Task({ name, isDone }: TaskPropTypes) {

//     // condition ? true : 
//     // const time = 5 > 10 ? 100 : 20;

//     return isDone === true ? <li>Completed: {name} </li> : <li>Pending: {name} </li>

//     // if(isDone === true){
//     //     return <li>Completed: {name} </li>
//     // }
//     // else{
//     //     return <li>Pending: {name} </li>
//     // }
// }


// export default function Task({ name, isDone } : TaskPropTypes) {

//     if(isDone === true){
//         return <li>Completed: {name} </li>
//     }
//     else{
//         return <li>Pending: {name} </li>
//     }

// }

// export default function Task({ name, isDone } : TaskPropTypes) {

//     if(isDone === true){
//         return <li>Completed: {name} </li>
//     }

//     return <li>Pending: {name} </li>
// }