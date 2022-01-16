import clsx from "clsx";

export default function Container({ title = "", size = "medium", children }) {
  return (
    <>
      {title}
      <div
        className={clsx(
          "sm:mt-8 w-full mx-auto sm:rounded-lg shadow-lg bg-white dark:bg-gray-800 sm:p-6",
          {
            "sm:max-w-lg": size === "small",
            "sm:max-w-3xl": size === "medium",
            "sm:max-w-6xl": size === "full",
          }
        )}
      >
        <div className="flex items-center justify-between mb-4">
          {title && (
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h1>
          )}
        </div>
        {children}
      </div>
    </>
  );
}
