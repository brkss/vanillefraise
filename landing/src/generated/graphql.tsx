import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Activity = {
  __typename?: 'Activity';
  calories?: Maybe<Scalars['Float']>;
  category: ActivityCategory;
  created_at: Scalars['DateTime'];
  duration: Scalars['String'];
  feedback?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  user: User;
};

export type ActivityCalories = {
  __typename?: 'ActivityCalories';
  category: ActivityCategory;
  id: Scalars['String'];
  name: Scalars['String'];
  val: Scalars['Float'];
  zone: Scalars['Float'];
};

export type ActivityCategory = {
  __typename?: 'ActivityCategory';
  activities: Array<Activity>;
  calories: Array<ActivityCalories>;
  highmet: Scalars['Float'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lowmet: Scalars['Float'];
  name: Scalars['String'];
};

export type AddMealRecipeInput = {
  date?: InputMaybe<Scalars['DateTime']>;
  mealID: Scalars['String'];
  recipeID: Scalars['String'];
};

export type AdminCategoryResponse = {
  __typename?: 'AdminCategoryResponse';
  category: RecipeCategory;
  count: Scalars['Float'];
};

export type AdminRecipesResponse = {
  __typename?: 'AdminRecipesResponse';
  recipe: Recipe;
};

export type AdminUserResponse = {
  __typename?: 'AdminUserResponse';
  user: User;
};

export type AuthDefaultResponse = {
  __typename?: 'AuthDefaultResponse';
  message?: Maybe<Scalars['String']>;
  rToken?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type CaloriesTrackResponse = {
  __typename?: 'CaloriesTrackResponse';
  date: Scalars['DateTime'];
  value: Scalars['Float'];
};

export type ChangePasswordInput = {
  newpass: Scalars['String'];
  oldpass: Scalars['String'];
};

export type ChangePasswordResponse = {
  __typename?: 'ChangePasswordResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type ConfigDietInput = {
  activity_factor: Scalars['Float'];
  carbs: Scalars['Float'];
  fat: Scalars['Float'];
  filters: Array<Scalars['String']>;
  height: Scalars['Float'];
  protein: Scalars['Float'];
  weight: Scalars['Float'];
};

export type CookedRecipe = {
  __typename?: 'CookedRecipe';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  recipe: Recipe;
  user: User;
};

export type CookedRecipeInput = {
  mealId: Scalars['String'];
  recipeId: Scalars['String'];
};

export type CookedRecipesResponse = {
  __typename?: 'CookedRecipesResponse';
  calories?: Maybe<Scalars['Float']>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type CreateActivityInput = {
  calories?: InputMaybe<Scalars['Float']>;
  category: Scalars['String'];
  duration: Scalars['String'];
  feedback?: InputMaybe<Scalars['String']>;
};

export type CreateActivityResponse = {
  __typename?: 'CreateActivityResponse';
  activity?: Maybe<Activity>;
  burnedCalories?: Maybe<Scalars['Float']>;
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type CreateDietConfigResponse = {
  __typename?: 'CreateDietConfigResponse';
  data?: Maybe<DietConfigResponse>;
  macros?: Maybe<UserMacrosResponse>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type CreateDietRecordInput = {
  type: Scalars['String'];
  unit: Scalars['String'];
  value: Scalars['Float'];
};

export type CreateMealRecipeResponse = {
  __typename?: 'CreateMealRecipeResponse';
  mealId?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type CreateMoodRecordInput = {
  moods: Array<Scalars['String']>;
};

export type CreateRecipeCategoryInput = {
  icon: Scalars['String'];
  name: Scalars['String'];
};

export type CreateRecipeCategoryResponse = {
  __typename?: 'CreateRecipeCategoryResponse';
  category?: Maybe<RecipeCategory>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type CreateRecipeInput = {
  categories: Array<Scalars['String']>;
  url: Scalars['String'];
};

export type CreateRecipeResponse = {
  __typename?: 'CreateRecipeResponse';
  message: Scalars['String'];
  recipe?: Maybe<Recipe>;
  status: Scalars['Boolean'];
};

export type CreateRecordInput = {
  category: Scalars['Float'];
  date: Scalars['DateTime'];
  time: Scalars['DateTime'];
  value: Scalars['Float'];
};

export type CreateRecordResponse = {
  __typename?: 'CreateRecordResponse';
  message: Scalars['String'];
  record: Record;
  status: Scalars['Boolean'];
};

export type DefaultResponse = {
  __typename?: 'DefaultResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type DietConfigResponse = {
  __typename?: 'DietConfigResponse';
  config?: Maybe<MacrosConfig>;
  filters?: Maybe<Array<HealthLabelRefrence>>;
  status: Scalars['Boolean'];
};

export type DietFoodFilter = {
  __typename?: 'DietFoodFilter';
  healthlabel: HealthLabelRefrence;
  id: Scalars['String'];
  user: User;
};

export type DietHealthLabelResponse = {
  __typename?: 'DietHealthLabelResponse';
  count: Scalars['Float'];
  description: Scalars['String'];
  id: Scalars['String'];
  label: Scalars['String'];
};

export type DietRecord = {
  __typename?: 'DietRecord';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  type: Scalars['String'];
  unit: Scalars['String'];
  user: User;
  value: Scalars['Float'];
};

export type EarlyAccessRequest = {
  __typename?: 'EarlyAccessRequest';
  id: Scalars['String'];
  user: User;
};

export type HealthLabelRefrence = {
  __typename?: 'HealthLabelRefrence';
  description: Scalars['String'];
  filters: Array<DietFoodFilter>;
  id: Scalars['String'];
  label: Scalars['String'];
  param: Scalars['String'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  amount?: Maybe<Scalars['String']>;
  created_at: Scalars['String'];
  id: Scalars['String'];
  ingredients?: Maybe<Scalars['String']>;
  raw: Scalars['String'];
  recipe: Recipe;
  unit?: Maybe<Scalars['String']>;
};

export type IngredientLang = {
  __typename?: 'IngredientLang';
  ingredient?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};

export type Instruction = {
  __typename?: 'Instruction';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  index: Scalars['Float'];
  raw: Scalars['String'];
  recipe: Recipe;
};

export type LanguagesResponse = {
  __typename?: 'LanguagesResponse';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type ListRecordsResponse = {
  __typename?: 'ListRecordsResponse';
  message?: Maybe<Scalars['String']>;
  records?: Maybe<Array<Record>>;
  status: Scalars['Boolean'];
};

export type LoginAdminInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MacrosConfig = {
  __typename?: 'MacrosConfig';
  activityFactor: Scalars['Float'];
  carbs: Scalars['Float'];
  fat: Scalars['Float'];
  id: Scalars['String'];
  protein: Scalars['Float'];
  user: User;
};

export type MarkedDates = {
  __typename?: 'MarkedDates';
  count: Scalars['Float'];
  date: Scalars['String'];
};

export type MarkedDaysResponse = {
  __typename?: 'MarkedDaysResponse';
  markedDates?: Maybe<Array<MarkedDates>>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type Meal = {
  __typename?: 'Meal';
  id: Scalars['String'];
  index: Scalars['Float'];
  mealrecipes: Array<MealRecipes>;
  name: Scalars['String'];
};

export type MealListResponse = {
  __typename?: 'MealListResponse';
  count: Scalars['Float'];
  id: Scalars['String'];
  index: Scalars['Float'];
  name: Scalars['String'];
};

export type MealNutritionResponse = {
  __typename?: 'MealNutritionResponse';
  message?: Maybe<Scalars['String']>;
  nutrition?: Maybe<Array<RecipeTotalNutrition>>;
  status: Scalars['Boolean'];
};

export type MealRecipeResponse = {
  __typename?: 'MealRecipeResponse';
  calories?: Maybe<Scalars['Float']>;
  cooked?: Maybe<Scalars['Boolean']>;
  ingredients?: Maybe<Array<Ingredient>>;
  mealrecipes?: Maybe<Array<MealRecipes>>;
  message?: Maybe<Scalars['String']>;
  recipes?: Maybe<Array<Recipe>>;
  status: Scalars['Boolean'];
  time?: Maybe<Scalars['Float']>;
};

export type MealRecipes = {
  __typename?: 'MealRecipes';
  cooked: Scalars['Boolean'];
  date: Scalars['String'];
  id: Scalars['String'];
  meal: Meal;
  recipe: Recipe;
  user: User;
};

export type MealRecipesInput = {
  date: Scalars['DateTime'];
  meal: Scalars['String'];
};

export type Mood = {
  __typename?: 'Mood';
  active: Scalars['Boolean'];
  icon: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  records: Array<MoodRecord>;
};

export type MoodOverviewData = {
  __typename?: 'MoodOverviewData';
  icon: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  percent: Scalars['Float'];
};

export type MoodOverviewResponse = {
  __typename?: 'MoodOverviewResponse';
  data?: Maybe<Array<MoodOverviewData>>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type MoodRecord = {
  __typename?: 'MoodRecord';
  date: Scalars['DateTime'];
  id: Scalars['String'];
  mood: Mood;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addMealRecipe: CreateMealRecipeResponse;
  banUser: DefaultResponse;
  changePassword: ChangePasswordResponse;
  changeRecipeVisibility: DefaultResponse;
  checkCookedMeal: CookedRecipesResponse;
  checkInfoValidity: UserInfoValidityResponse;
  configDiet: CreateDietConfigResponse;
  cookedRecipe: CookedRecipesResponse;
  cookedRecipes: CookedRecipesResponse;
  createActivity: CreateActivityResponse;
  createDietRecord: DefaultResponse;
  createMoodRecord: DefaultResponse;
  createRecipe: CreateRecipeResponse;
  createRecipeCategory: CreateRecipeCategoryResponse;
  createRecord: CreateRecordResponse;
  deleteCategory: DefaultResponse;
  deleterecipe: Scalars['Boolean'];
  login: AuthDefaultResponse;
  loginAdmin: AuthDefaultResponse;
  logout: AuthDefaultResponse;
  register: AuthDefaultResponse;
  registerAdmin: AuthDefaultResponse;
  removeRecipe: DefaultResponse;
  requestEarlyAccess: Scalars['Boolean'];
  requestResetPassword: AuthDefaultResponse;
  resetPassword: AuthDefaultResponse;
  seedActivityCalories: Scalars['Boolean'];
  seedActivityCategories: Scalars['Boolean'];
  seedHealthLabelRefrence: Scalars['Boolean'];
  seedMeals: Scalars['Boolean'];
  seedMoodCategories: Scalars['Boolean'];
  seedNutrientCategories: Scalars['Boolean'];
  seedNutritionGuide: Scalars['Boolean'];
  seedRecipeCategories: Scalars['Boolean'];
  seedRecomendation: Scalars['Boolean'];
  seedRecordCategories: Scalars['Boolean'];
  seedSpecialConditions: Scalars['Boolean'];
  updateCategory: UpdateCategoryResponse;
  updateInfo: DefaultResponse;
  verifyAccount: DefaultResponse;
};


export type MutationAddMealRecipeArgs = {
  data: AddMealRecipeInput;
};


export type MutationBanUserArgs = {
  uid: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationChangeRecipeVisibilityArgs = {
  rid: Scalars['String'];
};


export type MutationCheckCookedMealArgs = {
  mealRecipesID: Array<Scalars['String']>;
};


export type MutationCheckInfoValidityArgs = {
  data: UserInfoValidtyInput;
};


export type MutationConfigDietArgs = {
  data: ConfigDietInput;
};


export type MutationCookedRecipeArgs = {
  data: CookedRecipeInput;
};


export type MutationCookedRecipesArgs = {
  mealRecipesID: Array<Scalars['String']>;
};


export type MutationCreateActivityArgs = {
  data: CreateActivityInput;
};


export type MutationCreateDietRecordArgs = {
  data: CreateDietRecordInput;
};


export type MutationCreateMoodRecordArgs = {
  data: CreateMoodRecordInput;
};


export type MutationCreateRecipeArgs = {
  data: CreateRecipeInput;
};


export type MutationCreateRecipeCategoryArgs = {
  data: CreateRecipeCategoryInput;
};


export type MutationCreateRecordArgs = {
  data: CreateRecordInput;
};


export type MutationDeleteCategoryArgs = {
  cat_id: Scalars['String'];
};


export type MutationDeleterecipeArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationLoginAdminArgs = {
  data: LoginAdminInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationRegisterAdminArgs = {
  data: RegisterAdminInput;
};


export type MutationRemoveRecipeArgs = {
  data: RemoveMealRecipeInput;
};


export type MutationRequestEarlyAccessArgs = {
  service: Scalars['String'];
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryInput;
};


export type MutationUpdateInfoArgs = {
  data: UpdateUserInfoInput;
};


export type MutationVerifyAccountArgs = {
  token: Scalars['String'];
};

export type NutritionCategoryOverview = {
  __typename?: 'NutritionCategoryOverview';
  id: Scalars['String'];
  name: Scalars['String'];
  nutritiens: Array<NutritionOverviewData>;
};

export type NutritionOverviewData = {
  __typename?: 'NutritionOverviewData';
  code: Scalars['String'];
  name: Scalars['String'];
  quantity: Scalars['Float'];
  recomendation: Scalars['Float'];
  unit: Scalars['String'];
};

export type NutritionOverviewResponse = {
  __typename?: 'NutritionOverviewResponse';
  data?: Maybe<Array<NutritionCategoryOverview>>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  activeFoodFilters: Array<HealthLabelRefrence>;
  activities: Array<Activity>;
  activityCategories: Array<ActivityCategory>;
  adminCategories: Array<AdminCategoryResponse>;
  adminGetUsers: Array<AdminUserResponse>;
  adminRecipes: Array<AdminRecipesResponse>;
  categoryDetails?: Maybe<RecipeCategory>;
  cookedRecipesCount: Scalars['Float'];
  daysWithRecipes: MarkedDaysResponse;
  getActivityCalories: Scalars['Float'];
  getDietConfig: DietConfigResponse;
  getMealRecipes: MealRecipeResponse;
  getRecipeNutrition: RecipeNutritionResponse;
  getUserBurnedCalories: Scalars['Float'];
  healthLabels: Array<DietHealthLabelResponse>;
  helloAdmin: Scalars['String'];
  helloDietData: Scalars['String'];
  isRequested: Scalars['Boolean'];
  languages: Array<LanguagesResponse>;
  macros: UserMacrosResponse;
  me?: Maybe<User>;
  mealNutrition: MealNutritionResponse;
  meals: Array<MealListResponse>;
  moodOverview: MoodOverviewResponse;
  moods: Array<Mood>;
  ping: Scalars['String'];
  recipe: RecipeItemResponse;
  recipeByCategory: Array<Recipe>;
  recipeByNutrition: Array<Recipe>;
  recipeCategories: Array<RecipeCategory>;
  recipeEnergy: Scalars['Float'];
  recipes: Array<Recipe>;
  recordCategories: Array<RecordCategory>;
  records: ListRecordsResponse;
  searchRecipes: SearchResultResponse;
  specialconditions: Array<SpecialCondition>;
  trackCalories: Array<CaloriesTrackResponse>;
  trackMacronutrients: Array<TrackMacronutrientsResponse>;
  trackWeight: Array<TrackWeightResponse>;
  userCalories: UserCaloriesResponse;
  userNutrition: NutritionOverviewResponse;
  verifyResetToken: VerifyResetPasswordTokenResponse;
  work: Scalars['String'];
};


export type QueryCategoryDetailsArgs = {
  cid: Scalars['String'];
};


export type QueryDaysWithRecipesArgs = {
  mealID: Scalars['String'];
};


export type QueryGetActivityCaloriesArgs = {
  cat: Scalars['String'];
};


export type QueryGetMealRecipesArgs = {
  data: MealRecipesInput;
};


export type QueryGetRecipeNutritionArgs = {
  recipe_id: Scalars['String'];
};


export type QueryIsRequestedArgs = {
  service: Scalars['String'];
};


export type QueryMealNutritionArgs = {
  data: MealRecipesInput;
};


export type QueryRecipeArgs = {
  id: Scalars['String'];
};


export type QueryRecipeByCategoryArgs = {
  cat_id: Scalars['String'];
};


export type QueryRecipeByNutritionArgs = {
  code: Scalars['String'];
};


export type QueryRecipeEnergyArgs = {
  recipe_id: Scalars['String'];
};


export type QueryRecordsArgs = {
  cat_id: Scalars['Float'];
};


export type QuerySearchRecipesArgs = {
  query: Scalars['String'];
};


export type QueryVerifyResetTokenArgs = {
  token: Scalars['String'];
};

export type Recipe = {
  __typename?: 'Recipe';
  categories: Array<RecipeCategory>;
  cook?: Maybe<Scalars['String']>;
  cookedrecipes: Array<CookedRecipe>;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  dietlabel: Array<RecipeDietLabel>;
  healthlabel: Array<RecipeHealthLabel>;
  id: Scalars['String'];
  image: Scalars['String'];
  ingredients: Array<Ingredient>;
  instructions: Array<Instruction>;
  mealrecipes: Array<MealRecipes>;
  name: Scalars['String'];
  prep?: Maybe<Scalars['String']>;
  public: Scalars['Boolean'];
  serving?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['String']>;
  totalDaily: Array<RecipeTotalDaily>;
  totalnutrition: Array<RecipeTotalNutrition>;
  totalnutritionkcal: Array<RecipeTotalNutritionKcal>;
  url: Scalars['String'];
};

export type RecipeCategory = {
  __typename?: 'RecipeCategory';
  active: Scalars['Boolean'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  index: Scalars['Float'];
  name: Scalars['String'];
  recipes: Array<Recipe>;
};

export type RecipeDietLabel = {
  __typename?: 'RecipeDietLabel';
  id: Scalars['String'];
  label: Scalars['String'];
  recipe: Recipe;
};

export type RecipeHealthLabel = {
  __typename?: 'RecipeHealthLabel';
  id: Scalars['String'];
  label: Scalars['String'];
  recipe: Recipe;
};

export type RecipeItemResponse = {
  __typename?: 'RecipeItemResponse';
  ingredients?: Maybe<Array<TranslatedIngredient>>;
  instructions?: Maybe<Array<TranslatedInstruction>>;
  message?: Maybe<Scalars['String']>;
  recipe?: Maybe<Recipe>;
  status: Scalars['Boolean'];
};

export type RecipeNutritionResponse = {
  __typename?: 'RecipeNutritionResponse';
  dietLabels?: Maybe<Array<RecipeDietLabel>>;
  healthLabels?: Maybe<Array<RecipeHealthLabel>>;
  totalDaily?: Maybe<Array<RecipeTotalDaily>>;
  totalNutrition?: Maybe<Array<RecipeTotalNutrition>>;
  totalNutritionKcal?: Maybe<Array<RecipeTotalNutritionKcal>>;
};

export type RecipeTotalDaily = {
  __typename?: 'RecipeTotalDaily';
  code: Scalars['String'];
  id: Scalars['String'];
  label: Scalars['String'];
  quantity: Scalars['Float'];
  recipe: Recipe;
  unit: Scalars['String'];
};

export type RecipeTotalNutrition = {
  __typename?: 'RecipeTotalNutrition';
  code: Scalars['String'];
  id: Scalars['String'];
  label: Scalars['String'];
  quantity: Scalars['Float'];
  recipe: Recipe;
  unit: Scalars['String'];
};

export type RecipeTotalNutritionKcal = {
  __typename?: 'RecipeTotalNutritionKcal';
  code: Scalars['String'];
  id: Scalars['String'];
  label: Scalars['String'];
  quantity: Scalars['Float'];
  recipe: Recipe;
  unit: Scalars['String'];
};

export type Record = {
  __typename?: 'Record';
  category: RecordCategory;
  date: Scalars['DateTime'];
  id: Scalars['String'];
  time: Scalars['DateTime'];
  user: User;
  value: Scalars['Float'];
};

export type RecordCategory = {
  __typename?: 'RecordCategory';
  icon: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  records: Array<Record>;
  unit: Scalars['String'];
};

export type RegisterAdminInput = {
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type RegisterInput = {
  birth: Scalars['DateTime'];
  bmi: Scalars['Float'];
  email: Scalars['String'];
  gender: Scalars['String'];
  height: Scalars['Float'];
  name: Scalars['String'];
  password: Scalars['String'];
  sc: Array<Scalars['String']>;
  username: Scalars['String'];
  weight: Scalars['Float'];
};

export type RemoveMealRecipeInput = {
  mealid: Scalars['String'];
  recipeid: Scalars['String'];
};

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type SearchResultResponse = {
  __typename?: 'SearchResultResponse';
  ingredients: Array<Ingredient>;
  nutritients: Array<RecipeTotalNutrition>;
  recipes: Array<Recipe>;
};

export type SpecialCondition = {
  __typename?: 'SpecialCondition';
  id: Scalars['String'];
  name: Scalars['String'];
  users: Array<User>;
};

export type TrackMacronutrientsResponse = {
  __typename?: 'TrackMacronutrientsResponse';
  carbs: Scalars['Float'];
  date: Scalars['DateTime'];
  fat: Scalars['Float'];
  protein: Scalars['Float'];
};

export type TrackWeightResponse = {
  __typename?: 'TrackWeightResponse';
  date: Scalars['DateTime'];
  value: Scalars['Float'];
};

export type TranslatedIngredient = {
  __typename?: 'TranslatedIngredient';
  amount?: Maybe<Scalars['String']>;
  ar: IngredientLang;
  created_at: Scalars['String'];
  es: IngredientLang;
  fr: IngredientLang;
  id: Scalars['String'];
  ingredients?: Maybe<Scalars['String']>;
  raw: Scalars['String'];
  recipe: Recipe;
  unit?: Maybe<Scalars['String']>;
};

export type TranslatedInstruction = {
  __typename?: 'TranslatedInstruction';
  ar?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  es?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  index: Scalars['Float'];
  raw: Scalars['String'];
  recipe: Recipe;
};

export type UpdateCategoryInput = {
  active: Scalars['Boolean'];
  icon?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  index?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCategoryResponse = {
  __typename?: 'UpdateCategoryResponse';
  category?: Maybe<RecipeCategory>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type UpdateUserInfoInput = {
  height: Scalars['Float'];
  name: Scalars['String'];
  weight: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  activities: Array<Activity>;
  banned: Scalars['Boolean'];
  birth: Scalars['DateTime'];
  bmi: Scalars['Float'];
  config: MacrosConfig;
  cookedrecipes: Array<CookedRecipe>;
  created_at: Scalars['DateTime'];
  dietRecords: Array<DietRecord>;
  earequest: Array<EarlyAccessRequest>;
  email: Scalars['String'];
  filters: Array<DietFoodFilter>;
  gender: Scalars['String'];
  height: Scalars['Float'];
  id: Scalars['String'];
  mealrecipes: Array<MealRecipes>;
  moodrecords: Array<MoodRecord>;
  name: Scalars['String'];
  records: Array<Record>;
  specialconditions: Array<SpecialCondition>;
  username: Scalars['String'];
  verified: Scalars['Boolean'];
  version: Scalars['Float'];
  weight: Scalars['Float'];
};

export type UserCaloriesResponse = {
  __typename?: 'UserCaloriesResponse';
  burnt?: Maybe<Scalars['Float']>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  target?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};

export type UserInfoValidityResponse = {
  __typename?: 'UserInfoValidityResponse';
  email: Scalars['Boolean'];
  username: Scalars['Boolean'];
};

export type UserInfoValidtyInput = {
  email: Scalars['String'];
  username: Scalars['String'];
};

export type UserMacrosResponse = {
  __typename?: 'UserMacrosResponse';
  message?: Maybe<Scalars['String']>;
  ree?: Maybe<Scalars['Float']>;
  status: Scalars['Boolean'];
  tdee?: Maybe<Scalars['Float']>;
};

export type VerifyResetPasswordTokenResponse = {
  __typename?: 'VerifyResetPasswordTokenResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type RequestResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestResetPasswordMutation = { __typename?: 'Mutation', requestResetPassword: { __typename?: 'AuthDefaultResponse', status: boolean, message?: string | null, token?: string | null } };

export type ResetPasswordMutationVariables = Exact<{
  pass: Scalars['String'];
  token: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'AuthDefaultResponse', status: boolean, message?: string | null } };

export type VerifyResetTokenQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyResetTokenQuery = { __typename?: 'Query', verifyResetToken: { __typename?: 'VerifyResetPasswordTokenResponse', status: boolean, message?: string | null, user?: { __typename?: 'User', name: string, username: string } | null } };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type VerifyAccountMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyAccountMutation = { __typename?: 'Mutation', verifyAccount: { __typename?: 'DefaultResponse', status: boolean, message?: string | null } };


export const RequestResetPasswordDocument = gql`
    mutation RequestResetPassword($email: String!) {
  requestResetPassword(email: $email) {
    status
    message
    token
  }
}
    `;
export type RequestResetPasswordMutationFn = Apollo.MutationFunction<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;

/**
 * __useRequestResetPasswordMutation__
 *
 * To run a mutation, you first call `useRequestResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetPasswordMutation, { data, loading, error }] = useRequestResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>(RequestResetPasswordDocument, options);
      }
export type RequestResetPasswordMutationHookResult = ReturnType<typeof useRequestResetPasswordMutation>;
export type RequestResetPasswordMutationResult = Apollo.MutationResult<RequestResetPasswordMutation>;
export type RequestResetPasswordMutationOptions = Apollo.BaseMutationOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($pass: String!, $token: String!) {
  resetPassword(data: {newPassword: $pass, token: $token}) {
    status
    message
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      pass: // value for 'pass'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const VerifyResetTokenDocument = gql`
    query VerifyResetToken($token: String!) {
  verifyResetToken(token: $token) {
    status
    message
    user {
      name
      username
    }
  }
}
    `;

/**
 * __useVerifyResetTokenQuery__
 *
 * To run a query within a React component, call `useVerifyResetTokenQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyResetTokenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyResetTokenQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyResetTokenQuery(baseOptions: Apollo.QueryHookOptions<VerifyResetTokenQuery, VerifyResetTokenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyResetTokenQuery, VerifyResetTokenQueryVariables>(VerifyResetTokenDocument, options);
      }
export function useVerifyResetTokenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyResetTokenQuery, VerifyResetTokenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyResetTokenQuery, VerifyResetTokenQueryVariables>(VerifyResetTokenDocument, options);
        }
export type VerifyResetTokenQueryHookResult = ReturnType<typeof useVerifyResetTokenQuery>;
export type VerifyResetTokenLazyQueryHookResult = ReturnType<typeof useVerifyResetTokenLazyQuery>;
export type VerifyResetTokenQueryResult = Apollo.QueryResult<VerifyResetTokenQuery, VerifyResetTokenQueryVariables>;
export const PingDocument = gql`
    query Ping {
  ping
}
    `;

/**
 * __usePingQuery__
 *
 * To run a query within a React component, call `usePingQuery` and pass it any options that fit your needs.
 * When your component renders, `usePingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePingQuery({
 *   variables: {
 *   },
 * });
 */
export function usePingQuery(baseOptions?: Apollo.QueryHookOptions<PingQuery, PingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PingQuery, PingQueryVariables>(PingDocument, options);
      }
export function usePingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PingQuery, PingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PingQuery, PingQueryVariables>(PingDocument, options);
        }
export type PingQueryHookResult = ReturnType<typeof usePingQuery>;
export type PingLazyQueryHookResult = ReturnType<typeof usePingLazyQuery>;
export type PingQueryResult = Apollo.QueryResult<PingQuery, PingQueryVariables>;
export const VerifyAccountDocument = gql`
    mutation VerifyAccount($token: String!) {
  verifyAccount(token: $token) {
    status
    message
  }
}
    `;
export type VerifyAccountMutationFn = Apollo.MutationFunction<VerifyAccountMutation, VerifyAccountMutationVariables>;

/**
 * __useVerifyAccountMutation__
 *
 * To run a mutation, you first call `useVerifyAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyAccountMutation, { data, loading, error }] = useVerifyAccountMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyAccountMutation(baseOptions?: Apollo.MutationHookOptions<VerifyAccountMutation, VerifyAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyAccountMutation, VerifyAccountMutationVariables>(VerifyAccountDocument, options);
      }
export type VerifyAccountMutationHookResult = ReturnType<typeof useVerifyAccountMutation>;
export type VerifyAccountMutationResult = Apollo.MutationResult<VerifyAccountMutation>;
export type VerifyAccountMutationOptions = Apollo.BaseMutationOptions<VerifyAccountMutation, VerifyAccountMutationVariables>;