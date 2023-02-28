# 170. The Upsert Operation

https://github.com/odziem/nasa-project

<details>
  <summary> 170. The Upsert Operation </summary>

-   `server/src/models/planets.model.js` 

```
const  { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');

const planets = require('./planets.mongo');

function isHabitablePlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
  }
  
function loadPlanetsData(){
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', async (data) => {
                if (isHabitablePlanet(data)){
                    savePlanet(data);
                }
            })
            .on('error', (err) => {
                console.log(err);
                reject(err);
            })
            .on('end', async () => {        
                const countPlanetsFound = (await getAllPlanets()).length;       
                console.log(`${countPlanetsFound} habitable planets found!`);
                resolve();
            });
    });
}

async function getAllPlanets () {
    return await planets.find({});
};

async function savePlanet(data) {
    try {
        await planets.updateOne({
            keplerName: data.kepler_name,
        }, {
            keplerName: data.kepler_name,
        }, {
            upsert: true,
        });
    } catch (err){
        console.error(`Could not save planet ${err}`);
    }
}

module.exports = {
    loadPlanetsData,
    getAllPlanets,
};
```  

-   `server/src/routes/planets.controller.js`   

```
const { getAllPlanets } = require('../../models/planets.model')

async function httpGetAllPlanets(req, res) {
    // res.status(200).json(planets); 
    return res.status(200).json(await getAllPlanets());
};

module.exports = {
    httpGetAllPlanets,
}
```

-   `server/src/models/planets.mongo.js`

```
const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    keplerName: {
        type: String,
        required: true,
    } 
});

// Connects planetSchema with the "planets" collection
module.exports = mongoose.model('Planet', planetSchema);
```

**Note:** update `client/src/pages/launch.js` to change the name `kepler_name` to `keplerName`  

-   `client/src/pages/launch.js`
```
import { useMemo } from "react";
import { Appear, Button, Loading, Paragraph } from "arwes";
import Clickable from "../components/Clickable";

const Launch = (props) => {
  const selectorBody = useMemo(() => {
    if (!Array.isArray(props.planets)) {
      return null; // or return a default value
    }
    return props.planets.map((planet) => (
      <option value={planet.keplerName} key={planet.keplerName}>
        {planet.keplerName}
      </option>
    ));
  }, [props.planets]);

  const today = new Date().toISOString().split("T")[0];

  return <Appear id="launch" animate show={props.entered}>
    <Paragraph>Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets.</Paragraph>
    <Paragraph>Only confirmed planets matching the following criteria are available for the earliest scheduled missions:</Paragraph>
    <ul>
      <li>Planetary radius &lt; 1.6 times Earth's radius</li>
      <li>Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11 times Earth's value</li>
    </ul>

    <form onSubmit={props.submitLaunch} style={{display: "inline-grid", gridTemplateColumns: "auto auto", gridGap: "10px 20px"}}>
      <label htmlFor="launch-day">Launch Date</label>
      <input type="date" id="launch-day" name="launch-day" min={today} max="2040-12-31" defaultValue={today} />
      <label htmlFor="mission-name">Mission Name</label>
      <input type="text" id="mission-name" name="mission-name" />
      <label htmlFor="rocket-name">Rocket Type</label>
      <input type="text" id="rocket-name" name="rocket-name" defaultValue="Explorer IS1" />
      <label htmlFor="planets-selector">Destination Exoplanet</label>
      <select id="planets-selector" name="planets-selector">
        {selectorBody}
      </select>
      <Clickable>
        <Button animate 
          show={props.entered} 
          type="submit" 
          layer="success" 
          disabled={props.isPendingLaunch}>
          Launch Mission ✔
        </Button>
      </Clickable>
      {props.isPendingLaunch &&
        <Loading animate small />
      }
    </form>
  </Appear>
};

export default Launch;
```

**from 163. Creating Mongoose Schema for Launches**
-   `server/src/models/launches.mongo.js`

```
const mongoose = require('mongoose');

const launchesSchema = new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,        
    },
    launcheDate: {
        type: Date,
        required: true,
    },
    mission: {
        type: String,
        required: true,
    },
    rocket: {
        type: String,
        required: true,
    },
    target: {
        type: String,
        required: true,
    },  
    customers: [ String ],
    upcoming: {
        type: Boolean,
        required: true,
    },  
    success: {
        type: Boolean,
        required: true,
        default: true
    },  
});

// Connects launchesSchema with the "launches" collection
module.exports = mongoose.model('Launch', launchesSchema);
```

</details>

<details>
  <summary> run deploy result </summary>

  - under project root run `npm run deploy`

<p align="center" >
    <img src="../imags/170_The-Upsert-Operation.png" width="90%" > 
</p> 

  -  goto `http://localhost:8000/`

  <p align="center" >
    <img src="../imags/170_The-Upsert-Operation_2.png" width="90%" > 
</p> 


</details>

<details>
  <summary> Section 12: Databases </summary>

  - [Codebase: s12_nasa-project-pm2](../src/s12_nasa-project-pm2/)

</details>

---

[Previous](./169_Finding-Documents.md) | [Next]()