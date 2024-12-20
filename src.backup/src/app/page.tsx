import SnippetCard from "../components/ui/snippet-card-main-page";
import { createClient } from "../utils/supabase/client";

export default async function Home() {
  const supabase = await createClient();
  const { data: users } = await supabase.from("users").select();

  return (
    <div>
      <main>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 w-full justify-items-center ml-4">
          <div className="justify-self-end">
            <SnippetCard />
            <h1>the user name is: {users}</h1>
          </div>
          <div className="justify-self-start">
            <SnippetCard />
          </div>
          <div className="justify-self-center">
            <div className="w-[16rem] h-[65rem] bg-gray-200 rounded-md my-4"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
