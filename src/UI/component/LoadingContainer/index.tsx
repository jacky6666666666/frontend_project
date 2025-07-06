import Spinner from 'react-bootstrap/Spinner';

export default function LoadingContainer(){


  return(

    <Spinner animation="border" role="status">

      <span className="d-flex justify-content-center" >Loading...</span>

    </Spinner>


  )

}