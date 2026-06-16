export default function NomineeCard({ nominee }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">

      <img
        src={nominee.image}
        alt={nominee.name}
        className="w-full h-72 object-cover"
      />

      <div className="p-5 text-white">
        <h3 className="text-xl font-bold">
          {nominee.name}
        </h3>

        <p className="text-gray-400">
          @{nominee.username}
        </p>

        <a
          href={nominee.instagram}
          target="_blank"
          className="inline-block mt-4 text-pink-400"
        >
          Instagram →
        </a>
      </div>

    </div>
  );
}