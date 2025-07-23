
const Counter = () => {

    let count = 0

    const increment = () => {
        count++
        console.log(count);

    }


    const descrement = () => {
        console.log("descrement");


    }


    return (
        <div className="content">
            <h1 className="heading">

                {count}
            </h1>

            <button className="btn plus" onClick={increment}>+</button>
            <button className="btn minus" onClick={descrement}>-</button>

        </div>
    )
}

export default Counter