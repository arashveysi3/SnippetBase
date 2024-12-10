import { createClient } from "./client";

export async function QueryFullTable(table:string){
  const supabase = await createClient();
  const { data: result } = await supabase.from(table).select();
  return result;
}
export async function QueryData(table:string, col: string, keyword: string) {
    const supabase = await createClient();
    const { data: result,error } = await supabase.from(table).select().eq(col,keyword)
    if (error) {
      console.log(error);
      
    } else {
      return result;
    }
}