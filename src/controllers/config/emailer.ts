////pcmjcdzyfrgflexq
//ngtzgzujwpjimtla
import nodemailer from "nodemailer";

export const createTrans = async () => {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "gaerca123@gmail.com",
      pass: "pcmjcdzyfrgflexq",
    },
  });
  return transport;
};

export const sendMail = async (email: any) => {
  const transporter = await createTrans();
  const info: any = transporter.sendMail({
    from: "<henryjobsproject@gmail.com>",
    to: email,
    subject: "registro",
    text: `Bienvenido a Henry Jobs, te encuentras actualmente registrado`,
  });
  console.log("message sent", info.messageId);

  return;
};

export const sendPassword = async (email: any, password: any) => {
  const transporter = await createTrans();
  const info: any = transporter.sendMail({
    from: "<henryjobsproject@gmail.com>",
    to: email,
    subject: "contraseña",
    text: `tu contraseña es ${password}`,
  });
  console.log("message sent", info.message);
  return;
};


export const sendEmailWarning = async (email: any, user: any) => {
  const transporter = await createTrans();
  const info: any = transporter.sendMail({
    from: "<henryjobsproject@gmail.com>",
    to: email,
    subject: "registro",
    text: `Hola ${user}, detectamos recientemente que tus postulaciones en el período acordado por contrato no estaría cumpliénse. Por favor, te pedimos que puedas ponerte al corriente con las postulaciones enviadas a empresas`,
  });
  console.log("message sent", info.messageId);

  return;
};

export const contact = async (email: any, falopa: any) => {
  const transporter = await createTrans();
  const info: any = await transporter.sendMail({
    from: "<henryjobsproject@gmail.com>",
    to: email,
    subject: "contacto",
    text: `Hola, te ha contactado un reclutador/empresa ${falopa}`,
  });
  console.log("message sent", info.messageId);

  return;
};
