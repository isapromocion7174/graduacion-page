
import Anecdota from "@/models/Anecdota";
import { connectDB } from '@/lib/mongoose.js'
export const GET = async () => {
    const db = await connectDB();
    const anecdotas = await Anecdota.find();
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