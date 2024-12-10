import SnippetCard from "../components/ui/snippet-card-main-page";
import { QueryFullTable } from "@/utils/supabase/query";
export default async function Home() {
  const SnippetDetails = await QueryFullTable("posts");

  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-[auto_16rem] gap-4 justify-items-center ml-4">
        <div className=" flex flex-wrap sm:flex-row gap-4">
          {SnippetDetails?.map((Snippet) => (
            <SnippetCard
              key={Snippet.id}
              Description={Snippet.description}
              Code={Snippet.code}
              Title={Snippet.title}
            />
          ))}
          <div className="absolute top-28 right-14 w-[16rem] h-[28rem] bg-gray-200 rounded-md invisible lg:visible"></div>
        </div>
      </div>
    </main>
  );
}
