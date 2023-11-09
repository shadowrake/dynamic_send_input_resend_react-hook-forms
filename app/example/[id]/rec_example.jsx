import { getTeamsInput } from "../../../../lib/prisma/read/teaminput"
import Contact from "./contact"

export default async function rec_team({team}) {

    // Fetch data from external API
    const {teamsinput} = await getTeamsInput()

    // Fliter data from external API to match the right team with the right keyword defined in the database
    const input = teamsinput.filter((input) => team.name === input.keyword)

    return (
        <div className="container mx-auto sm:px-6 lg:px-8">{
            
      <div className="space-y-12 mx-1 my-8">
        <div className="border-b border-gray-900/10 pb-6">
          <h2 className="text-lg font-semibold leading-7 text-gray-900">Recruitment form for {team.title}</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Would you like to join the {team.title} team? Fill out the form below and we will get back to you as soon as possible. You can write in English or Norwegian.
          </p>
          {/* passes down the filtered input to contact.tsx */}
          <Contact input = {input} team={team}></Contact>
        </div>
        <div className="">
          <h3 className="text-2xl font-semibold leading-7 text-gray-900">Alternative way to signup</h3>
          <div className="mt-2 space-y-4">
            <a href="/recruitment/games/howto" className="">
            <p className="mt-4 bg-greenzone text-black text-center relative inline-flex items-center justify-center rounded-md text-xl font-bold hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              Apply with discord
            </p>
            </a>
          </div>
          <div>
          <h3 className="mt-6 text-lg font-bold leading-7 text-gray-900 mx-2">OR</h3>
          <div className="mt-2 space-y-4">
            { team.manager === "" ? 
            <p className="mt-4 text-xl font-semibold leading-7 text-gray-900">
              We are looking for a team manager for {team.title}: <a href="/recruitment/staff" className="rounded-md bg-greenzone font-bold hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                Apply here
              </a>
            </p>
            :
            <p className="mt-4 text-xl font-bold leading-7 text-gray-900">
              Contact our team manager on discord: <bold>{team.manager}</bold>
            </p>
            }
          </div>
          </div>
        </div>
        </div>
        }</div>
    )
}