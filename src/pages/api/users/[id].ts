
import User from '@/models/User';
import Rol from "@/models/Role";
import type { APIRoute } from 'astro';
import { connectDB } from '@/lib/mongoose.js'
export const GET: APIRoute = async ({params, request}) => {
    await connectDB();
    const { id } = params;
    const user = await User.findById(id).populate('rol');
    if (!user) {
        return new Response(JSON.stringify({
            error: true,
            mensaje: 'No se encontraron usuarios'
        }), {
          status: 404,
          statusText: "Not found",
        });
    }
    return new Response(JSON.stringify(user), {
        status: 200,
    });
}