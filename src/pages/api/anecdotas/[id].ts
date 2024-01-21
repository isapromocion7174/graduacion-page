
import Anecdota from '@/models/Anecdota';
import type { APIRoute } from 'astro';
import { connectDB } from '@/lib/mongoose.js'
import User from '@/models/User';
export const GET: APIRoute = async ({params, request}) => {
    await connectDB();
    const { id } = params;
    const anecdota = await Anecdota.findById(id).populate('usuario');;
    if (!anecdota) {
        return new Response(JSON.stringify({
            error: true,
            mensaje: 'No se encontraron Anecdotas'
        }), {
          status: 404,
          statusText: "Not found",
        });
    }
    return new Response(JSON.stringify(anecdota), {
        status: 200,
    });
}