const express = require("express");

const app = express();

const port = 5000;

app.get("/api/customers", (req, res) => {

    const customers = [
        { id: 1, firstName: 'Shivansh', lastName: "Singh" },
        { id: 2, firstName: 'Tejasva', lastName: "Gupta" },
        { id: 3, firstName: 'Saurabh', lastName: "Yadav" }
    ];
    res.json(customers);
})


//listening to server
app.listen(port, () => console.log(`Server is running at port ${port}`));
