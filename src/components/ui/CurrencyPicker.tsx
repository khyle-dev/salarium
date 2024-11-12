const CurrencyPicker = ({ setCurrency }: { setCurrency: any }) => {
  return (
    <>
      <select
        defaultValue="$"
        onChange={(e) => setCurrency(e.currentTarget.value)}
        className="flex mx-auto mb-6 focus:outline-none p-2 rounded-lg"
      >
        <option value="$">$</option>
        <option value="₱">₱</option>
        <option value="AED">AED</option>
      </select>
    </>
  );
};

export default CurrencyPicker;
