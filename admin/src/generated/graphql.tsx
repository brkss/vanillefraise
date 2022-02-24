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
  login: AuthDefaultResponse;
  logout: AuthDefaultResponse;
  register: AuthDefaultResponse;
  requestResetPassword: AuthDefaultResponse;
  resetPassword: AuthDefaultResponse;
  seedActivityCategories: Scalars['Boolean'];
  seedRecipeCategories: Scalars['Boolean'];
  seedSpecialConditions: Scalars['Boolean'];
  verifyResetToken: Scalars['Boolean'];
};


export type MutationCreateRecipeArgs = {
  uri: Scalars['String'];
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
  recipeCategories: Array<RecipeCategory>;
  recipes: Array<Recipe>;
  specialconditions: Array<SpecialCondition>;
  work: Scalars['String'];
};

export type Recipe = {
  __typename?: 'Recipe';
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

export type RecipeCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipeCategoriesQuery = { __typename?: 'Query', recipeCategories: Array<{ __typename?: 'RecipeCategory', id: string, name: string, icon?: string | null }> };


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