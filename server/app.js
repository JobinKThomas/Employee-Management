const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const Employee = require('./models/Employee')
const app = express()

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/employeelist')
mongoose.connection.on('connected',()=>{
    console.log('Database is connected');
})
mongoose.connection.on('error',()=>{
    console.log('error occured');
})

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    Employee.find()
    .exec()
    .then(result=>{
        console.log(result);
        res.status(200).send(result);
    })
    .catch(err=>{
        res.status(500).send(err);
    })
})
app.post('/employee',(req,res)=>{
    console.log(req.body.efname);
    console.log(req.body.elname);
    console.log(req.body.position);
    const employee = new Employee({
        _id : new mongoose.Types.ObjectId,
        efname: req.body.efname,
        elname: req.body.elname,
        position: req.body.position
    });
    employee.save()
    .then(result=>{
        console.log(result);
        res.status(200).json({msg:"successfully submitted"});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occured"});
    })
})
app.delete('/employee/:id',(req,res)=>{
    const id = req.params.id;
    Employee.remove({_id:id},(err,result)=>{
        if(err)
        {
            console.log(err);
            res.status(500).send('error occured');
        }
        else{
            res.status(200).json({msg:"Successfully deleted"});
        }
    })
})
app.put('/employee/:id',(req,res)=>{
    const efname = req.body.efname;
    const elname = req.body.elname;
    const position = req.body.position;
    const id = req.params.id;
    Employee.update({_id:id},{$set:{efname:efname,elname:elname,position:position}})
    .then(result=>{
        console.log(result);
        res.status(200).json({msg:"Successfully Updated"});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"error occured"});
    })
})
app.listen(8000,()=>{
    console.log('server was connected on port:8000')
})