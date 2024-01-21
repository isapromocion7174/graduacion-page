
import Evento from '@/models/Event';
import type { APIRoute } from 'astro';
import { connectDB } from '@/lib/mongoose.js'
export const GET: APIRoute = async ({params, request}) => {
    await connectDB();
    const { id } = params;
    const event = await Evento.findById(id);
    if (!event) {
        return new Response(JSON.stringify({
            error: true,
            mensaje: 'No se encontraron Eventos'
        }), {
          status: 404,
          statusText: "Not found",
        });
    }
    return new Response(JSON.stringify(event), {
        status: 200,
    });
}