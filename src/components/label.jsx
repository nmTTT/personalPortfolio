const Label = ({ text }) => {
  return (
    <div className="flex justify-center w-full">
      <p className="px-5 py-1 rounded-2xl bg-gray-200 dark: bg-gray-500">
        {text}
      </p>
    </div>
  );
};
export default Label;
