import { useState } from "react";

export default function ProfileCard({ img, name, role, description }) {
    const [VoirPlus, setVoirPlus] = useState(false);

    return (
        <div className="p-4 border rounded-lg shadow-sm bg-white max-w-xs">

            <img
                src={img}
                alt={name}
                className="w-full h-40 object-cover rounded-md"
            />

            <h2 className="text-xl font-semibold mt-3">{name}</h2>
            <p className="text-sm text-gray-600">{role}</p>

            <p className="text-gray-700 mt-2 text-sm">
                {VoirPlus
                    ? description
                    : description.slice(0, 40) + "La journée commence bien, un petit défi en C ..…"}
            </p>

            <button
                onClick={() => setVoirPlus(!VoirPlus)}
                className="mt-4 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                {VoirPlus ? "Voir moins" : "Voir plus"}
            </button>

        </div>
    );
}