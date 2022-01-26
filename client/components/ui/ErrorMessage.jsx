export default function ErrorMessage({
  title = "Error",
  error = "Something unexpected... Please try again..",
}) {
  if (!error) return null;

  return (
    <div className="rounded-md bg-red-50 dark:bg-red-900 dark:bg-opacity-10 border-2 border-red-500 border-opacity-50 p-4 space-y-1 m-2">
      {title && (
        <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
          {title}
        </h3>
      )}
      <div className="text-sm text-red-700 dark:text-red-200">{error}</div>
    </div>
  );
}
