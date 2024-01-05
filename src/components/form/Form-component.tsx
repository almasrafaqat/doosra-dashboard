import { Fragment } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const FormComponent = () => {
  return (
    <Fragment>
      <div className="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">Forms</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <Link to="/" style={{ color: "white" }}>
                  <IoHomeOutline />
                </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Input Group
              </li>
            </ol>
          </nav>
        </div>
        <div className="ms-auto">
          <div className="btn-group">
            <button type="button" className="btn btn-primary">
              Settings
            </button>
            <button
              type="button"
              className="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h6 className="mb-0 text-uppercase">Basic example</h6>
          <hr />
          <div className="card">
            <div className="card-body">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  @example.com
                </span>
              </div>
              <label className="form-label">Your vanity URL</label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3"></span>
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3"
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <span className="input-group-text">.00</span>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                />
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Server"
                  aria-label="Server"
                />
              </div>
              <div className="input-group">
                <span className="input-group-text">With textarea</span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FormComponent;
