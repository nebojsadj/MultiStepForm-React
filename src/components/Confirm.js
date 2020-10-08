import React from "react";
import { Link } from "react-router-dom";

function Confirm({ state }) {
  console.log(state);
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4">
          <h3 className="text-center">Step 3</h3>
          <ul className="list-group text-center">
            <li className="list-group-item mt-4">
              {`FirstName: ${state.firstName}`}
            </li>
            <li className="list-group-item">{`LastName: ${state.lastName}`}</li>
            <li className="list-group-item">{`Email: ${state.email}`}</li>
            <li className="list-group-item">
              {`Profession: ${state.profession}`}
            </li>
            <li className="list-group-item">
              {`WorkStatus: ${state.workStatus}`}
            </li>
            <li className="list-group-item">{`Phone: ${state.phone}`}</li>
          </ul>
          <Link to="/details" className="btn btn-secondary form-control mt-3">
            Back
          </Link>
          <Link to="/home" className="btn btn-warning form-control mt-3">
            Confirm
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
