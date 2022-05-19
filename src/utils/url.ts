

export const useUrlQueryParam = ()=>{}

// 返回页面 url 中，指定键的参数
// export const useUrlQueryParam = <K extends string>(keys: K[]) => {
//   const [serchParams, setSearchParam] = useSearchParams()
//   return [
//     keys.reduce((prev: K, key: K) => {
//       return {...prev, [key]: serchParams.get(key) || ''}
//     }, {} as {[key in K]: string}),
//     setSearchParam
//   ] as const
// }