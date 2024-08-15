const express = require("express");
//const path = require("path");
const cors = require("cors"); //need this to set this API to allow requests from other servers
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || "3000";

const dbUrl = "mongodb+srv://derynb22:q6Ywm2OLYiaC4t4e@portfolio.ms4acjp.mongodb.net/";
const client = new MongoClient(dbUrl);

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //need this line to be able to receive/parse JSON from request

//allow requests from all servers
app.use(cors({
  origin: "*"
}));

//API endpoints

/*
 Returns all projects
 */
app.get("/api/projects", async (request, response) => {
  let projects = await getProjects();
  response.json(projects); //send JSON object with appropriate JSON headers
});

/*
Returns all FullStack projects
*/
app.get("/api/FullStackProjects", async (request, response) => {
    let projects = await getFullStack();
    response.json(projects);
});

/*
 Returns all BackEnd projects
 */
 app.get("/api/BackEndProjects", async (request, response) => {
    let projects = await getBackEnd();
    response.json(projects); //send JSON object with appropriate JSON headers
  });

/*
 Returns all FrontEnd projects
 */
 app.get("/api/FrontEndProjects", async (request, response) => {
    let projects = await getFrontEnd();
    response.json(projects); //send JSON object with appropriate JSON headers
  });


/*
 Returns all Skills
 */
 app.get("/api/Skills", async (request, response) => {
    let skills = await getSkills();
    response.json(skills); //send JSON object with appropriate JSON headers
  });

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});


//MongoDB functions
async function connection() {
  await client.connect();
  let db = client.db("Portfolio"); //select Portfolio database
  return db;
}
/* Async function to retrieve all projects from projects collection. */
async function getProjects() {
  let db = await connection(); //await result of connection() and store the returned db
  var results = db.collection("Projects").find({}); //{} as the query means no filter, so select all
  let res = await results.toArray();
  return res;
}

/* Async function to retrieve all FULLSTACK projects from the projects collection */
async function getFullStack() {
    let db = await connection();
    var results = db.collection("Projects").find({"projectType":"Full-Stack"});
    let res = await results.toArray();
    return res;
}

/* Async function to retrieve all BACKEND projects from projects collection. */
async function getBackEnd() {
    let db = await connection(); //await result of connection() and store the returned db
    var results = db.collection("Projects").find({"projectType":"Back-End"}); //{} as the query means no filter, so select all
    let res = await results.toArray();
    return res;
  }

/* Async function to retrieve all FRONTEND projects from projects collection. */
async function getFrontEnd() {
    let db = await connection(); //await result of connection() and store the returned db
    var results = db.collection("Projects").find({"projectType":"Front-End"}); //{} as the query means no filter, so select all
    let res = await results.toArray();
    return res; 
  }
/* Async function to retrieve all DESIGN projects from projects collection */
async function getDesign(){
    let db = await connection();
    var results = db.collection("projects").find({"projectType":"Design"});
    let res = await results.toArray();
    return res;
}

/* Async function to retrieve all skills from portfolio collection. */
  async function getSkills() {
    let db = await connection(); //await result of connection() and store the returned db
    var results = db.collection("Skills").find({}); //{} as the query means no filter, so select all
    let res = await results.toArray();
    return res;
  }