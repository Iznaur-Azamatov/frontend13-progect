import refresh from "../assets/images/refresh 1.png";

function Buttons({counter, setCounter}) {


    const plus = () => {
        setCounter(counter + 3)
       }
       const reset = () => {
        setCounter(0)
       }
       const minus = () => {
        if (counter > 0) {
            if (counter === 1) {
                setCounter(counter - 1)
            }else{
                setCounter(counter - 2)
            }
        }
       
       }
    
    return(
        <div className="container">
            <div className="main">
            <div className="main-buttons">
                <div className="btn-plus">
                    <button className="btn__values-plus" onClick={plus}>
                            +
                    </button>
                </div>
              
                    <button className="btn-refresh" onClick={reset}>
                            <img src={refresh} />
                    </button>
           
                <div className="btn-minus">
                    <button className="btn__values-minus" onClick={minus}>
                            -
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Buttons;