import { Link } from "react-router";

function NotFoundPage(){
  return (
    <div className="h-screen w-max flex justify-center items-center m-auto">
        <div className="wrapper text-center">
          <h1 className="text-8xl">404</h1>
          <h1 className="text-4xl">Ooops  Where You Going </h1>
          <Link to="/" className="">Index Page</Link>
        </div>
    </div>
  ) 
}

export default NotFoundPage;