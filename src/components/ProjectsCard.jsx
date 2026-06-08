import { Link } from "react-router-dom";

export default function ProjectCard({ title, desc, to }) {
  return (
    <div className="p-6 border rounded-2xl hover:shadow-md transition">

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-2 text-gray-600">{desc}</p>

      <Link
        to={to}
        className="mt-4 inline-block text-blue-600"
      >
        View Details →
      </Link>

    </div>
  );
}