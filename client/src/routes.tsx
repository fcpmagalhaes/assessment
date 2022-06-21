import { Routes, Route } from "react-router-dom";

import { Companies } from './components/Companies';
import { PhoneNumbers } from './components/PhoneNumbers';
import { DetailNumber } from './components/DetailNumber';

export default function Routes1() {
    return (
      <Routes>
            <Route path="/" element={<Companies/>}/>
            <Route path="/companies/:id" element={<PhoneNumbers/>}/>
            <Route path="/numbers/:vatin" element={<DetailNumber/>}/>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>OOps! There's nothing here!</p>
                </main>
              }
            />
      </Routes>
    )
}
