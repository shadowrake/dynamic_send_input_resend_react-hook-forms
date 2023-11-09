import Example from './rec_example.jsx'
import { getExample2ById } from '../../../../lib/prisma/read/example2.js'
import { getExampleInput } from '../../../../lib/prisma/read/example.js'

 export default async function recTeam({params}) {
    const { example } = await getExample2ById(params.id)

    const {Example} = await getExampleInput()

    const input = Example.filter((input) => example.title === input.keyword)
    
    return (
        <main className='bg-white'>
            {/* passes down the example param to rec_example */}
            <Example input={input} example = {example}></Example>
        </main>
    )
  }
