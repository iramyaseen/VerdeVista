import { useEffect, useState } from "react";
import PackagesBox from "./PackagesBox";
import styles from "./packages.module.css";
import axiosInstance from "../../../axiosConfig";
import { NotificationAlert } from "../NotificationAlert/NotificationAlert";

const PackagesSection = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await axiosInstance.get("/listCatWithPrd");
        if (res.data.status) {
          setPackages(res?.data?.data);
          console.log(res.data.data);
        }
      } catch (error) {
        console.log(error);
        NotificationAlert(error.message, "warning");
      }
    })();
  }, []);

  return (
    <section className={`${styles.packages_section_container} py-5`}>
      <div className="container pt-5">
        <div className="row">
          {packages &&
            packages?.map((item) => (
              <div key={item?.id} className="col-xl-4 col-md-6 mb-5 mx-auto">
                <PackagesBox data={item} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
