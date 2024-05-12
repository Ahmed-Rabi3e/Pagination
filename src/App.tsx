import { useState, useEffect, SetStateAction } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState<number>(0);
  const [followers, setFollowers] = useState<any>([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index: SetStateAction<number>) => {
    setPage(index);
  };

  return (
    <main>
      <div className="text-center mx-0 my-16">
        <h1 className="font-bold mb-6 text-black">
          {loading ? "Loading..." : "Pagination"}
        </h1>
        <div className="w-32 h-1 bg-blue-400 mx-auto"></div>
      </div>
      <section className="w-[90vw] max-w-5xl mx-auto">
        <div className="container">
          {followers.map((follower: { id: number }) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="flex justify-center items-center flex-wrap -mt-8 mb-2">
            <button
              className="bg-white mr-2 border-none font-bold p-2 rounded-full text-black hover:drop-shadow-lg"
              onClick={prevPage}
            >
              <IoIosArrowBack size={30} />
            </button>
            {data.map((_item, index) => {
              return (
                <button
                  key={index}
                  className={`w-8 h-8 bg-white font-bold border-none rounded-full cursor-pointer m-2 transition-all duration-300 ${
                    index === page && "!bg-black text-white"
                  }`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button
              className="bg-white ml-2 border-none font-bold p-2 rounded-full text-black hover:drop-shadow-lg"
              onClick={nextPage}
            >
              <IoIosArrowForward size={30} />
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
