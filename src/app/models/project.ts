export interface Project {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    topics: string[];
    stargazers_count: number;
    updated_at: string;
    fork: boolean;
}

export type ProjectSort = 'created' | 'updated' | 'pushed' | 'full_name';