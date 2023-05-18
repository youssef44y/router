import React from 'react'
import PropTypes from 'prop-types'; 
import './profil.css'
const Profile = ({name , lastName , bio , profession , handleName}) => {
  return (
    <div>
    <div  style={{color:"red",fontSize:"30px"}}>hello my name is {name} and my last name is  {lastName}<p className='p2'>my information {bio}</p>
    <p className='p2'>my profession { profession}</p>  </div>
    <button onClick={()=>handleName(name)}>click here</button>
    </div>
  )
}
Profile.defaultProps = {
  name : "youssef" ,
  lastName :" ouni ",
  // handleName: () => alert ("profil!")
}
Profile.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string
}

export default Profile