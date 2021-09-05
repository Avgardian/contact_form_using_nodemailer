const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/contactform.html');
});

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.in",
        port: 465,
        secure: true, 
        auth: {
            user: "contact@entreship.in",
            pass: "EntreContact@18"
        }
    })

    const mailOptions = {
        from: "contact@entreship.in",
        to: "cmdlabz@gmail.in",
        subject: 'Test Message from '+ req.body.name,
        text: "Username: "+req.body.name  +"\n"+ "EmailID: "+req.body.email +"\n"+ "Address: "+req.body.address +"\n"+"Contact: " +req.body.contact +"\n"+"Message: "+req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }
        else{
            console.log("Email sent: " + info.response);
            res.send("success");
        }
    })
})

app.listen(PORT);