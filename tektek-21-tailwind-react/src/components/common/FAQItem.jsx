export default function FAQItem({ question, answer }) {
  return (
    <div className="border-2 border-gray-200 rounded-2xl p-6 hover:border-green-500 transition-colors duration-200">
      <h4 className="text-lg font-bold text-gray-800 mb-2">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
}
