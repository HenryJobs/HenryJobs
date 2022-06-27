////pcmjcdzyfrgflexq
import nodemailer from "nodemailer";

export const createTrans = async () => {
    const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'gaerca123@gmail.com',
        pass: 'pcmjcdzyfrgflexq',
    }
})
return transport
}

export const sendMail = async () => {
    const transporter = await createTrans()
    const info: any = transporter.sendMail({
        from: '"funciona carajo" <gaerca123@gmail.com>',
        to: ["gaerca123@gmail.com"],
        subject: "nodemailer baby",
        html: "<b>estas doxeado ameo</b>"
    })
    console.log("message sent", info.messageId)

    return 
}
