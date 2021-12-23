export const caringoDashboardSummaryResponse = `
{
    "resources": {
      "totalTenants": 2,
      "totalDomains": 3,
      "totalBuckets": 5
    },
    "tenants": [
      {
        "name": "amazon",
        "domains": [
          {
            "name": "Finance",
            "buckets": [ "tax-proofs", "payslips" ]
          },
          {
            "name": "Billing",
            "buckets": [ "clients", "summary" ]
          }
        ]
      },
      {
        "name": "psep",
        "domains": [
          {
            "name": "Particulars",
            "buckets": [ "report" ]
          }
        ]
      }
    ]
  }
`;
