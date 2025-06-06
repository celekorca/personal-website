interface PlaceholderTabProps {
  tabName: string;
}

export default function PlaceholderTab({ tabName }: PlaceholderTabProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100">
      <p className="text-gray-600">Content for <span className="font-semibold text-indigo-600">{tabName}</span> will appear here.</p>
    </div>
  );
}
