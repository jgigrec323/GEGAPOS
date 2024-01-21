import React from 'react'

function Reservation() {
    return (
        <section className="reservations">
            <h1 className="compTitle">Reservations</h1>
            <div className="top">
                <div className="floorsBtn">
                    <button>1st Floor</button>
                    <button>2nd Floor</button>
                    <button>3rd Floor</button>
                </div>
                <button className="newReservation">New reservation</button>
            </div>
            <div className="bottom">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>10:00</th>
                            <th>11:00</th>
                            <th>12:00</th>
                            <th>13:00</th>
                            <th>15:00</th>
                            <th>16:00</th>
                            <th>17:00</th>
                            <th>18:00</th>
                            <th>19:00</th>
                            <th>20:00</th>
                            <th>21:00</th>
                            <th>22:00</th>
                            <th>23:00</th>
                            <th>00:00</th>
                            <th>01:00</th>
                            <th>02:00</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bar</td>
                            <td></td>
                            <td></td>
                            <td>
                                <div className="reservationBlock" style={{ backgroundColor: "#36a863" }}>
                                    <div className="reservantName">Jean Galant</div>
                                    <div className="persons">
                                        <span className="mdi mdi-account-multiple"></span>
                                        5
                                    </div>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>A1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>A2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <div className="reservationBlock">
                                    <div className="reservantName">jgigrec323</div>
                                    <div className="persons">
                                        <span className="mdi mdi-account-multiple"></span>
                                        1
                                    </div>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>A3</td>
                            <td></td>
                            <td colSpan={2}>
                                <div className="reservationBlock">
                                    <div className="reservantName">Jean</div>
                                    <div className="persons">
                                        <span className="mdi mdi-account-multiple"></span>
                                        2
                                    </div>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>


                    </tbody>
                </table>
            </div>


        </section>
    )
}

export default Reservation