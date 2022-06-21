import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { fetchNumbers } from '../services/companies';
import { Link, useLocation } from "react-router-dom";

interface PhoneNumber {
  company_id: number;
  type: string;
  id: string;
}

export function PhoneNumbers() {
  const [rawPhones, setRawPhones] = useState([]);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const params = useParams();
  let location: any  = useLocation();

  useEffect(() => {
    fetchNumbers().then(response => {
      setRawPhones(response.data);
    })
  }, []);

  useEffect(() => {
    if (rawPhones.length !== 0 ) {
      const filtered = rawPhones.filter((number : PhoneNumber) => {
        return number.company_id.toString() === params.id;
      })
      setFilteredPhones(filtered);
    }
    }, [params.id, rawPhones]);

  return (
    <main style={{ padding: "1rem 0" }}>
    <h2>{location.state}</h2>
    <table>
    <thead>
      <tr>
        <td>Number</td>
        <td>Type</td>
      </tr>
    </thead>
    <tbody>
      {filteredPhones.map((phone: PhoneNumber) => (
        <tr key={phone.id}>
          <td> 
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/numbers/${phone.id}`}
              state={phone}
              key={phone.id}
            > {phone.id}</Link>
          </td>
          <td>{phone.type}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </main>
  );
}