import React from 'react'

function SystemConfig() {
    return (
        <div className="systemConfig">
            <div className="group">
                <label htmlFor="">Currency</label>
                <select name="currencySelection" id="currencySelection">
                    <option value="dollar">Dollars</option>
                    <option value="euro">Euro</option>
                    <option value="GNF">Guinean Franc</option>
                </select>
            </div>
            <div className="group">
                <label htmlFor="">Taxes Rates (%)</label>
                <input type="number" value={18} />
            </div>
        </div>
    )
}

export default SystemConfig