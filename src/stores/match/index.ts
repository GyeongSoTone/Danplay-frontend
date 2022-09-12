import { SPORTS } from '../../constants/match'

export const createMatchStore = () => {
  return {
    selectedMenu: SPORTS.FUTSAL,
    setSelectedMenu(menu: string) {
      this.selectedMenu = menu
    },
  }
}
