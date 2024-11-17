import { Cleaner } from "./cleaner";

export interface Workplace{
    placeName?: string,
    cleaners?: Cleaner[],
    cleaner?:Cleaner
}