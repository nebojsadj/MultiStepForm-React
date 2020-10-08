import React from "react";
import { Link } from "react-router-dom";

function Confirm({ state }) {
  const { firstName, lastName, email, profession, workStatus, phone } = state;

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 offset-4">
          <h3 className="text-center">Step 3</h3>
          <ul className="list-group text-center">
            <li className="list-group-item mt-4">
              <h3>{`FirstName: ${firstName}`}</h3>
            </li>
            <li className="list-group-item">
              <h3>{`LastName: ${lastName}`}</h3>
            </li>
            <li className="list-group-item">
              <h3>{`Email: ${email}`}</h3>
            </li>
            <li className="list-group-item">
              <h3>{`Profession: ${profession}`}</h3>
            </li>
            <li className="list-group-item">
              <h3>{`WorkStatus: ${workStatus}`}</h3>
            </li>
            <li className="list-group-item">
              <h3>{`Phone: ${phone}`}</h3>
            </li>
          </ul>
          <Link to="/details" className="btn btn-secondary form-control mt-3">
            Back
          </Link>
          <Link to="/home" className="btn btn-primary form-control mt-3">
            Confirm
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
