import { createContext, useState } from "react";

export const FormContext = createContext({})

export function FormProvider ( {children} ) {
  const stateObject = {
    requestId: 0,
    categoryId: 0,
    details: "",
    resources: {
      
    },
    location: {
      long: 0,
      lat: 0,
      postalCode: '',
    },
    timeSensitive: false,
    startTime: '00:00',
    date: '0000-00-00',
    pointsValue: 0
  }
  
  const [state, setState] = useState(stateObject);

  console.log('state from FormContext', state)

  return (
    <FormContext.Provider value={{ state, setState }}>
      {children}
    </FormContext.Provider>
    );
}

// export FormProvider;