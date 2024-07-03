"use server"
const client = new PrismaClient();

import { PrismaClient } from "@prisma/client";
export async function createTodo(title: string) {
    const todo = await client.todo.create({
        data: {
            title: title
        }
    })
}
export async function findTodos() {
    const todos = await client.todo.findMany({
        select: {
            title: true,
            id: true
        }
    });
    return todos;
}

export async function removeTodo(id: number) {
    try {
        const todo = await client.todo.delete({
            where: {
                id: id
            }
        })
        console.log("Todo deleted");
    }
    catch(e){
        console.log(e);
    }
}