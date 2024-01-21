
import Evento from '@/models/Event';
import { connectDB } from '@/lib/mongoose.js'
export const GET = async () => {
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