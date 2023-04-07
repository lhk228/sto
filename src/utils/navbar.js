import useId from "../hooks/useId";
import NextStepPage from "../pages/NextStep";
import MainPage from "../pages/Main"
import StoryHomePage from "../pages/StoryHome";
import SuccessHomePage from "../pages/SuccessHome";
import PricingHomePage from "../pages/PricingHome";
import FreeTrialStep1Page from "../pages/FreeTrial_Step1";
import FreeTrialStep2Page from "../pages/FreeTrial_Step2";
import ExtendPage from "../pages/Extend";

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