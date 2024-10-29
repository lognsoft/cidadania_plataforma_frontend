import { NextRouter } from "next/router";
type SetLoadingType = (loading: boolean) => void;

export class RedirectRouteService {
  private _router: NextRouter;
  private _setLoading: SetLoadingType;

  constructor(router: NextRouter, setLoading: SetLoadingType) {
    this._router = router;
    this._setLoading = setLoading;
  }

  //Alterei o código para nao precisar mais do switch case para identificar os paises.
  //Nao precisa mais mexer nesse código quando um novo pais for inserido.
  public redirectToRoute(country: string ): void {
    if (!country) {      
      this._setLoading(false);
      return;
    }
    //this._router.replace(`/register/${this.userInfo.cozuntry}`);

    this._router.replace(`/register/${country}`);
  }
  
  public redirectToRouteStep(step: string, country: string): void {

    console.log(step);
    
    if (!step) {
      this._setLoading(false)
      return;
    }
    this._router.replace(`/register/${country}/parents`)
  }
}
