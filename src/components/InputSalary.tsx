type Props = {
  setSalary: any;
};

const InputSalary = ({ setSalary }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 h-28 px-10 w-full mb-10">
      <div className="font-black italic text-[#4CCD99]">START HERE...</div>
      <input
        onChange={(e) => setSalary(e.currentTarget.value)}
        placeholder="ENTER MONTHLY SALARY"
        className="w-full text-[#EEEEEE] text-xl h-28 rounded-2xl text-center bg-transparent border-2 border-[#4CCD99] focus:outline-none"
        type="number"
      />
    </div>
  );
};

export default InputSalary;
