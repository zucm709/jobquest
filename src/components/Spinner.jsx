import React from 'react'
import  HashLoader from 'react-spinners/HashLoader'

const override = {
    display: 'block',
    margin:'100px auto'

}
const Spinner = ({ loading }) => {

  return (
         <HashLoader
        color='#4338ca'
        loading={loading}
        cssOverride={override}
        size={150}
      />
  )
}
export default Spinner
