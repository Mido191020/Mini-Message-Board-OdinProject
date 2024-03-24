// const messages=require("../data/messages");
// exports.handelForm=(req,res)=>{
//     res.render("form",{title:"New Messages"});
// };
// exports.handelPost=(req,res)=>{
//     const user=req.body.author;
//     const  messageText=req.body.message;
//     const newMessage = {
//         text: messageText,
//         user: author,
//         added: new Date()
//     };

//     // Add the new message to the messages array
//     messages.push(newMessage);
//     res.redirect("/");
// };
// exports.getUser=(req,res)=>{
//     res.send("respond with a resource")
//   };
const messages = require("../data/messages");

exports.handelForm = (req, res) => {
    res.render("form", { title: "New Messages" });
};

exports.handelPost = (req, res) => {
    const user = req.body.name; // Accessing the 'name' field from the form
    const messageText = req.body.message; // Accessing the 'message' field from the form
    const newMessage = {
        text: messageText,
        user: user, // Using the 'user' variable instead of 'author'
        added: new Date()
    };

    // Add the new message to the messages array
    messages.push(newMessage);
    res.redirect("/");
};
