import dynamicDevelopmentLLC from "./images/dynamicDevelopmentLLC.png"
import jeopardy from "./images/jeopardy.png"
import bountyHunter from "./images/bountyHunter.png"
import memeGenerator from "./images/memeGenerator.png"
import simulationRPG from "./images/simulationRPG.png"
import gradientCodeGenerator from "./images/gradientCodeGenerator.png"
import vacationSpots from "./images/vacationSpots.png"
import travelJournal from "./images/travelJournal.png"
import cssZenGarden from "./images/cssZenGarden.png"
import {FaHtml5} from "react-icons/fa"
import {FaCss3Alt} from "react-icons/fa"
import {TbBrandJavascript} from "react-icons/tb"
import {FaReact} from "react-icons/fa"
import {FaNodeJs} from "react-icons/fa"
import {SiMongodb} from "react-icons/si"
import mongoose from "./images/mongoose.png"
import {SiExpress} from "react-icons/si"
import {FaGitAlt} from "react-icons/fa"
import GCharts from "./images/GCharts.png"


export default [
    {
        id: 0,
        title: "Dynamic Development LLC",
        image: dynamicDevelopmentLLC,
        description: "This is a web app built from the ground up for financial consulting. It pulls numbers from a database and uses a custom schema for specific data points. The numbers are displayed on a graph using two selected dates to compare data points. The numbers can also be viewed in a table. Contains a customizable and dynamic graph. Currently being used by Dynamic Development LLC.",
        keyPoints: `Uses MongoDB to store data. 
        Schema was built with Mongoose. 
        Custom API connection. 
        Data can be manipulated in-app (add, delete, edit).`,
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <SiMongodb className="mongo-details"/> <img src={mongoose} className="mongoose-details"/>  <SiExpress className="express-details"/> <FaGitAlt className="git-details"/> <img src={GCharts} className="gCharts-details"/></> 
    },
    {
        id: 1,
        title: "Jeopardy!",
        image: jeopardy,
        description: "A remake of the popular Jeopardy! game. This uses a pre-existing API to connect to a database containing Jeopardy! questions and answers. The game allows for single player practice questions or a two player 1v1. Each question has the same point value that it had on TV, as well a running point total for each player.",
        keyPoints: `Uses axios to make API calls to Jeopardy! database.
        React Router navigates between pages.
        React Context is used to seamlessly access data accross components.`,
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <FaGitAlt className="git-details"/></>
    },
    {
        id: 2, 
        title: "Bounty Hunter",
        image: bountyHunter,
        description: "This was created to demonstrate the use of API and database connection. This web app is a Star Wars themed bounty tracker. The user is able to create a bounty target (first and last name), give an alive or dead status, declare the bounty amount, and choose between Jedi or Sith. Once added, the bounties are able to be deleted or edited. ",
        keyPoints: `Uses MongoDB to store data.
        Axios is used to make API calls to database.
        Schema was built with Mongoose.
        User can Post, Edit, and Delete.
        `,
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <SiMongodb className="mongo-details"/> <img src={mongoose} className="mongoose-details"/>  <SiExpress className="express-details"/> <FaGitAlt className="git-details"/></>
    },
    {
        id: 3,
        title: "Meme Generator",
        image: memeGenerator,
        description: "A group build website dedicated to memes. This web app sends requests to a meme API containing a list of meme pictures. The user is able to scroll through the list of pictures, select one, and then type a top and bottom line for it. The user is able to save a list below of edited memes.",
        keyPoints: `Makes HTTP requests using "fetch".
        Memes are saved in an array displayed as a list at the bottom of the web page.
        React useEffect is used to control data fetching.
        `,
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <FaGitAlt className="git-details"/></>
    },
    {
        id: 4,
        title: "Simulation  RPG",
        image: simulationRPG,
        description: "A Role Playing Game made using Node.js. and the readline module. Users use the terminal to give their information (name, fears, heroes), which is stored and later used as part of the simulation game. Prompts are given to continue on an adventure where the user will fight, run, and/or obtain winnings.",
        keyPoints: `"readline-sync" is used to communicate with the user through giving prompts and recording answers.
        Due to termianl use, console.log() is also used to communicate with user.
        All decisions/actions performed by the user involve conditionals.
        `,
        skillsUsed: <><TbBrandJavascript className="js-details"/> <FaNodeJs className="node-details" /> <FaGitAlt className="git-details"/></>
    },
    {
        id: 5,
        title: "Gradient Code Generator",
        image: gradientCodeGenerator,
        description: "A website for other coders. Here, the user can use two color pickers and an angle selector to create a color gradient. The color is displayed on the left of the screen. The code for the colors appears below the color display.",
        keyPoints: `Gives styling code for CSS.
        Includes -webkit and -moz styling (for Chrome, Safari, and Firefox).
        Website is fully dynamic. `,
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <FaGitAlt className="git-details"/></>
    },
    {
        id: 6,
        title: "Vacation Spots",
        image: vacationSpots,
        description: "This is a simple React app used to show Card Components. It displays different vacationing spots with average prices and best seasons to travel there. Cards rendered inline and responsive.",
        keyPoints: `Uses a hard-coded data file designed to easily add new spots.
        Data is mapped over in App file to render each card.
        `,
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <FaGitAlt className="git-details"/></>
    },
    {
        id: 7,
        title: "Travel Journal",
        image: travelJournal,
        description: "This was created to be used as an online travel journal. The user is able to code in locations, dates, description, and pictures. There is also a link for the location on google maps.",
        keyPoints: `Uses a hard-coded data file designed to easily add new travels.
        Data is mapped over in App file to render each travel section.
        `,
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <FaGitAlt className="git-details"/></>
    },
    {
        id: 8,
        title: "CSS Zen Garden",
        image: cssZenGarden,
        description: "A fully responsive front-end web site designed to perfectly mimic the CSS Zen Garden. This website is meant to demonstrate the power of CSS3 and what design can accomplish for a website.",
        keyPoints: `Responsize window sizing.
        Code includes several media queries to accomodate any size.
        Implements different fonts from an imported font kit.`,
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <FaGitAlt className="git-details"/></>
    }
]
