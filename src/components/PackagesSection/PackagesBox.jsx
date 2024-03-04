import { useNavigate } from "react-router-dom";
import styles from "./packages.module.css";

const PackagesBox = ({ data }) => {
  const navigate = useNavigate();


  const handleBuyPlan = () => {
    navigate("/checkout", { state: data });
  };

  return (
    <>
      <div className={`${styles.package_box} mx-auto`}>
        <div className={styles.package_box_head}>
          <span>{data?.category_name}</span>
          <h1>${data?.price}</h1>
          <p>
            {/* <input
                className="form-radio-input me-2"
                name="monthly"
                value="monthly"
                type="radio"
              />
            Monthly | {" "}
            <input
                className="form-radio-input me-2"
                name="monthly"
                value="monthly"
                type="radio"
              /> */}
            {data?.period}
          </p>
        </div>
        <div className={styles.package_box_services_list}>
          <ul className="px-0">
            {data?.list_products?.map((item) => (
              <li key={item?.id}>{item?.prd_name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.package_box_button}>
          <button className="my-3" onClick={handleBuyPlan}>
            Buy Plan
          </button>
        </div>
      </div>
    </>
  );
};

export default PackagesBox;
