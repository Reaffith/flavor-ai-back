
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Recipes
 * 
 */
export type Recipes = $Result.DefaultSelection<Prisma.$RecipesPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recipes`: Exposes CRUD operations for the **Recipes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipes.findMany()
    * ```
    */
  get recipes(): Prisma.RecipesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Recipes: 'Recipes',
    Reviews: 'Reviews'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "recipes" | "reviews"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Recipes: {
        payload: Prisma.$RecipesPayload<ExtArgs>
        fields: Prisma.RecipesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipesPayload>
          }
          findFirst: {
            args: Prisma.RecipesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipesPayload>
          }
          findMany: {
            args: Prisma.RecipesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipesPayload>[]
          }
          create: {
            args: Prisma.RecipesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipesPayload>
          }
          createMany: {
            args: Prisma.RecipesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipesPayload>[]
          }
          delete: {
            args: Prisma.RecipesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipesPayload>
          }
          update: {
            args: Prisma.RecipesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipesPayload>
          }
          deleteMany: {
            args: Prisma.RecipesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecipesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipesPayload>[]
          }
          upsert: {
            args: Prisma.RecipesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipesPayload>
          }
          aggregate: {
            args: Prisma.RecipesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipes>
          }
          groupBy: {
            args: Prisma.RecipesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipesCountArgs<ExtArgs>
            result: $Utils.Optional<RecipesCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    recipes?: RecipesOmit
    reviews?: ReviewsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Recipes: number
    Reviews: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipes?: boolean | UsersCountOutputTypeCountRecipesArgs
    Reviews?: boolean | UsersCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Count Type RecipesCountOutputType
   */

  export type RecipesCountOutputType = {
    Reviews: number
  }

  export type RecipesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Reviews?: boolean | RecipesCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * RecipesCountOutputType without action
   */
  export type RecipesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipesCountOutputType
     */
    select?: RecipesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecipesCountOutputType without action
   */
  export type RecipesCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    passwordHash: string | null
    image: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    passwordHash: string | null
    image: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    passwordHash: number
    image: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    image?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    image?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    passwordHash?: true
    image?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    name: string
    passwordHash: string
    image: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    image?: boolean
    Recipes?: boolean | Users$RecipesArgs<ExtArgs>
    Reviews?: boolean | Users$ReviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    image?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    image?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    passwordHash?: boolean
    image?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "passwordHash" | "image", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Recipes?: boolean | Users$RecipesArgs<ExtArgs>
    Reviews?: boolean | Users$ReviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Recipes: Prisma.$RecipesPayload<ExtArgs>[]
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      passwordHash: string
      image: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Recipes<T extends Users$RecipesArgs<ExtArgs> = {}>(args?: Subset<T, Users$RecipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Reviews<T extends Users$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Users$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly passwordHash: FieldRef<"Users", 'String'>
    readonly image: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Recipes
   */
  export type Users$RecipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesInclude<ExtArgs> | null
    where?: RecipesWhereInput
    orderBy?: RecipesOrderByWithRelationInput | RecipesOrderByWithRelationInput[]
    cursor?: RecipesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * Users.Reviews
   */
  export type Users$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Recipes
   */

  export type AggregateRecipes = {
    _count: RecipesCountAggregateOutputType | null
    _avg: RecipesAvgAggregateOutputType | null
    _sum: RecipesSumAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  export type RecipesAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    time: number | null
  }

  export type RecipesSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    time: number | null
  }

  export type RecipesMinAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    description: string | null
    cuisine: string | null
    time: number | null
    image: string | null
  }

  export type RecipesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    authorId: number | null
    description: string | null
    cuisine: string | null
    time: number | null
    image: string | null
  }

  export type RecipesCountAggregateOutputType = {
    id: number
    title: number
    authorId: number
    description: number
    cuisine: number
    time: number
    ingredients: number
    steps: number
    image: number
    _all: number
  }


  export type RecipesAvgAggregateInputType = {
    id?: true
    authorId?: true
    time?: true
  }

  export type RecipesSumAggregateInputType = {
    id?: true
    authorId?: true
    time?: true
  }

  export type RecipesMinAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    description?: true
    cuisine?: true
    time?: true
    image?: true
  }

  export type RecipesMaxAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    description?: true
    cuisine?: true
    time?: true
    image?: true
  }

  export type RecipesCountAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    description?: true
    cuisine?: true
    time?: true
    ingredients?: true
    steps?: true
    image?: true
    _all?: true
  }

  export type RecipesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to aggregate.
     */
    where?: RecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipesOrderByWithRelationInput | RecipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipesMaxAggregateInputType
  }

  export type GetRecipesAggregateType<T extends RecipesAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipes[P]>
      : GetScalarType<T[P], AggregateRecipes[P]>
  }




  export type RecipesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipesWhereInput
    orderBy?: RecipesOrderByWithAggregationInput | RecipesOrderByWithAggregationInput[]
    by: RecipesScalarFieldEnum[] | RecipesScalarFieldEnum
    having?: RecipesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipesCountAggregateInputType | true
    _avg?: RecipesAvgAggregateInputType
    _sum?: RecipesSumAggregateInputType
    _min?: RecipesMinAggregateInputType
    _max?: RecipesMaxAggregateInputType
  }

  export type RecipesGroupByOutputType = {
    id: number
    title: string
    authorId: number
    description: string | null
    cuisine: string | null
    time: number
    ingredients: string[]
    steps: string[]
    image: string | null
    _count: RecipesCountAggregateOutputType | null
    _avg: RecipesAvgAggregateOutputType | null
    _sum: RecipesSumAggregateOutputType | null
    _min: RecipesMinAggregateOutputType | null
    _max: RecipesMaxAggregateOutputType | null
  }

  type GetRecipesGroupByPayload<T extends RecipesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipesGroupByOutputType[P]>
            : GetScalarType<T[P], RecipesGroupByOutputType[P]>
        }
      >
    >


  export type RecipesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    description?: boolean
    cuisine?: boolean
    time?: boolean
    ingredients?: boolean
    steps?: boolean
    image?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
    Reviews?: boolean | Recipes$ReviewsArgs<ExtArgs>
    _count?: boolean | RecipesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipes"]>

  export type RecipesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    description?: boolean
    cuisine?: boolean
    time?: boolean
    ingredients?: boolean
    steps?: boolean
    image?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipes"]>

  export type RecipesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    description?: boolean
    cuisine?: boolean
    time?: boolean
    ingredients?: boolean
    steps?: boolean
    image?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recipes"]>

  export type RecipesSelectScalar = {
    id?: boolean
    title?: boolean
    authorId?: boolean
    description?: boolean
    cuisine?: boolean
    time?: boolean
    ingredients?: boolean
    steps?: boolean
    image?: boolean
  }

  export type RecipesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "authorId" | "description" | "cuisine" | "time" | "ingredients" | "steps" | "image", ExtArgs["result"]["recipes"]>
  export type RecipesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
    Reviews?: boolean | Recipes$ReviewsArgs<ExtArgs>
    _count?: boolean | RecipesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecipesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type RecipesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $RecipesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipes"
    objects: {
      author: Prisma.$UsersPayload<ExtArgs>
      Reviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      authorId: number
      description: string | null
      cuisine: string | null
      time: number
      ingredients: string[]
      steps: string[]
      image: string | null
    }, ExtArgs["result"]["recipes"]>
    composites: {}
  }

  type RecipesGetPayload<S extends boolean | null | undefined | RecipesDefaultArgs> = $Result.GetResult<Prisma.$RecipesPayload, S>

  type RecipesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecipesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecipesCountAggregateInputType | true
    }

  export interface RecipesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipes'], meta: { name: 'Recipes' } }
    /**
     * Find zero or one Recipes that matches the filter.
     * @param {RecipesFindUniqueArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipesFindUniqueArgs>(args: SelectSubset<T, RecipesFindUniqueArgs<ExtArgs>>): Prisma__RecipesClient<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recipes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecipesFindUniqueOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipesFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipesClient<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesFindFirstArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipesFindFirstArgs>(args?: SelectSubset<T, RecipesFindFirstArgs<ExtArgs>>): Prisma__RecipesClient<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recipes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesFindFirstOrThrowArgs} args - Arguments to find a Recipes
     * @example
     * // Get one Recipes
     * const recipes = await prisma.recipes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipesFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipesClient<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipes.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipesWithIdOnly = await prisma.recipes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipesFindManyArgs>(args?: SelectSubset<T, RecipesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recipes.
     * @param {RecipesCreateArgs} args - Arguments to create a Recipes.
     * @example
     * // Create one Recipes
     * const Recipes = await prisma.recipes.create({
     *   data: {
     *     // ... data to create a Recipes
     *   }
     * })
     * 
     */
    create<T extends RecipesCreateArgs>(args: SelectSubset<T, RecipesCreateArgs<ExtArgs>>): Prisma__RecipesClient<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recipes.
     * @param {RecipesCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipes = await prisma.recipes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipesCreateManyArgs>(args?: SelectSubset<T, RecipesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipesCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipes = await prisma.recipes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipesWithIdOnly = await prisma.recipes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipesCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recipes.
     * @param {RecipesDeleteArgs} args - Arguments to delete one Recipes.
     * @example
     * // Delete one Recipes
     * const Recipes = await prisma.recipes.delete({
     *   where: {
     *     // ... filter to delete one Recipes
     *   }
     * })
     * 
     */
    delete<T extends RecipesDeleteArgs>(args: SelectSubset<T, RecipesDeleteArgs<ExtArgs>>): Prisma__RecipesClient<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recipes.
     * @param {RecipesUpdateArgs} args - Arguments to update one Recipes.
     * @example
     * // Update one Recipes
     * const recipes = await prisma.recipes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipesUpdateArgs>(args: SelectSubset<T, RecipesUpdateArgs<ExtArgs>>): Prisma__RecipesClient<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recipes.
     * @param {RecipesDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipesDeleteManyArgs>(args?: SelectSubset<T, RecipesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipes = await prisma.recipes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipesUpdateManyArgs>(args: SelectSubset<T, RecipesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes and returns the data updated in the database.
     * @param {RecipesUpdateManyAndReturnArgs} args - Arguments to update many Recipes.
     * @example
     * // Update many Recipes
     * const recipes = await prisma.recipes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recipes and only return the `id`
     * const recipesWithIdOnly = await prisma.recipes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecipesUpdateManyAndReturnArgs>(args: SelectSubset<T, RecipesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recipes.
     * @param {RecipesUpsertArgs} args - Arguments to update or create a Recipes.
     * @example
     * // Update or create a Recipes
     * const recipes = await prisma.recipes.upsert({
     *   create: {
     *     // ... data to create a Recipes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipes we want to update
     *   }
     * })
     */
    upsert<T extends RecipesUpsertArgs>(args: SelectSubset<T, RecipesUpsertArgs<ExtArgs>>): Prisma__RecipesClient<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipes.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipesCountArgs>(
      args?: Subset<T, RecipesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecipesAggregateArgs>(args: Subset<T, RecipesAggregateArgs>): Prisma.PrismaPromise<GetRecipesAggregateType<T>>

    /**
     * Group by Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecipesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipesGroupByArgs['orderBy'] }
        : { orderBy?: RecipesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecipesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipes model
   */
  readonly fields: RecipesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Reviews<T extends Recipes$ReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Recipes$ReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recipes model
   */
  interface RecipesFieldRefs {
    readonly id: FieldRef<"Recipes", 'Int'>
    readonly title: FieldRef<"Recipes", 'String'>
    readonly authorId: FieldRef<"Recipes", 'Int'>
    readonly description: FieldRef<"Recipes", 'String'>
    readonly cuisine: FieldRef<"Recipes", 'String'>
    readonly time: FieldRef<"Recipes", 'Int'>
    readonly ingredients: FieldRef<"Recipes", 'String[]'>
    readonly steps: FieldRef<"Recipes", 'String[]'>
    readonly image: FieldRef<"Recipes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Recipes findUnique
   */
  export type RecipesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where: RecipesWhereUniqueInput
  }

  /**
   * Recipes findUniqueOrThrow
   */
  export type RecipesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where: RecipesWhereUniqueInput
  }

  /**
   * Recipes findFirst
   */
  export type RecipesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipesOrderByWithRelationInput | RecipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * Recipes findFirstOrThrow
   */
  export type RecipesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipesOrderByWithRelationInput | RecipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * Recipes findMany
   */
  export type RecipesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipesOrderByWithRelationInput | RecipesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipesScalarFieldEnum | RecipesScalarFieldEnum[]
  }

  /**
   * Recipes create
   */
  export type RecipesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipes.
     */
    data: XOR<RecipesCreateInput, RecipesUncheckedCreateInput>
  }

  /**
   * Recipes createMany
   */
  export type RecipesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipesCreateManyInput | RecipesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipes createManyAndReturn
   */
  export type RecipesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipesCreateManyInput | RecipesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipes update
   */
  export type RecipesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipes.
     */
    data: XOR<RecipesUpdateInput, RecipesUncheckedUpdateInput>
    /**
     * Choose, which Recipes to update.
     */
    where: RecipesWhereUniqueInput
  }

  /**
   * Recipes updateMany
   */
  export type RecipesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipesUpdateManyMutationInput, RecipesUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipesWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
  }

  /**
   * Recipes updateManyAndReturn
   */
  export type RecipesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipesUpdateManyMutationInput, RecipesUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipesWhereInput
    /**
     * Limit how many Recipes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recipes upsert
   */
  export type RecipesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipes to update in case it exists.
     */
    where: RecipesWhereUniqueInput
    /**
     * In case the Recipes found by the `where` argument doesn't exist, create a new Recipes with this data.
     */
    create: XOR<RecipesCreateInput, RecipesUncheckedCreateInput>
    /**
     * In case the Recipes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipesUpdateInput, RecipesUncheckedUpdateInput>
  }

  /**
   * Recipes delete
   */
  export type RecipesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesInclude<ExtArgs> | null
    /**
     * Filter which Recipes to delete.
     */
    where: RecipesWhereUniqueInput
  }

  /**
   * Recipes deleteMany
   */
  export type RecipesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipesWhereInput
    /**
     * Limit how many Recipes to delete.
     */
    limit?: number
  }

  /**
   * Recipes.Reviews
   */
  export type Recipes$ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Recipes without action
   */
  export type RecipesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipes
     */
    select?: RecipesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recipes
     */
    omit?: RecipesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecipesInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    recipeId: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    recipeId: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: number | null
    authorId: number | null
    recipeId: number | null
    rating: number | null
    title: string | null
    description: string | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: number | null
    authorId: number | null
    recipeId: number | null
    rating: number | null
    title: string | null
    description: string | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    authorId: number
    recipeId: number
    rating: number
    title: number
    description: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    id?: true
    authorId?: true
    recipeId?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    id?: true
    authorId?: true
    recipeId?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    authorId?: true
    recipeId?: true
    rating?: true
    title?: true
    description?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    authorId?: true
    recipeId?: true
    rating?: true
    title?: true
    description?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    authorId?: true
    recipeId?: true
    rating?: true
    title?: true
    description?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: number
    authorId: number
    recipeId: number
    rating: number
    title: string | null
    description: string | null
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    recipeId?: boolean
    rating?: boolean
    title?: boolean
    description?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
    recipe?: boolean | RecipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    recipeId?: boolean
    rating?: boolean
    title?: boolean
    description?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
    recipe?: boolean | RecipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    recipeId?: boolean
    rating?: boolean
    title?: boolean
    description?: boolean
    author?: boolean | UsersDefaultArgs<ExtArgs>
    recipe?: boolean | RecipesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    authorId?: boolean
    recipeId?: boolean
    rating?: boolean
    title?: boolean
    description?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "recipeId" | "rating" | "title" | "description", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
    recipe?: boolean | RecipesDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
    recipe?: boolean | RecipesDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UsersDefaultArgs<ExtArgs>
    recipe?: boolean | RecipesDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      author: Prisma.$UsersPayload<ExtArgs>
      recipe: Prisma.$RecipesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      authorId: number
      recipeId: number
      rating: number
      title: string | null
      description: string | null
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipe<T extends RecipesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecipesDefaultArgs<ExtArgs>>): Prisma__RecipesClient<$Result.GetResult<Prisma.$RecipesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'Int'>
    readonly authorId: FieldRef<"Reviews", 'Int'>
    readonly recipeId: FieldRef<"Reviews", 'Int'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly title: FieldRef<"Reviews", 'String'>
    readonly description: FieldRef<"Reviews", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    passwordHash: 'passwordHash',
    image: 'image'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RecipesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    authorId: 'authorId',
    description: 'description',
    cuisine: 'cuisine',
    time: 'time',
    ingredients: 'ingredients',
    steps: 'steps',
    image: 'image'
  };

  export type RecipesScalarFieldEnum = (typeof RecipesScalarFieldEnum)[keyof typeof RecipesScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    recipeId: 'recipeId',
    rating: 'rating',
    title: 'title',
    description: 'description'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    email?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    passwordHash?: StringFilter<"Users"> | string
    image?: StringNullableFilter<"Users"> | string | null
    Recipes?: RecipesListRelationFilter
    Reviews?: ReviewsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    image?: SortOrderInput | SortOrder
    Recipes?: RecipesOrderByRelationAggregateInput
    Reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    passwordHash?: StringFilter<"Users"> | string
    image?: StringNullableFilter<"Users"> | string | null
    Recipes?: RecipesListRelationFilter
    Reviews?: ReviewsListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    email?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    passwordHash?: StringWithAggregatesFilter<"Users"> | string
    image?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type RecipesWhereInput = {
    AND?: RecipesWhereInput | RecipesWhereInput[]
    OR?: RecipesWhereInput[]
    NOT?: RecipesWhereInput | RecipesWhereInput[]
    id?: IntFilter<"Recipes"> | number
    title?: StringFilter<"Recipes"> | string
    authorId?: IntFilter<"Recipes"> | number
    description?: StringNullableFilter<"Recipes"> | string | null
    cuisine?: StringNullableFilter<"Recipes"> | string | null
    time?: IntFilter<"Recipes"> | number
    ingredients?: StringNullableListFilter<"Recipes">
    steps?: StringNullableListFilter<"Recipes">
    image?: StringNullableFilter<"Recipes"> | string | null
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Reviews?: ReviewsListRelationFilter
  }

  export type RecipesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    description?: SortOrderInput | SortOrder
    cuisine?: SortOrderInput | SortOrder
    time?: SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    image?: SortOrderInput | SortOrder
    author?: UsersOrderByWithRelationInput
    Reviews?: ReviewsOrderByRelationAggregateInput
  }

  export type RecipesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecipesWhereInput | RecipesWhereInput[]
    OR?: RecipesWhereInput[]
    NOT?: RecipesWhereInput | RecipesWhereInput[]
    title?: StringFilter<"Recipes"> | string
    authorId?: IntFilter<"Recipes"> | number
    description?: StringNullableFilter<"Recipes"> | string | null
    cuisine?: StringNullableFilter<"Recipes"> | string | null
    time?: IntFilter<"Recipes"> | number
    ingredients?: StringNullableListFilter<"Recipes">
    steps?: StringNullableListFilter<"Recipes">
    image?: StringNullableFilter<"Recipes"> | string | null
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    Reviews?: ReviewsListRelationFilter
  }, "id">

  export type RecipesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    description?: SortOrderInput | SortOrder
    cuisine?: SortOrderInput | SortOrder
    time?: SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: RecipesCountOrderByAggregateInput
    _avg?: RecipesAvgOrderByAggregateInput
    _max?: RecipesMaxOrderByAggregateInput
    _min?: RecipesMinOrderByAggregateInput
    _sum?: RecipesSumOrderByAggregateInput
  }

  export type RecipesScalarWhereWithAggregatesInput = {
    AND?: RecipesScalarWhereWithAggregatesInput | RecipesScalarWhereWithAggregatesInput[]
    OR?: RecipesScalarWhereWithAggregatesInput[]
    NOT?: RecipesScalarWhereWithAggregatesInput | RecipesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recipes"> | number
    title?: StringWithAggregatesFilter<"Recipes"> | string
    authorId?: IntWithAggregatesFilter<"Recipes"> | number
    description?: StringNullableWithAggregatesFilter<"Recipes"> | string | null
    cuisine?: StringNullableWithAggregatesFilter<"Recipes"> | string | null
    time?: IntWithAggregatesFilter<"Recipes"> | number
    ingredients?: StringNullableListFilter<"Recipes">
    steps?: StringNullableListFilter<"Recipes">
    image?: StringNullableWithAggregatesFilter<"Recipes"> | string | null
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: IntFilter<"Reviews"> | number
    authorId?: IntFilter<"Reviews"> | number
    recipeId?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    title?: StringNullableFilter<"Reviews"> | string | null
    description?: StringNullableFilter<"Reviews"> | string | null
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    recipe?: XOR<RecipesScalarRelationFilter, RecipesWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    author?: UsersOrderByWithRelationInput
    recipe?: RecipesOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    authorId?: IntFilter<"Reviews"> | number
    recipeId?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    title?: StringNullableFilter<"Reviews"> | string | null
    description?: StringNullableFilter<"Reviews"> | string | null
    author?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    recipe?: XOR<RecipesScalarRelationFilter, RecipesWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reviews"> | number
    authorId?: IntWithAggregatesFilter<"Reviews"> | number
    recipeId?: IntWithAggregatesFilter<"Reviews"> | number
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    title?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
    description?: StringNullableWithAggregatesFilter<"Reviews"> | string | null
  }

  export type UsersCreateInput = {
    email: string
    name: string
    passwordHash: string
    image?: string | null
    Recipes?: RecipesCreateNestedManyWithoutAuthorInput
    Reviews?: ReviewsCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    passwordHash: string
    image?: string | null
    Recipes?: RecipesUncheckedCreateNestedManyWithoutAuthorInput
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    Recipes?: RecipesUpdateManyWithoutAuthorNestedInput
    Reviews?: ReviewsUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    Recipes?: RecipesUncheckedUpdateManyWithoutAuthorNestedInput
    Reviews?: ReviewsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    email: string
    name: string
    passwordHash: string
    image?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipesCreateInput = {
    title: string
    description?: string | null
    cuisine?: string | null
    time: number
    ingredients?: RecipesCreateingredientsInput | string[]
    steps?: RecipesCreatestepsInput | string[]
    image?: string | null
    author: UsersCreateNestedOneWithoutRecipesInput
    Reviews?: ReviewsCreateNestedManyWithoutRecipeInput
  }

  export type RecipesUncheckedCreateInput = {
    id?: number
    title: string
    authorId: number
    description?: string | null
    cuisine?: string | null
    time: number
    ingredients?: RecipesCreateingredientsInput | string[]
    steps?: RecipesCreatestepsInput | string[]
    image?: string | null
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    time?: IntFieldUpdateOperationsInput | number
    ingredients?: RecipesUpdateingredientsInput | string[]
    steps?: RecipesUpdatestepsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UsersUpdateOneRequiredWithoutRecipesNestedInput
    Reviews?: ReviewsUpdateManyWithoutRecipeNestedInput
  }

  export type RecipesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    time?: IntFieldUpdateOperationsInput | number
    ingredients?: RecipesUpdateingredientsInput | string[]
    steps?: RecipesUpdatestepsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    Reviews?: ReviewsUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipesCreateManyInput = {
    id?: number
    title: string
    authorId: number
    description?: string | null
    cuisine?: string | null
    time: number
    ingredients?: RecipesCreateingredientsInput | string[]
    steps?: RecipesCreatestepsInput | string[]
    image?: string | null
  }

  export type RecipesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    time?: IntFieldUpdateOperationsInput | number
    ingredients?: RecipesUpdateingredientsInput | string[]
    steps?: RecipesUpdatestepsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    time?: IntFieldUpdateOperationsInput | number
    ingredients?: RecipesUpdateingredientsInput | string[]
    steps?: RecipesUpdatestepsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsCreateInput = {
    rating: number
    title?: string | null
    description?: string | null
    author: UsersCreateNestedOneWithoutReviewsInput
    recipe: RecipesCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: number
    authorId: number
    recipeId: number
    rating: number
    title?: string | null
    description?: string | null
  }

  export type ReviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UsersUpdateOneRequiredWithoutReviewsNestedInput
    recipe?: RecipesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsCreateManyInput = {
    id?: number
    authorId: number
    recipeId: number
    rating: number
    title?: string | null
    description?: string | null
  }

  export type ReviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RecipesListRelationFilter = {
    every?: RecipesWhereInput
    some?: RecipesWhereInput
    none?: RecipesWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecipesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    image?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    image?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    passwordHash?: SortOrder
    image?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type RecipesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    description?: SortOrder
    cuisine?: SortOrder
    time?: SortOrder
    ingredients?: SortOrder
    steps?: SortOrder
    image?: SortOrder
  }

  export type RecipesAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    time?: SortOrder
  }

  export type RecipesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    description?: SortOrder
    cuisine?: SortOrder
    time?: SortOrder
    image?: SortOrder
  }

  export type RecipesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    description?: SortOrder
    cuisine?: SortOrder
    time?: SortOrder
    image?: SortOrder
  }

  export type RecipesSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    time?: SortOrder
  }

  export type RecipesScalarRelationFilter = {
    is?: RecipesWhereInput
    isNot?: RecipesWhereInput
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
    title?: SortOrder
    description?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    recipeId?: SortOrder
    rating?: SortOrder
  }

  export type RecipesCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecipesCreateWithoutAuthorInput, RecipesUncheckedCreateWithoutAuthorInput> | RecipesCreateWithoutAuthorInput[] | RecipesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipesCreateOrConnectWithoutAuthorInput | RecipesCreateOrConnectWithoutAuthorInput[]
    createMany?: RecipesCreateManyAuthorInputEnvelope
    connect?: RecipesWhereUniqueInput | RecipesWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput> | ReviewsCreateWithoutAuthorInput[] | ReviewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutAuthorInput | ReviewsCreateOrConnectWithoutAuthorInput[]
    createMany?: ReviewsCreateManyAuthorInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type RecipesUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RecipesCreateWithoutAuthorInput, RecipesUncheckedCreateWithoutAuthorInput> | RecipesCreateWithoutAuthorInput[] | RecipesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipesCreateOrConnectWithoutAuthorInput | RecipesCreateOrConnectWithoutAuthorInput[]
    createMany?: RecipesCreateManyAuthorInputEnvelope
    connect?: RecipesWhereUniqueInput | RecipesWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput> | ReviewsCreateWithoutAuthorInput[] | ReviewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutAuthorInput | ReviewsCreateOrConnectWithoutAuthorInput[]
    createMany?: ReviewsCreateManyAuthorInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RecipesUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecipesCreateWithoutAuthorInput, RecipesUncheckedCreateWithoutAuthorInput> | RecipesCreateWithoutAuthorInput[] | RecipesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipesCreateOrConnectWithoutAuthorInput | RecipesCreateOrConnectWithoutAuthorInput[]
    upsert?: RecipesUpsertWithWhereUniqueWithoutAuthorInput | RecipesUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecipesCreateManyAuthorInputEnvelope
    set?: RecipesWhereUniqueInput | RecipesWhereUniqueInput[]
    disconnect?: RecipesWhereUniqueInput | RecipesWhereUniqueInput[]
    delete?: RecipesWhereUniqueInput | RecipesWhereUniqueInput[]
    connect?: RecipesWhereUniqueInput | RecipesWhereUniqueInput[]
    update?: RecipesUpdateWithWhereUniqueWithoutAuthorInput | RecipesUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecipesUpdateManyWithWhereWithoutAuthorInput | RecipesUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecipesScalarWhereInput | RecipesScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput> | ReviewsCreateWithoutAuthorInput[] | ReviewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutAuthorInput | ReviewsCreateOrConnectWithoutAuthorInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutAuthorInput | ReviewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReviewsCreateManyAuthorInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutAuthorInput | ReviewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutAuthorInput | ReviewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipesUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RecipesCreateWithoutAuthorInput, RecipesUncheckedCreateWithoutAuthorInput> | RecipesCreateWithoutAuthorInput[] | RecipesUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RecipesCreateOrConnectWithoutAuthorInput | RecipesCreateOrConnectWithoutAuthorInput[]
    upsert?: RecipesUpsertWithWhereUniqueWithoutAuthorInput | RecipesUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RecipesCreateManyAuthorInputEnvelope
    set?: RecipesWhereUniqueInput | RecipesWhereUniqueInput[]
    disconnect?: RecipesWhereUniqueInput | RecipesWhereUniqueInput[]
    delete?: RecipesWhereUniqueInput | RecipesWhereUniqueInput[]
    connect?: RecipesWhereUniqueInput | RecipesWhereUniqueInput[]
    update?: RecipesUpdateWithWhereUniqueWithoutAuthorInput | RecipesUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RecipesUpdateManyWithWhereWithoutAuthorInput | RecipesUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RecipesScalarWhereInput | RecipesScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput> | ReviewsCreateWithoutAuthorInput[] | ReviewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutAuthorInput | ReviewsCreateOrConnectWithoutAuthorInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutAuthorInput | ReviewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: ReviewsCreateManyAuthorInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutAuthorInput | ReviewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutAuthorInput | ReviewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type RecipesCreateingredientsInput = {
    set: string[]
  }

  export type RecipesCreatestepsInput = {
    set: string[]
  }

  export type UsersCreateNestedOneWithoutRecipesInput = {
    create?: XOR<UsersCreateWithoutRecipesInput, UsersUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRecipesInput
    connect?: UsersWhereUniqueInput
  }

  export type ReviewsCreateNestedManyWithoutRecipeInput = {
    create?: XOR<ReviewsCreateWithoutRecipeInput, ReviewsUncheckedCreateWithoutRecipeInput> | ReviewsCreateWithoutRecipeInput[] | ReviewsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutRecipeInput | ReviewsCreateOrConnectWithoutRecipeInput[]
    createMany?: ReviewsCreateManyRecipeInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<ReviewsCreateWithoutRecipeInput, ReviewsUncheckedCreateWithoutRecipeInput> | ReviewsCreateWithoutRecipeInput[] | ReviewsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutRecipeInput | ReviewsCreateOrConnectWithoutRecipeInput[]
    createMany?: ReviewsCreateManyRecipeInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type RecipesUpdateingredientsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RecipesUpdatestepsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UsersUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<UsersCreateWithoutRecipesInput, UsersUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRecipesInput
    upsert?: UsersUpsertWithoutRecipesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRecipesInput, UsersUpdateWithoutRecipesInput>, UsersUncheckedUpdateWithoutRecipesInput>
  }

  export type ReviewsUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<ReviewsCreateWithoutRecipeInput, ReviewsUncheckedCreateWithoutRecipeInput> | ReviewsCreateWithoutRecipeInput[] | ReviewsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutRecipeInput | ReviewsCreateOrConnectWithoutRecipeInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutRecipeInput | ReviewsUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: ReviewsCreateManyRecipeInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutRecipeInput | ReviewsUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutRecipeInput | ReviewsUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<ReviewsCreateWithoutRecipeInput, ReviewsUncheckedCreateWithoutRecipeInput> | ReviewsCreateWithoutRecipeInput[] | ReviewsUncheckedCreateWithoutRecipeInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutRecipeInput | ReviewsCreateOrConnectWithoutRecipeInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutRecipeInput | ReviewsUpsertWithWhereUniqueWithoutRecipeInput[]
    createMany?: ReviewsCreateManyRecipeInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutRecipeInput | ReviewsUpdateWithWhereUniqueWithoutRecipeInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutRecipeInput | ReviewsUpdateManyWithWhereWithoutRecipeInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    connect?: UsersWhereUniqueInput
  }

  export type RecipesCreateNestedOneWithoutReviewsInput = {
    create?: XOR<RecipesCreateWithoutReviewsInput, RecipesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RecipesCreateOrConnectWithoutReviewsInput
    connect?: RecipesWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReviewsInput
    upsert?: UsersUpsertWithoutReviewsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReviewsInput, UsersUpdateWithoutReviewsInput>, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type RecipesUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<RecipesCreateWithoutReviewsInput, RecipesUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RecipesCreateOrConnectWithoutReviewsInput
    upsert?: RecipesUpsertWithoutReviewsInput
    connect?: RecipesWhereUniqueInput
    update?: XOR<XOR<RecipesUpdateToOneWithWhereWithoutReviewsInput, RecipesUpdateWithoutReviewsInput>, RecipesUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RecipesCreateWithoutAuthorInput = {
    title: string
    description?: string | null
    cuisine?: string | null
    time: number
    ingredients?: RecipesCreateingredientsInput | string[]
    steps?: RecipesCreatestepsInput | string[]
    image?: string | null
    Reviews?: ReviewsCreateNestedManyWithoutRecipeInput
  }

  export type RecipesUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    description?: string | null
    cuisine?: string | null
    time: number
    ingredients?: RecipesCreateingredientsInput | string[]
    steps?: RecipesCreatestepsInput | string[]
    image?: string | null
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipesCreateOrConnectWithoutAuthorInput = {
    where: RecipesWhereUniqueInput
    create: XOR<RecipesCreateWithoutAuthorInput, RecipesUncheckedCreateWithoutAuthorInput>
  }

  export type RecipesCreateManyAuthorInputEnvelope = {
    data: RecipesCreateManyAuthorInput | RecipesCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutAuthorInput = {
    rating: number
    title?: string | null
    description?: string | null
    recipe: RecipesCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutAuthorInput = {
    id?: number
    recipeId: number
    rating: number
    title?: string | null
    description?: string | null
  }

  export type ReviewsCreateOrConnectWithoutAuthorInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput>
  }

  export type ReviewsCreateManyAuthorInputEnvelope = {
    data: ReviewsCreateManyAuthorInput | ReviewsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RecipesUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RecipesWhereUniqueInput
    update: XOR<RecipesUpdateWithoutAuthorInput, RecipesUncheckedUpdateWithoutAuthorInput>
    create: XOR<RecipesCreateWithoutAuthorInput, RecipesUncheckedCreateWithoutAuthorInput>
  }

  export type RecipesUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RecipesWhereUniqueInput
    data: XOR<RecipesUpdateWithoutAuthorInput, RecipesUncheckedUpdateWithoutAuthorInput>
  }

  export type RecipesUpdateManyWithWhereWithoutAuthorInput = {
    where: RecipesScalarWhereInput
    data: XOR<RecipesUpdateManyMutationInput, RecipesUncheckedUpdateManyWithoutAuthorInput>
  }

  export type RecipesScalarWhereInput = {
    AND?: RecipesScalarWhereInput | RecipesScalarWhereInput[]
    OR?: RecipesScalarWhereInput[]
    NOT?: RecipesScalarWhereInput | RecipesScalarWhereInput[]
    id?: IntFilter<"Recipes"> | number
    title?: StringFilter<"Recipes"> | string
    authorId?: IntFilter<"Recipes"> | number
    description?: StringNullableFilter<"Recipes"> | string | null
    cuisine?: StringNullableFilter<"Recipes"> | string | null
    time?: IntFilter<"Recipes"> | number
    ingredients?: StringNullableListFilter<"Recipes">
    steps?: StringNullableListFilter<"Recipes">
    image?: StringNullableFilter<"Recipes"> | string | null
  }

  export type ReviewsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutAuthorInput, ReviewsUncheckedUpdateWithoutAuthorInput>
    create: XOR<ReviewsCreateWithoutAuthorInput, ReviewsUncheckedCreateWithoutAuthorInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutAuthorInput, ReviewsUncheckedUpdateWithoutAuthorInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutAuthorInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: IntFilter<"Reviews"> | number
    authorId?: IntFilter<"Reviews"> | number
    recipeId?: IntFilter<"Reviews"> | number
    rating?: IntFilter<"Reviews"> | number
    title?: StringNullableFilter<"Reviews"> | string | null
    description?: StringNullableFilter<"Reviews"> | string | null
  }

  export type UsersCreateWithoutRecipesInput = {
    email: string
    name: string
    passwordHash: string
    image?: string | null
    Reviews?: ReviewsCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateWithoutRecipesInput = {
    id?: number
    email: string
    name: string
    passwordHash: string
    image?: string | null
    Reviews?: ReviewsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersCreateOrConnectWithoutRecipesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRecipesInput, UsersUncheckedCreateWithoutRecipesInput>
  }

  export type ReviewsCreateWithoutRecipeInput = {
    rating: number
    title?: string | null
    description?: string | null
    author: UsersCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutRecipeInput = {
    id?: number
    authorId: number
    rating: number
    title?: string | null
    description?: string | null
  }

  export type ReviewsCreateOrConnectWithoutRecipeInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutRecipeInput, ReviewsUncheckedCreateWithoutRecipeInput>
  }

  export type ReviewsCreateManyRecipeInputEnvelope = {
    data: ReviewsCreateManyRecipeInput | ReviewsCreateManyRecipeInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutRecipesInput = {
    update: XOR<UsersUpdateWithoutRecipesInput, UsersUncheckedUpdateWithoutRecipesInput>
    create: XOR<UsersCreateWithoutRecipesInput, UsersUncheckedCreateWithoutRecipesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRecipesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRecipesInput, UsersUncheckedUpdateWithoutRecipesInput>
  }

  export type UsersUpdateWithoutRecipesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    Reviews?: ReviewsUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateWithoutRecipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    Reviews?: ReviewsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type ReviewsUpsertWithWhereUniqueWithoutRecipeInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutRecipeInput, ReviewsUncheckedUpdateWithoutRecipeInput>
    create: XOR<ReviewsCreateWithoutRecipeInput, ReviewsUncheckedCreateWithoutRecipeInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutRecipeInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutRecipeInput, ReviewsUncheckedUpdateWithoutRecipeInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutRecipeInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutRecipeInput>
  }

  export type UsersCreateWithoutReviewsInput = {
    email: string
    name: string
    passwordHash: string
    image?: string | null
    Recipes?: RecipesCreateNestedManyWithoutAuthorInput
  }

  export type UsersUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    name: string
    passwordHash: string
    image?: string | null
    Recipes?: RecipesUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UsersCreateOrConnectWithoutReviewsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
  }

  export type RecipesCreateWithoutReviewsInput = {
    title: string
    description?: string | null
    cuisine?: string | null
    time: number
    ingredients?: RecipesCreateingredientsInput | string[]
    steps?: RecipesCreatestepsInput | string[]
    image?: string | null
    author: UsersCreateNestedOneWithoutRecipesInput
  }

  export type RecipesUncheckedCreateWithoutReviewsInput = {
    id?: number
    title: string
    authorId: number
    description?: string | null
    cuisine?: string | null
    time: number
    ingredients?: RecipesCreateingredientsInput | string[]
    steps?: RecipesCreatestepsInput | string[]
    image?: string | null
  }

  export type RecipesCreateOrConnectWithoutReviewsInput = {
    where: RecipesWhereUniqueInput
    create: XOR<RecipesCreateWithoutReviewsInput, RecipesUncheckedCreateWithoutReviewsInput>
  }

  export type UsersUpsertWithoutReviewsInput = {
    update: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
    create: XOR<UsersCreateWithoutReviewsInput, UsersUncheckedCreateWithoutReviewsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReviewsInput, UsersUncheckedUpdateWithoutReviewsInput>
  }

  export type UsersUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    Recipes?: RecipesUpdateManyWithoutAuthorNestedInput
  }

  export type UsersUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    Recipes?: RecipesUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type RecipesUpsertWithoutReviewsInput = {
    update: XOR<RecipesUpdateWithoutReviewsInput, RecipesUncheckedUpdateWithoutReviewsInput>
    create: XOR<RecipesCreateWithoutReviewsInput, RecipesUncheckedCreateWithoutReviewsInput>
    where?: RecipesWhereInput
  }

  export type RecipesUpdateToOneWithWhereWithoutReviewsInput = {
    where?: RecipesWhereInput
    data: XOR<RecipesUpdateWithoutReviewsInput, RecipesUncheckedUpdateWithoutReviewsInput>
  }

  export type RecipesUpdateWithoutReviewsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    time?: IntFieldUpdateOperationsInput | number
    ingredients?: RecipesUpdateingredientsInput | string[]
    steps?: RecipesUpdatestepsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UsersUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipesUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    time?: IntFieldUpdateOperationsInput | number
    ingredients?: RecipesUpdateingredientsInput | string[]
    steps?: RecipesUpdatestepsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecipesCreateManyAuthorInput = {
    id?: number
    title: string
    description?: string | null
    cuisine?: string | null
    time: number
    ingredients?: RecipesCreateingredientsInput | string[]
    steps?: RecipesCreatestepsInput | string[]
    image?: string | null
  }

  export type ReviewsCreateManyAuthorInput = {
    id?: number
    recipeId: number
    rating: number
    title?: string | null
    description?: string | null
  }

  export type RecipesUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    time?: IntFieldUpdateOperationsInput | number
    ingredients?: RecipesUpdateingredientsInput | string[]
    steps?: RecipesUpdatestepsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    Reviews?: ReviewsUpdateManyWithoutRecipeNestedInput
  }

  export type RecipesUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    time?: IntFieldUpdateOperationsInput | number
    ingredients?: RecipesUpdateingredientsInput | string[]
    steps?: RecipesUpdatestepsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    Reviews?: ReviewsUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipesUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cuisine?: NullableStringFieldUpdateOperationsInput | string | null
    time?: IntFieldUpdateOperationsInput | number
    ingredients?: RecipesUpdateingredientsInput | string[]
    steps?: RecipesUpdatestepsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsUpdateWithoutAuthorInput = {
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recipe?: RecipesUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsCreateManyRecipeInput = {
    id?: number
    authorId: number
    rating: number
    title?: string | null
    description?: string | null
  }

  export type ReviewsUpdateWithoutRecipeInput = {
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UsersUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewsUncheckedUpdateManyWithoutRecipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}