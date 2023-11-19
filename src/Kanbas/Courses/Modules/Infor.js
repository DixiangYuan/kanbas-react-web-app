import { useParams } from "react-router";

function Infor() {
    const {moduleId} = useParams();
    return (
        <div >
            <h2>test</h2>
        </div>
    );
}
export default Infor;