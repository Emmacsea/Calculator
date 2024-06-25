import style from './Calculator.module.css'

export const Calculator = ({
    onClickNum,
    onClickDel,
    onClickDivide,
    onClickMinus,
    onClickMultiply,
    onClickSum,
    onClickReset,
    onClickResult,
    displayResult
}) => {
    return (
        <div>
            <div id={style.container}>
                <div id={style.top}>
                    <h3>calc</h3>
                    <div id={style.theme}>
                        <h5>theme</h5>
                        <nav>
                            <ul id={style.num}>
                                <li className={style.num}>1</li>
                                <li className={style.num}>2</li>
                                <li className={style.num}>3</li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div id={style.displayresult}>
                    <p>{onNum}</p>
                    <p>{displayResult}</p>
                </div>

                <div id={style.calculator}>
                    <div id={style.cal}>
                        <div className={style.calnum}>
                            <button className={style.button} onClick={onClickNum} >7</button>
                            <button className={style.button} onClick={onClickNum} >8</button>
                            <button className={style.button} onClick={onClickNum} >9</button>
                            <button className={style.button} onClick={onClickDel} id={style.del}>del</button>
                        </div>

                        <div className={style.calnum}>
                            <button className={style.button} onClick={onClickNum} >4</button>
                            <button className={style.button} onClick={onClickNum} >5</button>
                            <button className={style.button} onClick={onClickNum} >6</button>
                            <button className={style.button} onClick={onClickSum} id={style.sum}>+</button>
                        </div>

                        <div className={style.calnum}>
                            <button className={style.button} onClick={onClickNum} >1</button>
                            <button className={style.button} onClick={onClickNum} >2</button>
                            <button className={style.button} onClick={onClickNum} >3</button>
                            <button className={style.button} onClick={onClickMinus} id={style.minus}>-</button>
                        </div>

                        <div className={style.calnum}>
                            <button className={style.button} onClick={onClickNum} >.</button>
                            <button className={style.button} onClick={onClickNum} >0</button>
                            <button className={style.button} onClick={onClickDivide} id={style.divide}>/</button>
                            <button className={style.button} onClick={onClickMultiply} id={style.multiply}>x</button>
                        </div>

                        <div id={style.btn}>
                            <button className={style.btn} onClick={onClickReset} id={style.reset}>reset</button>
                            <button className={style.btn} onClick={onClickResult} id={style.result}>=</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}