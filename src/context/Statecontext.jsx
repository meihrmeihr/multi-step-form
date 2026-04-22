import { createContext, useState } from "react";

export const Condition = createContext({});

export default function StateContext({ children }) {
  const [stepCell, setStepCells] = useState(1);
  const [isSendingForm, setIsSendingForm] = useState(false);
  const [keepValues, setKeepValues] = useState({
    name: "",
    emailAddress: "",
    phoneNumber: "",
  });
  const [handleError, setHandleError] = useState(undefined);

  const [planType, setPlanType] = useState(0);
  const [isYearly, setIsYearly] = useState(false);
  const [chosenPlan, setChosenPlan] = useState({});
  const [isNotSelected, setIsNotSelected] = useState(false);
  const [addons, setAddons] = useState([
    {
      id: 1,
      feature: "Online service",
      explainFeature: "Access to multiplayer games",
      checked: false,
      cost: isYearly ? "$10/yr" : "+$1/mo",
    },
    {
      id: 2,
      feature: "Larger storage",
      explainFeature: "Extra 1TB of cloud save",
      checked: false,
      cost: isYearly ? "$20/yr" : "+$2/mo",
    },
    {
      id: 3,
      feature: "Customizable Profile",
      explainFeature: "Custom theme on your profile",
      checked: false,
      cost: isYearly ? "$20/yr" : "+$2/mo",
    },
  ]);

  const [isConfirmed, setIsConfirmed] = useState(false);

  const data = {
    isSendingForm,
    setIsSendingForm,

    stepCell,
    setStepCells,
    keepValues,
    setKeepValues,
    handleError,
    setHandleError,

    planType,
    setPlanType,
    isYearly,
    setIsYearly,
    chosenPlan,
    setChosenPlan,
    isNotSelected,
    setIsNotSelected,

    addons,
    setAddons,

    isConfirmed,
    setIsConfirmed,
  };
  return <Condition.Provider value={data}>{children}</Condition.Provider>;
}
