/**
 * Per-project override flags for featured status, URLs, and visibility.
 */
export type ProjectOverride = {
  featured?: boolean;
  rank?: number;
  primaryUrlOverride?: string;
  liveUrl?: string;
  docsUrl?: string;
  highlights?: string[];
  categoryOverride?: string;
  hide?: boolean;
};

/** Manual overrides keyed by project id. */
export const projectOverrides: Record<string, ProjectOverride> = {
  "bank-churn-prediction-customer-insights": {
    featured: true,
    rank: 1,
    highlights: [
      "Built churn prediction model with 82% accuracy using Logistic Regression",
      "Identified key churn drivers across customer segments",
      "Developed Tableau dashboards for KPI tracking and retention insights",
    ],
    categoryOverride: "Data Analytics",
  },

  "fighting-fit-mma-fight-outcomes-prediction": {
    featured: true,
    rank: 2,
    highlights: [
      "Random Forest model with 64% accuracy and 0.71 F1-score",
      "Engineered 15+ features including age, reach, and betting odds",
      "Created Tableau dashboards to analyze fight trends and probabilities",
    ],
    categoryOverride: "Machine Learning",
  },

  "nyc-airbnb-pricing-demand-analysis": {
    featured: true,
    rank: 3,
    highlights: [
      "Analyzed 48,000+ NYC Airbnb listings using SQL",
      "Identified pricing and occupancy trends across neighborhoods",
      "Built dashboards to support revenue optimization insights",
    ],
    docsUrl: "https://www.notion.so/NYC-Rent-Prices-Affordability-Dashboard-2edaaca1d750808e8d0ed00fd89137a5",
    categoryOverride: "Data Analytics",
  },

  "market-sentiment-tool": {
    featured: false,
    categoryOverride: "Python Analytics",
  },

  "stock-trading-backtest": {
    featured: false,
    categoryOverride: "Python Analytics",
  },

  "student-grade-calculator": {
    featured: false,
    categoryOverride: "Academic Project",
  },
};