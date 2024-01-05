import  { Fragment } from "react";
import "./productAddForm.scss";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductAddForm = () => {
  return (
    <Fragment>
      <div className="page-breadcrumb  d-none d-sm-flex align-items-center mb-3">
        <div className="breadcrumb-title pe-3">Product</div>
        <div className="ps-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item">
                <Link to="/">
                  <IoHomeOutline />
                </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Add New Product
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
              {" "}
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body p-4">
          <h5 className="card-title">Add New Product</h5>
          <hr />
          <div className="form-body mt-4">
            <div className="row">
              <div className="col-lg-8">
                <div className="border border-3 p-4 rounded">
                  <div className="mb-3">
                    <label className="form-label">Product Title</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputProductTitle"
                      placeholder="Enter product title"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="inputProductDescription"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product Images</label>
                    <input
                      id="image-uploadify"
                      type="file"
                      accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
                      multiple
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="border border-3 p-4 rounded">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Price</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputPrice"
                        placeholder="00.00"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Compare at Price</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputCompareatprice"
                        placeholder="00.00"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Cost Per Price</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputCostPerPrice"
                        placeholder="00.00"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Star Points</label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputStarPoints"
                        placeholder="00.00"
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Product Type</label>
                      <select className="form-select" id="inputProductType">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Vendor</label>
                      <select className="form-select" id="inputVendor">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Collection</label>
                      <select className="form-select" id="inputCollection">
                        <option></option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label">Product Tags</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputProductTags"
                        placeholder="Enter Product Tags"
                      />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button type="button" className="btn btn-primary">
                          Save Product
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductAddForm;
