import emailjs from "@emailjs/browser";
import type { IContactFormData } from "../Models/ContactModel";


export const sendContactEmail = (data: IContactFormData) => {
  const serviceID = "service_7nk0vap";
  const templateID = "template_c1793ww";
  const publicKey = "6C-m_EKU-v6VeQdM-";

  const templateParams = {
    name: data.name,
    title: data.title,
    email: data.email,
    company_name: data.company_name,
    message: data.message,
  };

  return emailjs.send(serviceID, templateID, templateParams, publicKey);
};