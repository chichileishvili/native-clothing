import { RootState } from '../root-reducer' // Adjust the import to your file structure

export const selectCurrentUser = (state: RootState) => state.user.currentUser
