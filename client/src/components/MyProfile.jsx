import React from 'react'

function MyProfile() {
    return (
        <div className="myProfil">
            <div className="left">
                J
            </div>
            <div className="right">
                <div className="group">
                    <label htmlFor="">First Name</label>
                    <input type="text" value={"Jean Galant"} />
                </div>
                <div className="group">
                    <label htmlFor="">Last Name</label>
                    <input type="text" value={"Yombouno"} />
                </div>
                <div className="group">
                    <label htmlFor="">Username</label>
                    <input type="text" value={"jgigrec323"} />
                </div>
                <div className="group">
                    <label htmlFor="">Password</label>
                    <input type="password" value={"1234"} />
                </div>
                <button>Save my info</button>
            </div>
        </div>
    )
}

export default MyProfile