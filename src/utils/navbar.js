import useId from "../hooks/useId";
import NextStepPage from "../pages/NextStep";
import MainPage from "../pages/Main"
import StoryHomePage from "../pages/StoryHome";
import SuccessHomePage from "../pages/SuccessHome";
import PricingHomePage from "../pages/PricingHome";
import ExtendPage from "../pages/Extend";
import FeaturesPage from "../pages/Features";
import PricingMonthlyPage from "../pages/PricingMonthly";
import PaymentFormPage from "../pages/Payment_Form";
export const navbar = [
  {
    id: useId, 
    element: <MainPage/>, 
    title: 'Main', 
    path:'/main', 
    private: false, 
    hidden: false
  },

  {
    id: useId,
    element: <NextStepPage/>,
    path: '/next-step',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <ExtendPage/>,
    path: '/extend',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <StoryHomePage/>,
    path: '/story-home',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <SuccessHomePage/>,
    path: '/success-home',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <PricingHomePage/>,
    path: '/pricing-home',
    private: false,
    hidden: true
  },
  {
    id: useId,
    element: <PricingMonthlyPage/>,
    path: '/pricing-home/monthly',
    private: false,
    hidden: true
  },


  {
    id: useId,
    element: <PaymentFormPage/>,
    path: '/payment-form',
    private: false,
    hidden: true
  },

  {
    id: useId,
    element: <FeaturesPage/>,
    path: '/features',
    private: false,
    hidden: true
  },

];