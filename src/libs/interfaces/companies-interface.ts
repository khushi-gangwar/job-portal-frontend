export interface Company {
  id: string;
  name: string;
  logo: string;
  type: "Corporate" | "Startup" | "MNC"; // assuming fixed types
  founded: number;
  industry: string;
  description: string;
  location: string;
  isActive: boolean;
}
export interface CompaniesApiResponse {
    data: Company[];
    status: number;
    message: string;
  }