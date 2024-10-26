import { IRedirectRouteService } from "@/service/IRedirectRouteService";
import { RedirectRouteItalianService } from "./RedirectRouteItalianService";
import React from "react";
import { NextRouter } from "next/router";
import { RedirectRouteSpanishService } from "./RedirectRouteSpanishService";
type SetLoadingType = (loading: boolean) => void;

export class RedirectRouteService {
  userInfoData = JSON.parse(localStorage.getItem("userInfo") ?? "{}");
  userDetails: Details = new Details(
    this.userInfoData.details?.youKnowWho,
    this.userInfoData.details?.gender
  );
  userInfo: UserInfo = new UserInfo(
    this.userInfoData.country,
    this.userInfoData.details,
    this.userInfoData.parent
  );

  private _redirectRouteService: IRedirectRouteService | null = null;

  private _router: NextRouter;
  private _setLoading: SetLoadingType;

  constructor(router: NextRouter, setLoading: SetLoadingType) {
    this._router = router;
    this._setLoading = setLoading;
  }

  public redirectToRoute(): void {
    if (!this.userInfo.country) return this._setLoading(false);
    switch (this.userInfo.country) {
      case "italian":
        this._redirectRouteService = new RedirectRouteItalianService(
          "italian",
          this._router
        );
        break;
      case "spanish":
        this._redirectRouteService = new RedirectRouteSpanishService(
          "spanish",
          this._router
        );
      case "argentina":
        this._redirectRouteService = new RedirectRouteSpanishService(
          "argentina",
          this._router
        );
        break;
      default:
        this._setLoading(false);
        break;
    }
    this._redirectRouteService?.redirectToRoute();
  }
}

export class UserInfo {
  country: string;
  details: Details;
  parent: string;

  constructor(country: string, details: Details, parent: string) {
    this.country = country;
    this.details = details;
    this.parent = parent;
  }

  public displayInfo(): void {}
}

class Details {
  youKnowWho: string;
  gender: string;

  constructor(youKnowWho: string = "", gender: string = "") {
    this.youKnowWho = youKnowWho;
    this.gender = gender;
  }
}
