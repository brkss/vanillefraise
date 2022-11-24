import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type CreateDietConfigResponse = {
  __typename?: 'CreateDietConfigResponse';
  data?: Maybe<DietConfigResponse>;
  macros?: Maybe<UserMacrosResponse>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type CreateDietRecordInput = {
  time: Scalars['DateTime'];
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

export type CreatePlanInput = {
  elements: Array<PlanElements>;
  name: Scalars['String'];
};

export type CreatePlanResponse = {
  __typename?: 'CreatePlanResponse';
  message?: Maybe<Scalars['String']>;
  plan?: Maybe<Plan>;
  status: Scalars['Boolean'];
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

export type DailyNutritionIntakeResponse = {
  __typename?: 'DailyNutritionIntakeResponse';
  categories: Array<NutritionCategoryData>;
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

export type ElementIntakeResponse = {
  __typename?: 'ElementIntakeResponse';
  code: Scalars['String'];
  date: Scalars['String'];
  intake: Scalars['Float'];
  target: Scalars['Float'];
  unit: Scalars['String'];
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
  amount?: Maybe<Scalars['Float']>;
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

export type IsAccountVerifiedResponse = {
  __typename?: 'IsAccountVerifiedResponse';
  message: Scalars['String'];
  status: Scalars['Boolean'];
  title: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  nutrition: Nutrition;
  recommendation: Scalars['Float'];
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
  createDietRecord: DefaultResponse;
  createMoodRecord: DefaultResponse;
  createPlan: CreatePlanResponse;
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
  reportRecipe: ReportRecipeResponse;
  requestEarlyAccess: Scalars['Boolean'];
  requestResetPassword: AuthDefaultResponse;
  resendAccountVerification: DefaultResponse;
  resetPassword: AuthDefaultResponse;
  saveFoodFilters: Array<HealthLabelRefrence>;
  seedHealthLabelRefrence: Scalars['Boolean'];
  seedMeals: Scalars['Boolean'];
  seedMoodCategories: Scalars['Boolean'];
  seedNutrientCategories: Scalars['Boolean'];
  seedNutritionGuide: Scalars['Boolean'];
  seedRecipeCategories: Scalars['Boolean'];
  seedRecomendation: Scalars['Boolean'];
  seedRecordCategories: Scalars['Boolean'];
  seedSpecialConditions: Scalars['Boolean'];
  togglePlanTracking: TogglePlanTrackingResponse;
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


export type MutationCreateDietRecordArgs = {
  data: CreateDietRecordInput;
};


export type MutationCreateMoodRecordArgs = {
  data: CreateMoodRecordInput;
};


export type MutationCreatePlanArgs = {
  data: CreatePlanInput;
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


export type MutationReportRecipeArgs = {
  recipe_id: Scalars['String'];
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


export type MutationSaveFoodFiltersArgs = {
  data: Array<Scalars['String']>;
};


export type MutationTogglePlanTrackingArgs = {
  planId: Scalars['String'];
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

export type NewPlanNutritionResponse = {
  __typename?: 'NewPlanNutritionResponse';
  category: NutritienCategory;
  items: Array<Item>;
};

export type NutritienCategory = {
  __typename?: 'NutritienCategory';
  active: Scalars['Boolean'];
  id: Scalars['String'];
  name: Scalars['String'];
  nutrients: Array<Nutrition>;
};

export type Nutrition = {
  __typename?: 'Nutrition';
  category: NutritienCategory;
  code: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  trackedElements: Array<TrackedElement>;
  unit: Scalars['String'];
};

export type NutritionCategoryData = {
  __typename?: 'NutritionCategoryData';
  id: Scalars['String'];
  intake: Scalars['Float'];
  name: Scalars['String'];
};

export type NutritionCategoryItemsResponse = {
  __typename?: 'NutritionCategoryItemsResponse';
  code: Scalars['String'];
  intake: Scalars['Float'];
  name: Scalars['String'];
  recommended: Scalars['Float'];
  unit: Scalars['String'];
};

export type NutritionCategoryOverview = {
  __typename?: 'NutritionCategoryOverview';
  id: Scalars['String'];
  name: Scalars['String'];
  nutritiens: Array<NutritionOverviewData>;
};

export type NutritionIntakeChartResponse = {
  __typename?: 'NutritionIntakeChartResponse';
  date: Scalars['String'];
  intake: Scalars['Float'];
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

export type Plan = {
  __typename?: 'Plan';
  active: Scalars['Boolean'];
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  public: Scalars['Boolean'];
  trackedElements: Array<TrackedElement>;
  user: User;
};

export type PlanElements = {
  nutrition_id: Scalars['String'];
  quantity: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  activeFoodFilters: Array<HealthLabelRefrence>;
  adminCategories: Array<AdminCategoryResponse>;
  adminGetUsers: Array<AdminUserResponse>;
  adminRecipes: Array<AdminRecipesResponse>;
  categoryDetails?: Maybe<RecipeCategory>;
  cookedRecipesCount: Scalars['Float'];
  daysWithRecipes: MarkedDaysResponse;
  elementIntake: Array<ElementIntakeResponse>;
  getDietConfig: DietConfigResponse;
  getMealRecipes: MealRecipeResponse;
  getRecipeNutrition: RecipeNutritionResponse;
  grocery: Array<Ingredient>;
  groceryCount: Scalars['Float'];
  healthLabels: Array<DietHealthLabelResponse>;
  helloAdmin: Scalars['String'];
  helloDietData: Scalars['String'];
  isAccountVerified: IsAccountVerifiedResponse;
  isRequested: Scalars['Boolean'];
  languages: Array<LanguagesResponse>;
  macros: UserMacrosResponse;
  me?: Maybe<User>;
  mealNutrition: MealNutritionResponse;
  meals: Array<MealListResponse>;
  moodOverview: MoodOverviewResponse;
  moods: Array<Mood>;
  nutritionCategoryIntake: DailyNutritionIntakeResponse;
  nutritionCategoryItems: Array<NutritionCategoryItemsResponse>;
  nutritionIntakeChart: Array<NutritionIntakeChartResponse>;
  nutritionsByCategory: Array<NewPlanNutritionResponse>;
  ping: Scalars['String'];
  planDetails?: Maybe<Plan>;
  plans: Array<Plan>;
  recipe: RecipeItemResponse;
  recipeByCategory: Array<Recipe>;
  recipeByNutrition: Array<Recipe>;
  recipeCategories: Array<RecipeCategory>;
  recipeEnergy: Scalars['Float'];
  recipeReports: Array<RecipeReport>;
  recipes: Array<Recipe>;
  recommendedRecipes: Array<Recipe>;
  recordCategories: Array<RecordCategory>;
  records: ListRecordsResponse;
  searchRecipes: SearchResultResponse;
  specialconditions: Array<SpecialCondition>;
  trackCalories: Array<CaloriesTrackResponse>;
  trackMacronutrients: Array<TrackMacronutrientsResponse>;
  trackWeight: Array<TrackWeightResponse>;
  tracking: Array<TrackingPlanResponse>;
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


export type QueryElementIntakeArgs = {
  element_id: Scalars['String'];
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


export type QueryNutritionCategoryItemsArgs = {
  cat_id: Scalars['String'];
};


export type QueryNutritionIntakeChartArgs = {
  code: Scalars['String'];
};


export type QueryPlanDetailsArgs = {
  id: Scalars['String'];
};


export type QueryRecipeArgs = {
  id: Scalars['String'];
};


export type QueryRecipeByCategoryArgs = {
  data: RecipeByCategoryInput;
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
  reports: RecipeReport;
  serving?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['String']>;
  totalDaily: Array<RecipeTotalDaily>;
  totalnutrition: Array<RecipeTotalNutrition>;
  totalnutritionkcal: Array<RecipeTotalNutritionKcal>;
  url: Scalars['String'];
};

export type RecipeByCategoryInput = {
  batch: Scalars['Float'];
  cat_id: Scalars['String'];
  seed: Scalars['Float'];
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

export type RecipeReport = {
  __typename?: 'RecipeReport';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  recipe: Recipe;
  user: User;
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

export type ReportRecipeResponse = {
  __typename?: 'ReportRecipeResponse';
  message: Scalars['String'];
  status: Scalars['Boolean'];
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

export type TogglePlanTrackingResponse = {
  __typename?: 'TogglePlanTrackingResponse';
  current?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
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

export type TrackedElement = {
  __typename?: 'TrackedElement';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  nutriton: Nutrition;
  plan: Plan;
  quantity: Scalars['Float'];
};

export type TrackedElements = {
  __typename?: 'TrackedElements';
  code: Scalars['String'];
  current: Scalars['Float'];
  id: Scalars['String'];
  name: Scalars['String'];
  target: Scalars['Float'];
  unit: Scalars['String'];
};

export type TrackingPlanResponse = {
  __typename?: 'TrackingPlanResponse';
  elements: Array<TrackedElements>;
  plan: Plan;
};

export type TranslatedIngredient = {
  __typename?: 'TranslatedIngredient';
  amount?: Maybe<Scalars['Float']>;
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
  plans: Array<Plan>;
  records: Array<Record>;
  reportedrecipes: RecipeReport;
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

export type IsAccountVerifiedQueryVariables = Exact<{ [key: string]: never; }>;


export type IsAccountVerifiedQuery = { __typename?: 'Query', isAccountVerified: { __typename?: 'IsAccountVerifiedResponse', status: boolean, title: string, message: string } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthDefaultResponse', status: boolean, message?: string | null | undefined, token?: string | null | undefined, rToken?: string | null | undefined } };

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  birth: Scalars['DateTime'];
  bmi: Scalars['Float'];
  gender: Scalars['String'];
  height: Scalars['Float'];
  weight: Scalars['Float'];
  sc: Array<Scalars['String']> | Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthDefaultResponse', status: boolean, message?: string | null | undefined, token?: string | null | undefined, rToken?: string | null | undefined } };

export type ResendAccountVerificationMutationVariables = Exact<{ [key: string]: never; }>;


export type ResendAccountVerificationMutation = { __typename?: 'Mutation', resendAccountVerification: { __typename?: 'DefaultResponse', status: boolean, message?: string | null | undefined } };

export type ActiveFoodFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type ActiveFoodFiltersQuery = { __typename?: 'Query', activeFoodFilters: Array<{ __typename?: 'HealthLabelRefrence', id: string, label: string }> };

export type ConfigDietMutationVariables = Exact<{
  factor: Scalars['Float'];
  fat: Scalars['Float'];
  carbs: Scalars['Float'];
  protein: Scalars['Float'];
  filters: Array<Scalars['String']> | Scalars['String'];
  weight: Scalars['Float'];
  height: Scalars['Float'];
}>;


export type ConfigDietMutation = { __typename?: 'Mutation', configDiet: { __typename?: 'CreateDietConfigResponse', status: boolean, message?: string | null | undefined, data?: { __typename?: 'DietConfigResponse', status: boolean, config?: { __typename?: 'MacrosConfig', id: string, activityFactor: number, fat: number, carbs: number, protein: number } | null | undefined, filters?: Array<{ __typename?: 'HealthLabelRefrence', id: string, label: string }> | null | undefined } | null | undefined, macros?: { __typename?: 'UserMacrosResponse', ree?: number | null | undefined, tdee?: number | null | undefined } | null | undefined } };

export type GetDietConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDietConfigQuery = { __typename?: 'Query', getDietConfig: { __typename?: 'DietConfigResponse', status: boolean, config?: { __typename?: 'MacrosConfig', id: string, activityFactor: number, fat: number, carbs: number, protein: number } | null | undefined, filters?: Array<{ __typename?: 'HealthLabelRefrence', id: string, label: string }> | null | undefined } };

export type HealthLabelsQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthLabelsQuery = { __typename?: 'Query', healthLabels: Array<{ __typename?: 'DietHealthLabelResponse', id: string, label: string, description: string, count: number }> };

export type MacrosQueryVariables = Exact<{ [key: string]: never; }>;


export type MacrosQuery = { __typename?: 'Query', macros: { __typename?: 'UserMacrosResponse', status: boolean, ree?: number | null | undefined, tdee?: number | null | undefined } };

export type CreateDietRecordMutationVariables = Exact<{
  value: Scalars['Float'];
  unit: Scalars['String'];
  type: Scalars['String'];
  time: Scalars['DateTime'];
}>;


export type CreateDietRecordMutation = { __typename?: 'Mutation', createDietRecord: { __typename?: 'DefaultResponse', status: boolean, message?: string | null | undefined } };

export type SaveFoodFiltersMutationVariables = Exact<{
  filters: Array<Scalars['String']> | Scalars['String'];
}>;


export type SaveFoodFiltersMutation = { __typename?: 'Mutation', saveFoodFilters: Array<{ __typename?: 'HealthLabelRefrence', id: string, label: string }> };

export type TrackCaloriesQueryVariables = Exact<{ [key: string]: never; }>;


export type TrackCaloriesQuery = { __typename?: 'Query', trackCalories: Array<{ __typename?: 'CaloriesTrackResponse', value: number, date: any }> };

export type TrackMacronutrientsQueryVariables = Exact<{ [key: string]: never; }>;


export type TrackMacronutrientsQuery = { __typename?: 'Query', trackMacronutrients: Array<{ __typename?: 'TrackMacronutrientsResponse', fat: number, carbs: number, protein: number, date: any }> };

export type TrackWeightQueryVariables = Exact<{ [key: string]: never; }>;


export type TrackWeightQuery = { __typename?: 'Query', trackWeight: Array<{ __typename?: 'TrackWeightResponse', value: number, date: any }> };

export type IsRequestedQueryVariables = Exact<{
  service: Scalars['String'];
}>;


export type IsRequestedQuery = { __typename?: 'Query', isRequested: boolean };

export type RequestEarlyAccessMutationVariables = Exact<{
  service: Scalars['String'];
}>;


export type RequestEarlyAccessMutation = { __typename?: 'Mutation', requestEarlyAccess: boolean };

export type GroceryCountQueryVariables = Exact<{ [key: string]: never; }>;


export type GroceryCountQuery = { __typename?: 'Query', groceryCount: number };

export type GroceryQueryVariables = Exact<{ [key: string]: never; }>;


export type GroceryQuery = { __typename?: 'Query', grocery: Array<{ __typename?: 'Ingredient', id: string, unit?: string | null | undefined, amount?: number | null | undefined, ingredients?: string | null | undefined }> };

export type CheckCookedMealMutationVariables = Exact<{
  mealrecipesID: Array<Scalars['String']> | Scalars['String'];
}>;


export type CheckCookedMealMutation = { __typename?: 'Mutation', checkCookedMeal: { __typename?: 'CookedRecipesResponse', status: boolean, message?: string | null | undefined } };

export type CookedRecipesMutationVariables = Exact<{
  mealrecipesid: Array<Scalars['String']> | Scalars['String'];
}>;


export type CookedRecipesMutation = { __typename?: 'Mutation', cookedRecipes: { __typename?: 'CookedRecipesResponse', status: boolean, message?: string | null | undefined, calories?: number | null | undefined } };

export type AddMealRecipeMutationVariables = Exact<{
  recipe: Scalars['String'];
  meal: Scalars['String'];
  date?: InputMaybe<Scalars['DateTime']>;
}>;


export type AddMealRecipeMutation = { __typename?: 'Mutation', addMealRecipe: { __typename?: 'CreateMealRecipeResponse', status: boolean, message: string, mealId?: string | null | undefined } };

export type DaysWithRecipesQueryVariables = Exact<{
  mealID: Scalars['String'];
}>;


export type DaysWithRecipesQuery = { __typename?: 'Query', daysWithRecipes: { __typename?: 'MarkedDaysResponse', status: boolean, message?: string | null | undefined, markedDates?: Array<{ __typename?: 'MarkedDates', date: string, count: number }> | null | undefined } };

export type GetMealRecipesQueryVariables = Exact<{
  meal: Scalars['String'];
  date: Scalars['DateTime'];
}>;


export type GetMealRecipesQuery = { __typename?: 'Query', getMealRecipes: { __typename?: 'MealRecipeResponse', status: boolean, message?: string | null | undefined, time?: number | null | undefined, calories?: number | null | undefined, cooked?: boolean | null | undefined, recipes?: Array<{ __typename?: 'Recipe', id: string, name: string, total?: string | null | undefined, image: string }> | null | undefined, ingredients?: Array<{ __typename?: 'Ingredient', id: string, amount?: number | null | undefined, unit?: string | null | undefined, ingredients?: string | null | undefined }> | null | undefined, mealrecipes?: Array<{ __typename?: 'MealRecipes', id: string, recipe: { __typename?: 'Recipe', id: string } }> | null | undefined } };

export type MealsQueryVariables = Exact<{ [key: string]: never; }>;


export type MealsQuery = { __typename?: 'Query', meals: Array<{ __typename?: 'MealListResponse', id: string, name: string, index: number, count: number }> };

export type MealNutritionQueryVariables = Exact<{
  date: Scalars['DateTime'];
  meal: Scalars['String'];
}>;


export type MealNutritionQuery = { __typename?: 'Query', mealNutrition: { __typename?: 'MealNutritionResponse', status: boolean, message?: string | null | undefined, nutrition?: Array<{ __typename?: 'RecipeTotalNutrition', quantity: number, label: string, unit: string }> | null | undefined } };

export type RemoveRecipeMutationVariables = Exact<{
  mealid: Scalars['String'];
  recipeid: Scalars['String'];
}>;


export type RemoveRecipeMutation = { __typename?: 'Mutation', removeRecipe: { __typename?: 'DefaultResponse', status: boolean, message?: string | null | undefined } };

export type CreateMoodRecordMutationVariables = Exact<{
  moods: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateMoodRecordMutation = { __typename?: 'Mutation', createMoodRecord: { __typename?: 'DefaultResponse', status: boolean, message?: string | null | undefined } };

export type MoodOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type MoodOverviewQuery = { __typename?: 'Query', moodOverview: { __typename?: 'MoodOverviewResponse', status: boolean, message?: string | null | undefined, data?: Array<{ __typename?: 'MoodOverviewData', name: string, id: string, icon: string, percent: number }> | null | undefined } };

export type MoodsQueryVariables = Exact<{ [key: string]: never; }>;


export type MoodsQuery = { __typename?: 'Query', moods: Array<{ __typename?: 'Mood', id: string, name: string, icon: string }> };

export type UserCaloriesQueryVariables = Exact<{ [key: string]: never; }>;


export type UserCaloriesQuery = { __typename?: 'Query', userCalories: { __typename?: 'UserCaloriesResponse', status: boolean, message?: string | null | undefined, target?: number | null | undefined, value?: number | null | undefined, burnt?: number | null | undefined } };

export type NutritionCategoryItemsQueryVariables = Exact<{
  cat_id: Scalars['String'];
}>;


export type NutritionCategoryItemsQuery = { __typename?: 'Query', nutritionCategoryItems: Array<{ __typename?: 'NutritionCategoryItemsResponse', code: string, name: string, recommended: number, intake: number, unit: string }> };

export type NutritionIntakeChartQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type NutritionIntakeChartQuery = { __typename?: 'Query', nutritionIntakeChart: Array<{ __typename?: 'NutritionIntakeChartResponse', date: string, intake: number }> };

export type RecipeEnergyQueryVariables = Exact<{
  recipe_id: Scalars['String'];
}>;


export type RecipeEnergyQuery = { __typename?: 'Query', recipeEnergy: number };

export type NutritionCategoryIntakeQueryVariables = Exact<{ [key: string]: never; }>;


export type NutritionCategoryIntakeQuery = { __typename?: 'Query', nutritionCategoryIntake: { __typename?: 'DailyNutritionIntakeResponse', categories: Array<{ __typename?: 'NutritionCategoryData', name: string, intake: number, id: string }> } };

export type NutritionsByCategoryQueryVariables = Exact<{ [key: string]: never; }>;


export type NutritionsByCategoryQuery = { __typename?: 'Query', nutritionsByCategory: Array<{ __typename?: 'NewPlanNutritionResponse', category: { __typename?: 'NutritienCategory', id: string, name: string }, items: Array<{ __typename?: 'Item', recommendation: number, nutrition: { __typename?: 'Nutrition', id: string, name: string, unit: string } }> }> };

export type UserNutritionQueryVariables = Exact<{ [key: string]: never; }>;


export type UserNutritionQuery = { __typename?: 'Query', userNutrition: { __typename?: 'NutritionOverviewResponse', status: boolean, message?: string | null | undefined, data?: Array<{ __typename?: 'NutritionCategoryOverview', name: string, nutritiens: Array<{ __typename?: 'NutritionOverviewData', name: string, code: string, quantity: number, recomendation: number, unit: string }> }> | null | undefined } };

export type RecipeByNutritionQueryVariables = Exact<{
  code: Scalars['String'];
}>;


export type RecipeByNutritionQuery = { __typename?: 'Query', recipeByNutrition: Array<{ __typename?: 'Recipe', id: string, name: string, total?: string | null | undefined, image: string }> };

export type TotalNutritionQueryVariables = Exact<{
  recipe_id: Scalars['String'];
}>;


export type TotalNutritionQuery = { __typename?: 'Query', getRecipeNutrition: { __typename?: 'RecipeNutritionResponse', totalNutrition?: Array<{ __typename?: 'RecipeTotalNutrition', id: string, label: string, quantity: number, unit: string }> | null | undefined, totalDaily?: Array<{ __typename?: 'RecipeTotalDaily', id: string, label: string, unit: string, quantity: number }> | null | undefined } };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type CreatePlanMutationVariables = Exact<{
  name: Scalars['String'];
  elements: Array<PlanElements> | PlanElements;
}>;


export type CreatePlanMutation = { __typename?: 'Mutation', createPlan: { __typename?: 'CreatePlanResponse', status: boolean, message?: string | null | undefined, plan?: { __typename?: 'Plan', id: string, name: string, created_at: any, image?: string | null | undefined } | null | undefined } };

export type ElementIntakeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ElementIntakeQuery = { __typename?: 'Query', elementIntake: Array<{ __typename?: 'ElementIntakeResponse', code: string, date: string, unit: string, intake: number, target: number }> };

export type PlanDetailsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PlanDetailsQuery = { __typename?: 'Query', planDetails?: { __typename?: 'Plan', id: string, name: string, created_at: any, active: boolean, image?: string | null | undefined, description?: string | null | undefined, public: boolean, trackedElements: Array<{ __typename?: 'TrackedElement', id: string, quantity: number, nutriton: { __typename?: 'Nutrition', id: string, code: string, name: string, unit: string } }> } | null | undefined };

export type PlansQueryVariables = Exact<{ [key: string]: never; }>;


export type PlansQuery = { __typename?: 'Query', plans: Array<{ __typename?: 'Plan', id: string, name: string, image?: string | null | undefined, created_at: any }> };

export type TogglePlanTrackingMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type TogglePlanTrackingMutation = { __typename?: 'Mutation', togglePlanTracking: { __typename?: 'TogglePlanTrackingResponse', status: boolean, message?: string | null | undefined, current?: boolean | null | undefined } };

export type TrackingQueryVariables = Exact<{ [key: string]: never; }>;


export type TrackingQuery = { __typename?: 'Query', tracking: Array<{ __typename?: 'TrackingPlanResponse', plan: { __typename?: 'Plan', id: string, name: string, image?: string | null | undefined }, elements: Array<{ __typename?: 'TrackedElements', id: string, target: number, name: string, unit: string, current: number, code: string }> }> };

export type RecipeCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipeCategoriesQuery = { __typename?: 'Query', recipeCategories: Array<{ __typename?: 'RecipeCategory', id: string, name: string, icon?: string | null | undefined }> };

export type CookedRecipeMutationVariables = Exact<{
  recipeID: Scalars['String'];
  mealId: Scalars['String'];
}>;


export type CookedRecipeMutation = { __typename?: 'Mutation', cookedRecipe: { __typename?: 'CookedRecipesResponse', status: boolean, message?: string | null | undefined, calories?: number | null | undefined } };

export type CookedRecipesCountQueryVariables = Exact<{ [key: string]: never; }>;


export type CookedRecipesCountQuery = { __typename?: 'Query', cookedRecipesCount: number };

export type RecipeByCategoryQueryVariables = Exact<{
  cat_id: Scalars['String'];
  batch: Scalars['Float'];
  seed: Scalars['Float'];
}>;


export type RecipeByCategoryQuery = { __typename?: 'Query', recipeByCategory: Array<{ __typename?: 'Recipe', id: string, name: string, total?: string | null | undefined, image: string }> };

export type RecipeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type RecipeQuery = { __typename?: 'Query', recipe: { __typename?: 'RecipeItemResponse', status: boolean, message?: string | null | undefined, recipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null | undefined, serving?: number | null | undefined, image: string, cook?: string | null | undefined, prep?: string | null | undefined, total?: string | null | undefined, healthlabel: Array<{ __typename?: 'RecipeHealthLabel', label: string }> } | null | undefined, ingredients?: Array<{ __typename?: 'TranslatedIngredient', unit?: string | null | undefined, raw: string, amount?: number | null | undefined, ingredients?: string | null | undefined, es: { __typename?: 'IngredientLang', unit?: string | null | undefined, ingredient?: string | null | undefined }, fr: { __typename?: 'IngredientLang', unit?: string | null | undefined, ingredient?: string | null | undefined }, ar: { __typename?: 'IngredientLang', unit?: string | null | undefined, ingredient?: string | null | undefined } }> | null | undefined, instructions?: Array<{ __typename?: 'TranslatedInstruction', id: string, raw: string, index: number, es?: string | null | undefined, ar?: string | null | undefined, fr?: string | null | undefined }> | null | undefined } };

export type RecommendedRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecommendedRecipesQuery = { __typename?: 'Query', recommendedRecipes: Array<{ __typename?: 'Recipe', id: string, name: string, image: string }> };

export type ReportRecipeMutationVariables = Exact<{
  recipe_id: Scalars['String'];
}>;


export type ReportRecipeMutation = { __typename?: 'Mutation', reportRecipe: { __typename?: 'ReportRecipeResponse', status: boolean, message: string } };

export type SearchRecipesQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type SearchRecipesQuery = { __typename?: 'Query', searchRecipes: { __typename?: 'SearchResultResponse', recipes: Array<{ __typename?: 'Recipe', id: string, name: string, total?: string | null | undefined, image: string }>, ingredients: Array<{ __typename?: 'Ingredient', recipe: { __typename?: 'Recipe', id: string, name: string, total?: string | null | undefined, image: string } }>, nutritients: Array<{ __typename?: 'RecipeTotalNutrition', recipe: { __typename?: 'Recipe', id: string, name: string, total?: string | null | undefined, image: string } }> } };

export type RecordCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecordCategoriesQuery = { __typename?: 'Query', recordCategories: Array<{ __typename?: 'RecordCategory', id: string, name: string, icon: string, unit: string }> };

export type CreateRecordMutationVariables = Exact<{
  value: Scalars['Float'];
  category: Scalars['Float'];
  time: Scalars['DateTime'];
  date: Scalars['DateTime'];
}>;


export type CreateRecordMutation = { __typename?: 'Mutation', createRecord: { __typename?: 'CreateRecordResponse', status: boolean, message: string, record: { __typename?: 'Record', id: string, value: number, time: any, date: any } } };

export type RecordsQueryVariables = Exact<{
  category: Scalars['Float'];
}>;


export type RecordsQuery = { __typename?: 'Query', records: { __typename?: 'ListRecordsResponse', status: boolean, message?: string | null | undefined, records?: Array<{ __typename?: 'Record', id: string, time: any, value: number, date: any, category: { __typename?: 'RecordCategory', id: string, name: string, unit: string } }> | null | undefined } };

export type LanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type LanguagesQuery = { __typename?: 'Query', languages: Array<{ __typename?: 'LanguagesResponse', name: string, id: string }> };

export type CheckInfoValidtyMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
}>;


export type CheckInfoValidtyMutation = { __typename?: 'Mutation', checkInfoValidity: { __typename?: 'UserInfoValidityResponse', email: boolean, username: boolean } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, username: string, email: string, weight: number, height: number, gender: string, birth: any } | null | undefined };

export type ChangePasswordMutationVariables = Exact<{
  oldpass: Scalars['String'];
  newpass: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'ChangePasswordResponse', status: boolean, message?: string | null | undefined } };

export type SpecialConditionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SpecialConditionsQuery = { __typename?: 'Query', specialconditions: Array<{ __typename?: 'SpecialCondition', id: string, name: string }> };

export type UpdateUserInfoMutationVariables = Exact<{
  name: Scalars['String'];
  weight: Scalars['Float'];
  height: Scalars['Float'];
}>;


export type UpdateUserInfoMutation = { __typename?: 'Mutation', updateInfo: { __typename?: 'DefaultResponse', status: boolean, message?: string | null | undefined } };


export const IsAccountVerifiedDocument = gql`
    query IsAccountVerified {
  isAccountVerified {
    status
    title
    message
  }
}
    `;

/**
 * __useIsAccountVerifiedQuery__
 *
 * To run a query within a React component, call `useIsAccountVerifiedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsAccountVerifiedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsAccountVerifiedQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsAccountVerifiedQuery(baseOptions?: Apollo.QueryHookOptions<IsAccountVerifiedQuery, IsAccountVerifiedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsAccountVerifiedQuery, IsAccountVerifiedQueryVariables>(IsAccountVerifiedDocument, options);
      }
export function useIsAccountVerifiedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsAccountVerifiedQuery, IsAccountVerifiedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsAccountVerifiedQuery, IsAccountVerifiedQueryVariables>(IsAccountVerifiedDocument, options);
        }
export type IsAccountVerifiedQueryHookResult = ReturnType<typeof useIsAccountVerifiedQuery>;
export type IsAccountVerifiedLazyQueryHookResult = ReturnType<typeof useIsAccountVerifiedLazyQuery>;
export type IsAccountVerifiedQueryResult = Apollo.QueryResult<IsAccountVerifiedQuery, IsAccountVerifiedQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    status
    message
    token
    rToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($name: String!, $email: String!, $username: String!, $password: String!, $birth: DateTime!, $bmi: Float!, $gender: String!, $height: Float!, $weight: Float!, $sc: [String!]!) {
  register(
    data: {name: $name, email: $email, username: $username, password: $password, birth: $birth, bmi: $bmi, gender: $gender, height: $height, weight: $weight, sc: $sc}
  ) {
    status
    message
    token
    rToken
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      birth: // value for 'birth'
 *      bmi: // value for 'bmi'
 *      gender: // value for 'gender'
 *      height: // value for 'height'
 *      weight: // value for 'weight'
 *      sc: // value for 'sc'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ResendAccountVerificationDocument = gql`
    mutation ResendAccountVerification {
  resendAccountVerification {
    status
    message
  }
}
    `;
export type ResendAccountVerificationMutationFn = Apollo.MutationFunction<ResendAccountVerificationMutation, ResendAccountVerificationMutationVariables>;

/**
 * __useResendAccountVerificationMutation__
 *
 * To run a mutation, you first call `useResendAccountVerificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendAccountVerificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendAccountVerificationMutation, { data, loading, error }] = useResendAccountVerificationMutation({
 *   variables: {
 *   },
 * });
 */
export function useResendAccountVerificationMutation(baseOptions?: Apollo.MutationHookOptions<ResendAccountVerificationMutation, ResendAccountVerificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResendAccountVerificationMutation, ResendAccountVerificationMutationVariables>(ResendAccountVerificationDocument, options);
      }
export type ResendAccountVerificationMutationHookResult = ReturnType<typeof useResendAccountVerificationMutation>;
export type ResendAccountVerificationMutationResult = Apollo.MutationResult<ResendAccountVerificationMutation>;
export type ResendAccountVerificationMutationOptions = Apollo.BaseMutationOptions<ResendAccountVerificationMutation, ResendAccountVerificationMutationVariables>;
export const ActiveFoodFiltersDocument = gql`
    query ActiveFoodFilters {
  activeFoodFilters {
    id
    label
  }
}
    `;

/**
 * __useActiveFoodFiltersQuery__
 *
 * To run a query within a React component, call `useActiveFoodFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveFoodFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveFoodFiltersQuery({
 *   variables: {
 *   },
 * });
 */
export function useActiveFoodFiltersQuery(baseOptions?: Apollo.QueryHookOptions<ActiveFoodFiltersQuery, ActiveFoodFiltersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActiveFoodFiltersQuery, ActiveFoodFiltersQueryVariables>(ActiveFoodFiltersDocument, options);
      }
export function useActiveFoodFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveFoodFiltersQuery, ActiveFoodFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActiveFoodFiltersQuery, ActiveFoodFiltersQueryVariables>(ActiveFoodFiltersDocument, options);
        }
export type ActiveFoodFiltersQueryHookResult = ReturnType<typeof useActiveFoodFiltersQuery>;
export type ActiveFoodFiltersLazyQueryHookResult = ReturnType<typeof useActiveFoodFiltersLazyQuery>;
export type ActiveFoodFiltersQueryResult = Apollo.QueryResult<ActiveFoodFiltersQuery, ActiveFoodFiltersQueryVariables>;
export const ConfigDietDocument = gql`
    mutation ConfigDiet($factor: Float!, $fat: Float!, $carbs: Float!, $protein: Float!, $filters: [String!]!, $weight: Float!, $height: Float!) {
  configDiet(
    data: {activity_factor: $factor, fat: $fat, carbs: $carbs, protein: $protein, filters: $filters, weight: $weight, height: $height}
  ) {
    status
    message
    data {
      config {
        id
        activityFactor
        fat
        carbs
        protein
      }
      status
      filters {
        id
        label
      }
    }
    macros {
      ree
      tdee
    }
  }
}
    `;
export type ConfigDietMutationFn = Apollo.MutationFunction<ConfigDietMutation, ConfigDietMutationVariables>;

/**
 * __useConfigDietMutation__
 *
 * To run a mutation, you first call `useConfigDietMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfigDietMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [configDietMutation, { data, loading, error }] = useConfigDietMutation({
 *   variables: {
 *      factor: // value for 'factor'
 *      fat: // value for 'fat'
 *      carbs: // value for 'carbs'
 *      protein: // value for 'protein'
 *      filters: // value for 'filters'
 *      weight: // value for 'weight'
 *      height: // value for 'height'
 *   },
 * });
 */
export function useConfigDietMutation(baseOptions?: Apollo.MutationHookOptions<ConfigDietMutation, ConfigDietMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfigDietMutation, ConfigDietMutationVariables>(ConfigDietDocument, options);
      }
export type ConfigDietMutationHookResult = ReturnType<typeof useConfigDietMutation>;
export type ConfigDietMutationResult = Apollo.MutationResult<ConfigDietMutation>;
export type ConfigDietMutationOptions = Apollo.BaseMutationOptions<ConfigDietMutation, ConfigDietMutationVariables>;
export const GetDietConfigDocument = gql`
    query GetDietConfig {
  getDietConfig {
    config {
      id
      activityFactor
      fat
      carbs
      protein
    }
    status
    filters {
      id
      label
    }
  }
}
    `;

/**
 * __useGetDietConfigQuery__
 *
 * To run a query within a React component, call `useGetDietConfigQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDietConfigQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDietConfigQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDietConfigQuery(baseOptions?: Apollo.QueryHookOptions<GetDietConfigQuery, GetDietConfigQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDietConfigQuery, GetDietConfigQueryVariables>(GetDietConfigDocument, options);
      }
export function useGetDietConfigLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDietConfigQuery, GetDietConfigQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDietConfigQuery, GetDietConfigQueryVariables>(GetDietConfigDocument, options);
        }
export type GetDietConfigQueryHookResult = ReturnType<typeof useGetDietConfigQuery>;
export type GetDietConfigLazyQueryHookResult = ReturnType<typeof useGetDietConfigLazyQuery>;
export type GetDietConfigQueryResult = Apollo.QueryResult<GetDietConfigQuery, GetDietConfigQueryVariables>;
export const HealthLabelsDocument = gql`
    query HealthLabels {
  healthLabels {
    id
    label
    description
    count
  }
}
    `;

/**
 * __useHealthLabelsQuery__
 *
 * To run a query within a React component, call `useHealthLabelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHealthLabelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHealthLabelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHealthLabelsQuery(baseOptions?: Apollo.QueryHookOptions<HealthLabelsQuery, HealthLabelsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HealthLabelsQuery, HealthLabelsQueryVariables>(HealthLabelsDocument, options);
      }
export function useHealthLabelsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HealthLabelsQuery, HealthLabelsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HealthLabelsQuery, HealthLabelsQueryVariables>(HealthLabelsDocument, options);
        }
export type HealthLabelsQueryHookResult = ReturnType<typeof useHealthLabelsQuery>;
export type HealthLabelsLazyQueryHookResult = ReturnType<typeof useHealthLabelsLazyQuery>;
export type HealthLabelsQueryResult = Apollo.QueryResult<HealthLabelsQuery, HealthLabelsQueryVariables>;
export const MacrosDocument = gql`
    query Macros {
  macros {
    status
    ree
    tdee
  }
}
    `;

/**
 * __useMacrosQuery__
 *
 * To run a query within a React component, call `useMacrosQuery` and pass it any options that fit your needs.
 * When your component renders, `useMacrosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMacrosQuery({
 *   variables: {
 *   },
 * });
 */
export function useMacrosQuery(baseOptions?: Apollo.QueryHookOptions<MacrosQuery, MacrosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MacrosQuery, MacrosQueryVariables>(MacrosDocument, options);
      }
export function useMacrosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MacrosQuery, MacrosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MacrosQuery, MacrosQueryVariables>(MacrosDocument, options);
        }
export type MacrosQueryHookResult = ReturnType<typeof useMacrosQuery>;
export type MacrosLazyQueryHookResult = ReturnType<typeof useMacrosLazyQuery>;
export type MacrosQueryResult = Apollo.QueryResult<MacrosQuery, MacrosQueryVariables>;
export const CreateDietRecordDocument = gql`
    mutation CreateDietRecord($value: Float!, $unit: String!, $type: String!, $time: DateTime!) {
  createDietRecord(data: {value: $value, unit: $unit, type: $type, time: $time}) {
    status
    message
  }
}
    `;
export type CreateDietRecordMutationFn = Apollo.MutationFunction<CreateDietRecordMutation, CreateDietRecordMutationVariables>;

/**
 * __useCreateDietRecordMutation__
 *
 * To run a mutation, you first call `useCreateDietRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDietRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDietRecordMutation, { data, loading, error }] = useCreateDietRecordMutation({
 *   variables: {
 *      value: // value for 'value'
 *      unit: // value for 'unit'
 *      type: // value for 'type'
 *      time: // value for 'time'
 *   },
 * });
 */
export function useCreateDietRecordMutation(baseOptions?: Apollo.MutationHookOptions<CreateDietRecordMutation, CreateDietRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDietRecordMutation, CreateDietRecordMutationVariables>(CreateDietRecordDocument, options);
      }
export type CreateDietRecordMutationHookResult = ReturnType<typeof useCreateDietRecordMutation>;
export type CreateDietRecordMutationResult = Apollo.MutationResult<CreateDietRecordMutation>;
export type CreateDietRecordMutationOptions = Apollo.BaseMutationOptions<CreateDietRecordMutation, CreateDietRecordMutationVariables>;
export const SaveFoodFiltersDocument = gql`
    mutation SaveFoodFilters($filters: [String!]!) {
  saveFoodFilters(data: $filters) {
    id
    label
  }
}
    `;
export type SaveFoodFiltersMutationFn = Apollo.MutationFunction<SaveFoodFiltersMutation, SaveFoodFiltersMutationVariables>;

/**
 * __useSaveFoodFiltersMutation__
 *
 * To run a mutation, you first call `useSaveFoodFiltersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveFoodFiltersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveFoodFiltersMutation, { data, loading, error }] = useSaveFoodFiltersMutation({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useSaveFoodFiltersMutation(baseOptions?: Apollo.MutationHookOptions<SaveFoodFiltersMutation, SaveFoodFiltersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveFoodFiltersMutation, SaveFoodFiltersMutationVariables>(SaveFoodFiltersDocument, options);
      }
export type SaveFoodFiltersMutationHookResult = ReturnType<typeof useSaveFoodFiltersMutation>;
export type SaveFoodFiltersMutationResult = Apollo.MutationResult<SaveFoodFiltersMutation>;
export type SaveFoodFiltersMutationOptions = Apollo.BaseMutationOptions<SaveFoodFiltersMutation, SaveFoodFiltersMutationVariables>;
export const TrackCaloriesDocument = gql`
    query TrackCalories {
  trackCalories {
    value
    date
  }
}
    `;

/**
 * __useTrackCaloriesQuery__
 *
 * To run a query within a React component, call `useTrackCaloriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackCaloriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackCaloriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrackCaloriesQuery(baseOptions?: Apollo.QueryHookOptions<TrackCaloriesQuery, TrackCaloriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackCaloriesQuery, TrackCaloriesQueryVariables>(TrackCaloriesDocument, options);
      }
export function useTrackCaloriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackCaloriesQuery, TrackCaloriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackCaloriesQuery, TrackCaloriesQueryVariables>(TrackCaloriesDocument, options);
        }
export type TrackCaloriesQueryHookResult = ReturnType<typeof useTrackCaloriesQuery>;
export type TrackCaloriesLazyQueryHookResult = ReturnType<typeof useTrackCaloriesLazyQuery>;
export type TrackCaloriesQueryResult = Apollo.QueryResult<TrackCaloriesQuery, TrackCaloriesQueryVariables>;
export const TrackMacronutrientsDocument = gql`
    query TrackMacronutrients {
  trackMacronutrients {
    fat
    carbs
    protein
    date
  }
}
    `;

/**
 * __useTrackMacronutrientsQuery__
 *
 * To run a query within a React component, call `useTrackMacronutrientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackMacronutrientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackMacronutrientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrackMacronutrientsQuery(baseOptions?: Apollo.QueryHookOptions<TrackMacronutrientsQuery, TrackMacronutrientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackMacronutrientsQuery, TrackMacronutrientsQueryVariables>(TrackMacronutrientsDocument, options);
      }
export function useTrackMacronutrientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackMacronutrientsQuery, TrackMacronutrientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackMacronutrientsQuery, TrackMacronutrientsQueryVariables>(TrackMacronutrientsDocument, options);
        }
export type TrackMacronutrientsQueryHookResult = ReturnType<typeof useTrackMacronutrientsQuery>;
export type TrackMacronutrientsLazyQueryHookResult = ReturnType<typeof useTrackMacronutrientsLazyQuery>;
export type TrackMacronutrientsQueryResult = Apollo.QueryResult<TrackMacronutrientsQuery, TrackMacronutrientsQueryVariables>;
export const TrackWeightDocument = gql`
    query TrackWeight {
  trackWeight {
    value
    date
  }
}
    `;

/**
 * __useTrackWeightQuery__
 *
 * To run a query within a React component, call `useTrackWeightQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackWeightQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackWeightQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrackWeightQuery(baseOptions?: Apollo.QueryHookOptions<TrackWeightQuery, TrackWeightQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackWeightQuery, TrackWeightQueryVariables>(TrackWeightDocument, options);
      }
export function useTrackWeightLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackWeightQuery, TrackWeightQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackWeightQuery, TrackWeightQueryVariables>(TrackWeightDocument, options);
        }
export type TrackWeightQueryHookResult = ReturnType<typeof useTrackWeightQuery>;
export type TrackWeightLazyQueryHookResult = ReturnType<typeof useTrackWeightLazyQuery>;
export type TrackWeightQueryResult = Apollo.QueryResult<TrackWeightQuery, TrackWeightQueryVariables>;
export const IsRequestedDocument = gql`
    query IsRequested($service: String!) {
  isRequested(service: $service)
}
    `;

/**
 * __useIsRequestedQuery__
 *
 * To run a query within a React component, call `useIsRequestedQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsRequestedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsRequestedQuery({
 *   variables: {
 *      service: // value for 'service'
 *   },
 * });
 */
export function useIsRequestedQuery(baseOptions: Apollo.QueryHookOptions<IsRequestedQuery, IsRequestedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsRequestedQuery, IsRequestedQueryVariables>(IsRequestedDocument, options);
      }
export function useIsRequestedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsRequestedQuery, IsRequestedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsRequestedQuery, IsRequestedQueryVariables>(IsRequestedDocument, options);
        }
export type IsRequestedQueryHookResult = ReturnType<typeof useIsRequestedQuery>;
export type IsRequestedLazyQueryHookResult = ReturnType<typeof useIsRequestedLazyQuery>;
export type IsRequestedQueryResult = Apollo.QueryResult<IsRequestedQuery, IsRequestedQueryVariables>;
export const RequestEarlyAccessDocument = gql`
    mutation RequestEarlyAccess($service: String!) {
  requestEarlyAccess(service: $service)
}
    `;
export type RequestEarlyAccessMutationFn = Apollo.MutationFunction<RequestEarlyAccessMutation, RequestEarlyAccessMutationVariables>;

/**
 * __useRequestEarlyAccessMutation__
 *
 * To run a mutation, you first call `useRequestEarlyAccessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestEarlyAccessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestEarlyAccessMutation, { data, loading, error }] = useRequestEarlyAccessMutation({
 *   variables: {
 *      service: // value for 'service'
 *   },
 * });
 */
export function useRequestEarlyAccessMutation(baseOptions?: Apollo.MutationHookOptions<RequestEarlyAccessMutation, RequestEarlyAccessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestEarlyAccessMutation, RequestEarlyAccessMutationVariables>(RequestEarlyAccessDocument, options);
      }
export type RequestEarlyAccessMutationHookResult = ReturnType<typeof useRequestEarlyAccessMutation>;
export type RequestEarlyAccessMutationResult = Apollo.MutationResult<RequestEarlyAccessMutation>;
export type RequestEarlyAccessMutationOptions = Apollo.BaseMutationOptions<RequestEarlyAccessMutation, RequestEarlyAccessMutationVariables>;
export const GroceryCountDocument = gql`
    query GroceryCount {
  groceryCount
}
    `;

/**
 * __useGroceryCountQuery__
 *
 * To run a query within a React component, call `useGroceryCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroceryCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroceryCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGroceryCountQuery(baseOptions?: Apollo.QueryHookOptions<GroceryCountQuery, GroceryCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroceryCountQuery, GroceryCountQueryVariables>(GroceryCountDocument, options);
      }
export function useGroceryCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroceryCountQuery, GroceryCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroceryCountQuery, GroceryCountQueryVariables>(GroceryCountDocument, options);
        }
export type GroceryCountQueryHookResult = ReturnType<typeof useGroceryCountQuery>;
export type GroceryCountLazyQueryHookResult = ReturnType<typeof useGroceryCountLazyQuery>;
export type GroceryCountQueryResult = Apollo.QueryResult<GroceryCountQuery, GroceryCountQueryVariables>;
export const GroceryDocument = gql`
    query Grocery {
  grocery {
    id
    unit
    amount
    ingredients
  }
}
    `;

/**
 * __useGroceryQuery__
 *
 * To run a query within a React component, call `useGroceryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroceryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroceryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGroceryQuery(baseOptions?: Apollo.QueryHookOptions<GroceryQuery, GroceryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroceryQuery, GroceryQueryVariables>(GroceryDocument, options);
      }
export function useGroceryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroceryQuery, GroceryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroceryQuery, GroceryQueryVariables>(GroceryDocument, options);
        }
export type GroceryQueryHookResult = ReturnType<typeof useGroceryQuery>;
export type GroceryLazyQueryHookResult = ReturnType<typeof useGroceryLazyQuery>;
export type GroceryQueryResult = Apollo.QueryResult<GroceryQuery, GroceryQueryVariables>;
export const CheckCookedMealDocument = gql`
    mutation CheckCookedMeal($mealrecipesID: [String!]!) {
  checkCookedMeal(mealRecipesID: $mealrecipesID) {
    status
    message
  }
}
    `;
export type CheckCookedMealMutationFn = Apollo.MutationFunction<CheckCookedMealMutation, CheckCookedMealMutationVariables>;

/**
 * __useCheckCookedMealMutation__
 *
 * To run a mutation, you first call `useCheckCookedMealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckCookedMealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkCookedMealMutation, { data, loading, error }] = useCheckCookedMealMutation({
 *   variables: {
 *      mealrecipesID: // value for 'mealrecipesID'
 *   },
 * });
 */
export function useCheckCookedMealMutation(baseOptions?: Apollo.MutationHookOptions<CheckCookedMealMutation, CheckCookedMealMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckCookedMealMutation, CheckCookedMealMutationVariables>(CheckCookedMealDocument, options);
      }
export type CheckCookedMealMutationHookResult = ReturnType<typeof useCheckCookedMealMutation>;
export type CheckCookedMealMutationResult = Apollo.MutationResult<CheckCookedMealMutation>;
export type CheckCookedMealMutationOptions = Apollo.BaseMutationOptions<CheckCookedMealMutation, CheckCookedMealMutationVariables>;
export const CookedRecipesDocument = gql`
    mutation CookedRecipes($mealrecipesid: [String!]!) {
  cookedRecipes(mealRecipesID: $mealrecipesid) {
    status
    message
    calories
  }
}
    `;
export type CookedRecipesMutationFn = Apollo.MutationFunction<CookedRecipesMutation, CookedRecipesMutationVariables>;

/**
 * __useCookedRecipesMutation__
 *
 * To run a mutation, you first call `useCookedRecipesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCookedRecipesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cookedRecipesMutation, { data, loading, error }] = useCookedRecipesMutation({
 *   variables: {
 *      mealrecipesid: // value for 'mealrecipesid'
 *   },
 * });
 */
export function useCookedRecipesMutation(baseOptions?: Apollo.MutationHookOptions<CookedRecipesMutation, CookedRecipesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CookedRecipesMutation, CookedRecipesMutationVariables>(CookedRecipesDocument, options);
      }
export type CookedRecipesMutationHookResult = ReturnType<typeof useCookedRecipesMutation>;
export type CookedRecipesMutationResult = Apollo.MutationResult<CookedRecipesMutation>;
export type CookedRecipesMutationOptions = Apollo.BaseMutationOptions<CookedRecipesMutation, CookedRecipesMutationVariables>;
export const AddMealRecipeDocument = gql`
    mutation AddMealRecipe($recipe: String!, $meal: String!, $date: DateTime) {
  addMealRecipe(data: {recipeID: $recipe, mealID: $meal, date: $date}) {
    status
    message
    mealId
  }
}
    `;
export type AddMealRecipeMutationFn = Apollo.MutationFunction<AddMealRecipeMutation, AddMealRecipeMutationVariables>;

/**
 * __useAddMealRecipeMutation__
 *
 * To run a mutation, you first call `useAddMealRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMealRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMealRecipeMutation, { data, loading, error }] = useAddMealRecipeMutation({
 *   variables: {
 *      recipe: // value for 'recipe'
 *      meal: // value for 'meal'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useAddMealRecipeMutation(baseOptions?: Apollo.MutationHookOptions<AddMealRecipeMutation, AddMealRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMealRecipeMutation, AddMealRecipeMutationVariables>(AddMealRecipeDocument, options);
      }
export type AddMealRecipeMutationHookResult = ReturnType<typeof useAddMealRecipeMutation>;
export type AddMealRecipeMutationResult = Apollo.MutationResult<AddMealRecipeMutation>;
export type AddMealRecipeMutationOptions = Apollo.BaseMutationOptions<AddMealRecipeMutation, AddMealRecipeMutationVariables>;
export const DaysWithRecipesDocument = gql`
    query DaysWithRecipes($mealID: String!) {
  daysWithRecipes(mealID: $mealID) {
    status
    message
    markedDates {
      date
      count
    }
  }
}
    `;

/**
 * __useDaysWithRecipesQuery__
 *
 * To run a query within a React component, call `useDaysWithRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useDaysWithRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDaysWithRecipesQuery({
 *   variables: {
 *      mealID: // value for 'mealID'
 *   },
 * });
 */
export function useDaysWithRecipesQuery(baseOptions: Apollo.QueryHookOptions<DaysWithRecipesQuery, DaysWithRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DaysWithRecipesQuery, DaysWithRecipesQueryVariables>(DaysWithRecipesDocument, options);
      }
export function useDaysWithRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DaysWithRecipesQuery, DaysWithRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DaysWithRecipesQuery, DaysWithRecipesQueryVariables>(DaysWithRecipesDocument, options);
        }
export type DaysWithRecipesQueryHookResult = ReturnType<typeof useDaysWithRecipesQuery>;
export type DaysWithRecipesLazyQueryHookResult = ReturnType<typeof useDaysWithRecipesLazyQuery>;
export type DaysWithRecipesQueryResult = Apollo.QueryResult<DaysWithRecipesQuery, DaysWithRecipesQueryVariables>;
export const GetMealRecipesDocument = gql`
    query GetMealRecipes($meal: String!, $date: DateTime!) {
  getMealRecipes(data: {date: $date, meal: $meal}) {
    status
    message
    time
    calories
    cooked
    recipes {
      id
      name
      total
      image
    }
    ingredients {
      id
      amount
      unit
      ingredients
    }
    mealrecipes {
      id
      recipe {
        id
      }
    }
  }
}
    `;

/**
 * __useGetMealRecipesQuery__
 *
 * To run a query within a React component, call `useGetMealRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMealRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMealRecipesQuery({
 *   variables: {
 *      meal: // value for 'meal'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetMealRecipesQuery(baseOptions: Apollo.QueryHookOptions<GetMealRecipesQuery, GetMealRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMealRecipesQuery, GetMealRecipesQueryVariables>(GetMealRecipesDocument, options);
      }
export function useGetMealRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMealRecipesQuery, GetMealRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMealRecipesQuery, GetMealRecipesQueryVariables>(GetMealRecipesDocument, options);
        }
export type GetMealRecipesQueryHookResult = ReturnType<typeof useGetMealRecipesQuery>;
export type GetMealRecipesLazyQueryHookResult = ReturnType<typeof useGetMealRecipesLazyQuery>;
export type GetMealRecipesQueryResult = Apollo.QueryResult<GetMealRecipesQuery, GetMealRecipesQueryVariables>;
export const MealsDocument = gql`
    query Meals {
  meals {
    id
    name
    index
    count
  }
}
    `;

/**
 * __useMealsQuery__
 *
 * To run a query within a React component, call `useMealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMealsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMealsQuery(baseOptions?: Apollo.QueryHookOptions<MealsQuery, MealsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MealsQuery, MealsQueryVariables>(MealsDocument, options);
      }
export function useMealsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MealsQuery, MealsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MealsQuery, MealsQueryVariables>(MealsDocument, options);
        }
export type MealsQueryHookResult = ReturnType<typeof useMealsQuery>;
export type MealsLazyQueryHookResult = ReturnType<typeof useMealsLazyQuery>;
export type MealsQueryResult = Apollo.QueryResult<MealsQuery, MealsQueryVariables>;
export const MealNutritionDocument = gql`
    query MealNutrition($date: DateTime!, $meal: String!) {
  mealNutrition(data: {date: $date, meal: $meal}) {
    status
    message
    nutrition {
      quantity
      label
      unit
    }
  }
}
    `;

/**
 * __useMealNutritionQuery__
 *
 * To run a query within a React component, call `useMealNutritionQuery` and pass it any options that fit your needs.
 * When your component renders, `useMealNutritionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMealNutritionQuery({
 *   variables: {
 *      date: // value for 'date'
 *      meal: // value for 'meal'
 *   },
 * });
 */
export function useMealNutritionQuery(baseOptions: Apollo.QueryHookOptions<MealNutritionQuery, MealNutritionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MealNutritionQuery, MealNutritionQueryVariables>(MealNutritionDocument, options);
      }
export function useMealNutritionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MealNutritionQuery, MealNutritionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MealNutritionQuery, MealNutritionQueryVariables>(MealNutritionDocument, options);
        }
export type MealNutritionQueryHookResult = ReturnType<typeof useMealNutritionQuery>;
export type MealNutritionLazyQueryHookResult = ReturnType<typeof useMealNutritionLazyQuery>;
export type MealNutritionQueryResult = Apollo.QueryResult<MealNutritionQuery, MealNutritionQueryVariables>;
export const RemoveRecipeDocument = gql`
    mutation RemoveRecipe($mealid: String!, $recipeid: String!) {
  removeRecipe(data: {mealid: $mealid, recipeid: $recipeid}) {
    status
    message
  }
}
    `;
export type RemoveRecipeMutationFn = Apollo.MutationFunction<RemoveRecipeMutation, RemoveRecipeMutationVariables>;

/**
 * __useRemoveRecipeMutation__
 *
 * To run a mutation, you first call `useRemoveRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeRecipeMutation, { data, loading, error }] = useRemoveRecipeMutation({
 *   variables: {
 *      mealid: // value for 'mealid'
 *      recipeid: // value for 'recipeid'
 *   },
 * });
 */
export function useRemoveRecipeMutation(baseOptions?: Apollo.MutationHookOptions<RemoveRecipeMutation, RemoveRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveRecipeMutation, RemoveRecipeMutationVariables>(RemoveRecipeDocument, options);
      }
export type RemoveRecipeMutationHookResult = ReturnType<typeof useRemoveRecipeMutation>;
export type RemoveRecipeMutationResult = Apollo.MutationResult<RemoveRecipeMutation>;
export type RemoveRecipeMutationOptions = Apollo.BaseMutationOptions<RemoveRecipeMutation, RemoveRecipeMutationVariables>;
export const CreateMoodRecordDocument = gql`
    mutation CreateMoodRecord($moods: [String!]!) {
  createMoodRecord(data: {moods: $moods}) {
    status
    message
  }
}
    `;
export type CreateMoodRecordMutationFn = Apollo.MutationFunction<CreateMoodRecordMutation, CreateMoodRecordMutationVariables>;

/**
 * __useCreateMoodRecordMutation__
 *
 * To run a mutation, you first call `useCreateMoodRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMoodRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMoodRecordMutation, { data, loading, error }] = useCreateMoodRecordMutation({
 *   variables: {
 *      moods: // value for 'moods'
 *   },
 * });
 */
export function useCreateMoodRecordMutation(baseOptions?: Apollo.MutationHookOptions<CreateMoodRecordMutation, CreateMoodRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMoodRecordMutation, CreateMoodRecordMutationVariables>(CreateMoodRecordDocument, options);
      }
export type CreateMoodRecordMutationHookResult = ReturnType<typeof useCreateMoodRecordMutation>;
export type CreateMoodRecordMutationResult = Apollo.MutationResult<CreateMoodRecordMutation>;
export type CreateMoodRecordMutationOptions = Apollo.BaseMutationOptions<CreateMoodRecordMutation, CreateMoodRecordMutationVariables>;
export const MoodOverviewDocument = gql`
    query MoodOverview {
  moodOverview {
    status
    message
    data {
      name
      id
      icon
      percent
    }
  }
}
    `;

/**
 * __useMoodOverviewQuery__
 *
 * To run a query within a React component, call `useMoodOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoodOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoodOverviewQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoodOverviewQuery(baseOptions?: Apollo.QueryHookOptions<MoodOverviewQuery, MoodOverviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoodOverviewQuery, MoodOverviewQueryVariables>(MoodOverviewDocument, options);
      }
export function useMoodOverviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoodOverviewQuery, MoodOverviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoodOverviewQuery, MoodOverviewQueryVariables>(MoodOverviewDocument, options);
        }
export type MoodOverviewQueryHookResult = ReturnType<typeof useMoodOverviewQuery>;
export type MoodOverviewLazyQueryHookResult = ReturnType<typeof useMoodOverviewLazyQuery>;
export type MoodOverviewQueryResult = Apollo.QueryResult<MoodOverviewQuery, MoodOverviewQueryVariables>;
export const MoodsDocument = gql`
    query Moods {
  moods {
    id
    name
    icon
  }
}
    `;

/**
 * __useMoodsQuery__
 *
 * To run a query within a React component, call `useMoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoodsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoodsQuery(baseOptions?: Apollo.QueryHookOptions<MoodsQuery, MoodsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoodsQuery, MoodsQueryVariables>(MoodsDocument, options);
      }
export function useMoodsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoodsQuery, MoodsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoodsQuery, MoodsQueryVariables>(MoodsDocument, options);
        }
export type MoodsQueryHookResult = ReturnType<typeof useMoodsQuery>;
export type MoodsLazyQueryHookResult = ReturnType<typeof useMoodsLazyQuery>;
export type MoodsQueryResult = Apollo.QueryResult<MoodsQuery, MoodsQueryVariables>;
export const UserCaloriesDocument = gql`
    query UserCalories {
  userCalories {
    status
    message
    target
    value
    burnt
  }
}
    `;

/**
 * __useUserCaloriesQuery__
 *
 * To run a query within a React component, call `useUserCaloriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCaloriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCaloriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserCaloriesQuery(baseOptions?: Apollo.QueryHookOptions<UserCaloriesQuery, UserCaloriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserCaloriesQuery, UserCaloriesQueryVariables>(UserCaloriesDocument, options);
      }
export function useUserCaloriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCaloriesQuery, UserCaloriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserCaloriesQuery, UserCaloriesQueryVariables>(UserCaloriesDocument, options);
        }
export type UserCaloriesQueryHookResult = ReturnType<typeof useUserCaloriesQuery>;
export type UserCaloriesLazyQueryHookResult = ReturnType<typeof useUserCaloriesLazyQuery>;
export type UserCaloriesQueryResult = Apollo.QueryResult<UserCaloriesQuery, UserCaloriesQueryVariables>;
export const NutritionCategoryItemsDocument = gql`
    query NutritionCategoryItems($cat_id: String!) {
  nutritionCategoryItems(cat_id: $cat_id) {
    code
    name
    recommended
    intake
    unit
  }
}
    `;

/**
 * __useNutritionCategoryItemsQuery__
 *
 * To run a query within a React component, call `useNutritionCategoryItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNutritionCategoryItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNutritionCategoryItemsQuery({
 *   variables: {
 *      cat_id: // value for 'cat_id'
 *   },
 * });
 */
export function useNutritionCategoryItemsQuery(baseOptions: Apollo.QueryHookOptions<NutritionCategoryItemsQuery, NutritionCategoryItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NutritionCategoryItemsQuery, NutritionCategoryItemsQueryVariables>(NutritionCategoryItemsDocument, options);
      }
export function useNutritionCategoryItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NutritionCategoryItemsQuery, NutritionCategoryItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NutritionCategoryItemsQuery, NutritionCategoryItemsQueryVariables>(NutritionCategoryItemsDocument, options);
        }
export type NutritionCategoryItemsQueryHookResult = ReturnType<typeof useNutritionCategoryItemsQuery>;
export type NutritionCategoryItemsLazyQueryHookResult = ReturnType<typeof useNutritionCategoryItemsLazyQuery>;
export type NutritionCategoryItemsQueryResult = Apollo.QueryResult<NutritionCategoryItemsQuery, NutritionCategoryItemsQueryVariables>;
export const NutritionIntakeChartDocument = gql`
    query NutritionIntakeChart($code: String!) {
  nutritionIntakeChart(code: $code) {
    date
    intake
  }
}
    `;

/**
 * __useNutritionIntakeChartQuery__
 *
 * To run a query within a React component, call `useNutritionIntakeChartQuery` and pass it any options that fit your needs.
 * When your component renders, `useNutritionIntakeChartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNutritionIntakeChartQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useNutritionIntakeChartQuery(baseOptions: Apollo.QueryHookOptions<NutritionIntakeChartQuery, NutritionIntakeChartQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NutritionIntakeChartQuery, NutritionIntakeChartQueryVariables>(NutritionIntakeChartDocument, options);
      }
export function useNutritionIntakeChartLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NutritionIntakeChartQuery, NutritionIntakeChartQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NutritionIntakeChartQuery, NutritionIntakeChartQueryVariables>(NutritionIntakeChartDocument, options);
        }
export type NutritionIntakeChartQueryHookResult = ReturnType<typeof useNutritionIntakeChartQuery>;
export type NutritionIntakeChartLazyQueryHookResult = ReturnType<typeof useNutritionIntakeChartLazyQuery>;
export type NutritionIntakeChartQueryResult = Apollo.QueryResult<NutritionIntakeChartQuery, NutritionIntakeChartQueryVariables>;
export const RecipeEnergyDocument = gql`
    query RecipeEnergy($recipe_id: String!) {
  recipeEnergy(recipe_id: $recipe_id)
}
    `;

/**
 * __useRecipeEnergyQuery__
 *
 * To run a query within a React component, call `useRecipeEnergyQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeEnergyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeEnergyQuery({
 *   variables: {
 *      recipe_id: // value for 'recipe_id'
 *   },
 * });
 */
export function useRecipeEnergyQuery(baseOptions: Apollo.QueryHookOptions<RecipeEnergyQuery, RecipeEnergyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipeEnergyQuery, RecipeEnergyQueryVariables>(RecipeEnergyDocument, options);
      }
export function useRecipeEnergyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipeEnergyQuery, RecipeEnergyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipeEnergyQuery, RecipeEnergyQueryVariables>(RecipeEnergyDocument, options);
        }
export type RecipeEnergyQueryHookResult = ReturnType<typeof useRecipeEnergyQuery>;
export type RecipeEnergyLazyQueryHookResult = ReturnType<typeof useRecipeEnergyLazyQuery>;
export type RecipeEnergyQueryResult = Apollo.QueryResult<RecipeEnergyQuery, RecipeEnergyQueryVariables>;
export const NutritionCategoryIntakeDocument = gql`
    query NutritionCategoryIntake {
  nutritionCategoryIntake {
    categories {
      name
      intake
      id
    }
  }
}
    `;

/**
 * __useNutritionCategoryIntakeQuery__
 *
 * To run a query within a React component, call `useNutritionCategoryIntakeQuery` and pass it any options that fit your needs.
 * When your component renders, `useNutritionCategoryIntakeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNutritionCategoryIntakeQuery({
 *   variables: {
 *   },
 * });
 */
export function useNutritionCategoryIntakeQuery(baseOptions?: Apollo.QueryHookOptions<NutritionCategoryIntakeQuery, NutritionCategoryIntakeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NutritionCategoryIntakeQuery, NutritionCategoryIntakeQueryVariables>(NutritionCategoryIntakeDocument, options);
      }
export function useNutritionCategoryIntakeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NutritionCategoryIntakeQuery, NutritionCategoryIntakeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NutritionCategoryIntakeQuery, NutritionCategoryIntakeQueryVariables>(NutritionCategoryIntakeDocument, options);
        }
export type NutritionCategoryIntakeQueryHookResult = ReturnType<typeof useNutritionCategoryIntakeQuery>;
export type NutritionCategoryIntakeLazyQueryHookResult = ReturnType<typeof useNutritionCategoryIntakeLazyQuery>;
export type NutritionCategoryIntakeQueryResult = Apollo.QueryResult<NutritionCategoryIntakeQuery, NutritionCategoryIntakeQueryVariables>;
export const NutritionsByCategoryDocument = gql`
    query NutritionsByCategory {
  nutritionsByCategory {
    category {
      id
      name
    }
    items {
      nutrition {
        id
        name
        unit
      }
      recommendation
    }
  }
}
    `;

/**
 * __useNutritionsByCategoryQuery__
 *
 * To run a query within a React component, call `useNutritionsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useNutritionsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNutritionsByCategoryQuery({
 *   variables: {
 *   },
 * });
 */
export function useNutritionsByCategoryQuery(baseOptions?: Apollo.QueryHookOptions<NutritionsByCategoryQuery, NutritionsByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NutritionsByCategoryQuery, NutritionsByCategoryQueryVariables>(NutritionsByCategoryDocument, options);
      }
export function useNutritionsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NutritionsByCategoryQuery, NutritionsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NutritionsByCategoryQuery, NutritionsByCategoryQueryVariables>(NutritionsByCategoryDocument, options);
        }
export type NutritionsByCategoryQueryHookResult = ReturnType<typeof useNutritionsByCategoryQuery>;
export type NutritionsByCategoryLazyQueryHookResult = ReturnType<typeof useNutritionsByCategoryLazyQuery>;
export type NutritionsByCategoryQueryResult = Apollo.QueryResult<NutritionsByCategoryQuery, NutritionsByCategoryQueryVariables>;
export const UserNutritionDocument = gql`
    query UserNutrition {
  userNutrition {
    status
    message
    data {
      name
      nutritiens {
        name
        code
        quantity
        recomendation
        unit
      }
    }
  }
}
    `;

/**
 * __useUserNutritionQuery__
 *
 * To run a query within a React component, call `useUserNutritionQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserNutritionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserNutritionQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserNutritionQuery(baseOptions?: Apollo.QueryHookOptions<UserNutritionQuery, UserNutritionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserNutritionQuery, UserNutritionQueryVariables>(UserNutritionDocument, options);
      }
export function useUserNutritionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserNutritionQuery, UserNutritionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserNutritionQuery, UserNutritionQueryVariables>(UserNutritionDocument, options);
        }
export type UserNutritionQueryHookResult = ReturnType<typeof useUserNutritionQuery>;
export type UserNutritionLazyQueryHookResult = ReturnType<typeof useUserNutritionLazyQuery>;
export type UserNutritionQueryResult = Apollo.QueryResult<UserNutritionQuery, UserNutritionQueryVariables>;
export const RecipeByNutritionDocument = gql`
    query RecipeByNutrition($code: String!) {
  recipeByNutrition(code: $code) {
    id
    name
    total
    image
  }
}
    `;

/**
 * __useRecipeByNutritionQuery__
 *
 * To run a query within a React component, call `useRecipeByNutritionQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeByNutritionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeByNutritionQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useRecipeByNutritionQuery(baseOptions: Apollo.QueryHookOptions<RecipeByNutritionQuery, RecipeByNutritionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipeByNutritionQuery, RecipeByNutritionQueryVariables>(RecipeByNutritionDocument, options);
      }
export function useRecipeByNutritionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipeByNutritionQuery, RecipeByNutritionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipeByNutritionQuery, RecipeByNutritionQueryVariables>(RecipeByNutritionDocument, options);
        }
export type RecipeByNutritionQueryHookResult = ReturnType<typeof useRecipeByNutritionQuery>;
export type RecipeByNutritionLazyQueryHookResult = ReturnType<typeof useRecipeByNutritionLazyQuery>;
export type RecipeByNutritionQueryResult = Apollo.QueryResult<RecipeByNutritionQuery, RecipeByNutritionQueryVariables>;
export const TotalNutritionDocument = gql`
    query TotalNutrition($recipe_id: String!) {
  getRecipeNutrition(recipe_id: $recipe_id) {
    totalNutrition {
      id
      label
      quantity
      unit
    }
    totalDaily {
      id
      label
      unit
      quantity
    }
  }
}
    `;

/**
 * __useTotalNutritionQuery__
 *
 * To run a query within a React component, call `useTotalNutritionQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalNutritionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalNutritionQuery({
 *   variables: {
 *      recipe_id: // value for 'recipe_id'
 *   },
 * });
 */
export function useTotalNutritionQuery(baseOptions: Apollo.QueryHookOptions<TotalNutritionQuery, TotalNutritionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TotalNutritionQuery, TotalNutritionQueryVariables>(TotalNutritionDocument, options);
      }
export function useTotalNutritionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TotalNutritionQuery, TotalNutritionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TotalNutritionQuery, TotalNutritionQueryVariables>(TotalNutritionDocument, options);
        }
export type TotalNutritionQueryHookResult = ReturnType<typeof useTotalNutritionQuery>;
export type TotalNutritionLazyQueryHookResult = ReturnType<typeof useTotalNutritionLazyQuery>;
export type TotalNutritionQueryResult = Apollo.QueryResult<TotalNutritionQuery, TotalNutritionQueryVariables>;
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
export const CreatePlanDocument = gql`
    mutation CreatePlan($name: String!, $elements: [PlanElements!]!) {
  createPlan(data: {name: $name, elements: $elements}) {
    status
    message
    plan {
      id
      name
      created_at
      image
    }
  }
}
    `;
export type CreatePlanMutationFn = Apollo.MutationFunction<CreatePlanMutation, CreatePlanMutationVariables>;

/**
 * __useCreatePlanMutation__
 *
 * To run a mutation, you first call `useCreatePlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlanMutation, { data, loading, error }] = useCreatePlanMutation({
 *   variables: {
 *      name: // value for 'name'
 *      elements: // value for 'elements'
 *   },
 * });
 */
export function useCreatePlanMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlanMutation, CreatePlanMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlanMutation, CreatePlanMutationVariables>(CreatePlanDocument, options);
      }
export type CreatePlanMutationHookResult = ReturnType<typeof useCreatePlanMutation>;
export type CreatePlanMutationResult = Apollo.MutationResult<CreatePlanMutation>;
export type CreatePlanMutationOptions = Apollo.BaseMutationOptions<CreatePlanMutation, CreatePlanMutationVariables>;
export const ElementIntakeDocument = gql`
    query ElementIntake($id: String!) {
  elementIntake(element_id: $id) {
    code
    date
    unit
    intake
    target
  }
}
    `;

/**
 * __useElementIntakeQuery__
 *
 * To run a query within a React component, call `useElementIntakeQuery` and pass it any options that fit your needs.
 * When your component renders, `useElementIntakeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useElementIntakeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useElementIntakeQuery(baseOptions: Apollo.QueryHookOptions<ElementIntakeQuery, ElementIntakeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ElementIntakeQuery, ElementIntakeQueryVariables>(ElementIntakeDocument, options);
      }
export function useElementIntakeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ElementIntakeQuery, ElementIntakeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ElementIntakeQuery, ElementIntakeQueryVariables>(ElementIntakeDocument, options);
        }
export type ElementIntakeQueryHookResult = ReturnType<typeof useElementIntakeQuery>;
export type ElementIntakeLazyQueryHookResult = ReturnType<typeof useElementIntakeLazyQuery>;
export type ElementIntakeQueryResult = Apollo.QueryResult<ElementIntakeQuery, ElementIntakeQueryVariables>;
export const PlanDetailsDocument = gql`
    query PlanDetails($id: String!) {
  planDetails(id: $id) {
    id
    name
    created_at
    active
    image
    description
    public
    trackedElements {
      id
      quantity
      nutriton {
        id
        code
        name
        unit
      }
    }
  }
}
    `;

/**
 * __usePlanDetailsQuery__
 *
 * To run a query within a React component, call `usePlanDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlanDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlanDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePlanDetailsQuery(baseOptions: Apollo.QueryHookOptions<PlanDetailsQuery, PlanDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlanDetailsQuery, PlanDetailsQueryVariables>(PlanDetailsDocument, options);
      }
export function usePlanDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlanDetailsQuery, PlanDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlanDetailsQuery, PlanDetailsQueryVariables>(PlanDetailsDocument, options);
        }
export type PlanDetailsQueryHookResult = ReturnType<typeof usePlanDetailsQuery>;
export type PlanDetailsLazyQueryHookResult = ReturnType<typeof usePlanDetailsLazyQuery>;
export type PlanDetailsQueryResult = Apollo.QueryResult<PlanDetailsQuery, PlanDetailsQueryVariables>;
export const PlansDocument = gql`
    query Plans {
  plans {
    id
    name
    image
    created_at
  }
}
    `;

/**
 * __usePlansQuery__
 *
 * To run a query within a React component, call `usePlansQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlansQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlansQuery(baseOptions?: Apollo.QueryHookOptions<PlansQuery, PlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlansQuery, PlansQueryVariables>(PlansDocument, options);
      }
export function usePlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlansQuery, PlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlansQuery, PlansQueryVariables>(PlansDocument, options);
        }
export type PlansQueryHookResult = ReturnType<typeof usePlansQuery>;
export type PlansLazyQueryHookResult = ReturnType<typeof usePlansLazyQuery>;
export type PlansQueryResult = Apollo.QueryResult<PlansQuery, PlansQueryVariables>;
export const TogglePlanTrackingDocument = gql`
    mutation TogglePlanTracking($id: String!) {
  togglePlanTracking(planId: $id) {
    status
    message
    current
  }
}
    `;
export type TogglePlanTrackingMutationFn = Apollo.MutationFunction<TogglePlanTrackingMutation, TogglePlanTrackingMutationVariables>;

/**
 * __useTogglePlanTrackingMutation__
 *
 * To run a mutation, you first call `useTogglePlanTrackingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTogglePlanTrackingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [togglePlanTrackingMutation, { data, loading, error }] = useTogglePlanTrackingMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTogglePlanTrackingMutation(baseOptions?: Apollo.MutationHookOptions<TogglePlanTrackingMutation, TogglePlanTrackingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TogglePlanTrackingMutation, TogglePlanTrackingMutationVariables>(TogglePlanTrackingDocument, options);
      }
export type TogglePlanTrackingMutationHookResult = ReturnType<typeof useTogglePlanTrackingMutation>;
export type TogglePlanTrackingMutationResult = Apollo.MutationResult<TogglePlanTrackingMutation>;
export type TogglePlanTrackingMutationOptions = Apollo.BaseMutationOptions<TogglePlanTrackingMutation, TogglePlanTrackingMutationVariables>;
export const TrackingDocument = gql`
    query Tracking {
  tracking {
    plan {
      id
      name
      image
    }
    elements {
      id
      target
      name
      unit
      current
      code
    }
  }
}
    `;

/**
 * __useTrackingQuery__
 *
 * To run a query within a React component, call `useTrackingQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrackingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrackingQuery({
 *   variables: {
 *   },
 * });
 */
export function useTrackingQuery(baseOptions?: Apollo.QueryHookOptions<TrackingQuery, TrackingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrackingQuery, TrackingQueryVariables>(TrackingDocument, options);
      }
export function useTrackingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrackingQuery, TrackingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrackingQuery, TrackingQueryVariables>(TrackingDocument, options);
        }
export type TrackingQueryHookResult = ReturnType<typeof useTrackingQuery>;
export type TrackingLazyQueryHookResult = ReturnType<typeof useTrackingLazyQuery>;
export type TrackingQueryResult = Apollo.QueryResult<TrackingQuery, TrackingQueryVariables>;
export const RecipeCategoriesDocument = gql`
    query RecipeCategories {
  recipeCategories {
    id
    name
    icon
  }
}
    `;

/**
 * __useRecipeCategoriesQuery__
 *
 * To run a query within a React component, call `useRecipeCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecipeCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<RecipeCategoriesQuery, RecipeCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipeCategoriesQuery, RecipeCategoriesQueryVariables>(RecipeCategoriesDocument, options);
      }
export function useRecipeCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipeCategoriesQuery, RecipeCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipeCategoriesQuery, RecipeCategoriesQueryVariables>(RecipeCategoriesDocument, options);
        }
export type RecipeCategoriesQueryHookResult = ReturnType<typeof useRecipeCategoriesQuery>;
export type RecipeCategoriesLazyQueryHookResult = ReturnType<typeof useRecipeCategoriesLazyQuery>;
export type RecipeCategoriesQueryResult = Apollo.QueryResult<RecipeCategoriesQuery, RecipeCategoriesQueryVariables>;
export const CookedRecipeDocument = gql`
    mutation CookedRecipe($recipeID: String!, $mealId: String!) {
  cookedRecipe(data: {recipeId: $recipeID, mealId: $mealId}) {
    status
    message
    calories
  }
}
    `;
export type CookedRecipeMutationFn = Apollo.MutationFunction<CookedRecipeMutation, CookedRecipeMutationVariables>;

/**
 * __useCookedRecipeMutation__
 *
 * To run a mutation, you first call `useCookedRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCookedRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cookedRecipeMutation, { data, loading, error }] = useCookedRecipeMutation({
 *   variables: {
 *      recipeID: // value for 'recipeID'
 *      mealId: // value for 'mealId'
 *   },
 * });
 */
export function useCookedRecipeMutation(baseOptions?: Apollo.MutationHookOptions<CookedRecipeMutation, CookedRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CookedRecipeMutation, CookedRecipeMutationVariables>(CookedRecipeDocument, options);
      }
export type CookedRecipeMutationHookResult = ReturnType<typeof useCookedRecipeMutation>;
export type CookedRecipeMutationResult = Apollo.MutationResult<CookedRecipeMutation>;
export type CookedRecipeMutationOptions = Apollo.BaseMutationOptions<CookedRecipeMutation, CookedRecipeMutationVariables>;
export const CookedRecipesCountDocument = gql`
    query CookedRecipesCount {
  cookedRecipesCount
}
    `;

/**
 * __useCookedRecipesCountQuery__
 *
 * To run a query within a React component, call `useCookedRecipesCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCookedRecipesCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCookedRecipesCountQuery({
 *   variables: {
 *   },
 * });
 */
export function useCookedRecipesCountQuery(baseOptions?: Apollo.QueryHookOptions<CookedRecipesCountQuery, CookedRecipesCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CookedRecipesCountQuery, CookedRecipesCountQueryVariables>(CookedRecipesCountDocument, options);
      }
export function useCookedRecipesCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CookedRecipesCountQuery, CookedRecipesCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CookedRecipesCountQuery, CookedRecipesCountQueryVariables>(CookedRecipesCountDocument, options);
        }
export type CookedRecipesCountQueryHookResult = ReturnType<typeof useCookedRecipesCountQuery>;
export type CookedRecipesCountLazyQueryHookResult = ReturnType<typeof useCookedRecipesCountLazyQuery>;
export type CookedRecipesCountQueryResult = Apollo.QueryResult<CookedRecipesCountQuery, CookedRecipesCountQueryVariables>;
export const RecipeByCategoryDocument = gql`
    query RecipeByCategory($cat_id: String!, $batch: Float!, $seed: Float!) {
  recipeByCategory(data: {cat_id: $cat_id, batch: $batch, seed: $seed}) {
    id
    name
    total
    image
  }
}
    `;

/**
 * __useRecipeByCategoryQuery__
 *
 * To run a query within a React component, call `useRecipeByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeByCategoryQuery({
 *   variables: {
 *      cat_id: // value for 'cat_id'
 *      batch: // value for 'batch'
 *      seed: // value for 'seed'
 *   },
 * });
 */
export function useRecipeByCategoryQuery(baseOptions: Apollo.QueryHookOptions<RecipeByCategoryQuery, RecipeByCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipeByCategoryQuery, RecipeByCategoryQueryVariables>(RecipeByCategoryDocument, options);
      }
export function useRecipeByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipeByCategoryQuery, RecipeByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipeByCategoryQuery, RecipeByCategoryQueryVariables>(RecipeByCategoryDocument, options);
        }
export type RecipeByCategoryQueryHookResult = ReturnType<typeof useRecipeByCategoryQuery>;
export type RecipeByCategoryLazyQueryHookResult = ReturnType<typeof useRecipeByCategoryLazyQuery>;
export type RecipeByCategoryQueryResult = Apollo.QueryResult<RecipeByCategoryQuery, RecipeByCategoryQueryVariables>;
export const RecipeDocument = gql`
    query Recipe($id: String!) {
  recipe(id: $id) {
    status
    message
    recipe {
      id
      name
      description
      serving
      image
      cook
      prep
      total
      healthlabel {
        label
      }
    }
    ingredients {
      unit
      raw
      amount
      ingredients
      es {
        unit
        ingredient
      }
      fr {
        unit
        ingredient
      }
      ar {
        unit
        ingredient
      }
    }
    instructions {
      id
      raw
      index
      es
      ar
      fr
    }
  }
}
    `;

/**
 * __useRecipeQuery__
 *
 * To run a query within a React component, call `useRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRecipeQuery(baseOptions: Apollo.QueryHookOptions<RecipeQuery, RecipeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, options);
      }
export function useRecipeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipeQuery, RecipeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipeQuery, RecipeQueryVariables>(RecipeDocument, options);
        }
export type RecipeQueryHookResult = ReturnType<typeof useRecipeQuery>;
export type RecipeLazyQueryHookResult = ReturnType<typeof useRecipeLazyQuery>;
export type RecipeQueryResult = Apollo.QueryResult<RecipeQuery, RecipeQueryVariables>;
export const RecommendedRecipesDocument = gql`
    query RecommendedRecipes {
  recommendedRecipes {
    id
    name
    image
  }
}
    `;

/**
 * __useRecommendedRecipesQuery__
 *
 * To run a query within a React component, call `useRecommendedRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecommendedRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecommendedRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecommendedRecipesQuery(baseOptions?: Apollo.QueryHookOptions<RecommendedRecipesQuery, RecommendedRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecommendedRecipesQuery, RecommendedRecipesQueryVariables>(RecommendedRecipesDocument, options);
      }
export function useRecommendedRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecommendedRecipesQuery, RecommendedRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecommendedRecipesQuery, RecommendedRecipesQueryVariables>(RecommendedRecipesDocument, options);
        }
export type RecommendedRecipesQueryHookResult = ReturnType<typeof useRecommendedRecipesQuery>;
export type RecommendedRecipesLazyQueryHookResult = ReturnType<typeof useRecommendedRecipesLazyQuery>;
export type RecommendedRecipesQueryResult = Apollo.QueryResult<RecommendedRecipesQuery, RecommendedRecipesQueryVariables>;
export const ReportRecipeDocument = gql`
    mutation ReportRecipe($recipe_id: String!) {
  reportRecipe(recipe_id: $recipe_id) {
    status
    message
  }
}
    `;
export type ReportRecipeMutationFn = Apollo.MutationFunction<ReportRecipeMutation, ReportRecipeMutationVariables>;

/**
 * __useReportRecipeMutation__
 *
 * To run a mutation, you first call `useReportRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReportRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reportRecipeMutation, { data, loading, error }] = useReportRecipeMutation({
 *   variables: {
 *      recipe_id: // value for 'recipe_id'
 *   },
 * });
 */
export function useReportRecipeMutation(baseOptions?: Apollo.MutationHookOptions<ReportRecipeMutation, ReportRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReportRecipeMutation, ReportRecipeMutationVariables>(ReportRecipeDocument, options);
      }
export type ReportRecipeMutationHookResult = ReturnType<typeof useReportRecipeMutation>;
export type ReportRecipeMutationResult = Apollo.MutationResult<ReportRecipeMutation>;
export type ReportRecipeMutationOptions = Apollo.BaseMutationOptions<ReportRecipeMutation, ReportRecipeMutationVariables>;
export const SearchRecipesDocument = gql`
    query SearchRecipes($query: String!) {
  searchRecipes(query: $query) {
    recipes {
      id
      name
      total
      image
    }
    ingredients {
      recipe {
        id
        name
        total
        image
      }
    }
    nutritients {
      recipe {
        id
        name
        total
        image
      }
    }
  }
}
    `;

/**
 * __useSearchRecipesQuery__
 *
 * To run a query within a React component, call `useSearchRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchRecipesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useSearchRecipesQuery(baseOptions: Apollo.QueryHookOptions<SearchRecipesQuery, SearchRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchRecipesQuery, SearchRecipesQueryVariables>(SearchRecipesDocument, options);
      }
export function useSearchRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchRecipesQuery, SearchRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchRecipesQuery, SearchRecipesQueryVariables>(SearchRecipesDocument, options);
        }
export type SearchRecipesQueryHookResult = ReturnType<typeof useSearchRecipesQuery>;
export type SearchRecipesLazyQueryHookResult = ReturnType<typeof useSearchRecipesLazyQuery>;
export type SearchRecipesQueryResult = Apollo.QueryResult<SearchRecipesQuery, SearchRecipesQueryVariables>;
export const RecordCategoriesDocument = gql`
    query RecordCategories {
  recordCategories {
    id
    name
    icon
    unit
  }
}
    `;

/**
 * __useRecordCategoriesQuery__
 *
 * To run a query within a React component, call `useRecordCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecordCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecordCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecordCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<RecordCategoriesQuery, RecordCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecordCategoriesQuery, RecordCategoriesQueryVariables>(RecordCategoriesDocument, options);
      }
export function useRecordCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecordCategoriesQuery, RecordCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecordCategoriesQuery, RecordCategoriesQueryVariables>(RecordCategoriesDocument, options);
        }
export type RecordCategoriesQueryHookResult = ReturnType<typeof useRecordCategoriesQuery>;
export type RecordCategoriesLazyQueryHookResult = ReturnType<typeof useRecordCategoriesLazyQuery>;
export type RecordCategoriesQueryResult = Apollo.QueryResult<RecordCategoriesQuery, RecordCategoriesQueryVariables>;
export const CreateRecordDocument = gql`
    mutation CreateRecord($value: Float!, $category: Float!, $time: DateTime!, $date: DateTime!) {
  createRecord(
    data: {value: $value, category: $category, time: $time, date: $date}
  ) {
    status
    message
    record {
      id
      value
      time
      date
    }
  }
}
    `;
export type CreateRecordMutationFn = Apollo.MutationFunction<CreateRecordMutation, CreateRecordMutationVariables>;

/**
 * __useCreateRecordMutation__
 *
 * To run a mutation, you first call `useCreateRecordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecordMutation, { data, loading, error }] = useCreateRecordMutation({
 *   variables: {
 *      value: // value for 'value'
 *      category: // value for 'category'
 *      time: // value for 'time'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useCreateRecordMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecordMutation, CreateRecordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecordMutation, CreateRecordMutationVariables>(CreateRecordDocument, options);
      }
export type CreateRecordMutationHookResult = ReturnType<typeof useCreateRecordMutation>;
export type CreateRecordMutationResult = Apollo.MutationResult<CreateRecordMutation>;
export type CreateRecordMutationOptions = Apollo.BaseMutationOptions<CreateRecordMutation, CreateRecordMutationVariables>;
export const RecordsDocument = gql`
    query Records($category: Float!) {
  records(cat_id: $category) {
    status
    message
    records {
      id
      time
      value
      date
      category {
        id
        name
        unit
      }
    }
  }
}
    `;

/**
 * __useRecordsQuery__
 *
 * To run a query within a React component, call `useRecordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecordsQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useRecordsQuery(baseOptions: Apollo.QueryHookOptions<RecordsQuery, RecordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecordsQuery, RecordsQueryVariables>(RecordsDocument, options);
      }
export function useRecordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecordsQuery, RecordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecordsQuery, RecordsQueryVariables>(RecordsDocument, options);
        }
export type RecordsQueryHookResult = ReturnType<typeof useRecordsQuery>;
export type RecordsLazyQueryHookResult = ReturnType<typeof useRecordsLazyQuery>;
export type RecordsQueryResult = Apollo.QueryResult<RecordsQuery, RecordsQueryVariables>;
export const LanguagesDocument = gql`
    query Languages {
  languages {
    name
    id
  }
}
    `;

/**
 * __useLanguagesQuery__
 *
 * To run a query within a React component, call `useLanguagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLanguagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLanguagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLanguagesQuery(baseOptions?: Apollo.QueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, options);
      }
export function useLanguagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LanguagesQuery, LanguagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LanguagesQuery, LanguagesQueryVariables>(LanguagesDocument, options);
        }
export type LanguagesQueryHookResult = ReturnType<typeof useLanguagesQuery>;
export type LanguagesLazyQueryHookResult = ReturnType<typeof useLanguagesLazyQuery>;
export type LanguagesQueryResult = Apollo.QueryResult<LanguagesQuery, LanguagesQueryVariables>;
export const CheckInfoValidtyDocument = gql`
    mutation CheckInfoValidty($username: String!, $email: String!) {
  checkInfoValidity(data: {username: $username, email: $email}) {
    email
    username
  }
}
    `;
export type CheckInfoValidtyMutationFn = Apollo.MutationFunction<CheckInfoValidtyMutation, CheckInfoValidtyMutationVariables>;

/**
 * __useCheckInfoValidtyMutation__
 *
 * To run a mutation, you first call `useCheckInfoValidtyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckInfoValidtyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkInfoValidtyMutation, { data, loading, error }] = useCheckInfoValidtyMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCheckInfoValidtyMutation(baseOptions?: Apollo.MutationHookOptions<CheckInfoValidtyMutation, CheckInfoValidtyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CheckInfoValidtyMutation, CheckInfoValidtyMutationVariables>(CheckInfoValidtyDocument, options);
      }
export type CheckInfoValidtyMutationHookResult = ReturnType<typeof useCheckInfoValidtyMutation>;
export type CheckInfoValidtyMutationResult = Apollo.MutationResult<CheckInfoValidtyMutation>;
export type CheckInfoValidtyMutationOptions = Apollo.BaseMutationOptions<CheckInfoValidtyMutation, CheckInfoValidtyMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    name
    username
    email
    weight
    height
    gender
    birth
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($oldpass: String!, $newpass: String!) {
  changePassword(data: {oldpass: $oldpass, newpass: $newpass}) {
    status
    message
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldpass: // value for 'oldpass'
 *      newpass: // value for 'newpass'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const SpecialConditionsDocument = gql`
    query SpecialConditions {
  specialconditions {
    id
    name
  }
}
    `;

/**
 * __useSpecialConditionsQuery__
 *
 * To run a query within a React component, call `useSpecialConditionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSpecialConditionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSpecialConditionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSpecialConditionsQuery(baseOptions?: Apollo.QueryHookOptions<SpecialConditionsQuery, SpecialConditionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SpecialConditionsQuery, SpecialConditionsQueryVariables>(SpecialConditionsDocument, options);
      }
export function useSpecialConditionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SpecialConditionsQuery, SpecialConditionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SpecialConditionsQuery, SpecialConditionsQueryVariables>(SpecialConditionsDocument, options);
        }
export type SpecialConditionsQueryHookResult = ReturnType<typeof useSpecialConditionsQuery>;
export type SpecialConditionsLazyQueryHookResult = ReturnType<typeof useSpecialConditionsLazyQuery>;
export type SpecialConditionsQueryResult = Apollo.QueryResult<SpecialConditionsQuery, SpecialConditionsQueryVariables>;
export const UpdateUserInfoDocument = gql`
    mutation UpdateUserInfo($name: String!, $weight: Float!, $height: Float!) {
  updateInfo(data: {name: $name, weight: $weight, height: $height}) {
    status
    message
  }
}
    `;
export type UpdateUserInfoMutationFn = Apollo.MutationFunction<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>;

/**
 * __useUpdateUserInfoMutation__
 *
 * To run a mutation, you first call `useUpdateUserInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserInfoMutation, { data, loading, error }] = useUpdateUserInfoMutation({
 *   variables: {
 *      name: // value for 'name'
 *      weight: // value for 'weight'
 *      height: // value for 'height'
 *   },
 * });
 */
export function useUpdateUserInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>(UpdateUserInfoDocument, options);
      }
export type UpdateUserInfoMutationHookResult = ReturnType<typeof useUpdateUserInfoMutation>;
export type UpdateUserInfoMutationResult = Apollo.MutationResult<UpdateUserInfoMutation>;
export type UpdateUserInfoMutationOptions = Apollo.BaseMutationOptions<UpdateUserInfoMutation, UpdateUserInfoMutationVariables>;