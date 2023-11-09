import {z} from 'zod';

//Defines the schema for the data sent from the client side form and validates it before sending it to the server
export const FormDataSchema = z.object({
    username: z.string().nonempty("Please enter your gamer tag here"),
    email: z.string().email("Please enter a valid email"),
    input: z.array(z.object({
        name: z.string().nonempty("Please enter your awnser here"),
        id: z.string().nonempty("Please enter your awnser here"),
        dummy: z.string().nonempty("Please enter your awnser here")
    })),
    title: z.string().nonempty("Please enter your awnser here")
});