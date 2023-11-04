
export const ContactList = ({ items, onDelete }) => {
  return (
    <PhonebookList>
      {items.map(item => {
        return (
          <PhonebookItem key={item.id}>
            <p>
              {item.name}: <PhonebookNumber>{item.number}</PhonebookNumber>
            </p>
            <PhonebookButton onClick={() => onDelete(item.id)}>
              Delete
            </PhonebookButton>
          </PhonebookItem>
        );
      })}
    </PhonebookList>
  );
};