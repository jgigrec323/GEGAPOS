import React from 'react'

function Tables() {
    return (
        <section className='tables'>
            <div className="top">
                <div className="floorsBtn">
                    <button>1st Floor</button>
                    <button>2nd Floor</button>
                    <button>3rd Floor</button>
                </div>
            </div>
            <div className="middle">
                <div className="tablesBySection">
                    <div className="sectionA">
                        <div className='singleTable'>
                            <span className="tableLoc">A1</span>
                            <span className="tableStatut">Reserved</span>
                            <span className="tableReservationTime">18:30</span>
                        </div>
                        <div style={{ borderLeft: "10px solid orange" }} className='singleTable'>
                            <span className="tableLoc">A2</span>
                            <span className="tableStatut">Checked-in</span>
                            <span className="tableReservationTime">17:30</span>
                        </div>
                    </div>
                    <div className="sectionB">
                        <div style={{ borderLeft: "10px solid white" }} className='singleTable'>
                            <span className="tableLoc">B1</span>
                            <span className="tableStatut">Free</span>
                            <span className="tableReservationTime">-</span>
                        </div>
                        <div className='singleTable'>
                            <span className="tableLoc">B2</span>
                            <span className="tableStatut">Reserved</span>
                            <span className="tableReservationTime">21:00</span>
                        </div>
                        <div className='singleTable'>
                            <span className="tableLoc">B3</span>
                            <span className="tableStatut">Checked-in</span>
                            <span className="tableReservationTime">17:30</span>
                        </div>
                        <div className='singleTable'>
                            <span className="tableLoc">B4</span>
                            <span className="tableStatut">Free</span>
                            <span className="tableReservationTime">-</span>
                        </div>
                    </div>
                    <div className="sectionC">
                        <div className='singleTable'>
                            <span className="tableLoc">C1</span>
                            <span className="tableStatut">Free</span>
                            <span className="tableReservationTime">-</span>
                        </div>
                        <div className='singleTable'>
                            <span className="tableLoc">C2</span>
                            <span className="tableStatut">Free</span>
                            <span className="tableReservationTime">-</span>
                        </div>
                        <div className='singleTable'>
                            <span className="tableLoc">C3</span>
                            <span className="tableStatut">Reserved</span>
                            <span className="tableReservationTime">18:00</span>
                        </div>
                    </div>
                </div>
                <div className="otherSections">
                    <div>Bar</div>
                    <div>Kitchen</div>
                    <div>Exit</div>
                </div>
            </div>
            <div className="bottom">
                <div className="tablesSum">
                    <span>Tables</span>
                    <div className="tablesLabels">
                        <div className="label">
                            <span style={{ backgroundColor: "white" }} className="labelColor"></span>
                            <span className="labelText">Free</span>
                            <span className="trait">|</span>
                            <span className="labelNum">6</span>
                        </div>
                        <div className="label">
                            <span className="labelColor"></span>
                            <span className="labelText">Reserved</span>
                            <span className="trait">|</span>
                            <span className="labelNum">9</span>
                        </div>
                        <div className="label">
                            <span className="labelColor" style={{ backgroundColor: "orange" }}></span>
                            <span className="labelText">Checked-in</span>
                            <span className="trait">|</span>
                            <span className="labelNum">13</span>
                        </div>
                    </div>
                </div>
                <div className="tablesProgressSum">
                    <span className="">
                        Tables: <span>12</span>/<span>18</span>
                    </span>
                    <div className="progressBar">
                        <div className="progressValue"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tables