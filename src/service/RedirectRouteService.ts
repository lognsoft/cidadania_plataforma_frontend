import { NextRouter } from "next/router";
type SetLoadingType = (loading: boolean) => void;

interface UserInfo {
  country?: string;
  step?: number;
}

export class RedirectRouteService {
  private _router: NextRouter;
  private _setLoading: SetLoadingType;
  private userInfo: UserInfo;

  constructor(router: NextRouter, setLoading: SetLoadingType, userInfo: UserInfo) {
    this._router = router;
    this._setLoading = setLoading;
    this.userInfo = userInfo;
  }

  //Alterei o código para nao precisar mais do switch case para identificar os paises.
  //Nao precisa mais mexer nesse código quando um novo pais for inserido.
  public redirectToRoute(): void {
    if (!this.userInfo.country) {
      this._setLoading(false);
      return;
    }

    this._router.replace(`/register/${this.userInfo.country}`);
  }
}
