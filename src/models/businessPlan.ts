export interface BusinesssPlan {
    planId: number;
    planName: string;
    planDescription: string;
    executiveSummary: string;
    companyDescription: string;
    marketResearch: string;
    serviceLine: string;
    marketingAndSales: string;
    deadline?: string; // Optional field for deadline
}