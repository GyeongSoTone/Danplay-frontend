import React, { createContext, useContext } from 'react'
import { useLocalObservable } from 'mobx-react-lite'

import type { ReactNode } from 'react'

import { createMatchStore } from '../stores/match'

type TRootContext = {
  MatchStore: ReturnType<typeof createMatchStore>
}

const rootContext = createContext({} as TRootContext)
const { Provider } = rootContext

export const RootProvider = ({ children }: { children: ReactNode }) => (
  <Provider
    value={{
      MatchStore: useLocalObservable(createMatchStore),
    }}
  >
    {children}
  </Provider>
)

export const useMatchStore = () => useContext(rootContext).MatchStore
