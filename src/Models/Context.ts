export interface AppContextType {
  appView: string,
  layoutBarResultsQuantity: string | number,
  viewType?: string,
  payload: {
    filters: {
      searchBarString?: string,
      searchPricesSlider?: [number, number],
      radioPrice?: number
    }
  }
}
