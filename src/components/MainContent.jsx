export default function MainContent({ children }) {
  return (
    <main className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}
