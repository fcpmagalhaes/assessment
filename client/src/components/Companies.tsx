import { useState, useEffect } from 'react';
import { fetchCompany } from '../services/companies';
import { Link } from "react-router-dom";


interface Company {
  id: number;
  name: string;
  vatin: string;
}

export function Companies() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchCompany().then(response => {
        setCompanies(response.data);
    })
  }, []);

  return (

    <main style={{ padding: "1rem 0" }}>
      <h2>Companies</h2>

      <table>
        <thead>
          <tr>
            <td>Company name</td>
            <td>Vatin</td>
          </tr>
        </thead>
        <tbody>
          {companies.map((companie: Company) => (
            <tr key={companie.id}>
              <td> 
                <Link
                  style={{ display: "block", margin: "1rem 0" }}
                  to={`/companies/${companie.id}`}
                  key={companie.id}
                  state={companie.name}
                >{companie.name}</Link>
              </td>
              <td>{companie.vatin}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </main>
  );
}