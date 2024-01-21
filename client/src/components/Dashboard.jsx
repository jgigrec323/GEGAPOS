import React from 'react'
import BarGraph from './BarGraph';

function Dashboard() {
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Accepted Orders',
                data: [10, 15, 20, 12, 25, 18, 30], // Replace with your actual data
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };
    return (
        <section className="dashboard">
            <h1 className="compTitle">Dashboard</h1>
            <div className="top">
                <select name="dateSelection" id="dateSelection">
                    <option value="today">Jan 01, 2024</option>
                    <option value="yesterday">Hier</option>
                    <option value="lastWeek">Last Week</option>
                </select>
            </div>
            <div className="bottom">
                <div className="sumBlocks">
                    <div className="singleSum">
                        <div className="top">
                            <span className="mdi mdi-currency-usd"></span>
                        </div>
                        <div className="bottom">
                            <p>Revenue</p>
                            <p className="revenue">$1200.56</p>
                        </div>
                    </div>
                    <div className="singleSum">
                        <div className="top">
                            <span className="mdi mdi-receipt-text"></span>
                        </div>
                        <div className="bottom">
                            <p>Paid Orders</p>
                            <p className="paidOrders">198</p>
                        </div>
                    </div>
                    <div className="singleSum">
                        <div className="top">
                            <span className="mdi mdi-circle-multiple"></span>
                        </div>
                        <div className="bottom">
                            <p>Tip amount</p>
                            <p className="tipA">$120.56</p>
                        </div>
                    </div>
                    <div className="singleSum">
                        <div className="top">
                            <span className="mdi mdi-coffee-maker-check-outline"></span>
                        </div>
                        <div className="bottom">
                            <p>Dishes Sold</p>
                            <p className="dishesSold">227</p>
                        </div>
                    </div>
                </div>
                <div className="statsBlock">
                    <div className="todaysUpsale">
                        <div className="top">
                            <p>Today's upsale</p>
                            <a href="#">See all</a>
                        </div>
                        <div className="bottom">
                            <div className="singleUpsale">
                                <div className="left">
                                    <span className="mdi mdi-circle-multiple"></span>
                                </div>
                                <div className="right">
                                    <p className='upsaleName'>Roast Chicken</p>
                                    <p className="orderCount">Order: <span>120</span></p>
                                </div>
                            </div>
                            <div className="singleUpsale">
                                <div className="left">
                                    <span className="mdi mdi-circle-multiple"></span>
                                </div>
                                <div className="right">
                                    <p className='upsaleName'>Roast Chicken</p>
                                    <p className="orderCount">Order: <span>120</span></p>
                                </div>
                            </div>
                            <div className="singleUpsale">
                                <div className="left">
                                    <span className="mdi mdi-circle-multiple"></span>
                                </div>
                                <div className="right">
                                    <p className='upsaleName'>Roast Chicken</p>
                                    <p className="orderCount">Order: <span>120</span></p>
                                </div>
                            </div>
                            <div className="singleUpsale">
                                <div className="left">
                                    <span className="mdi mdi-circle-multiple"></span>
                                </div>
                                <div className="right">
                                    <p className='upsaleName'>Roast Chicken</p>
                                    <p className="orderCount">Order: <span>120</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="acceptedOrders">
                        <div className="top">
                            <div className="title">Accepted Orders</div>
                            <select name="periodSelection" id="periodSelection">
                                <option value="week">Week</option>
                                <option value="months">Month</option>
                                <option value="year">Year</option>
                            </select>
                        </div>
                        <div className="bottom" style={{}}>
                            <BarGraph data={data}></BarGraph>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard