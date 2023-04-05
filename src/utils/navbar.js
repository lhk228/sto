import useId from "../hooks/useId";
import FreeTrialStep1Page from "../pages/FreeTrial_Step1";
import FreeTrialStep2Page from "../pages/FreeTrial_Step2";
import PricingPage from "../pages/Pricing"

export const navbar = [
  {
    id: useId, 
    element: <PricingPage/>, 
    title: 'Pricing', 
    path:'/pricing', 
    private: false, 
    hidden: false
  },

  {
    id: useId,
    element: <FreeTrialStep1Page/>,
    path: '/pro-monthly/step-1',
    private: false,
    hidden: true
  },
  {
    id: useId,
    element: <FreeTrialStep2Page/>,
    path: '/pro-monthly/step-2',
    private: false,
    hidden: true
  },
];