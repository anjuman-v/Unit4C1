const express = require("express");
const app = express();


app.use(logger);


app.get("/books", (req, res) => {
    res.send({ route: "/books" })
})

app.get("/libraries", checkPermission("librarian"), (req, res) => {
    res.send({ route: "/libraries", permission: req.role })
})


app.get("/authors", checkPermission("author"), (req, res) => {
    res.send({ route: "/authors", permission: req.role })
})


function logger(req, res, next) {
    console.log("I am logger woking for all three routes");
    next();
}

function checkPermission(role) {
    return function logger1(req, res, next) {
        if (role == "librarian") {
            req.role = true;
            return next();
        }
        else if (role == "author") {
            req.role = true;
            return next();
        }

    }
}

app.listen(3000, () => {
    console.log("server run on 3000 port");
})
