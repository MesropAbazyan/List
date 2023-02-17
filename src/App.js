import './App.css';
import React from 'react';

function App() {
        // return (
        //   <div className="App">
        //     JSX
        //   </div>
        // );

  const el1 = React.createElement('div', {}, 'elem1');
  const el2 = React.createElement('div', {}, 'elem2');
  const el3 = React.createElement('div', {}, 'elem3');
  const array = [el1, el2, el3];

  let friends = [
    {id: 1, firstName: 'Joe', lastname: 'Black', age: 30},
    {id: 2, firstName: 'Ann', lastname: 'Johnson', age: 29},
    {id: 3, firstName: 'Ron', lastname: 'Ray', age: 23},
    {id: 4, firstName: 'Mary', lastname: 'Roberts', age: 25},
  ];

        // const elements = friends.map(friend => {
        //   return <div>
        //       <h3>{friend.firstName} {friend.lastname}</h3>
        //       <p>Age: {friend.age}</p><hr/>
        //   </div>
        // });

        // return React.createElement('div', {}, [el1, el2, el3]);
  return (
    <div>
                        {/* <div>{[el1, el3, el2, el2]}</div><br/> */}
                        {/* <div>{array}</div> */}
                  {/* <div>
                    <h3>{friends[0].firstName} {friends[0].lastname}</h3>
                    <p>Age: {friends[0].age}</p>
                  </div><hr/> */}
                  {/* <div>
                    <h3>{friends[3].firstName} {friends[3].lastname}</h3>
                    <p>Age: {friends[3].age}</p>
                  </div><hr/> */}
            {/* {elements} */}
      {
        friends.map(friend => {
          return <div key={friend.id}>
              <h3>{friend.firstName} {friend.lastname}</h3>
              <p>Age: {friend.age}</p><hr/>
          </div>
        })
      }
    </div>
  )
}

export default App;
