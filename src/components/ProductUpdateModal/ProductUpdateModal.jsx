import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosConfig";
import { useSelector } from "react-redux";
import { NotificationAlert } from "../NotificationAlert/NotificationAlert";

const ProductUpdateModal = ({ setShowModal, data }) => {
  const user = useSelector((state) => state.data);
  const token = useSelector((state) => state?.data?.data);
  const [categories, setCategories] = useState([]);
  const [productField, setProductField] = useState({
    prd_name: data?.prd_name,
    cat_id: "",
    prd_img: "",
    user_id: user?.additional?.id,
  });

  const handleProductInputs = (e) => {
    setProductField({ ...productField, [e.target.name]: e.target.value });
  };

  const handleProductImg = (e) => {
    setProductField({ ...productField, ["prd_img"]: e.target.files[0] });
  };
  
  const onSumbitProduct = async (e) => {
    e.preventDefault();
    console.log(productField, "xxx", token);
    if (productField.prd_name && productField.user_id) {
      const formData = new FormData();
      formData.append("prd_name", productField?.prd_name);
      formData.append("cat_id", productField?.cat_id);
      formData.append("prd_img_path", productField?.prd_img);
      formData.append("user_id", productField?.user_id);
      try {
        const res = await axiosInstance.post("/addProduct", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            // "Authorization": `Bearer ${token}`,
          },
        });
        NotificationAlert(res?.data?.data, "success");
        console.log(res, "product add!");
        setShowModal(false);
      } catch (error) {
        NotificationAlert(error?.response?.data?.message, "warning");
        console.log(error);
      }
    } else {
      NotificationAlert("All Feilds Required!", "warning");
    }
  };

  // all category..
  useEffect(() => {
    (async function () {
      try {
        const res = await axiosInstance.get("/listCategory-user");
        if (res.status) {
          setCategories(res.data.data);
        }
      } catch (error) {
        console.log(error.message);
        NotificationAlert(error?.message, "warning");
      }
    })();
  }, []);

  return (
    <div className="modal_wrapper">
      <div className="modal_box">
        <div className="modal_head d-flex justify-content-center">
          <h2 className="f-bold">UPDATE PRODUCT</h2>
          <span className="modal_close_btn" onClick={() => setShowModal(false)}>
            X
          </span>
        </div>
        <form className="mt-1 modal_form ">
          <input
            type="text"
            className="form-control mb-3"
            name="prd_name"
            value={productField.prd_name}
            onChange={handleProductInputs}
          />
          <input
            type="file"
            accept="image/png,image/jpeg"
            placeholder="Product Image"
            className="form-control mb-3"
            name="prd_img"
            onChange={handleProductImg}
          />

          <select
            name="cat_id"
            defaultValue={"DEFAULT"}
            onChange={handleProductInputs}
          >
            <option value={"DEFAULT"} disabled>
              Select Category
            </option>
            <option value={"DEFAULT"} disabled>
              ---------------------
            </option>
            {categories &&
              categories?.map((cat) => (
                <option key={cat?.id} value={cat?.id}>
                  {cat?.category_name}
                </option>
              ))}
          </select>

          <button className="modal_sumbit_btn mt-3" onClick={onSumbitProduct}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductUpdateModal;
