import s from './ContactList.module.scss';
const ContactListItem = ({ id, name, phone, onRemove }) => {
  return (
    <li>
      {name}: {phone}
      <button className={s.deleteNameBtn} onClick={() => onRemove(id)}>Delete</button>
    </li>
  );
};

const ContactsList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.contactList}>
      {contacts.map(contact => (
        <ContactListItem {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default ContactsList;
