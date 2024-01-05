const express = require("express");

const app = express();

app.use(express.static("public", {
    "setHeaders": (res, path, stat) => {
        res.set("cache-control", "s-maxage=60");
    }
 })
 
);

app.get("/someValue", (req, res) => {
    res.setHeader("cache-control", "s-maxage=600");
    res.status(410).send("Gone");
});

app.listen(3000, () => {
    console.log("Running server at 3000");
})

