// const heading=React.createElement("h1",{id:"heading"},"Hello World!");//if u create smtg frm scratch then its REACT
// const root=ReactDOM.createRoot(document.getElementById("root"));//if u get smtg frm dom to create then its reactDOM
// root.render(heading);//root is the parent 
const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"this is namaste react"),
        React.createElement("h2",{},"I am h2 tag")
        ]
    ),
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag")
        ]
    )]
);
//this is an object
// console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));//converts the tag into a object using root
root.render(parent);//adds the object into the tag by converting the tag to a object
//replaces whatever is inside root with parent 


//the object(react element) gets converted into html which browser understands
//browser understands dom 