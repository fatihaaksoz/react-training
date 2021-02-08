import React from 'react';
import ReactDom from 'react-dom';



//Class yazimi 

// class App extends React.Component{
//     render(){
//         return <p>Benim Adim ss</p>;
//     }
// }

//************************************************* 

//Function yazimi

// function App(){
//     return <p>Benim Adim </p>;
// }

//************************************************* 

//JSX

// const names = ["Jale", "Mehmet", "Sinan"];

// function App() {
//     return (
//         // JSX ifadeleri tek bir ana elementin icinde olmalidir. 

//         <div>
//             {names.map(name => <h1>{name}</h1>)}

//             <h2>Fatih</h2>

//         </div>

//         //<h2>Fatih</h2> Yorum satirini kaldirdigimiz anda hata verecektir. Cunku jsx ifadeleri tek bir ana elementte olmalidir.
//     );
// }


//************************************************* 

// JSX de nasil sytle verilir.

function App() {
    return (
        //JSX de elementlere 1 idli buttondaki gibi sytle verilemez. Dogru olan id 2 deki gibidir.
        <div>
            
            {/* <button id="1" type="button" style="padding: 10px; color: white; background-color: red">Button</button> */}

            <button type="button" style={{padding:'10px',color:'white', backgroundColor:'red'}}>Button</button>

        </div>
    );
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);