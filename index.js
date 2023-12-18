import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { collection, collection2, collection3 } from './mongo.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/KIOSKS", (req, res) => {
  res.render("kiosk.ejs");
});

app.get("/Contact-us", (req, res) => {
  res.render("contact.ejs");
});

app.get("/Our-Works", (req, res) => {
  res.render("Ourworks.ejs");
});

app.get("/Signage", (req, res) => {
  res.render("signage.ejs");
});

app.get("/Vendorracks", (req, res) => {
  res.render("vendorracks.ejs");
});

app.get("/kioskform", (req, res) => {
  res.render("kioskform.ejs");
});
app.get("/About-Us", (req, res) => {
  res.render("About.ejs");
});
app.get("/signageform", (req, res) => {
  res.render("signageform.ejs");
});

app.post("/submitkiosk", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      address: req.body.address,
      interiorExterior: req.body.interiorExterior,
      length: req.body.length1,
      width: req.body.width,
      description: req.body.description,
    };

    await collection.insertMany(data);

    
    const queryResult = await collection.findOne(data);
    if (queryResult) {
      const message = "Your Order is placed successfully";
      return res.render("kioskformsubmit.ejs", { message });
    } else {
      console.error("Error querying the database");
      return res.status(500).send("Error querying the database");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error processing the request");
  }
});

app.post("/submitsignage", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      address: req.body.address,
      twodthreed: req.body.twodthreed,
      lighted: req.body.lighted,
      length: req.body.length1,
      width: req.body.width,
      description: req.body.description,
    };

    // Insert data into the database
    await collection2.insertMany(data);

    // Query the database to check if the data is present
    const queryResult = await collection2.findOne(data);

    if (queryResult) {
      const message = "Your Order is placed successfully";
      return res.render("signageformsubmit.ejs", { message });
    } else {
      console.error("Error querying the database");
      return res.status(500).send("Error querying the database");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error processing the request");
  }
});
app.post("/submitcontact", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      description: req.body.description,
    };

    // Insert data into the database
    await collection3.insertMany(data);

    // Query the database to check if the data is present
    const queryResult = await collection3.findOne(data);

    if (queryResult) {
      const message = "Your Order is placed successfully";
      return res.render("contactformsubmit.ejs", { message });
    } else {
      console.error("Error querying the database");
      return res.status(500).send("Error querying the database");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error processing the request");
  }
});
app.get("/admin@classicsignfab", async (req, res) => {
  try {
    // Query the database to retrieve all data
    const allData = await collection.find({});
    const allData1 = await collection2.find({});
    const allData2 = await collection3.find({});

    if (allData) {
      const message = "Data retrieved successfully";
      return res.render("admin.ejs", { message, allData , allData1 , allData2});
    } else {
      console.error("Error querying the database");
      return res.status(500).send("Error querying the database");
    }
  } catch (error) {
    console.error("Error processing the request:", error);
    return res.status(500).send("Error processing the request");
  }
});

app.listen(3500, () => {
  console.log("TCSF is running on port 3500");
});
