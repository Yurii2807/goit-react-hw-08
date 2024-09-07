import { FaUserAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import css from "./Contact.module.css";

import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.div}>
      <p className={css.p}>
        <FaUserAlt />

        {contact.name}
      </p>
      <p className={css.p}>
        <FaPhoneVolume />
        {contact.number}
      </p>
      <button className={css.btn} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
