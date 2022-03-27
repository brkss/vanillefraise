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

export type CreateActivityInput = {
  calories?: InputMaybe<Scalars['Float']>;
  category: Scalars['String'];
  duration: Scalars['String'];
  feedback?: InputMaybe<Scalars['String']>;
};

export type CreateActivityResponse = {
  __typename?: 'CreateActivityResponse';
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type CreateMoodRecordInput = {
  moods: Array<Scalars['String']>;
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
  amount?: Maybe<Scalars['Float']>;
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

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
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
  changePassword: ChangePasswordResponse;
  cookedRecipe: DefaultResponse;
  createActivity: CreateActivityResponse;
  createMoodRecord: DefaultResponse;
  createRecipe: CreateRecipeResponse;
  createRecord: CreateRecordResponse;
  deleterecipe: Scalars['Boolean'];
  login: AuthDefaultResponse;
  logout: AuthDefaultResponse;
  register: AuthDefaultResponse;
  requestEarlyAccess: Scalars['Boolean'];
  requestResetPassword: AuthDefaultResponse;
  resetPassword: AuthDefaultResponse;
  seedActivityCalories: Scalars['Boolean'];
  seedActivityCategories: Scalars['Boolean'];
  seedMoodCategories: Scalars['Boolean'];
  seedNutritionGuide: Scalars['Boolean'];
  seedRecipeCategories: Scalars['Boolean'];
  seedRecomendation: Scalars['Boolean'];
  seedRecordCategories: Scalars['Boolean'];
  seedSpecialConditions: Scalars['Boolean'];
  verifyResetToken: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationCookedRecipeArgs = {
  recipeID: Scalars['String'];
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


export type MutationCreateRecordArgs = {
  data: CreateRecordInput;
};


export type MutationDeleterecipeArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
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
  activityCategories: Array<ActivityCategory>;
  cookedRecipesCount: Scalars['Float'];
  getActivityCalories: Scalars['Float'];
  getRecipeNutrition: RecipeNutritionResponse;
  getUserBurnedCalories: Scalars['Float'];
  isRequested: Scalars['Boolean'];
  me?: Maybe<User>;
  moodOverview: MoodOverviewResponse;
  moods: Array<Mood>;
  ping: Scalars['String'];
  recipe: RecipeItemResponse;
  recipeByCategory: Array<Recipe>;
  recipeCategories: Array<RecipeCategory>;
  recipeEnergy: Scalars['Float'];
  recipes: Array<Recipe>;
  recordCategories: Array<RecordCategory>;
  records: ListRecordsResponse;
  specialconditions: Array<SpecialCondition>;
  userCalories: UserCaloriesResponse;
  userNutrition: NutritionOverviewResponse;
  work: Scalars['String'];
};


export type QueryGetActivityCaloriesArgs = {
  cat: Scalars['String'];
};


export type QueryGetRecipeNutritionArgs = {
  recipe_id: Scalars['String'];
};


export type QueryIsRequestedArgs = {
  service: Scalars['String'];
};


export type QueryRecipeArgs = {
  id: Scalars['String'];
};


export type QueryRecipeByCategoryArgs = {
  cat_id: Scalars['String'];
};


export type QueryRecipeEnergyArgs = {
  recipe_id: Scalars['String'];
};


export type QueryRecordsArgs = {
  cat_id: Scalars['Float'];
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

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type SpecialCondition = {
  __typename?: 'SpecialCondition';
  id: Scalars['String'];
  name: Scalars['String'];
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  activities: Array<Activity>;
  birth: Scalars['DateTime'];
  bmi: Scalars['Float'];
  cookedrecipes: Array<CookedRecipe>;
  created_at: Scalars['DateTime'];
  earequest: Array<EarlyAccessRequest>;
  email: Scalars['String'];
  gender: Scalars['String'];
  height: Scalars['Float'];
  id: Scalars['String'];
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

export type GetActivityCaloriesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetActivityCaloriesQuery = { __typename?: 'Query', getActivityCalories: number };

export type ActivityCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ActivityCategoriesQuery = { __typename?: 'Query', activityCategories: Array<{ __typename?: 'ActivityCategory', id: string, name: string, icon?: string | null | undefined }> };

export type CreateActivityMutationVariables = Exact<{
  category: Scalars['String'];
  duration: Scalars['String'];
  feedback: Scalars['String'];
  calories: Scalars['Float'];
}>;


export type CreateActivityMutation = { __typename?: 'Mutation', createActivity: { __typename?: 'CreateActivityResponse', status: boolean, message: string } };

export type GetUserBurnedCaloriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserBurnedCaloriesQuery = { __typename?: 'Query', getUserBurnedCalories: number };

export type SeedActivityCategoriesMutationVariables = Exact<{ [key: string]: never; }>;


export type SeedActivityCategoriesMutation = { __typename?: 'Mutation', seedActivityCategories: boolean };

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

export type IsRequestedQueryVariables = Exact<{
  service: Scalars['String'];
}>;


export type IsRequestedQuery = { __typename?: 'Query', isRequested: boolean };

export type RequestEarlyAccessMutationVariables = Exact<{
  service: Scalars['String'];
}>;


export type RequestEarlyAccessMutation = { __typename?: 'Mutation', requestEarlyAccess: boolean };

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

export type RecipeEnergyQueryVariables = Exact<{
  recipe_id: Scalars['String'];
}>;


export type RecipeEnergyQuery = { __typename?: 'Query', recipeEnergy: number };

export type UserNutritionQueryVariables = Exact<{ [key: string]: never; }>;


export type UserNutritionQuery = { __typename?: 'Query', userNutrition: { __typename?: 'NutritionOverviewResponse', status: boolean, message?: string | null | undefined, data?: Array<{ __typename?: 'NutritionOverviewData', name: string, code: string, quantity: number, unit: string, recomendation: number }> | null | undefined } };

export type TotalNutritionQueryVariables = Exact<{
  recipe_id: Scalars['String'];
}>;


export type TotalNutritionQuery = { __typename?: 'Query', getRecipeNutrition: { __typename?: 'RecipeNutritionResponse', totalNutrition?: Array<{ __typename?: 'RecipeTotalNutrition', id: string, label: string, quantity: number, unit: string }> | null | undefined } };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type RecipeCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipeCategoriesQuery = { __typename?: 'Query', recipeCategories: Array<{ __typename?: 'RecipeCategory', id: string, name: string, icon?: string | null | undefined, recipes: Array<{ __typename?: 'Recipe', id: string, name: string, total?: string | null | undefined, image: string }> }> };

export type CookedRecipeMutationVariables = Exact<{
  recipeID: Scalars['String'];
}>;


export type CookedRecipeMutation = { __typename?: 'Mutation', cookedRecipe: { __typename?: 'DefaultResponse', status: boolean, message?: string | null | undefined } };

export type CookedRecipesCountQueryVariables = Exact<{ [key: string]: never; }>;


export type CookedRecipesCountQuery = { __typename?: 'Query', cookedRecipesCount: number };

export type RecipeByCategoryQueryVariables = Exact<{
  cat_id: Scalars['String'];
}>;


export type RecipeByCategoryQuery = { __typename?: 'Query', recipeByCategory: Array<{ __typename?: 'Recipe', id: string, name: string, description?: string | null | undefined, serving?: number | null | undefined }> };

export type RecipeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type RecipeQuery = { __typename?: 'Query', recipe: { __typename?: 'RecipeItemResponse', status: boolean, message?: string | null | undefined, recipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null | undefined, serving?: number | null | undefined, image: string, cook?: string | null | undefined, prep?: string | null | undefined, total?: string | null | undefined, ingredients: Array<{ __typename?: 'Ingredient', unit?: string | null | undefined, raw: string, amount?: number | null | undefined, ingredients?: string | null | undefined }>, instructions: Array<{ __typename?: 'Instruction', id: string, raw: string, index: number }> } | null | undefined } };

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

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, name: string, username: string, email: string } | null | undefined };

export type ChangePasswordMutationVariables = Exact<{
  oldpass: Scalars['String'];
  newpass: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'ChangePasswordResponse', status: boolean, message?: string | null | undefined } };

