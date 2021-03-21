import React, { useState } from 'react';
import List from './components/Lists';
import Data from './Data';

const App = () => {
  const [people, setPeople] = useState(Data);

  return (
    <>
      <main>
        <section className="card-box">
          <div className="d-flex justify-content-between align-items-center">
            <h3>{people.length} birth Today</h3>
            <button onClick={ () => {setPeople(Data)}}><i className="fas fa-sync"></i></button>
          </div>
          <div className="datalist-body">
            <List people={people} />
          </div>
          <button className="btn-primary" onClick={() => {setPeople([])}}>clear all</button>
        </section>
      </main>
    </>
  )
}
export default App;
