export class ReloadLastPageAccessService {

  constructor() {

  }

  reloadLastPage(step: number, redirectRouteService: any, userInfo: any, setLoading: any) {
    switch (step) {
      // País já selecionado
      case 2:
        redirectRouteService.redirectToRoute(userInfo.country);
        break;
      case 3:
        redirectRouteService.redirectToRouteStep(userInfo.step, userInfo.country);
        break;
      // case 4:
      //   router.replace("/arvore");
      //   break;
      //Precisa criar os outros steps./ Voce vai criar aqui.
      default:
        setLoading(false); // Finaliza o carregamento se nao houver redirecionamento
        break;
    }
  }

  saveCurrentPage() {
    localStorage.setItem("lastPage", window.location.href);
  }

}