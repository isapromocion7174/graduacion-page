
import Evento from '@/models/Event';
import { connectDB } from '@/lib/mongoose.js'
import type { APIRoute } from 'astro';
export const GET: APIRoute = async () => {
     await connectDB();
    const events = await Evento.find();
    if (!events) {
        return new Response(JSON.stringify({
            error: true,
            mensaje: 'No se encontraron Eventos'
        }), {
          status: 404,
          statusText: "Not found",
        });
    }
    return new Response(JSON.stringify(events), {
        status: 200,
    });
}