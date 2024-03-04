import styles from "./users.module.css";
import avatar from "../../../assets/dashboard/user_profile.png";

const Users = () => {

  
  return (
    <div className="container py-5">
      <div className={`${styles.table_wrapper}`}>
        <table className={`${styles.table_container}`}>
          <thead className={`${styles.table_header}`}>
            <tr>
              <th>User Email</th>
              <th>Register</th>
              <th>Name</th>
              <th className="text-center">Action</th>
              <th className="text-center">Package</th>
            </tr>
          </thead>
          <tbody className={`${styles.table_body}`}>
            {[0, 1, 2, 3, 4, 5, 7, 8].map((item) => (
              <tr key={item}>
                <td className="d-flex align-items-center">
                  <img
                    src={avatar}
                    className={`${styles.user_avatar} me-3`}
                    alt="user"
                  />
                  williumalex@gmail.com
                </td>
                <td>Mar 23, 2023</td>
                <td>W. ALex</td>
                <td className="text-center">
                  <span className="f-bolder">Block</span>
                </td>
                <td className="text-center">
                  <span className={styles.package_name}>Advance</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
