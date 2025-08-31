export function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <p>
          <em>Start adding items for your trip!! 🚀</em>
        </p>
      </footer>
    );

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <p>
        <em>
          {percentage === 100
            ? "You have packed everything! Ready to go ✈️"
            : `You have ${numItems} itmes on your list and you have already packed
          ${packedItems} (${percentage}%)`}
        </em>
      </p>
    </footer>
  );
}