export type SpecialConditionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SpecialConditionsQuery = { __typename?: 'Query', specialconditions: Array<{ __typename?: 'SpecialCondition', id: string, name: string }> };


export const GetActivityCaloriesDocument = gql`
    query GetActivityCalories($id: String!) {
  getActivityCalories(cat: $id)
}
    `;

/**
 * __useGetActivityCaloriesQuery__
 *
 * To run a query within a React component, call `useGetActivityCaloriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetActivityCaloriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetActivityCaloriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetActivityCaloriesQuery(baseOptions: Apollo.QueryHookOptions<GetActivityCaloriesQuery, GetActivityCaloriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetActivityCaloriesQuery, GetActivityCaloriesQueryVariables>(GetActivityCaloriesDocument, options);
      }
export function useGetActivityCaloriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetActivityCaloriesQuery, GetActivityCaloriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetActivityCaloriesQuery, GetActivityCaloriesQueryVariables>(GetActivityCaloriesDocument, options);
        }
export type GetActivityCaloriesQueryHookResult = ReturnType<typeof useGetActivityCaloriesQuery>;
export type GetActivityCaloriesLazyQueryHookResult = ReturnType<typeof useGetActivityCaloriesLazyQuery>;
export type GetActivityCaloriesQueryResult = Apollo.QueryResult<GetActivityCaloriesQuery, GetActivityCaloriesQueryVariables>;
export const ActivityCategoriesDocument = gql`
    query ActivityCategories {
  activityCategories {
    id
    name
    icon
  }
}
    `;

/**
 * __useActivityCategoriesQuery__
 *
 * To run a query within a React component, call `useActivityCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useActivityCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActivityCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useActivityCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ActivityCategoriesQuery, ActivityCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActivityCategoriesQuery, ActivityCategoriesQueryVariables>(ActivityCategoriesDocument, options);
      }
export function useActivityCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActivityCategoriesQuery, ActivityCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActivityCategoriesQuery, ActivityCategoriesQueryVariables>(ActivityCategoriesDocument, options);
        }
export type ActivityCategoriesQueryHookResult = ReturnType<typeof useActivityCategoriesQuery>;
export type ActivityCategoriesLazyQueryHookResult = ReturnType<typeof useActivityCategoriesLazyQuery>;
export type ActivityCategoriesQueryResult = Apollo.QueryResult<ActivityCategoriesQuery, ActivityCategoriesQueryVariables>;
export const CreateActivityDocument = gql`
    mutation CreateActivity($category: String!, $duration: String!, $feedback: String!, $calories: Float!) {
  createActivity(
    data: {category: $category, duration: $duration, feedback: $feedback, calories: $calories}
  ) {
    status
    message
  }
}
    `;
export type CreateActivityMutationFn = Apollo.MutationFunction<CreateActivityMutation, CreateActivityMutationVariables>;

/**
 * __useCreateActivityMutation__
 *
 * To run a mutation, you first call `useCreateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActivityMutation, { data, loading, error }] = useCreateActivityMutation({
 *   variables: {
 *      category: // value for 'category'
 *      duration: // value for 'duration'
 *      feedback: // value for 'feedback'
 *      calories: // value for 'calories'
 *   },
 * });
 */
