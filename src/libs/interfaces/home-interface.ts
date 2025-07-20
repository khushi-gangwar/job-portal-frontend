export interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: string;
}

export interface Category {
  icon: React.ReactElement;
  title: string;
  jobs: string;
}