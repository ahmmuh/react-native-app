import { Chef } from "./chef"
import { Specialist } from "./specialist"
import { Task } from "./task"
import { Workplace } from "./workplace"

export interface Enhet{
    id?: string,
    name?: String,
    description?: string
    chef: Chef,
    specialister: Specialist[],
    tasks:Task[],
    workPlaces: Workplace[],
    
    
}