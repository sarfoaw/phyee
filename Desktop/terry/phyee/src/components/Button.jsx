import React from 'react'


//function Button(props) {
   //console.log(props)
 // return (
   // <div>
     // <button>
     //(props.name)
     // </button>
   // </div>
  //)
//}



import React from 'react'

function Button() {
  return (
    <div>
      <button>{this.props.name}</button>
    </div>
  )
}

export default Button


//export default Button
