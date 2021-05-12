export interface Job {
    title: string,
    location: string,
    salary: number,
    id: string
}

export type OrderTerm  = 'location' | 'title' | 'salary'