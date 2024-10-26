import { IRedirectRouteService } from "@/service/IRedirectRouteService";
import { NextRouter } from "next/router";

export class RedirectRouteItalianService implements IRedirectRouteService {
  private _route: string;
  private _router: NextRouter;

  constructor(route: string, router: NextRouter) {
    this._route = route;
    this._router = router;
  }

  public redirectToRoute(): void {
    this._router.replace("/register/" + this._route);
  }
}
