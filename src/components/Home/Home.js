import React from 'react';

function  Home () {

    return (
        <div id="home">
            <div id = "main">
                <div id ="container1">
                    <div id = "div1">
                        <div className = "shield shieldsLeft" id = "shield1">
                            <img id = "img1" src ="/img/lock.png" height = "50px" width = "50px" alt="img-icons"></img>
                        </div>
                        <div className = "shield shieldsLeft" id = "shield2">
                            <img id = "img2" src = "/img/camera.png" height = "50px" width = "50px" alt="img-icons"></img>
                        </div>
                    </div>
                    <div id = "div2">
                        <div className = "shield shieldsRight" id = "shield4">
                            <img id = "img4" src ="/img/eye.png" height = "50px" width = "50px" alt="img-icons"></img>
                        </div>
                        <div className = "shield shieldsRight" id = "shield3">
                            <img id = "img3" src = "/img/bell.png" height = "50px" width = "50px" alt="img-icons"></img>
                        </div>
                    </div>
                </div>
                <div id = "container2">
                    <div id = "div3"></div>
                    <div id = "div4"></div>
                </div>
            </div>
        </div>
    );
}

export default Home;

