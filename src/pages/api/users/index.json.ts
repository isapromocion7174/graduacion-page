
import User from '@/models/User';
import Rol from "@/models/Role";
import { connectDB } from '@/lib/mongoose.js'
export const GET = async () => {
    const db = await connectDB();
    const users = await User.find().populate('rol');
    if (!users) {
        return new Response(JSON.stringify({
            error: true,
            mensaje: 'No se encontraron usuarios'
        }), {
          status: 404,
          statusText: "Not found",
        });
    }
    return new Response(JSON.stringify(users), {
        status: 200,
    });
}