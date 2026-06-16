import { useEffect, useState } from "react";

export default function VoteButton({ nomineeId }) {
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    const votes =
      JSON.parse(localStorage.getItem("blogger-awards-votes")) || {};

    if (votes[nomineeId]) {
      setVoted(true);
    }
  }, [nomineeId]);

  const handleVote = () => {
    const votes =
      JSON.parse(localStorage.getItem("blogger-awards-votes")) || {};

    if (votes[nomineeId]) return;

    votes[nomineeId] = true;

    localStorage.setItem(
      "blogger-awards-votes",
      JSON.stringify(votes)
    );

    setVoted(true);
  };

  return (
    <button
      onClick={handleVote}
      disabled={voted}
      className={`flex-1 py-3 rounded-2xl font-medium transition-all duration-300 border ${
        voted
          ? "bg-white text-black border-white"
          : "bg-transparent text-white border-white/20 hover:bg-white hover:text-black"
      }`}
    >
      {voted ? "Voted ✓" : "Vote"}
    </button>
  );
}