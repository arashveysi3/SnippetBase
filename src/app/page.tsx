<<<<<<< Updated upstream
export default function Home() {
=======
import SnippetCard from "../components/ui/snippet-card-main-page";
import { createClient } from "../utils/supabase/client";

export default async function Home() {
  const supabase = await createClient();
  const { data: users } = await supabase.from("users").select();

>>>>>>> Stashed changes
  return (
    <div>
      <main>
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 w-full justify-items-center ml-4">
          <div className="justify-self-end">
<<<<<<< Updated upstream
            <div className="w-[24rem] h-[22rem] bg-gray-200 rounded-md my-4"></div>
            <div className="w-[24rem] h-[22rem] bg-gray-200 rounded-md my-4"></div>
            <div className="w-[24rem] h-[22rem] bg-gray-200 rounded-md my-4"></div>
            <div className="w-[24rem] h-[22rem] bg-gray-200 rounded-md my-4"></div>
            <div className="w-[24rem] h-[22rem] bg-gray-200 rounded-md my-4"></div>
            <div className="w-[24rem] h-[22rem] bg-gray-200 rounded-md my-4"></div>
          </div>
          <div className="justify-self-start">
            <div className="w-[24rem] h-[22rem] bg-gray-200 rounded-md my-4"></div>
            <div className="w-[24rem] h-[22rem] bg-gray-200 rounded-md my-4"></div>
            <div className="w-[24rem] h-[22rem] bg-gray-200 rounded-md my-4"></div>
            <div className="w-[24rem] h-[22rem] bg-gray-200 rounded-md my-4"></div>
=======
            <SnippetCard />
            <h1>the user name is: {users}</h1>
          </div>
          <div className="justify-self-start">
            <SnippetCard />
>>>>>>> Stashed changes
          </div>
          <div className="justify-self-center">
            <div className="w-[16rem] h-[65rem] bg-gray-200 rounded-md my-4"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
