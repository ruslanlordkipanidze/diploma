// supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase


// supabaseClient.ts



// // Create operation
// export const createNote = async (title: string, description: string, userId: string) => {
//   const { data, error } = await supabase
//     .from("Notes")
//     .insert([{ title, description, userId }]);
//   if (error) throw error;
//   return data;
// };

// // Read operation
// export const getNotes = async (userId: string) => {
//   const { data, error } = await supabase
//     .from("Notes")
//     .select("*")
//     .eq("userId", userId);
//   if (error) throw error;
//   return data;
// };

// // Update operation
// export const updateNote = async (id: string, title: string, description: string) => {
//   const { data, error } = await supabase
//     .from("Notes")
//     .update({ title, description })
//     .eq("id", id);
//   if (error) throw error;
//   return data;
// };

// // Delete operation
// export const deleteNote = async (id: string) => {
//   const { error } = await supabase.from("Notes").delete().eq("id", id);
//   if (error) throw error;
// };
