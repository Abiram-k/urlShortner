import supabase from "./supabase";

export async function login(payloads) {
    const { data, error } = await supabase.auth.signInWithPassword(payloads)

    if (error) {
        console.log(error)
        throw new Error(error.message);
    }
    return data;
}