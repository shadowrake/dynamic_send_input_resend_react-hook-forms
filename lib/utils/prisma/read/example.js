import prisma from '../index.js'

// get all example data from the database/seed and return them as an array of objects
export async function getExampleInput() {
    try{
        const Example = await prisma.Example.findMany()
        return { Example }
    }
    catch(error){
        return { error }
    }
}
