import clsx from "clsx";

export default function Container({ title = "", size = "medium", children }) {
  return (
    <>
      <div id="Container"
        className={clsx(
          "w-full mx-auto sm:rounded-lg sm:shadow-lg bg-white dark:bg-gray-800 sm:p-6 px-2 pb-24",
          {
            "sm:max-w-lg": size === "small",
            "sm:max-w-3xl": size === "medium",
            "sm:max-w-6xl": size === "full",
          }
        )}
      >
        {title && (
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 p-2">
              {title}
            </h1>
          </div>
        )}
        {children}
      </div>
    </>
  );
}
