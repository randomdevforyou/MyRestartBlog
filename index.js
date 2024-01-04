const express = require("express");

const app = express();

app.use(express.static("public"), {
    "setHeaders": (res, path, stat) => {
        res.set("cache-control", "s-maxage=60")
    }
});

app.listen(3000, () => {
    console.log("Running server at 3000");
})

