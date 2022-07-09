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

export const sendMail = async (email: any) => {
    const transporter = await createTrans()
    const info: any = transporter.sendMail({
        from: '<henryjobsproject@gmail.com>',
        to: email,
        subject: "registro",
        text: `te encuentras registrado`
    })
    console.log("message sent", info.messageId)

    return 
}

export const sendPassword = async (email: any, password: any) => {
    const transporter = await createTrans()
    const info: any = transporter.sendMail({
        from: '<henryjobsproject@gmail.com>',
        to: email,
        subject: "contraseña",
        text: `tu contraseña es ${password}`
    })
    console.log("message sent", info.message)
    return
}

export const comment = async (to: any, who: any) => {
    const transporter = await createTrans()
    const info: any = transporter.sendMail({
        from: '<henryjobsproject@gmail.com>',
        to: `${to}`,
        subject: "han contestado tu publicación",
        text: `${who}, han contestado tu publicación`
    })
    console.log("message sent", info.message)
    return
}








