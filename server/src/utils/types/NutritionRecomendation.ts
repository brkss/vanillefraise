

export interface INutritionRecomendation {
    name: string,
    code: string | null,
    quantity: number,
    unit: string | null,
    population: string,
    ageStart: number,
    ageEnd: number,
}
