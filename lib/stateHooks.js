import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

const mainState = atom({
  key: 'state',
  default: {
    lang: 'en'
  }, 
})

const readMainState = selector({
  key: 'mainState',
  get: ({get}) => {
    const state = get(mainState)
    return state
  },
})

export const useMainState = () => {
  const [state, setState] = useRecoilState(mainState)
  return [state, setState]
}
export const useReadMainState = () => {
  const read = useRecoilValue(readMainState)
  return read
}
