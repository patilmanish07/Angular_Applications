const { response } = require('express');
const express = require('express');

const app = express();

app.listen(3000, Marvellous);

function Marvellous(request, response)
{
    console.log("Marvellous Server is started...");
}

app.get('/getBatches',MarvellousBatches);

function MarvellousBatches(request, response)
{
    response.json({
        "BatchName" : "Python",
        "Fees" : 12500
    });
}

app.get('/getAdminDetails', MarvellousAdmin);

function MarvellousAdmin(request, response)
{
    response.json(
        {
            "Mobile" : "7020713938",
            "Mail" : "Admin@marvellousinforsystems.com"
        }
    )
}

app.get('/Demo', (request, response) => {
    response.json({
        "Data" : "Marvellous"
    });
});