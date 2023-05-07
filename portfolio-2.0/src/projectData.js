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
        description: "test test test",
        keyPoints: "test test test",
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <SiMongodb className="mongo-details"/> <img src={mongoose} className="mongoose-details"/>  <SiExpress className="express-details"/> <FaGitAlt className="git-details"/></>
    },
    {
        id: 3,
        title: "Meme Generator",
        image: memeGenerator,
        description: "",
        keyPoints: "",
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <FaGitAlt className="git-details"/></>
    },
    {
        id: 4,
        title: "Simulation  RPG",
        image: simulationRPG,
        description: "",
        keyPoints: "",
        skillsUsed: <><TbBrandJavascript className="js-details"/> <FaNodeJs className="node-details" /> <FaGitAlt className="git-details"/></>
    },
    {
        id: 5,
        title: "Gradient Code Generator",
        image: gradientCodeGenerator,
        description: "",
        keyPoints: "",
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <FaGitAlt className="git-details"/></>
    },
    {
        id: 6,
        title: "Vacation Spots",
        image: vacationSpots,
        description: "",
        keyPoints: "",
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <FaGitAlt className="git-details"/></>
    },
    {
        id: 7,
        title: "Travel Journal",
        image: travelJournal,
        description: "",
        keyPoints: "",
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <TbBrandJavascript className="js-details"/> <FaReact className="react-details"/> <FaGitAlt className="git-details"/></>
    },
    {
        id: 8,
        title: "CSS Zen Garden",
        image: cssZenGarden,
        description: "",
        keyPoints: "",
        skillsUsed: <><FaHtml5 className="html-details"/> <FaCss3Alt className="css-details"/> <FaGitAlt className="git-details"/></>
    }
]
