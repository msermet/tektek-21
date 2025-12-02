export default function StepCard({ stepNumber, title, description, gradient }) {
  return (
    <div className="text-center relative">
      <div className="inline-block mb-6">
        <div className={`w-24 h-24 ${gradient} rounded-full flex items-center justify-center shadow-xl relative`}>
          <span className="text-4xl font-bold text-white">{stepNumber}</span>
        </div>
      </div>
      <h4 className="text-xl font-bold text-gray-800 mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed px-4">{description}</p>
    </div>
  );
}
