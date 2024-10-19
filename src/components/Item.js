

export default function Item({ item, onDeleteItem, onToggelItem }) {
  return (
    <li>
      <input type="checkbox"
        value={item.packed}
        onChange={() => onToggelItem(item.id)} />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.description} {item.quantity} {item.packed}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
