// Ex 1 Using JSX
// const element = <h1 id="test" className="sample">Hello JSX!!</h1>;
// console.log("my jsx stats", element);
// ReactDOM.render(element, document.getElementById('root'));

// EX 2 Without using JSX i.e React.createElement()
// const element1 = React.createElement('h1', null, 'Hello JSX using method');
// ReactDOM.render(element1, document.getElementById('root'));

// // Ex 3 JSX using expression
// const pname = 'Hita';
// const pelement = <h2>Hello, MS.{pname}</h2>;
// ReactDOM.render(pelement, document.getElementById('root'));


// Ex 4 JSX with functions
// function Employee(user) {
//     return user.fname + user.lname;
// }

// const user = {
//     fname: 'Charlie',
//     lname: 'Smith'
// };

// const empDetails = <h1>Hello,{Employee(user)} </h1>;
// ReactDOM.render(empDetails, document.getElementById('root'));


// Ex 5 
// function Clock() {
//     let element = (
//         <div>
//             <h1>Hello Welcome</h1>
//             <h2>The Timings is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(Clock, 1000);



// Ex 6 Using React.createElement() with class & id name
// const jsxElement = React.createElement(
//     'h1',                               //type
//     { className: 'test', id: 'demo' }, //props.className
//     "Life is Beautiful!!"              //props.children
// );
// console.log("JSX Element is", jsxElement);

// ReactDOM.render(jsxElement, document.getElementById('root'));




// Ex 7 Creating multiple elements using React.createElement()
const ele = React.createElement('h1',
    null,
    React.createElement('p', null, 'Always stay positive'))
ReactDOM.render(ele, document.getElementById('root'));















