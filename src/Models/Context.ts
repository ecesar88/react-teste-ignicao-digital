export interface AppContextType {
  appView: string,
  layoutBarResultsQuantity: string | number, 
  payload: {
    filters: {
      searchBarString?: string,
      searchPricesSlider?: [number, number],
    }
  }
}
