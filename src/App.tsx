import { useState } from "react";
import "./App.css";
import InputSalary from "./components/InputSalary";
import SalaryStats from "./components/SalaryStats";
import LogoHeader from "./components/ui/LogoHeader";
import CurrencyPicker from "./components/ui/CurrencyPicker";

function App() {
  const [salary, setSalary] = useState(0);
  const timings = [
    "PER YEAR",
    "PER WEEK",
    "PER DAY",
    "PER HOUR",
    "PER MINUTE",
    "PER SECOND",
  ];
  const [currency, setCurrency] = useState("$");
  return (
    <>
      <LogoHeader />
      <CurrencyPicker setCurrency={setCurrency} />
      <InputSalary setSalary={setSalary} />
      <div className="flex flex-col gap-6">
        {timings.map((time, index) => (
          <SalaryStats
            key={index}
            title={time}
            salary={salary}
            currency={currency}
          />
        ))}
      </div>
    </>
  );
}

export default App;
