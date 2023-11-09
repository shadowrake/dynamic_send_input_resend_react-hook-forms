import prisma from '../index.js'

// get all example2 data from the database/seed and return them as an array of objects
export async function getExample2() {
    try{
        const example = await prisma.Example2.findMany()
        return { example }
    }
    catch(error){
        return { error }
    }
}

// get a single example2 data point by id from the database/seed and return it as an object
export async function getExample2ById(id) {
    try{
        const example = await prisma.Example2.findUnique({where: { id }})
        return { example }
        }catch(error){
            return { error }
        }
}