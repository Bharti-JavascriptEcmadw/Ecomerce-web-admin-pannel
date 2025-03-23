const Card = ({ title, content }) => {
  return (
    <div className="w-full max-w-sm p-5 bg-white rounded-lg shadow-lg overflow-hidden bg-green-500 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-500 duration-300 ease-in-out">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{content}</p>
      </div>
    </div>
  );
};
export default Card;
