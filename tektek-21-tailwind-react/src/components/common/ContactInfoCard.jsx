export default function ContactInfoCard({ icon, title, content, subtitle }) {
  return (
    <div className="flex items-start space-x-4">
      <div className={icon.bgGradient + " w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"}>
        {icon.svg}
      </div>
      <div>
        <p className="font-semibold text-gray-800 mb-1">{title}</p>
        <p className="text-gray-600">{content}</p>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}
