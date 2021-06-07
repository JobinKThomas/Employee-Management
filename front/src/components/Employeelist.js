import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Employeelist extends React.Component
{
    state={
        employees : [],
        ufname: '',
        ulname: '',
        uposition: '',
        uid: ''
    }
    getEmployee = ()=>{
        axios.get('http://localhost:8000/')
        .then(res=>{
            console.log(res);
            this.setState({employees:res.data});
        })
    }
    componentDidMount = ()=>{
        this.getEmployee();
    }
    
    
    handleDelete = (id)=>{
        axios.delete(`http://localhost:8000/employee/${id}`)
        .then(res=>{
            console.log(res);
            window.location = '/';
        })
    }
    handleUpdate = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleModalUpdate =(e)=>{
        axios.put(`http://localhost:8000/employee/${this.state.uid}`,
        {efname:this.state.ufname,elname:this.state.ulname,position:this.state.uposition})
        .then(res=>{
            console.log(res);
            this.setState({ufname:'',ulname:'',uposition:''})
            window.location = '/';
        })
    }
    addEmployee = ()=>{

    }
    render()
    {
        return(
            <div class="container">
            <h2>Employee </h2> 
            <br/>
            <Link to='/add'>
            <button class="btn btn-primary "  >Add New Employee</button>
            </Link>
            <br/>   
            <br/>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Position</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        this.state.employees.map(employee=>(
      <tr key={employee._id}>
        <td>{employee.efname}</td>
        <td>{employee.elname}</td>
        <td>{employee.position}</td>
        <td>
        <div class="container" style={{display:'inline'}}>
                                    <button 
                                    type="button" 
                                    class="btn btn-warning " 
                                    data-toggle="modal" 
                                    data-target="#myModal" 
                                    data-toggle="tooltip"
                                    title="Update"
                                    onClick={()=>this.setState({ufname:employee.efname,ulname:employee.elname,uposition:employee.position,uid:employee._id})}>
                                    <span class="glyphicon">&#x270f;</span>
                                    </button>
                                    <button 
                                    style={{marginLeft:'20px'}} 
                                    onClick={()=>this.handleDelete(employee._id)} 
                                    class="btn btn-danger"
                                    data-toggle="tooltip"
                                    title="Delete">
                                    <span class="glyphicon">&#xe020;</span>
                                    </button>
                                    
                                    <div class="modal fade" id="myModal" role="dialog">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                    <h4 class="modal-title">UPDATE</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <input
                                                    onChange={(e)=>this.handleUpdate(e)} 
                                                    value={this.state.ufname} 
                                                    name="ufname" 
                                                    class="form-control" 
                                                    style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} 
                                                    placeholder="First Name"/>
                                                    <input 
                                                    onChange={(e)=>this.handleUpdate(e)} 
                                                    value={this.state.ulname} 
                                                    name="ulname" 
                                                    class="form-control" 
                                                    style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} 
                                                    placeholder="Last Name"/>
                                                    <input
                                                    onChange={(e)=>this.handleUpdate(e)} 
                                                    value={this.state.uposition} 
                                                    name="uposition" 
                                                    class="form-control" 
                                                    style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} 
                                                    placeholder="Position"/>
                                                </div>
                                                <div class="modal-footer">
                                                    <button class="btn btn-warning"
                                                    onClick={(e)=>this.handleModalUpdate(e)}>
                                                        UPDATE
                                                    </button>
                                                    <button type="button" 
                                                    class="btn btn-danger" 
                                                    data-dismiss="modal" 
                                                    onClick={()=>{this.setState({ufname:'',ulname:'',uposition:''})}}>
                                                        Close
                                                    </button>
                                                </div>
                                            </div>
      
                                        </div>
                                    </div>
                                </div>
        </td>

        {/* <td>
        <button 
                                    type="button" 
                                    class="btn btn-warning "
                                    
                                    >
                                        UPDATE
                                    </button>
                                    <button 
                                    style={{marginLeft:'20px'}} 
                                    onClick={()=>this.handleDelete(employee._id)} 
                                    class="btn btn-danger">
                                        DELETE
                                    </button>
                                    <button 
                                    style={{marginLeft:'20px'}} 
                                    class="btn btn-info">
                                        VIEW
                                    </button>
        </td> */}
      </tr>
       ))
    }
    </tbody>
  </table>
</div>
        )
    }
}
export default Employeelist;