export default function _404() {
  return (
    <div
      className={"h-screen flex flex-col justify-center align-center"}
    >
      <h1 className="text-[100px] text-center font-bold text-gray-900 dark:text-gray-100"> 404 </h1>
      <p className="text-gray-600 dark:text-gray-300 text-center text-xl mb-2">
        The page you're looking for does not exist yet.
        <br />
      </p>
    </div>
  );
}
