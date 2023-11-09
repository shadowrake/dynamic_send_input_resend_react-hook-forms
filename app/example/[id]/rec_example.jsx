import { getExampleInput } from "../../../../lib/prisma/read/example"
import Contact from "./contact"

export default async function rec_team({example2}) {

    // Fetch data from external API
    const {Example} = await getExampleInput()

    // Fliter data from external API to match the right team with the right keyword defined in the database
    const input = Example.filter((input) => example2.name === input.keyword)

    return (
        <div className="container mx-auto sm:px-6 lg:px-8">{
            
      <div className="space-y-12 mx-1 my-8">
        <div className="border-b border-gray-900/10 pb-6">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">Recruitment form for {example2.title}</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Would you like to join {example2.title}? Fill out the form below and we will get back to you as soon as possible. You can write in English or Norwegian.
          </p>
          {/* passes down the filtered input to contact.tsx */}
          <Contact input = {input} example2={example2}></Contact>
        </div>
        </div>
        }</div>
    )
}