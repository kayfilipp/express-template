const express = require('express')
const path = require('path');
const PORT = process.env.PORT || 4000
const app = express();
//body parser
app.use(express.json())
//url encoded data
app.use(express.urlencoded({extended:false}))

//handle routing.
app.use('/',require('./routes/template.js'));

//express built in static folder functionality
//everything in the /public folder has routes sorted for it.
app.use(express.static(path.join(__dirname,'./ui')));

app.listen(PORT,function(){
    console.log(`app running on port ${PORT}`);
})