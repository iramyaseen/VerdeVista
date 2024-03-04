import { useState } from "react";
import styles from "./productcart.module.css";
import ProductUpdateModal from "../ProductUpdateModal/ProductUpdateModal";
import { imgBaseUrl } from "../../../axiosConfig";

const ProductCart = ({ data }) => {
  const [productUpdateModal, setProductUpdateModal] = useState(false);

  return (
    <>
      <div className={`${styles.product_cartbox} card`}>
        <img
          src={`${imgBaseUrl}/${data?.prd_img_path}`}
          className="card-img-top"
          alt="prd_img"
        />
        <div className="card-body">
          <h5 className="card-title f-bold">{data?.prd_name}</h5>
          <div>
            <div className="d-flex justify-content-between">
              <span>Order: 250</span>
              <span>Completed: 250</span>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <span
                className={styles.cart_button}
                onClick={() => setProductUpdateModal(true)}
              >
                Update
              </span>
            </div>
          </div>
        </div>
      </div>
      {productUpdateModal && (
        <ProductUpdateModal setShowModal={setProductUpdateModal} data={data} />
      )}
    </>
  );
};

export default ProductCart;
