export default function StatCard({ value, label }) {
  return (
    <div className="bg-white/20 badge rounded-2xl px-8 py-4">
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-green-50 text-sm">{label}</p>
    </div>
  );
}
