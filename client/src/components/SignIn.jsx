import React from 'react'

function SignIn() {
    return (
        <section className="signIn">
            <div className="left">
                <div className="singleLastUsers active">
                    <div className="profil">J</div>
                    <div className="username">Jean Galant</div>
                </div>
                <div className="singleLastUsers">
                    <div className="profil">J</div>
                    <div className="username">Jean Galant</div>
                </div>
                <div className="singleLastUsers">
                    <div className="profil">J</div>
                    <div className="username">Jean Galant</div>
                </div>
            </div>
            <div className="right">
                <p>Enter your pin</p>
                <input type="password" className="password" />
                <div className="passwordPad">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div></div>
                    <div>0</div>
                    <div><span class="mdi mdi-backspace"></span></div>
                </div>
            </div>
        </section>
    )
}

export default SignIn