export function useCreateActivityMutation(baseOptions?: Apollo.MutationHookOptions<CreateActivityMutation, CreateActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateActivityMutation, CreateActivityMutationVariables>(CreateActivityDocument, options);
      }
export type CreateActivityMutationHookResult = ReturnType<typeof useCreateActivityMutation>;
export type CreateActivityMutationResult = Apollo.MutationResult<CreateActivityMutation>;
export type CreateActivityMutationOptions = Apollo.BaseMutationOptions<CreateActivityMutation, CreateActivityMutationVariables>;
export const GetUserBurnedCaloriesDocument = gql`
    query GetUserBurnedCalories {
  getUserBurnedCalories
}
    `;

/**
 * __useGetUserBurnedCaloriesQuery__
 *
 * To run a query within a React component, call `useGetUserBurnedCaloriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBurnedCaloriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBurnedCaloriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserBurnedCaloriesQuery(baseOptions?: Apollo.QueryHookOptions<GetUserBurnedCaloriesQuery, GetUserBurnedCaloriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserBurnedCaloriesQuery, GetUserBurnedCaloriesQueryVariables>(GetUserBurnedCaloriesDocument, options);
      }
export function useGetUserBurnedCaloriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBurnedCaloriesQuery, GetUserBurnedCaloriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserBurnedCaloriesQuery, GetUserBurnedCaloriesQueryVariables>(GetUserBurnedCaloriesDocument, options);
        }
export type GetUserBurnedCaloriesQueryHookResult = ReturnType<typeof useGetUserBurnedCaloriesQuery>;
export type GetUserBurnedCaloriesLazyQueryHookResult = ReturnType<typeof useGetUserBurnedCaloriesLazyQuery>;
export type GetUserBurnedCaloriesQueryResult = Apollo.QueryResult<GetUserBurnedCaloriesQuery, GetUserBurnedCaloriesQueryVariables>;
export const SeedActivityCategoriesDocument = gql`
    mutation SeedActivityCategories {
  seedActivityCategories
}
    `;
export type SeedActivityCategoriesMutationFn = Apollo.MutationFunction<SeedActivityCategoriesMutation, SeedActivityCategoriesMutationVariables>;

/**
 * __useSeedActivityCategoriesMutation__
 *
 * To run a mutation, you first call `useSeedActivityCategoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSeedActivityCategoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [seedActivityCategoriesMutation, { data, loading, error }] = useSeedActivityCategoriesMutation({
 *   variables: {
 *   },
 * });
 */
