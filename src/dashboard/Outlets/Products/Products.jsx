import ProductCart from "../../../components/ProductCart/ProductCart";
import styles from "./product.module.css";
import { BiPlus } from "react-icons/bi";
import first from "../../../assets/dashboard/1.png";
import second from "../../../assets/dashboard/2.png";
import third from "../../../assets/dashboard/3.png";
import fourth from "../../../assets/dashboard/4.png";
import five from "../../../assets/dashboard/5.png";
import BoxSlider from "../../../components/BoxSlider/BoxSlider";
import { useEffect, useState } from "react";
import ProductAddModal from "../../../components/ProductAddModal/ProductAddModal";
import ProductVariantAddModal from "../../../components/ProductVariantAddModal/ProductVariantAddModal";
import { NotificationAlert } from "../../../components/NotificationAlert/NotificationAlert";
import axiosInstance from "../../../../axiosConfig";
import { useOutletContext } from "react-router-dom";
const cartImgs = [first, second, third, second, fourth, five];

const Products = () => {
  const searchVal = useOutletContext();

  const [addProductVariantModal, setAddProductVariantModal] = useState(false);
  const [addProductModal, setAddProductModal] = useState(false);
  const [productVariants, setProductVariants] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async function getProductVariant() {
      setLoader(true);
      try {
        const res = await axiosInstance.get("/listProduct");
        if (res.data.status) {
          setProductVariants(res?.data?.data);
          setLoader(false);
        }
      } catch (error) {
        console.log(error);
        NotificationAlert(error.message, "warning");
        setLoader(false);
      }
    })();
  }, [addProductVariantModal]);


  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <BoxSlider />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex flex-lg-row flex-column justify-content-between align-items-center pe-3">
              <p
                className={`${styles.product_content} text-lg-start text-center f-bold`}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam, officia. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                nisi.
              </p>
              <select className={styles.selectProduct} name="productSelect">
                <option>Product</option>
              </select>
            </div>
            <div className="d-flex justify-content-between mt-lg-2 mt-5">
              <h4
                className={`f-bold ${styles.add_btn_heading}`}
                onClick={() => setAddProductModal(true)}
              >
                <span className={styles.add_btn}>
                  <BiPlus className={styles.plus_sambol} />
                </span>{" "}
                ADD NEW PRODUCT
              </h4>
              <h4
                className={`f-bold ${styles.add_btn_heading}`}
                onClick={() => setAddProductVariantModal(true)}
              >
                <span className={styles.add_btn}>
                  <BiPlus className={styles.plus_sambol} />
                </span>{" "}
                ADD PRODUCT VARIANT
              </h4>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <h1 className={`${styles.product_title} text-center f-bolder`}>
            Plants
          </h1>
          {!loader ? (
            productVariants &&
            productVariants
              ?.filter((item) =>
                item?.prd_name
                  .toLowerCase()
                  .includes(searchVal?.toLowerCase())
              )
              ?.map((data, i) => (
                <div key={i} className="col-lg-4 col-sm-6 mt-4 p-5">
                  <ProductCart data={data} />
                </div>
              ))
          ) : (
            <div
              className="spinner-border text-success mx-auto mt-5"
              role="status"
            >
              <span className="sr-only"></span>
            </div>
          )}
        </div>
      </div>
      {addProductVariantModal && (
        <ProductVariantAddModal setShowModal={setAddProductVariantModal} />
      )}
      {addProductModal && <ProductAddModal setShowModal={setAddProductModal} />}
    </>
  );
};

export default Products;
