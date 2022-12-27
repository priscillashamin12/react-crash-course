// function Greet() {
//     return <h1>Hello</h1>
// }

// es6 arrow functions
//  export const Greet = (props) => 
//  <h1>{props.name}</h1>

 export const Greet = (props) => {
    return (
        <div> //react fragment
 <h1>{props.name}</h1>
 {props.children}
 </div>
    )
 }

// export default Greet;