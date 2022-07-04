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

export const sendMail = async (to: any, who: any) => {
    const transporter = await createTrans()
    const info: any = transporter.sendMail({
        from: '<henryjobsproject@gmail.com>',
        to: `${to}`,
        subject: "registro",
        text: `${who}, te encuentras registrado`
    })
    console.log("message sent", info.messageId)

    return 
}