export function useSeedActivityCategoriesMutation(baseOptions?: Apollo.MutationHookOptions<SeedActivityCategoriesMutation, SeedActivityCategoriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SeedActivityCategoriesMutation, SeedActivityCategoriesMutationVariables>(SeedActivityCategoriesDocument, options);
      }
export type SeedActivityCategoriesMutationHookResult = ReturnType<typeof useSeedActivityCategoriesMutation>;
export type SeedActivityCategoriesMutationResult = Apollo.MutationResult<SeedActivityCategoriesMutation>;
export type SeedActivityCategoriesMutationOptions = Apollo.BaseMutationOptions<SeedActivityCategoriesMutation, SeedActivityCategoriesMutationVariables>;
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
export const UserNutritionDocument = gql`
    query UserNutrition {
  userNutrition {
    status
    message
    data {
      name
      code
      quantity
      unit
      recomendation
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
export const TotalNutritionDocument = gql`
    query TotalNutrition($recipe_id: String!) {
  getRecipeNutrition(recipe_id: $recipe_id) {
    totalNutrition {
      id
      label
      quantity
      unit
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
export const RecipeCategoriesDocument = gql`
    query RecipeCategories {
  recipeCategories {
    id
    name
    icon
    recipes {
      id
      name
      total
      image
    }
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
    mutation CookedRecipe($recipeID: String!) {
  cookedRecipe(recipeID: $recipeID) {
    status
    message
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
    query RecipeByCategory($cat_id: String!) {
  recipeByCategory(cat_id: $cat_id) {
    id
    name
    description
    serving
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
      ingredients {
        unit
        raw
        amount
        ingredients
      }
      instructions {
        id
        raw
        index
      }
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
export const MeDocument = gql`
    query Me {
  me {
    id
    name
    username
    email
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