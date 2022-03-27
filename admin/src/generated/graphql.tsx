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
  duration: Scalars['String'];
  feedback?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  user: User;
};

export type ActivityCategory = {
  __typename?: 'ActivityCategory';
  activities: Array<Activity>;
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
  seedActivityCategories: Scalars['Boolean'];
  seedMoodCategories: Scalars['Boolean'];
  seedNutritionGuide: Scalars['Boolean'];
  seedRecipeCategories: Scalars['Boolean'];
  seedRecomendation: Scalars['Boolean'];
  seedRecordCategories: Scalars['Boolean'];
  seedSpecialConditions: Scalars['Boolean'];
  verifyResetToken: Scalars['Boolean'];
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
  getRecipeNutrition: RecipeNutritionResponse;
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

export type RecipeCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipeCategoriesQuery = { __typename?: 'Query', recipeCategories: Array<{ __typename?: 'RecipeCategory', id: string, name: string, icon?: string | null }> };

export type CreateRecipeMutationVariables = Exact<{
  url: Scalars['String'];
  categories: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateRecipeMutation = { __typename?: 'Mutation', createRecipe: { __typename?: 'CreateRecipeResponse', status: boolean, message: string, recipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null, serving?: number | null, image: string, cook?: string | null, prep?: string | null, total?: string | null } | null } };

export type RecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipesQuery = { __typename?: 'Query', recipes: Array<{ __typename?: 'Recipe', id: string, name: string, description?: string | null, serving?: number | null, image: string, cook?: string | null, prep?: string | null, total?: string | null }> };


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