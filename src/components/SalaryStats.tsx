type Props = {
  title?: string;
  salary?: any;
  currency?: string;
};

const SalaryStats = ({ title, salary, currency }: Props) => {
  return (
    <div className="w-full px-10 flex flex-col gap-2">
      <div className="font-black text-white bg-[#5A6B64] h-10 w-36 flex items-center justify-center rounded-full">
        {title}
      </div>
      <div className="w-full h-20 rounded-2xl border-2 border-[#4CCD99] text-white text-xl flex items-center justify-center">
        {(() => {
          switch (title) {
            case "PER YEAR":
              return currency + (salary * 12).toLocaleString();
            case "PER WEEK":
              return (
                currency +
                ((salary * 12) / 52).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })
              );
            case "PER DAY":
              return (
                currency +
                ((salary * 12) / 365).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })
              );
            case "PER HOUR":
              return (
                currency +
                (salary / (30.44 * 24)).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })
              );
            case "PER MINUTE":
              return (
                currency +
                (salary / (30.44 * 1440)).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })
              );
            case "PER SECOND":
              return (
                currency +
                (salary / (30.44 * 86400)).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })
              );
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
};

export default SalaryStats;
