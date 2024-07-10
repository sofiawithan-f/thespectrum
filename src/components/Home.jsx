import React , {useRef, useState} from "react";
import "./index.css";

/*const song1 = {
    title: "buy a ticket, babe",
    waveType: "buy a ticket, babe.mp3",
    imageUrl: "/Sofia6389.jpg",
};
const song2 = {
    title: "In My Head",
    waveType: "in my head.mp3",
    imageUrl: "/Sofia6409.jpg",
}

const song3 = {
    title: "Go",
    waveType: "go.mp3",
    imageUrl: "Sofia6411.jpg",
};
const song4 = {
    title: "What a piece of shit that guy is, huh?",
    waveType: "what a piece of shit that guy is, huh_.mp3",
    imageUrl: "Sofia6416.jpg",
};*/
const Home = () => {

    return (
        <main>
            <div style = {{height: 100 }}></div>
            <div className = "page">
            <div class = "box box1">
                <p> Welcome! If you're seeing this message, that means this website is still a work in progress. Please bear with and enjoy some demos.</p>
            <h1>DEMOS</h1>
            <ul className = "demos">
             <li> buy a ticket, babe <br></br> <audio controls className  = "demos" src = "/buy a ticket, babe.mp3"></audio></li>
            <li>In My Head <br></br><audio controls id = "demos" src = "/in my head.mp3"></audio></li>
            <li> What a piece of shit that guy is, huh? <br></br>
            <audio controls src = "/what a piece of shit that guy is, huh_.mp3"></audio></li>
            <li>Go <br></br>
            <audio controls src = "/go.mp3"></audio></li>
      </ul>
            <p> More demos can be found <a href = "https://drive.google.com/drive/folders/1JGUkSgWMixZ_bo4Z-PabnqadfrS3Np9q?usp=sharing">here.</a><br></br><br></br></p>
        </div>
        </div>
        </main>
    );
};
export default Home