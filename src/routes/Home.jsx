import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
              <Link to='/animals' >Animals</Link>
              <Link to='/birds'>Birds</Link>
        </>
    );
}
export default Home;


