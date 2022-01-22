export default function Message({ title, message }) {
  return (
    <div className="rounded-md bg-green-50 dark:bg-green-900 dark:bg-opacity-10 border-2 border-green-500 border-opacity-50 p-4 space-y-1">
      {title && (
        <h3 className="text-sm font-medium text-green-800 dark:text-red-200">
          {title}
        </h3>
      )}
      <div className="text-sm text-green-700 dark:text-red-200">{message}</div>
    </div>
  );
}
