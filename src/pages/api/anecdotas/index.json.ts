
import Anecdota from "@/models/Anecdota";
import { connectDB } from '@/lib/mongoose.js'
import User from '@/models/User';
import type { APIRoute } from 'astro';
export const GET:APIRoute = async () => {
    await connectDB();
    const anecdotas = await Anecdota.find().populate('usuario');
    if (!anecdotas) {
        return new Response(JSON.stringify({
            error: true,
            mensaje: 'No se encontraron Anecdotas'
        }), {
          status: 404,
          statusText: "Not found",
        });
    }
    return new Response(JSON.stringify(anecdotas), {
        status: 200,
    });
}