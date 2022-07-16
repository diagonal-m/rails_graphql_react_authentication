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
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  currentUser?: Maybe<User>;
  myTasks: Array<Task>;
  tasks: Array<Task>;
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  userId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  allowPasswordChange?: Maybe<Scalars['Boolean']>;
  confirmationSentAt?: Maybe<Scalars['ISO8601DateTime']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmedAt?: Maybe<Scalars['ISO8601DateTime']>;
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  encryptedPassword: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  rememberCreatedAt?: Maybe<Scalars['ISO8601DateTime']>;
  resetPasswordSentAt?: Maybe<Scalars['ISO8601DateTime']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  tokens?: Maybe<Scalars['String']>;
  uid: Scalars['String'];
  unconfirmedEmail?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type MyTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type MyTasksQuery = { __typename?: 'Query', myTasks: Array<{ __typename?: 'Task', id: string, name?: string | null }> };

export type TasksQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: string, name?: string | null, userId: number }> };


export const MyTasksDocument = gql`
    query myTasks {
  myTasks {
    id
    name
  }
}
    `;

/**
 * __useMyTasksQuery__
 *
 * To run a query within a React component, call `useMyTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyTasksQuery(baseOptions?: Apollo.QueryHookOptions<MyTasksQuery, MyTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyTasksQuery, MyTasksQueryVariables>(MyTasksDocument, options);
      }
export function useMyTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyTasksQuery, MyTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyTasksQuery, MyTasksQueryVariables>(MyTasksDocument, options);
        }
export type MyTasksQueryHookResult = ReturnType<typeof useMyTasksQuery>;
export type MyTasksLazyQueryHookResult = ReturnType<typeof useMyTasksLazyQuery>;
export type MyTasksQueryResult = Apollo.QueryResult<MyTasksQuery, MyTasksQueryVariables>;
export const TasksDocument = gql`
    query tasks {
  tasks {
    id
    name
    userId
  }
}
    `;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
      }
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;