import { Component, OnInit } from "@angular/core";
import { caringoDashboardSummaryResponse } from "../mock";

@Component({
  selector: "caringo-dashboard",
  templateUrl: "./caringo-dashboard.component.html",
  styleUrls: ["caringo-dashboard.component.css"],
})
export default class CaringoDashboardComponent implements OnInit {
  selectedTenant: String = "";
  response: any = null;
  tenantNames: String[] = [];
  domainNames: String[] = [];

  CaringoDashboardComponent() {}

  ngOnInit(): void {
    //call  Service
    this.response = JSON.parse(caringoDashboardSummaryResponse);
    if (this.response["tenants"]) {
      this.tenantNames = this.response["tenants"].map(
        (tenant: any) => tenant.name
      );
      this.onTenantChange(this.tenantNames[0]);
    }
  }

  onTenantChange(selectedTenant: any) {
    this.domainNames = this.response["tenants"]
      .find((tenant: any) => tenant.name === selectedTenant)
      .domains.map((domain: any) => domain.name);
  }
}
