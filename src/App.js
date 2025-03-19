import React from "react";

const tahoe_peaks = [
  { name: "Freel Peak", elevator: 10891 },
  { name: "Monument Peak", elevator: 10067 },
  { name: "Pyramid Peak", elevator: 9983 },
  { name: "Mt. Tallac", elevator: 9735 },
];

function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

export default function App() {
  return (
    <ul>
      <List
        data={tahoe_peaks}
        renderEmpty={<p>This list is empty</p>}
        renderItem={(item) => (
          <>
            {item.name} — {item.elevator.toLocaleString()}ft
          </>
        )}
      />
      {tahoe_peaks.map((peak, i) => (
        <li key={i}>
          {peak.name} - {peak.elevator.toLocaleString()}
        </li>
      ))}
    </ul>
  );
}
