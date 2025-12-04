import type { StateCreator } from "zustand"

type Category = {}

export type RecipesSlideType = {
    categories: Category[]
}

export const createRecipesSlice : StateCreator<RecipesSlideType>= () => ({
    categories: []
})