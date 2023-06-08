const connect = require ("connect");
const { NOTFOUND } = require("dns");

const app = connect();

app.listen(3000);
console.log("App is running on http://localhost:3000");

x =11;
y=2;

function logger (req, res, next) {
    console. log(req.ur1);
    next() ;
}

function error (req, res, next) {
    res. setHeader ('Content-Type', 'text-plain');
    console.log("Error 404")
    console. log(req.ur1);
    res.end();
}



function add(req, res, next) {
    res. setHeader ('Content-Type', 'text-plain');
    result = x+y;
   res.write (x + " + " + y + " = "  + result);
    res. end();
}
function subtract(req,res, next) {
    res. setHeader ('Content-Type', 'text-plain');
    result = x-y;
    res. write (x + " - " + y + " = " + result);
    res. end();
}
function Multiply(req,res, next) {
    res. setHeader ('Content-Type', 'text-plain');
    result = x*y;
    res. write (x + " * " + y + " = " + result);
    res. end();
}
function Division(req,res, next) {
    res. setHeader ('Content-Type', 'text-plain');
    result = x/y;
    res. write (x + " / " + y + " = " + result);
    res. end();
}



app.use(logger);
app.use("/lab2Addition",add);
app.use("/lab2Subtract",subtract);
app.use("/lab2Multiply",Multiply);
app.use("/lab2Divide",Division);
app.use("/lab2error",error);