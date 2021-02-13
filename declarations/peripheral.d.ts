/** @noSelfInFile */
declare namespace peripheral {

    type WrappedPeripheral = { [method: string]: (...args: any[]) => any };
    type Side = "left" | "right" | "top" | "bottom" | "front" | "back";

    /**
     * Provides a list of all peripherals available.
     */
    function getNames(): string[]

    function isPresent(name: string): boolean

    function getType(peripheral: Side | string | WrappedPeripheral): string | null

    function getMethods(name: Side | string): string[] | null

    /**
     *
     * @param peripheral Get the name of a peripheral wrapped with {peripheral.wrap}
     */
    function getName(peripheral: WrappedPeripheral): string

    function call(name: string, method: string, ...args: string[]): any

    function wrap(name: string): WrappedPeripheral | null

    /**
     * @param type Name of the peripheral to wrap
     * @param filter A filter function, takes a peripheral name
     *               and wrapped table and returns if it should be included in the result.
     */
    function find(type: string, filter?: (name: string, wrapped: WrappedPeripheral) => boolean): WrappedPeripheral | null
}
