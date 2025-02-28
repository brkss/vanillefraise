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
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
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

export type ChangePasswordInput = {
  newpass: Scalars['String'];
  oldpass: Scalars['String'];
};

export type ChangePasswordResponse = {
  __typename?: 'ChangePasswordResponse';
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type CookedRecipe = {
  __typename?: 'CookedRecipe';
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

export type EarlyAccessRequest = {
  __typename?: 'EarlyAccessRequest';
  id: Scalars['String'];
  user: User;
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

export type Instruction = {
  __typename?: 'Instruction';
  created_at: Scalars['DateTime'];
  id: Scalars['String'];
  index: Scalars['Float'];
  raw: Scalars['String'];
  recipe: Recipe;
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
  cookedRecipe: CookedRecipesResponse;
  cookedRecipes: CookedRecipesResponse;
  createActivity: CreateActivityResponse;
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
  seedMeals: Scalars['Boolean'];
  seedMoodCategories: Scalars['Boolean'];
  seedNutritionGuide: Scalars['Boolean'];
  seedRecipeCategories: Scalars['Boolean'];
  seedRecomendation: Scalars['Boolean'];
  seedRecordCategories: Scalars['Boolean'];
  seedSpecialConditions: Scalars['Boolean'];
  updateCategory: UpdateCategoryResponse;
  updateInfo: DefaultResponse;
  verifyResetToken: Scalars['Boolean'];
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


export type MutationCookedRecipeArgs = {
  data: CookedRecipeInput;
};


export type MutationCookedRecipesArgs = {
  mealRecipesID: Array<Scalars['String']>;
};


export type MutationCreateActivityArgs = {
  data: CreateActivityInput;
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


export type MutationVerifyResetTokenArgs = {
  token: Scalars['String'];
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
  data?: Maybe<Array<NutritionOverviewData>>;
  message?: Maybe<Scalars['String']>;
  status: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  activities: Array<Activity>;
  activityCategories: Array<ActivityCategory>;
  adminCategories: Array<AdminCategoryResponse>;
  adminGetUsers: Array<AdminUserResponse>;
  adminRecipes: Array<AdminRecipesResponse>;
  categoryDetails?: Maybe<RecipeCategory>;
  cookedRecipesCount: Scalars['Float'];
  daysWithRecipes: MarkedDaysResponse;
  getActivityCalories: Scalars['Float'];
  getMealRecipes: MealRecipeResponse;
  getRecipeNutrition: RecipeNutritionResponse;
  getUserBurnedCalories: Scalars['Float'];
  helloAdmin: Scalars['String'];
  isRequested: Scalars['Boolean'];
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
  userCalories: UserCaloriesResponse;
  userNutrition: NutritionOverviewResponse;
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
  cookedrecipes: Array<CookedRecipe>;
  created_at: Scalars['DateTime'];
  earequest: Array<EarlyAccessRequest>;
  email: Scalars['String'];
  gender: Scalars['String'];
  height: Scalars['Float'];
  id: Scalars['String'];
  mealrecipes: Array<MealRecipes>;
  moodrecords: Array<MoodRecord>;
  name: Scalars['String'];
  records: Array<Record>;
  specialconditions: Array<SpecialCondition>;
  username: Scalars['String'];
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

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', loginAdmin: { __typename?: 'AuthDefaultResponse', status: boolean, message?: string | null, token?: string | null } };

export type AdminCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminCategoriesQuery = { __typename?: 'Query', adminCategories: Array<{ __typename?: 'AdminCategoryResponse', count: number, category: { __typename?: 'RecipeCategory', id: string, name: string, icon?: string | null, active: boolean, index: number } }> };

export type AdminRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminRecipesQuery = { __typename?: 'Query', adminRecipes: Array<{ __typename?: 'AdminRecipesResponse', recipe: { __typename?: 'Recipe', id: string, name: string, description?: string | null, serving?: number | null, image: string, cook?: string | null, prep?: string | null, total?: string | null, public: boolean } }> };

export type RecipeCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipeCategoriesQuery = { __typename?: 'Query', recipeCategories: Array<{ __typename?: 'RecipeCategory', id: string, name: string, icon?: string | null }> };

export type CategoryDetailsQueryVariables = Exact<{
  cid: Scalars['String'];
}>;


export type CategoryDetailsQuery = { __typename?: 'Query', categoryDetails?: { __typename?: 'RecipeCategory', id: string, name: string, icon?: string | null, index: number } | null };

export type CreateRecipeMutationVariables = Exact<{
  url: Scalars['String'];
  categories: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateRecipeMutation = { __typename?: 'Mutation', createRecipe: { __typename?: 'CreateRecipeResponse', status: boolean, message: string, recipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null, serving?: number | null, image: string, cook?: string | null, prep?: string | null, total?: string | null } | null } };

export type CreateRecipeCategoryMutationVariables = Exact<{
  name: Scalars['String'];
  icon: Scalars['String'];
}>;


export type CreateRecipeCategoryMutation = { __typename?: 'Mutation', createRecipeCategory: { __typename?: 'CreateRecipeCategoryResponse', status: boolean, message?: string | null, category?: { __typename?: 'RecipeCategory', id: string, name: string, icon?: string | null, active: boolean, index: number } | null } };

export type DeleteRecipeMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteRecipeMutation = { __typename?: 'Mutation', deleterecipe: boolean };

export type DeleteCategoryMutationVariables = Exact<{
  cat_id: Scalars['String'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: { __typename?: 'DefaultResponse', status: boolean, message?: string | null } };

export type RecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'Recipe', id: string, name: string, description?: string | null, serving?: number | null, image: string, cook?: string | null, prep?: string | null, total?: string | null }> };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
  icon: Scalars['String'];
  active: Scalars['Boolean'];
  index: Scalars['Float'];
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: { __typename?: 'UpdateCategoryResponse', status: boolean, message?: string | null, category?: { __typename?: 'RecipeCategory', id: string, name: string, icon?: string | null, active: boolean, index: number } | null } };

export type ChangeRecipeVisibilityMutationVariables = Exact<{
  rid: Scalars['String'];
}>;


export type ChangeRecipeVisibilityMutation = { __typename?: 'Mutation', changeRecipeVisibility: { __typename?: 'DefaultResponse', status: boolean, message?: string | null } };

export type BanUserMutationVariables = Exact<{
  uid: Scalars['String'];
}>;


export type BanUserMutation = { __typename?: 'Mutation', banUser: { __typename?: 'DefaultResponse', status: boolean, message?: string | null } };

export type AdminGetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminGetUsersQuery = { __typename?: 'Query', adminGetUsers: Array<{ __typename?: 'AdminUserResponse', user: { __typename?: 'User', id: string, name: string, email: string, username: string, created_at: any, weight: number, height: number, gender: string, bmi: number, birth: any, banned: boolean } }> };


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  loginAdmin(data: {username: $username, password: $password}) {
    status
    message
    token
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
 *      username: // value for 'username'
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
export const AdminCategoriesDocument = gql`
    query AdminCategories {
  adminCategories {
    category {
      id
      name
      icon
      active
      index
    }
    count
  }
}
    `;

/**
 * __useAdminCategoriesQuery__
 *
 * To run a query within a React component, call `useAdminCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AdminCategoriesQuery, AdminCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminCategoriesQuery, AdminCategoriesQueryVariables>(AdminCategoriesDocument, options);
      }
export function useAdminCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminCategoriesQuery, AdminCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminCategoriesQuery, AdminCategoriesQueryVariables>(AdminCategoriesDocument, options);
        }
export type AdminCategoriesQueryHookResult = ReturnType<typeof useAdminCategoriesQuery>;
export type AdminCategoriesLazyQueryHookResult = ReturnType<typeof useAdminCategoriesLazyQuery>;
export type AdminCategoriesQueryResult = Apollo.QueryResult<AdminCategoriesQuery, AdminCategoriesQueryVariables>;
export const AdminRecipesDocument = gql`
    query AdminRecipes {
  adminRecipes {
    recipe {
      id
      name
      description
      serving
      image
      cook
      prep
      total
      public
    }
  }
}
    `;

/**
 * __useAdminRecipesQuery__
 *
 * To run a query within a React component, call `useAdminRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminRecipesQuery(baseOptions?: Apollo.QueryHookOptions<AdminRecipesQuery, AdminRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminRecipesQuery, AdminRecipesQueryVariables>(AdminRecipesDocument, options);
      }
export function useAdminRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminRecipesQuery, AdminRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminRecipesQuery, AdminRecipesQueryVariables>(AdminRecipesDocument, options);
        }
export type AdminRecipesQueryHookResult = ReturnType<typeof useAdminRecipesQuery>;
export type AdminRecipesLazyQueryHookResult = ReturnType<typeof useAdminRecipesLazyQuery>;
export type AdminRecipesQueryResult = Apollo.QueryResult<AdminRecipesQuery, AdminRecipesQueryVariables>;
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
export const CategoryDetailsDocument = gql`
    query CategoryDetails($cid: String!) {
  categoryDetails(cid: $cid) {
    id
    name
    icon
    index
  }
}
    `;

/**
 * __useCategoryDetailsQuery__
 *
 * To run a query within a React component, call `useCategoryDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryDetailsQuery({
 *   variables: {
 *      cid: // value for 'cid'
 *   },
 * });
 */
export function useCategoryDetailsQuery(baseOptions: Apollo.QueryHookOptions<CategoryDetailsQuery, CategoryDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryDetailsQuery, CategoryDetailsQueryVariables>(CategoryDetailsDocument, options);
      }
export function useCategoryDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryDetailsQuery, CategoryDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryDetailsQuery, CategoryDetailsQueryVariables>(CategoryDetailsDocument, options);
        }
export type CategoryDetailsQueryHookResult = ReturnType<typeof useCategoryDetailsQuery>;
export type CategoryDetailsLazyQueryHookResult = ReturnType<typeof useCategoryDetailsLazyQuery>;
export type CategoryDetailsQueryResult = Apollo.QueryResult<CategoryDetailsQuery, CategoryDetailsQueryVariables>;
export const CreateRecipeDocument = gql`
    mutation CreateRecipe($url: String!, $categories: [String!]!) {
  createRecipe(data: {url: $url, categories: $categories}) {
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
    }
  }
}
    `;
export type CreateRecipeMutationFn = Apollo.MutationFunction<CreateRecipeMutation, CreateRecipeMutationVariables>;

/**
 * __useCreateRecipeMutation__
 *
 * To run a mutation, you first call `useCreateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecipeMutation, { data, loading, error }] = useCreateRecipeMutation({
 *   variables: {
 *      url: // value for 'url'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useCreateRecipeMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecipeMutation, CreateRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecipeMutation, CreateRecipeMutationVariables>(CreateRecipeDocument, options);
      }
export type CreateRecipeMutationHookResult = ReturnType<typeof useCreateRecipeMutation>;
export type CreateRecipeMutationResult = Apollo.MutationResult<CreateRecipeMutation>;
export type CreateRecipeMutationOptions = Apollo.BaseMutationOptions<CreateRecipeMutation, CreateRecipeMutationVariables>;
export const CreateRecipeCategoryDocument = gql`
    mutation CreateRecipeCategory($name: String!, $icon: String!) {
  createRecipeCategory(data: {name: $name, icon: $icon}) {
    status
    message
    category {
      id
      name
      icon
      active
      index
    }
  }
}
    `;
export type CreateRecipeCategoryMutationFn = Apollo.MutationFunction<CreateRecipeCategoryMutation, CreateRecipeCategoryMutationVariables>;

/**
 * __useCreateRecipeCategoryMutation__
 *
 * To run a mutation, you first call `useCreateRecipeCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecipeCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecipeCategoryMutation, { data, loading, error }] = useCreateRecipeCategoryMutation({
 *   variables: {
 *      name: // value for 'name'
 *      icon: // value for 'icon'
 *   },
 * });
 */
export function useCreateRecipeCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateRecipeCategoryMutation, CreateRecipeCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRecipeCategoryMutation, CreateRecipeCategoryMutationVariables>(CreateRecipeCategoryDocument, options);
      }
export type CreateRecipeCategoryMutationHookResult = ReturnType<typeof useCreateRecipeCategoryMutation>;
export type CreateRecipeCategoryMutationResult = Apollo.MutationResult<CreateRecipeCategoryMutation>;
export type CreateRecipeCategoryMutationOptions = Apollo.BaseMutationOptions<CreateRecipeCategoryMutation, CreateRecipeCategoryMutationVariables>;
export const DeleteRecipeDocument = gql`
    mutation DeleteRecipe($id: String!) {
  deleterecipe(id: $id)
}
    `;
export type DeleteRecipeMutationFn = Apollo.MutationFunction<DeleteRecipeMutation, DeleteRecipeMutationVariables>;

/**
 * __useDeleteRecipeMutation__
 *
 * To run a mutation, you first call `useDeleteRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRecipeMutation, { data, loading, error }] = useDeleteRecipeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRecipeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRecipeMutation, DeleteRecipeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRecipeMutation, DeleteRecipeMutationVariables>(DeleteRecipeDocument, options);
      }
export type DeleteRecipeMutationHookResult = ReturnType<typeof useDeleteRecipeMutation>;
export type DeleteRecipeMutationResult = Apollo.MutationResult<DeleteRecipeMutation>;
export type DeleteRecipeMutationOptions = Apollo.BaseMutationOptions<DeleteRecipeMutation, DeleteRecipeMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($cat_id: String!) {
  deleteCategory(cat_id: $cat_id) {
    status
    message
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      cat_id: // value for 'cat_id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const RecipesDocument = gql`
    query Recipes {
  recipes {
    id
    name
    description
    serving
    image
    cook
    prep
    total
  }
}
    `;

/**
 * __useRecipesQuery__
 *
 * To run a query within a React component, call `useRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecipesQuery(baseOptions?: Apollo.QueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
      }
export function useRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecipesQuery, RecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecipesQuery, RecipesQueryVariables>(RecipesDocument, options);
        }
export type RecipesQueryHookResult = ReturnType<typeof useRecipesQuery>;
export type RecipesLazyQueryHookResult = ReturnType<typeof useRecipesLazyQuery>;
export type RecipesQueryResult = Apollo.QueryResult<RecipesQuery, RecipesQueryVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($id: String!, $name: String!, $icon: String!, $active: Boolean!, $index: Float!) {
  updateCategory(
    data: {id: $id, name: $name, icon: $icon, active: $active, index: $index}
  ) {
    status
    message
    category {
      id
      name
      icon
      active
      index
    }
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      icon: // value for 'icon'
 *      active: // value for 'active'
 *      index: // value for 'index'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const ChangeRecipeVisibilityDocument = gql`
    mutation ChangeRecipeVisibility($rid: String!) {
  changeRecipeVisibility(rid: $rid) {
    status
    message
  }
}
    `;
export type ChangeRecipeVisibilityMutationFn = Apollo.MutationFunction<ChangeRecipeVisibilityMutation, ChangeRecipeVisibilityMutationVariables>;

/**
 * __useChangeRecipeVisibilityMutation__
 *
 * To run a mutation, you first call `useChangeRecipeVisibilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeRecipeVisibilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeRecipeVisibilityMutation, { data, loading, error }] = useChangeRecipeVisibilityMutation({
 *   variables: {
 *      rid: // value for 'rid'
 *   },
 * });
 */
export function useChangeRecipeVisibilityMutation(baseOptions?: Apollo.MutationHookOptions<ChangeRecipeVisibilityMutation, ChangeRecipeVisibilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeRecipeVisibilityMutation, ChangeRecipeVisibilityMutationVariables>(ChangeRecipeVisibilityDocument, options);
      }
export type ChangeRecipeVisibilityMutationHookResult = ReturnType<typeof useChangeRecipeVisibilityMutation>;
export type ChangeRecipeVisibilityMutationResult = Apollo.MutationResult<ChangeRecipeVisibilityMutation>;
export type ChangeRecipeVisibilityMutationOptions = Apollo.BaseMutationOptions<ChangeRecipeVisibilityMutation, ChangeRecipeVisibilityMutationVariables>;
export const BanUserDocument = gql`
    mutation BanUser($uid: String!) {
  banUser(uid: $uid) {
    status
    message
  }
}
    `;
export type BanUserMutationFn = Apollo.MutationFunction<BanUserMutation, BanUserMutationVariables>;

/**
 * __useBanUserMutation__
 *
 * To run a mutation, you first call `useBanUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBanUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [banUserMutation, { data, loading, error }] = useBanUserMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useBanUserMutation(baseOptions?: Apollo.MutationHookOptions<BanUserMutation, BanUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BanUserMutation, BanUserMutationVariables>(BanUserDocument, options);
      }
export type BanUserMutationHookResult = ReturnType<typeof useBanUserMutation>;
export type BanUserMutationResult = Apollo.MutationResult<BanUserMutation>;
export type BanUserMutationOptions = Apollo.BaseMutationOptions<BanUserMutation, BanUserMutationVariables>;
export const AdminGetUsersDocument = gql`
    query AdminGetUsers {
  adminGetUsers {
    user {
      id
      name
      email
      username
      created_at
      weight
      height
      gender
      bmi
      birth
      banned
    }
  }
}
    `;

/**
 * __useAdminGetUsersQuery__
 *
 * To run a query within a React component, call `useAdminGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<AdminGetUsersQuery, AdminGetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminGetUsersQuery, AdminGetUsersQueryVariables>(AdminGetUsersDocument, options);
      }
export function useAdminGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminGetUsersQuery, AdminGetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminGetUsersQuery, AdminGetUsersQueryVariables>(AdminGetUsersDocument, options);
        }
export type AdminGetUsersQueryHookResult = ReturnType<typeof useAdminGetUsersQuery>;
export type AdminGetUsersLazyQueryHookResult = ReturnType<typeof useAdminGetUsersLazyQuery>;
export type AdminGetUsersQueryResult = Apollo.QueryResult<AdminGetUsersQuery, AdminGetUsersQueryVariables>;