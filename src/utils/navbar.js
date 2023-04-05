import useId from "../hooks/useId";
import FreeTrialStep1Page from "../pages/FreeTrial_Step1";
import PricingPage from "../pages/Pricing"

export const navbar = [
  {
    id: useId, 
    element: <PricingPage/>, 
    title: 'Pricing', 
    path:'/intro', 
    private: false, 
    hidden: false
  },

  {
    id: useId,
    element: <FreeTrialStep1Page/>,
    path: '/next-step',
    private: false,
    hidden: true
  },

];