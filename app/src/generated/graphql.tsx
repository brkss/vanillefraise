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

export type ActivityCategory = {
  __typename?: 'ActivityCategory';
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

export type CreateRecipeInput = {
  categories: Array<Scalars['String']>;
  url: Scalars['String'];
};

export type CreateRecipeResponse = {
  __typename?: 'CreateRecipeResponse';
  message: Scalars['String'];
  status: Scalars['Boolean'];
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
  raw: Scalars['String'];
  recipe: Recipe;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecipe: CreateRecipeResponse;
  deleterecipe: Scalars['Boolean'];
  login: AuthDefaultResponse;
  logout: AuthDefaultResponse;
  register: AuthDefaultResponse;
  requestResetPassword: AuthDefaultResponse;
  resetPassword: AuthDefaultResponse;
  seedActivityCategories: Scalars['Boolean'];
  seedRecipeCategories: Scalars['Boolean'];
  seedRecordCategories: Scalars['Boolean'];
  seedSpecialConditions: Scalars['Boolean'];
  verifyResetToken: Scalars['Boolean'];
};


export type MutationCreateRecipeArgs = {
  data: CreateRecipeInput;
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


export type MutationRequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  data: ResetPasswordInput;
};


export type MutationVerifyResetTokenArgs = {
  token: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  activityCategories: Array<ActivityCategory>;
  ping: Scalars['String'];
  recipe: RecipeItemResponse;
  recipeCategories: Array<RecipeCategory>;
  recipes: Array<Recipe>;
  recordCategories: Array<RecordCategory>;
  specialconditions: Array<SpecialCondition>;
  work: Scalars['String'];
};


export type QueryRecipeArgs = {
  id: Scalars['String'];
};

export type Recipe = {
  __typename?: 'Recipe';
  categories: Array<RecipeCategory>;
  cook?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image: Scalars['String'];
  ingredients: Array<Ingredient>;
  instructions: Array<Instruction>;
  name: Scalars['String'];
  prep?: Maybe<Scalars['String']>;
  public: Scalars['Boolean'];
  serving?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['String']>;
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

export type RecipeItemResponse = {
  __typename?: 'RecipeItemResponse';
  message?: Maybe<Scalars['String']>;
  recipe?: Maybe<Recipe>;
  status: Scalars['Boolean'];
};

export type Record = {
  __typename?: 'Record';
  category: RecordCategory;
  id: Scalars['String'];
  time: Scalars['DateTime'];
  unit: Scalars['String'];
  user: User;
  value: Scalars['Float'];
};

export type RecordCategory = {
  __typename?: 'RecordCategory';
  icon: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  records: Array<Record>;
};

export type RegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type SpecialCondition = {
  __typename?: 'SpecialCondition';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  records: Array<Record>;
  username: Scalars['String'];
  version: Scalars['Float'];
};

export type ActivityCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ActivityCategoriesQuery = { __typename?: 'Query', activityCategories: Array<{ __typename?: 'ActivityCategory', id: string, name: string, icon?: string | null | undefined }> };

export type SeedActivityCategoriesMutationVariables = Exact<{ [key: string]: never; }>;


export type SeedActivityCategoriesMutation = { __typename?: 'Mutation', seedActivityCategories: boolean };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthDefaultResponse', status: boolean, message?: string | null | undefined, token?: string | null | undefined, rToken?: string | null | undefined } };

export type PingQueryVariables = Exact<{ [key: string]: never; }>;


export type PingQuery = { __typename?: 'Query', ping: string };

export type RecipeCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipeCategoriesQuery = { __typename?: 'Query', recipeCategories: Array<{ __typename?: 'RecipeCategory', id: string, name: string, icon?: string | null | undefined, recipes: Array<{ __typename?: 'Recipe', id: string, name: string, total?: string | null | undefined, image: string }> }> };

export type RecipeQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type RecipeQuery = { __typename?: 'Query', recipe: { __typename?: 'RecipeItemResponse', status: boolean, message?: string | null | undefined, recipe?: { __typename?: 'Recipe', id: string, name: string, description?: string | null | undefined, serving?: number | null | undefined, image: string, cook?: string | null | undefined, prep?: string | null | undefined, total?: string | null | undefined, ingredients: Array<{ __typename?: 'Ingredient', unit?: string | null | undefined, raw: string, amount?: number | null | undefined, ingredients?: string | null | undefined }>, instructions: Array<{ __typename?: 'Instruction', id: string, raw: string }> } | null | undefined } };

export type RecordCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecordCategoriesQuery = { __typename?: 'Query', recordCategories: Array<{ __typename?: 'RecordCategory', id: string, name: string, icon: string }> };

export type SpecialConditionsQueryVariables = Exact<{ [key: string]: never; }>;


export type SpecialConditionsQuery = { __typename?: 'Query', specialconditions: Array<{ __typename?: 'SpecialCondition', id: string, name: string }> };


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