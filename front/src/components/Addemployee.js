import React from 'react'
import axios from 'axios'
class Addemployee extends React.Component {
    state = { 
        efname: '',
        elname: '',
        position: '',
     }
     handleChange = (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
     handleSubmit = ()=>{
        if(this.state.efname!='' && this.state.elname!='',this.state.position!='')
        {
            axios.post('http://localhost:8000/employee',this.state)
            .then(res=>{
                console.log('successful');
                this.setState({efname:'',elname:'',position:''});
                window.location='/';
            });
        }
    }
    render() { 
        return ( 
            <div class="container">
  <h2>Employee Management</h2>
  
        <form onSubmit={()=>this.handleSubmit()}>
                       <input 
                       required 
                       onChange={(e)=>this.handleChange(e)} 
                       name='efname' 
                       value={this.state.efname} 
                       style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'5px',marginTop:'20px'}} 
                       placeholder="First Name" 
                       class="form-control" 
                       />
                       <input 
                       required 
                       onChange={(e)=>this.handleChange(e)} 
                       name='elname' 
                       value={this.state.elname} 
                       style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'5px',marginTop:'20px'}} 
                       placeholder="Last Name" 
                       class="form-control" 
                       />
                       <input 
                       required 
                       onChange={(e)=>this.handleChange(e)} name='position' value={this.state.position} 
                       style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'5px',marginTop:'20px'}} 
                       placeholder="Position" 
                       class="form-control" 
                       />
                       <button 
                       style={{borderRadius:'10px',fontSize:'18px',fontFamily:'Cursive,sans-serif,Gugi',outline:'none',color:'white',backgroundColor:'#000066',marginLeft:'50px',marginTop:'20px',width:'100px'}} 
                       class="btn">
                           ADD
                        </button> 
                    </form>
        
     
  
</div>
         );
    }
}
 
export default Addemployee;