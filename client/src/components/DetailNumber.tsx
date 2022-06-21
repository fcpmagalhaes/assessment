import { useLocation } from "react-router-dom";

export function DetailNumber() {
  let location: any  = useLocation();
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Detail Number</h2>
      <p>{location.state.id}</p>
      <p>{location.state.type}</p>
    </main>
  );
}