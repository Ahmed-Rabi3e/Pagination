interface FolloerProps {
  avatar_url?: string;
  html_url?: string;
  login?: string;
}

const Follower = ({ avatar_url, html_url, login }: FolloerProps) => {
  return (
    <article className="bg-white rounded-md shadow-md px-6 py-8 text-center ">
      <img
        className="w-32 h-32  rounded-full object-cover mb-3 mx-auto"
        src={avatar_url}
        alt={login}
      />
      <h4 className="mb-6 text-black font-mono">${login}</h4>
      <a
        target="_blank"
        href={html_url}
        className="capitalize px-3 py-2 leading-6 text-xs text-white bg-blue-400 rounded-xl border-none"
      >
        view profile
      </a>
    </article>
  );
};

export default Follower;
