import { FastifyReply, FastifyRequest } from "fastify";

export const registerUserHandler =async(req:FastifyRequest, res:FastifyReply)=>{
    res.send({"hey":"created"});
}