"use server";
import { Resend } from 'resend';

import { FormDataSchema } from "../lib/utils/schema";

import ContactForm from "../components/contact_form_email";

//Defines the types for the data sent from the client side form
type ContactFormInputs = {
    email: string;
    username: string;
    input: { name: string; id: React.Key; dummy: string}[];
    title: string;
  };

//Defines the Resend API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
//Validates the data sent from the client side form and returns an error if the data is not valid
const result = FormDataSchema.safeParse(data);

if(result.success) {
//Destructures the data from the client side form
const {input, email, username, title} = result.data;
console.log(title)
try{
//Sends the email to the email address specified in the "to" field
const data = await resend.emails.send({
    from: 'example <example@example.com>',
    to: ['example@example.com'],
    subject: `New ${title} application`,
    text: `Input: ${input}\nEmail: ${email}\nUsername: ${username}`,
    react: ContactForm({input, email, username})
})
//Returns a success message if the email was sent successfully
return {success: true, data: data};
} catch (error) {
return {success: false, error: error};
}
}
//Returns an error if the data sent from the client side form is not valid
if(result.error) {
return {success: false, error: result.error.format()};
}
}