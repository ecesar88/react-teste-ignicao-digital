export interface AppContextType {
  appView: string,
  layoutBarResultsQuantity: string | number,
  viewType?: string,
  payload: {
    filters: {
      searchBarString?: string,
      sliderPrice?: [number, number],
      radioPrice?: string,
      categoryName?: string
    }
  }
}
