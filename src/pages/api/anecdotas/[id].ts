
import Anecdota from '@/models/Anecdota';
import type { APIRoute } from 'astro';
import { connectDB } from '@/lib/mongoose.js'
export const GET: APIRoute = async ({params, request}) => {
    const db = await connectDB();
    const { id } = params;
    const anecdota = await Anecdota.findById(id);
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