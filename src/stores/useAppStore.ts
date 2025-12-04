import { create } from 'zustand'
import { createRecipesSlice, type RecipesSlideType } from './recipeSlice'

export const useAppStore = create<RecipesSlideType>((...a) => ({
    ...createRecipesSlice(...a)
}))