export const ContactList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <p>
              {item.name}: <span>{item.number}</span>
            </p>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};
