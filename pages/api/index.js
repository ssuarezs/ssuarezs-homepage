import data from './data/gridman.json'
import works from './data/works.json'

export const getData = (lang,type) => data[lang][type] 
export const getWork = work => works[work]
