import { Link } from "react-router-dom";
import Constants from "../api/Constants";

const Category = (props) => {
    const { catId, catName, catImage } = props.data
    return (
        <div class="col-sm-3">
            <div class="card">
                <img src={ Constants.IMAGE_URL+ catImage } alt="" className="card-top-image" />
                <div class="card-body">
                    <h5 class="card-title">{catName}</h5>

                    <Link to={"/products/"+ catId} class="btn btn-primary btn-block">Select</Link>
                </div>
            </div>
        </div>
    )
}
export default Category;