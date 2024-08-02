type IsAny<T> = T


type NotAny<T> = true extends IsAny<T> ? false : true
import NotAny
/**
 * ## TypeScript Conditional Types
 * - The line `type Extends<A,B> = A extends B ? true : false` is TypeScript
 * conditional type
 * - `A extends B` : This checks if type `A` is assignable to type `B`.
 * in other words, it checks if `A` is a subtype of `B`
 * - `? true : false` : This is a ternary operator. if condition
 * (`A extends B`) is true, it returns `true`; otherwise, it returns `false`
 *
 * ### Putting It Together
 * - `type Extends<A, B>` : This defines a new type called `Extends` that takes
 * two type parameters `A` and `B`
 * - `= A extends B ? true : false` : This part checks if `A` is subtype of `B`.
 * If it is, `Extends<A,B>` will be `true`; otherwise, it will be `false`
 */
type Extends<A, B> = A extends B ? true : false;

/**
 * ## Type Definition
 * ```js
 * Equal<A,B>
 * ```
 * - Is a TypeScript type that checks if two types `A` and `B` are the same
 *
 * ## Inner Function :
 *
 * - `(<T>()=> T extends A ? 1 : 2)`
 * - is a function type that returns `1` if
 * extends `A`, otherwise it returns 2
 *
 * ## Comparison :
 * The type `Equal<A,B>` compares two such types:
 *
 * - `(<T>()=>T extends A ? 1 : 2)`
 *
 * - `(<T>()=>T extends B ? 1 : 2)`
 *
 * **Result** : If these two function types are the same, it means `A` and `B` are
 * the same type, so `Equal<A,B>` is a way to check if `A` and `B` are exactly
 * the same type. If they are, it returns `true`;if not, it returns `false`
 * @description Result
 *
 * ### Epenflow : [epenflow](https://www.github.com)
 */
export type Equal<A, B> =
	(<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
		? true
		: false;
/**
 * ## Type definition
 * ```js
 * Expect<T extends true>
 * ```
 * Is a TypeScript type that ensures `T` must be `true`
 *
 * ## Simplified Explanation :
 * - This type is used to enforce that the type `T` can only be `true`.
 * If you try to use any other type, TypeScript will give you an error.
 *
 * **In simpler terms**, `Expect<T extends true>` is like a rule that says, "Hey, `T`
 * must be `true` and nothing else"
 */
export type Expect<T extends true> = T;

/**
 *
 * ## Function Definition
 * ```js
 * const identity = <T>(args: T) => args;
 * ```
 *
 * ### Generic :
 * - `<T>` : This is a generic type parameter. It means that `T` can
 * be any type
 *
 * ### Parameter :
 * - `args: T` : This means the function takes one argument of type `T`.
 *
 * ### Return Value :
 * - `args` : The function simply returns the argument it received
 *
 * ### In Simple Terms :
 * - `identity` is a function that takes any value and return the same value
 * - It works with any type because of generic <T>
 *
 */
const identity = <T>(args: T) => args;

/**
 * ## Function Definition :
 * ```js
 * const mapArray = <T,U>(arr: T[], fn: (prop: T) => U ) => arr.map(fn)
 * ```
 *
 * ### Generic :
 * - `<T,U>` : These are generic types. `T` is the type of the element in the
 * input array, and `U` is the type of the elements in the output array.
 *
 * ### Parameters :
 * - `arr: T[]` : This is an array of the type `T`
 * - `fn: (prop: T) => U` : This is a function that takes an element of the type `T` and
 * returns as an element of type `U`
 *
 * ### Function Body:
 * - `arr.map(fn)` : This applies the function `fn` to each element in the array `arr` and returns
 * a new array with the results
 *
 * ### In Simple Terms :
 * - `mapArray` is a function that takes an array and a function.
 * - It applies the function to each element in the array
 * - It returns a new array with the transformed elements
 *
 */

const mapArray = <T, U>(arr: T[], fn: (prop: T) => U) => arr.map(fn);
