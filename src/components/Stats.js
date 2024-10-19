export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your list ✌️</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const perc = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {perc === 100 ?
          "You got everything!! Ready to go 🛫" : ` 💼 You have ${numItems} items in your List, and you already packed ${numPacked} (${perc}%)`}
      </em>
    </footer>
  );
}
