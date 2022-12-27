export const ClickHandler = () => {
const clickHandler = (event) => {
console.log('click',event);
}

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}