import express from 'express';

import nodemailer from 'nodemailer';


const emailRouter = express.Router();

emailRouter.post('/',async (req, res) =>{
    const bodypart = req.body;
    try {
        sendmail(bodypart)
        res.json("a mail is send")
    } catch (error) {
        res.json(error)
    }
    
})



const sendmail=(content)=>{
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:"jayanthimunusaamy@gmail.com",
            pass:"9487711567"
        }
    })
    const info = transporter.sendMail({
        from:"jayanthimunusaamy@gmail.com",
        to:content.mailId,
        subject:"Testing using node",
        text:"Hi "+content.name+","+
        "sorry you have failed for this process"+
        "regards, JM",
        date:new date()
    })

    //console.log("%s",info.messageId())
    console.log(nodemailer.getTestMessageUrl(info))
}


export default emailRouter;