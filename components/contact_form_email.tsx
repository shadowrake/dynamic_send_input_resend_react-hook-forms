//define the interface for the props
interface ContactFormInputs {
    email: string;
    username: string;
    input: { name: string; id: React.Key; dummy: string}[];
  };

//define the component with the props for use in as a email template
const ContactForm: React.FC<Readonly<ContactFormInputs>> = ({ email, username, input }) => {
    return <div>
        <h1></h1>
        <p>
            Email: {email} <br />
            Username: {username} <br />
            {input.map((person: {
                dummy: string; name: string; id: React.Key; }, index) => (
                <div key={person.id}>
                    <p>
                    {person.name}: <br />{person.dummy}</p>
                </div>
            ))}
        </p>
    </div>;
}

export default ContactForm;
