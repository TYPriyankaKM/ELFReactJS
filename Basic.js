// // Step 4 Creating the React Element using JSX
// // const element = <h1>Hello Welcome to React JS Sessions!!</h1>;
// // ReactDOM.render(element, document.getElementById('root'));
// //-------------------------------------
// // const name = "priya";
// // const element1 = <h1>Hello,Ms{name} </h1>


// // function FormatUser(user) {
// //     return user.fname + user.lanme;
// // }

// // const user = {
// //     fname: 'Rithu',
// //     lanme: 'Kumari'
// // }
// // const userData = <h1>{FormatUser(user)}</h1>
// // ReactDOM.render(userData, document.getElementById('root'));


// // const ele = React.createElement(
// //     "h1", { className: 'Apps' }, "Hello JSX"
// // )



// // function clock() {
// //     const element = (
// //         <div>
// //             <h1>Hello, world!</h1>
// //             <h2>It is {new Date().toLocaleTimeString()}.</h2>
// //         </div>
// //     );
// //     // highlight-next-line
// //     ReactDOM.render(element, document.getElementById('root'));
// // }

// // setInterval(clock, 1000);



// // function Greeting(users) {
// //     if (users) {
// //         return <h1>Welcome {users.fname}</h1>
// //     }
// //     else {
// //         return <h2>Stranger</h2>
// //     }
// // }
// // ReactDOM.render(<Greeting fname="hita" />, document.getElementById('root'));


// const jsxElement = React.createElement(
//     'h1',
//     { className: 'sample' },
//     'JSX Object example'
// );
// console.log(jsxElement);

// ReactDOM.render(jsxElement, document.getElementById('root'));






function Employee() {
    return <h1>Hello Mohit</h1>;
}
ReactDOM.render(<Employee />, document.getElementById('root'));



















